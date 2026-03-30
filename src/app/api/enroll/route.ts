import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "imamaliquranacademy@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, course, schedule, message } = body;

    if (!name?.trim() || !email?.trim() || !course?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
    }

    console.log("Enrolling user:", { name, email, course });

    const payload = {
      name: name.trim(),
      email: email.trim(),
      whatsapp: whatsapp?.trim() || null,
      course: course.trim(),
      schedule: schedule?.trim() || null,
      message: message?.trim() || null,
    };

    let { error: supabaseError } = await supabase.from("enrollments").insert(payload);

    const isRlsError =
      !!supabaseError &&
      (supabaseError.message.toLowerCase().includes("row-level security") ||
        supabaseError.message.toLowerCase().includes("rls"));

    // If anon insert is blocked by RLS, retry with server role key when available.
    if (isRlsError) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

      if (!supabaseUrl || !serviceRoleKey) {
        return NextResponse.json(
          {
            error:
              "Enrollment insert is blocked by RLS. Add SUPABASE_SERVICE_ROLE_KEY to server env or allow anon insert policy for enrollments.",
          },
          { status: 500 }
        );
      }
      if (!serviceRoleKey.startsWith("ey")) {
        return NextResponse.json(
          {
            error:
              "SUPABASE_SERVICE_ROLE_KEY is invalid. Use the JWT service_role key from Supabase project settings (it should start with 'ey').",
          },
          { status: 500 }
        );
      }

      const adminClient = createClient(supabaseUrl, serviceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
      const adminInsert = await adminClient.from("enrollments").insert(payload);
      supabaseError = adminInsert.error;
    }

    if (supabaseError) {
      console.error("Supabase insert error details:", JSON.stringify(supabaseError, null, 2));
      return NextResponse.json(
        { error: `Database error: ${supabaseError.message}` },
        { status: 500 }
      );
    }

    const { error: emailError } = await resend.emails.send({
      from: "Imam Ali Quran Academy <onboarding@resend.dev>",
      to: OWNER_EMAIL,
      replyTo: email.trim(),
      subject: `New Enrollment: ${name.trim()} — ${course.trim()}`,
      html: `
        <h2 style="color:#001d2e;font-family:sans-serif;">New Enrollment Submission</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp?.trim() || "Not provided"}</p>
        <p><strong>Course:</strong> ${course.trim()}</p>
        <p><strong>Preferred Schedule:</strong> ${schedule?.trim() || "Not specified"}</p>
        <hr />
        <p><strong>Additional Message:</strong></p>
        <p>${message?.trim() || "None"}</p>
      `,
    });

    if (emailError) {
      console.error("Resend email error details:", JSON.stringify(emailError, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Enroll API runtime error:", err.message);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}

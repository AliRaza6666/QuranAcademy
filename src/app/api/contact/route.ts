import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "imamaliquranacademy@gmail.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase.from("contacts").insert({
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || null,
    message: message.trim(),
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }

  // Send email notification to owner
  const { error: emailError } = await resend.emails.send({
    from: "Imam Ali Quran Academy <onboarding@resend.dev>",
    to: OWNER_EMAIL,
    replyTo: email.trim(),
    subject: `New Contact: ${name.trim()}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name.trim()}</p>
      <p><strong>Email:</strong> ${email.trim()}</p>
      <p><strong>Phone:</strong> ${phone?.trim() || "Not provided"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.trim()}</p>
    `,
  });

  if (emailError) {
    console.error("Resend email error:", emailError);
    // Don't fail the request — data is already saved in Supabase
  }

  return NextResponse.json({ success: true });
}

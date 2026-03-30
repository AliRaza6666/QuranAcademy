import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "imamaliquranacademy@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, timestamp } = await request.json();

    // 1. Basic validation
    if (!email || !name) {
      return NextResponse.json(
        { error: "Missing required fields (name, email)" },
        { status: 400 }
      );
    }

    // 2. Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Quran Academy <noreply@resend.dev>", // Replace with your verified domain in production
      to: [ADMIN_EMAIL],
      subject: "New User Registered",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; color: #111827;">
          <h2 style="color: #059669; margin-top: 0;">New User Registration</h2>
          <p style="font-size: 16px; line-height: 1.5;">A new user has just registered on the <strong>Imam Ali Quran Academy</strong> platform.</p>
          
          <div style="background-color: #f9fafb; border-radius: 6px; padding: 16px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0;"><strong>Timestamp:</strong> ${timestamp || new Date().toLocaleString()}</p>
          </div>
          
          <p style="font-size: 14px; color: #6b7280; margin-bottom: 0;">This is an automated notification. Please do not reply directly to this email.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("API Route Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import { Resend } from "resend";
import { ContactFormEmail } from "@/email/contact-form-email";
import { contactSchema } from "@/email/validations/contact";
import { NextResponse } from "next/server";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define response types
type SuccessResponse = {
  status: number;
  message: string;
};

// Define error response types
type ErrorResponse = {
  error: string;
  status: number;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = contactSchema.parse(body);

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "yahiaelazhar.work929@gmail.com",
      subject: `Message from ${name} via Portfolio Contact Form`,
      replyTo: email,
      react: ContactFormEmail({
        message,
        senderEmail: email,
        senderName: name,
      }),
    });

    return NextResponse.json<SuccessResponse>(
      {
        status: 200,
        message: "Email sent successfully!",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json<ErrorResponse>(
        {
          error: "Invalid form data",
          status: 400,
        },
        { status: 400 },
      );
    }

    if (error instanceof Error) {
      return NextResponse.json<ErrorResponse>(
        {
          error: error.message,
          status: 400,
        },
        { status: 400 },
      );
    }

    return NextResponse.json<ErrorResponse>(
      {
        error: "Internal server error",
        status: 500,
      },
      { status: 500 },
    );
  }
}

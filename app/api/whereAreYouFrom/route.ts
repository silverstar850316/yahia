import VisitWebsite from "@/email/visit-website";
import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  // Your backend logic here
  try {
    fetch("https://detect-who-you-are.vercel.app/track-visit", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(
      {
        status: 200,
        message: "Email sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

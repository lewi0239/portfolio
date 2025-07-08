import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request: Request) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const senderEmail = process.env.SENDGRID_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    console.error("SendGrid API Key or Sender Email is not configured.");
    return NextResponse.json(
      { message: "Server configuration error." },
      { status: 500 }
    );
  }

  sgMail.setApiKey(apiKey);

  try {
    const body = await request.json();
    const { firstName, lastName, email, phoneNumber, topic, message } = body;

    const emailContent = {
      to: senderEmail, // Your verified sender email
      from: senderEmail, // Your verified sender email
      replyTo: email, // The email of the person who submitted the form
      subject: `New Contact Form Submission - ${topic}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p>You have received a new message from your portfolio contact form.</p>
        <hr>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber || "Not provided"}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
      `,
    };

    await sgMail.send(emailContent);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // Type guard for SendGrid errors
    if (error && typeof error === "object" && "response" in error) {
      const sgError = error as { response?: { body?: unknown } };
      if (sgError.response?.body) {
        console.error(
          "SendGrid Error Body:",
          JSON.stringify(sgError.response.body, null, 2)
        );
      }
    }
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}

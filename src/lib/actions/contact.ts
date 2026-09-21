"use server";

import { Resend } from "resend";
import { siteConfig } from "@/data/site-config";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot field: real visitors never fill this in.
  const company = String(formData.get("company") ?? "").trim();

  if (company) {
    return { status: "success" };
  }

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (message.length > 5000) {
    return { status: "error", message: "Message is too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set. Add it to .env.local to enable the contact form."
    );
    return {
      status: "error",
      message: "The contact form isn't configured yet. Please email me directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact Form <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject: `New message from ${name} via portfolio site`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error", message: "Something went wrong sending your message. Please try again." };
    }

    return { status: "success", message: "Thanks — your message has been sent. I'll reply soon." };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return { status: "error", message: "Something went wrong sending your message. Please try again." };
  }
}

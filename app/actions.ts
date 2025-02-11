"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "your@email.com", // Cambia esto por tu email
    subject: `New Contact from Portfolio: ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  })
}


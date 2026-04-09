import { Resend } from 'resend'

let resend: Resend | null = null

function getResend(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

const CONTACT_EMAIL = 'jim@rhize.media'

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}) {
  return getResend().emails.send({
    from: 'jimdeola.com <onboarding@resend.dev>',
    to: CONTACT_EMAIL,
    subject: `[jimdeola.com] ${subject}: ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\nSent at: ${new Date().toISOString()}`,
  })
}

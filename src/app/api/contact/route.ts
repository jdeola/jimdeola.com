import { NextRequest } from 'next/server'
import { checkRateLimit } from '@/lib/rate-limit'
import { sendContactEmail } from '@/lib/resend'

const ALLOWED_SUBJECTS = [
  'General Inquiry',
  'Project Collaboration',
  'Consulting',
  'Speaking',
  'Other',
]

function sanitize(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim()
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, website } = body as {
      name?: string
      email?: string
      subject?: string
      message?: string
      website?: string
    }

    // Honeypot check — bots fill this hidden field
    if (website) {
      return Response.json({ success: true })
    }

    // Server-side validation
    const errors: Record<string, string> = {}

    if (!name || name.trim().length === 0) {
      errors.name = 'Name is required'
    }

    if (!email || !validateEmail(email)) {
      errors.email = 'A valid email address is required'
    }

    if (!subject || !ALLOWED_SUBJECTS.includes(subject)) {
      errors.subject = 'Please select a valid subject'
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    if (Object.keys(errors).length > 0) {
      return Response.json({ success: false, errors }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedName = sanitize(name!)
    const sanitizedEmail = sanitize(email!)
    const sanitizedSubject = sanitize(subject!)
    const sanitizedMessage = sanitize(message!)

    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwarded?.split(',')[0]?.trim() || realIp || 'unknown'

    const { allowed } = checkRateLimit(ip)
    if (!allowed) {
      return Response.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Send email
    const { error } = await sendContactEmail({
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json(
        { success: false, error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    return Response.json({ success: true })
  } catch {
    console.error('Contact form error')
    return Response.json(
      { success: false, error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}

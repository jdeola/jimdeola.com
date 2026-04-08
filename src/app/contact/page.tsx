import type { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jim Deola — full-stack developer, AI engineer, and founder. Reach out for web development, AI projects, or fitness coaching.',
  openGraph: {
    title: 'Contact | Jim Deola',
    description:
      'Get in touch with Jim Deola — full-stack developer, AI engineer, and founder. Reach out for web development, AI projects, or fitness coaching.',
    url: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          Have a project in mind, a question about AI or web development, or
          just want to connect? I&apos;d love to hear from you. Drop me a
          message and I&apos;ll get back to you as soon as I can.
        </p>
      </AnimatedSection>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <AnimatedSection>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-text-primary">
                Contact Info
              </h2>
              <p className="mt-2 text-text-secondary">
                Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-secondary">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-text-primary transition-colors hover:text-accent"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-secondary">
                    Location
                  </p>
                  <p className="text-text-primary">{SITE_CONFIG.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="mb-3 text-sm font-medium text-text-secondary">
                  Connect
                </p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form Placeholder */}
        <AnimatedSection>
          {/* ContactForm component — built in S05-T01 */}
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-border p-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-text-primary">
              Contact Form
            </h3>
            <p className="mt-2 max-w-xs text-sm text-text-secondary">
              A contact form is on the way. In the meantime, feel free to reach
              out via email or social media.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

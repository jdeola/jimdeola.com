'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const SUBJECTS = [
  'Business Inquiry',
  'Fitness Coaching',
  'Collaboration',
  'Other',
] as const;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field: keyof FormErrors, value: string): string | undefined {
  switch (field) {
    case 'name':
      return value.trim() ? undefined : 'Name is required';
    case 'email':
      if (!value.trim()) return 'Email is required';
      if (!EMAIL_REGEX.test(value)) return 'Please enter a valid email address';
      return undefined;
    case 'subject':
      return value ? undefined : 'Please select a subject';
    case 'message':
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < 10) return 'Message must be at least 10 characters';
      return undefined;
    default:
      return undefined;
  }
}

function validateAll(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const fields: (keyof FormErrors)[] = ['name', 'email', 'subject', 'message'];
  for (const field of fields) {
    const error = validateField(field, data[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

const inputClasses =
  'w-full rounded-lg border border-border bg-bg-tertiary px-4 py-3 text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-50';

export function ContactForm() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback(
    (field: keyof FormData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (touched[field]) {
          setErrors((prev) => ({
            ...prev,
            [field]: validateField(field as keyof FormErrors, value),
          }));
        }
      },
    [touched]
  );

  const handleBlur = useCallback(
    (field: keyof FormErrors) => () => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, formData[field]),
      }));
    },
    [formData]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateAll(formData);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
      } else if (res.status === 429) {
        setStatus('error');
        setErrorMessage('Too many requests, please try again later.');
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to send message. Please check your connection and try again.');
    }
  };

  const handleRetry = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.3 },
      };

  return (
    <div className="rounded-xl border border-border bg-bg-secondary p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            {...motionProps}
            className="flex min-h-[360px] flex-col items-center justify-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-text-primary">
              Message sent!
            </h3>
            <p className="mt-2 max-w-sm text-text-secondary">
              Thanks for reaching out. I&apos;ll get back to you as soon as I can.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            {...motionProps}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                disabled={status === 'submitting'}
                placeholder="Your name"
                aria-describedby={errors.name && touched.name ? 'contact-name-error' : undefined}
                aria-invalid={errors.name && touched.name ? true : undefined}
                className={cn(inputClasses, errors.name && touched.name && 'border-error focus:ring-error/30')}
              />
              {errors.name && touched.name && (
                <p id="contact-name-error" role="alert" className="mt-1 text-xs text-error">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                disabled={status === 'submitting'}
                placeholder="you@example.com"
                aria-describedby={errors.email && touched.email ? 'contact-email-error' : undefined}
                aria-invalid={errors.email && touched.email ? true : undefined}
                className={cn(inputClasses, errors.email && touched.email && 'border-error focus:ring-error/30')}
              />
              {errors.email && touched.email && (
                <p id="contact-email-error" role="alert" className="mt-1 text-xs text-error">{errors.email}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Subject
              </label>
              <select
                id="contact-subject"
                required
                value={formData.subject}
                onChange={handleChange('subject')}
                onBlur={handleBlur('subject')}
                disabled={status === 'submitting'}
                aria-describedby={errors.subject && touched.subject ? 'contact-subject-error' : undefined}
                aria-invalid={errors.subject && touched.subject ? true : undefined}
                className={cn(
                  inputClasses,
                  'appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23A1A1AA%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E")] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10',
                  !formData.subject && 'text-text-secondary/50',
                  errors.subject && touched.subject && 'border-error focus:ring-error/30'
                )}
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {SUBJECTS.map((subject) => (
                  <option key={subject} value={subject} className="bg-bg-tertiary text-text-primary">
                    {subject}
                  </option>
                ))}
              </select>
              {errors.subject && touched.subject && (
                <p id="contact-subject-error" role="alert" className="mt-1 text-xs text-error">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange('message')}
                onBlur={handleBlur('message')}
                disabled={status === 'submitting'}
                placeholder="Your message (at least 10 characters)"
                aria-describedby={errors.message && touched.message ? 'contact-message-error' : undefined}
                aria-invalid={errors.message && touched.message ? true : undefined}
                className={cn(inputClasses, 'resize-y', errors.message && touched.message && 'border-error focus:ring-error/30')}
              />
              {errors.message && touched.message && (
                <p id="contact-message-error" role="alert" className="mt-1 text-xs text-error">{errors.message}</p>
              )}
            </div>

            {/* Honeypot */}
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
            >
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange('website')}
              />
            </div>

            {/* Error message */}
            {status === 'error' && errorMessage && (
              <div role="alert" className="flex items-start gap-3 rounded-lg border border-error/20 bg-error/5 p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-error" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm text-error">{errorMessage}</p>
                  <button
                    type="button"
                    onClick={handleRetry}
                    className="mt-1 rounded text-sm font-medium text-error underline underline-offset-2 transition-colors hover:text-error/80 focus:outline-none focus:ring-2 focus:ring-error"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full"
              size="lg"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

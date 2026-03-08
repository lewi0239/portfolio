'use client';

import { useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsRateLimited(false);

    const formData = new FormData(formRef.current!);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (res.status === 429) {
        setIsRateLimited(true);
        return;
      }

      if (!res.ok) throw new Error('Failed');

      setIsSent(true);
      formRef.current?.reset();
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto rounded-xl border border-gray-200 bg-white p-8"
    >
      <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>

      <form ref={formRef} onSubmit={sendEmail} className="mt-8 flex flex-col px-8">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name..."
              autoComplete="name"
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com..."
              autoComplete="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            autoComplete="off"
            placeholder="Type a message..."
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="mx-auto mt-6 rounded-lg bg-primary p-4 text-white transition hover:bg-blue-700 xl:w-1/4"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {/* Success message */}
        {isSent && (
          <p className="mt-6 w-auto rounded-lg bg-green-100 px-6 py-3 text-center text-green-800">
            Thanks! Your message has been sent.
          </p>
        )}

        {/* Rate limit message */}
        {isRateLimited && (
          <p className="mt-6 w-auto rounded-lg bg-yellow-100 px-6 py-3 text-center text-yellow-800">
            Too many submissions. Please wait a few minutes and try again.
          </p>
        )}

        {/* Error message */}
        {isError && (
          <p className="mt-6 w-auto rounded-lg bg-red-100 px-6 py-3 text-center text-red-700">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </form>
    </section>
  );
}

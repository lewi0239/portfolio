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
    <section id="contact" className="container mx-auto border border-border bg-white p-8">
      <p className="mb-1 text-sm text-muted">// contact</p>
      <h2 className="mb-4 text-3xl font-bold text-dark">Contact Me</h2>

      <form ref={formRef} onSubmit={sendEmail} className="mt-8 flex flex-col px-8">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
              name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="full name..."
              autoComplete="name"
              required
              className="mt-1 w-full border border-border bg-light-bg p-2 text-dark placeholder:text-grv-bg3 focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
              email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com..."
              autoComplete="email"
              required
              className="mt-1 w-full border border-border bg-light-bg p-2 text-dark placeholder:text-grv-bg3 focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
            message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            autoComplete="off"
            placeholder="type a message..."
            required
            className="mt-1 w-full border border-border bg-light-bg p-2 text-dark placeholder:text-grv-bg3 focus:border-primary focus:outline-none"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="mx-auto mt-6 border border-primary bg-transparent px-8 py-3 text-primary transition-colors hover:bg-primary hover:text-navy disabled:opacity-50 xl:w-1/4"
          >
            {isLoading ? '// sending...' : '> SEND MESSAGE'}
          </button>
        </div>

        {isSent && (
          <p className="mt-6 w-auto border border-grv-green bg-grv-green/10 px-6 py-3 text-center text-grv-green">
            {'>'} message sent successfully.
          </p>
        )}

        {isRateLimited && (
          <p className="mt-6 w-auto border border-primary bg-primary/10 px-6 py-3 text-center text-primary">
            {'>'} rate limited — please wait a few minutes and try again.
          </p>
        )}

        {isError && (
          <p className="mt-6 w-auto border border-grv-red bg-grv-red/10 px-6 py-3 text-center text-grv-red">
            {'>'} error — please try again or email me directly.
          </p>
        )}
      </form>
    </section>
  );
}

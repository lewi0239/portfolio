"use client";


import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_MAIL_SERVICE_ID!,
                process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID!,
                formRef.current!,
                process.env.NEXT_PUBLIC_MAIL_KEY!
            );
            setIsSent(true);
            formRef.current?.reset();
        } catch (error) {
            console.error("Email sending failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block font-medium">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    {isLoading ? "Sending..." : "Send Message"}
                </button>

                {isSent && (
                    <p className="text-green-600 mt-2">Thanks! Your message has been sent.</p>
                )}
            </form>
        </section>
    );
}

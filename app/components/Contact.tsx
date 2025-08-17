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
        <section
            id="contact"
            className="bg-white container mx-auto p-8"
        >
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col mt-8 px-8"
            >
                {/* Name + Email*/}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex-1">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="mt-4">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-6 md:justify-center py-3 w-48 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
                >
                    {isLoading ? "Sending..." : "Send Message"}
                </button>

                {/* Success message */}
                {isSent && (
                    <p className="mt-6 py-3 w-auto sm:w-48 px-6 bg-green-300 text-white rounded-lg hover:bg-blue-700 transition">
                        Thanks! Your message has been sent.
                    </p>
                )}
            </form>
        </section>
    );
}

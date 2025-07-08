"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "Select one...",
    message: "",
    acceptedTerms: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    setFormData((prevData) => ({
      ...prevData,
      [id]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          topic: "Select one...",
          message: "",
          acceptedTerms: false,
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="bg-light-bg py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-lg text-dark mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark">
            Contact me
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-dark mb-2"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-dark mb-2"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dark mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-dark mb-2"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-dark mb-2"
            >
              Choose a topic
            </label>
            <select
              id="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-primary focus:border-primary bg-white"
              required
            >
              <option>Select one...</option>
              <option>Web Design</option>
              <option>Development</option>
              <option>Branding</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-dark mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
              required
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              id="acceptedTerms"
              name="acceptedTerms"
              type="checkbox"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              required
            />
            <label
              htmlFor="accept-terms"
              className="ml-2 block text-sm text-gray-900"
            >
              I accept the terms
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors disabled:bg-gray-400"
            >
              {status === "sending" ? "Submitting..." : "Submit"}
            </button>
            {status === "success" && (
              <p className="text-green-600 mt-4">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen py-16 bg-cream">
      <div className="container max-w-6xl px-4 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center uppercase text-darkgray font-freudian">
          Contact us
        </h1>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-darkgray">
            Have a question or want to know more about our beers? Get in touch with us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-darkgray font-freudian">Get in touch</h2>
            <p className="mb-6 text-darkgray">
              Whether you're interested in our beers, want to become a stockist, or just want to say hello, we'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="mb-1 text-lg font-bold text-darkgray">Email</h3>
                <p className="text-darkgray">info@brewdistrict24.com</p>
              </div>

              <div>
                <h3 className="mb-1 text-lg font-bold text-darkgray">Address</h3>
                <p className="text-darkgray">
                  BrewDistrict24<br />
                  Nijmegen<br />
                  The Netherlands
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-lg font-bold text-darkgray">Follow us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/brewdistrict24/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkgray hover:text-olive"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/Brewdistrict24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkgray hover:text-olive"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/company/brewdistrict24/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkgray hover:text-olive"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            {formSubmitted ? (
              <div className="p-6 bg-olive/10 rounded-lg">
                <h2 className="mb-4 text-2xl font-bold text-darkgray font-freudian">Message sent!</h2>
                <p className="text-darkgray">
                  Thank you for reaching out to us. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 mt-6 text-white rounded-md bg-darkgray hover:bg-darkgray/90"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-darkgray">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md border-darkgray/20 focus:outline-none focus:ring-2 focus:ring-olive"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 text-darkgray">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md border-darkgray/20 focus:outline-none focus:ring-2 focus:ring-olive"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1 text-darkgray">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md border-darkgray/20 focus:outline-none focus:ring-2 focus:ring-olive"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Become a Stockist">Become a Stockist</option>
                    <option value="Order Information">Order Information</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 text-darkgray">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border rounded-md border-darkgray/20 focus:outline-none focus:ring-2 focus:ring-olive"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 text-white rounded-md ${
                    isSubmitting
                      ? "bg-darkgray/50 cursor-not-allowed"
                      : "bg-darkgray hover:bg-darkgray/90"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

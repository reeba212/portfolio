'use client';
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(false);

    const formData = {
      from_email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData
      );
      setEmailSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="px-4 md:px-8 lg:px-12">
      <div className="bg-surface border border-line rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 relative transition-all duration-500 ease-out hover:border-primary hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_16px_32px_-16px_var(--primary)] focus-within:border-primary focus-within:-translate-y-1 focus-within:scale-[1.02] focus-within:shadow-[0_16px_32px_-16px_var(--primary)]">
        {/* Left Section */}
        <div>
          <h5 className='font-heading text-xl font-semibold text-ink my-2'>Let's Connect</h5>
          <p className='text-ink-soft mb-4 max-w-wd'>
            I'm always open to new projects, collaborations, or employment opportunities.
            Feel free to reach out to me!
          </p>
        </div>

        {/* Right Section - Form */}
        <div>
          <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            {/* Email */}
            <div className='mb-6'>
              <label htmlFor='email' className='text-ink mb-2 block text-sm font-semibold'>Your Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="name@example.com"
                className="p-2.5 w-full border border-line rounded-xl text-sm bg-bg text-ink placeholder-ink-soft focus:outline-none focus:ring-2 focus:ring-primary-soft focus:border-primary"
              />
            </div>

            {/* Subject */}
            <div className='mb-6'>
              <label htmlFor='subject' className='text-ink mb-2 block text-sm font-semibold'>Subject</label>
              <input
                type="text"
                id="subject"
                required
                placeholder="Just saying hi!"
                className="p-2.5 w-full border border-line rounded-xl text-sm bg-bg text-ink placeholder-ink-soft focus:outline-none focus:ring-2 focus:ring-primary-soft focus:border-primary"
              />
            </div>

            {/* Message */}
            <div className='mb-6'>
              <label htmlFor='message' className='text-ink mb-2 block text-sm font-semibold'>Message</label>
              <textarea
                id="message"
                required
                placeholder="Let's talk about..."
                className="p-2.5 w-full border border-line rounded-xl text-sm bg-bg text-ink placeholder-ink-soft focus:outline-none focus:ring-2 focus:ring-primary-soft focus:border-primary"
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='bg-primary hover:brightness-105 text-surface font-bold py-2.5 px-5 rounded-full w-full h-11 transition-all duration-200'
            >
              Send Message
            </button>
          </form>

          {/* Success Message */}
          {emailSubmitted && (
            <div className="mt-4 text-primary text-sm font-semibold">
              Your message was sent successfully!
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}

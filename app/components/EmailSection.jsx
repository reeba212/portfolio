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
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      {/* Left Section */}
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-wd'> 
          I'm always open to new projects, collaborations, or employment opportunities. 
          Feel free to reach out to me!
        </p>
      </div>

      {/* Right Section - Form */}
      <div>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          {/* Email */}
          <div className='mb-6'>
            <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>Your Email</label>  
            <input 
              type="email" 
              id="email" 
              required 
              placeholder="name@example.com"
              className="p-2 w-full border border-gray-300 rounded-md text-sm bg-[#181818] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Subject */}
          <div className='mb-6'>
            <label htmlFor='subject' className='text-white mb-2 block text-sm font-medium'>Subject</label>  
            <input 
              type="text" 
              id="subject" 
              required 
              placeholder="Just saying hi!"
              className="p-2 w-full border border-gray-300 rounded-md text-sm bg-[#181818] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message */}
          <div className='mb-6'>
            <label htmlFor='message' className='text-white mb-2 block text-sm font-medium'>Message</label>  
            <textarea 
              id="message" 
              required 
              placeholder="Let's talk about..."
              className="p-2 w-full border border-gray-300 rounded-md text-sm bg-[#181818] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full h-10'
          >
            Send Message
          </button>
        </form>

        {/* Success Message */}
        {emailSubmitted && (
          <div className="mt-4 text-purple-200 text-sm font-medium">
            Your message was sent successfully!
          </div>
        )}
      </div>
    </section>
  );
}
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact= () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_g6sgc6v", 
        "template_36dz8my", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "hvHK4Y1hAH8L3HmHS" 
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send the message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="web-container mx-auto py-10 pt-20">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Contact Me</h2>
        <p className="text-gray-300 mt-2">Feel free to reach out for any queries or collaborations!</p>
      </div>

      {/* Form */}
      <div className="box w-11/12 sm:w-8/12 lg:w-6/12 mx-auto p-6 bg-slate-800 text-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md shadow-sm border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md shadow-sm border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md shadow-sm border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;


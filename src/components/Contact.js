import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  // Form state to capture input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Status message to show success or failure after submission
  const [statusMessage, setStatusMessage] = useState('');

  // Function to handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission and send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Sending form data using EmailJS
    emailjs.sendForm('service_yj9taov', 'template_uxxax2g', e.target, '2cBIq7l1IwLxbcqra')
      .then((result) => {
        console.log(result.text);
        setStatusMessage("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        setStatusMessage("Failed to send the message. Please try again.");
      });

    // Reset the form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-yellow-400">Get in Touch</h1>
        <p className="text-lg text-gray-300 mb-12">
          Have a question or want to work together? Feel free to reach out, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <form onSubmit={sendEmail}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Display status message after form submission */}
          {statusMessage && <p className="mt-4 text-center text-green-400">{statusMessage}</p>}
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="text-lg text-gray-400 mb-4">Feel free to reach out via email or connect with me on social media:</p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-yellow-400">Email:</h3>
            <p className="text-gray-300">korlavamsi74@gmail.com</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-yellow-400">Phone:</h3>
            <p className="text-gray-300">+91 7386272337</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-400">Location:</h3>
            <p className="text-gray-300">3-54, Palasa, 532220, AndhraPradesh, India</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start space-x-6 text-3xl">
            <a href="https://www.linkedin.com/in/vamsi-korla-41220a23b/" target='blank' className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/V-a-m-c" target='blank' className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/va_m_c_/" target='blank' className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <FaInstagram />
            </a>
            <a href="mailto:korlavamsi74@gmail.com" className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

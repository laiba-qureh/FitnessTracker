import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="px-10 py-10 h-auto bg-white" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Form */}
          <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg">
            <div className="w-full max-w-md">
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-4 font-serif">
                Contact Us
              </h1>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#262135] text-white rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Information or Illustration */}
          <div className="flex flex-col items-center justify-center bg-gray-30  rounded-lg shadow-lg">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4 font-serif">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-4">
                Feel free to reach out to us with any questions or inquiries. We're here to help!
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>
                  📍 <span>123 Main Street, Cityville</span>
                </li>
                <li>
                  📞 <span>+123 456 7890</span>
                </li>
                <li>
                  📧 <span>Fitnesstracker@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

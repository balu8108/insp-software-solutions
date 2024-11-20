import React from "react";

const Contact = () => {
  return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>
        <form className="max-w-lg mx-auto space-y-4 bg-white p-6 shadow-lg rounded">
          <input
              className="w-full p-3 border rounded text-gray-700"
              type="text"
              placeholder="Your Name"
          />
          <input
              className="w-full p-3 border rounded text-gray-700"
              type="email"
              placeholder="Your Email"
          />
          <textarea
              className="w-full p-3 border rounded text-gray-700"
              placeholder="Your Message"
          ></textarea>
          <button
              className="bg-blue-600 text-white px-6 py-3 rounded shadow-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
  );
};

export default Contact;

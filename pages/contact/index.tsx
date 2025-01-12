import React from "react";

const Contact = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <header className="w-full bg-primary text-white py-6 text-center shadow-md">
        <h1 className="text-5xl font-bold">Contact Me</h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
          Feel free to reach out via email or connect with me on social media.
        </p>
        <a
          href="mailto:farizhaidar00@gmail.com"
          className="px-8 py-4 bg-primary text-white text-lg rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Email Me
        </a>
      </main>

      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Fariz Haidar Zhaffran. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;

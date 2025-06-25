import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <header className="w-full bg-primary text-white py-6 text-center shadow-md">
        <h1 className="text-5xl font-bold">Fariz Haidar Zhaffran</h1>
        <p className="text-lg mt-2">
          Software Developer | Open Source Enthusiast
        </p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
          Discover my projects, skills, and experiences that showcase my journey
          as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Link
            href="/projects"
            className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-gray-100 transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              🚀 Projects
            </h3>
            <p className="text-gray-700">Explore the work I have done.</p>
          </Link>
          <Link
            href="/about"
            className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-gray-100 transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              👨‍💻 About Me
            </h3>
            <p className="text-gray-700">Learn more about my background.</p>
          </Link>
          <Link
            href="/contact"
            className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-gray-100 transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              📬 Contact
            </h3>
            <p className="text-gray-700">Get in touch with me.</p>
          </Link>
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Fariz Haidar Zhaffran. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/fariz-haidar"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/farizhaidar"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

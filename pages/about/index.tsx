import React from "react";

const About = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-primary text-white py-8 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold">About Me</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-6 max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <img
            src="/images/profile.jpg"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full shadow-lg border-4 border-primary"
          />
          <h2 className="text-3xl font-bold text-gray-800">
            Fariz Haidar Zhaffran
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Hi, I'm Fariz Haidar Zhaffran, a passionate Full-Stack Developer
            with a strong interest in building innovative and impactful
            solutions.
          </p>
        </div>

        {/* Background Section */}
        <div className="mt-12 max-w-4xl text-center space-y-6">
          <h3 className="text-2xl font-semibold text-primary">My Background</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am currently a student at{" "}
            <span className="font-semibold text-primary">
              Politeknik Negeri Jakarta
            </span>
            . I am also a proud graduate of the{" "}
            <span className="font-semibold text-primary">
              Bangkit Academy Mobile Path Development
            </span>
            , where I honed my skills in mobile development and problem-solving.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a solid foundation in both academic and practical experiences,
            I am committed to contributing to meaningful projects and advancing
            my expertise in technology.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">
          &copy; 2025 Fariz Haidar Zhaffran. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-2">
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

export default About;

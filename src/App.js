import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Sami UL Haq – Personal Portfolio</h1>
        <p>
          Welcome! I’m <strong>Sami UL Haq</strong>, a final-year{" "}
          <strong>Computer Systems Engineering</strong> student passionate
          about building <strong>full-stack web applications</strong> and
          leveraging <strong>cloud technologies</strong> to turn ideas into
          real-world solutions.
        </p>
      </header>

      {/* Technologies */}
      <section className="section">
        <h2>🔹 Technologies & Expertise</h2>
        <ul>
          <li>⚛️ <strong>React.js</strong> – Modern, responsive frontend development</li>
          <li>🌐 <strong>Node.js</strong> – Backend APIs & server-side logic</li>
          <li>☁️ <strong>AWS</strong> – Cloud hosting, deployment, and scalability</li>
          <li>🗂️ <strong>Version Control</strong> – Git & GitHub for collaboration</li>
          <li>🧠 <strong>Problem Solving</strong> – Algorithms, data structures, and optimized solutions</li>
        </ul>
      </section>

      {/* About Me */}
      <section className="section">
        <h2>🔹 About Me</h2>
        <p>
          I enjoy transforming ideas into functional projects while continuously improving my technical skills. My goal is to build applications that are <strong>efficient, user-friendly, and scalable</strong>.
        </p>
      </section>

      {/* Projects & Skills */}
      <section className="section">
        <h2>🔹 Projects & Skills</h2>
        <ul>
          <li><strong>Frontend Development:</strong> React.js, responsive UI, interactive components</li>
          <li><strong>Backend Development:</strong> Node.js, REST APIs, database integration</li>
          <li><strong>Cloud & Deployment:</strong> AWS services for hosting and scalability</li>
          <li><strong>Version Control:</strong> Git & GitHub</li>
          <li><strong>Problem Solving:</strong> Algorithms & data structures</li>
        </ul>
        <h3>Sample Projects:</h3>
        <ul>
          <li>
            <strong>Portfolio Website:</strong> React.js + AWS Hosting –{" "}
            <a href="https://your-username.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </li>
          <li>
            <strong>REST API Project:</strong> Node.js backend with MongoDB –{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </li>
        </ul>
      </section>

      {/* Live Preview */}
      <section className="section">
        <h2>🔹 Live Preview</h2>
        <p>
          Website will be live soon via{" "}
          <a href="https://your-username.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer">
            GitHub Pages / AWS Hosting
          </a>
        </p>
      </section>

      {/* Contact / Connect */}
      <section className="section">
        <h2>🔹 Contact / Connect</h2>
        <ul>
          <li>📧 Email: <a href="mailto:samiulhaq5900@gmail.com">samiulhaq5900@gmail.com</a></li>
          <li>💼 LinkedIn: <a href="https://bit.ly/45fWdGv" target="_blank" rel="noopener noreferrer">View Profile</a></li>
          <li>📘 Facebook: <a href="https://bit.ly/4q67mSD" target="_blank" rel="noopener noreferrer">View Profile</a></li>
          <li>📱 WhatsApp: <a href="https://wa.me/03168775524" target="_blank" rel="noopener noreferrer">Chat Now</a></li>
        </ul>
      </section>

      <footer className="footer">
        © 2026 <strong>Sami UL Haq</strong> | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
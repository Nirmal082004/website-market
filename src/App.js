// src/App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    // You can handle form submission here
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>Welcome to aju brand </h1>
          <p>Your ultimate solution for our product.</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </header>
      <section className="features">
        <div className="feature">
          <h2>product 1</h2>
          <p>Detail about product 1.</p>
        </div>
        <div className="feature">
          <h2>product 2</h2>
          <p>Detail about product 2.</p>
        </div>
        <div className="feature">
          <h2>product 3</h2>
          <p>Detail about product 3.</p>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>
      <footer className="footer">
        <p>&copy; 2024 aju brand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

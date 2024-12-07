<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Team Project</title>
  <link rel="stylesheet" href="styles.css" />
  {/* Header */}
  <header className="header">
    <div className="logo">
      <img src="images/logo.png" alt="Logo" />
    </div>
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  {/* Hero Section */}
  <section className="hero">
    <div className="hero-text">
      <h1>Welcome to Our Website</h1>
      <p>We provide the best services for your business growth.</p>
      <button className="cta-button">Get Started</button>
    </div>
  </section>
  {/* Footer */}
  <footer className="footer">
    <p>© 2024 My Company</p>
  </footer>
  CSS Code Example (Using design details from Figma): css Copy code /*
  styles.css */ /* General Reset */ * {"{"}
  margin: 0; padding: 0; box-sizing: border-box;
  {"}"}
  body {"{"}
  font-family: 'Roboto', sans-serif; /* Use the font defined in Figma */
  {"}"}
  /* Header */ .header {"{"}
  background-color: #3498db; /* Extracted color from Figma */ display: flex;
  justify-content: space-between; padding: 20px;
  {"}"}
  .nav-list {"{"}
  list-style-type: none; display: flex; gap: 20px;
  {"}"}
  .nav-list a {"{"}
  text-decoration: none; color: white; font-weight: bold;
  {"}"}
  .nav-list a:hover {"{"}
  color: #f1c40f; /* Hover effect color */
  {"}"}
  /* Hero Section */ .hero {"{"}
  background-image: url('images/hero-image.jpg'); /* Extracted from Figma */
  background-size: cover; background-position: center; height: 60vh; display:
  flex; justify-content: center; align-items: center; color: white; text-align:
  center;
  {"}"}
  .hero-text h1 {"{"}
  font-size: 3rem; margin-bottom: 1rem;
  {"}"}
  .hero-text p {"{"}
  font-size: 1.5rem; margin-bottom: 2rem;
  {"}"}
  .cta-button {"{"}
  background-color: #e74c3c; border: none; padding: 10px 20px; font-size:
  1.2rem; cursor: pointer; border-radius: 5px;
  {"}"}
  .cta-button:hover {"{"}
  background-color: #c0392b;
  {"}"}
  /* Footer */ .footer {"{"}
  background-color: #2c3e50; text-align: center; padding: 20px; color: white;
  {"}"}
  React Code Example (using components) If you're using React to build the
  application, you can break your design into components like Header, Hero, and
  Footer. Header Component (Header.js): js Copy code import React from 'react';
  const Header = () =&gt; {"{"}
  return (
  <header classname="header">
    <div classname="logo">
      <img src="/images/logo.png" alt="Logo" />
    </div>
    <nav>
      <ul classname="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  );
  {"}"}; export default Header; Hero Component (Hero.js): js Copy code import
  React from 'react'; const Hero = () =&gt; {"{"}
  return (
  <section classname="hero">
    <div classname="hero-text">
      <h1>Welcome to Our Website</h1>
      <p>We provide the best services for your business growth.</p>
      <button classname="cta-button">Get Started</button>
    </div>
  </section>
  );
  {"}"}; export default Hero; Footer Component (Footer.js): js Copy code import
  React from 'react'; const Footer = () =&gt; {"{"}
  return (
  <footer classname="footer">
    <p>© 2024 My Company</p>
  </footer>
  );
  {"}"}; export default Footer; Main Page (index.js): js Copy code import Header
  from '../components/Header'; import Hero from '../components/Hero'; import
  Footer from '../components/Footer'; export default function Home() {"{"}
  return (
  <div>
    <header>
      <hero>
        <footer></footer>
      </hero>
    </header>
  </div>
  );
  {"}"}
</>

import React, { useState } from "react";

const App = () => {
  const [contactInfo, setContactInfo] = useState({ name: "", email: "" });
  const [interests, setInterests] = useState({
    frontend: false,
    backend: false,
    mobile: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckboxClick = (e) => {
    const { name, checked } = e.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Hi, I'm _______</h1>
      <img src="src/gladoo.jpeg" alt="My profile pic" />
      <h2>About Me</h2>
      <p>I love movies</p>
      <a href="https://github.com">GitHub</a>
      <a href="https://linkedin.com">LinkedIn</a>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={contactInfo.name}
          onChange={handleInputChange}/>

        <label htmlFor="email">Enter your email address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          value={contactInfo.email}
          onChange={handleInputChange}/>

        <label htmlFor="frontend">Frontend Development</label>
        <input
          type="checkbox"
          id="frontend"
          name="frontend"
          checked={interests.frontend}
          onChange={handleCheckboxClick} />

        <label htmlFor="backend">Backend Development</label>
        <input
          type="checkbox"
          id="backend"
          name="backend"
          checked={interests.backend}
          onChange={handleCheckboxClick} />

        <label htmlFor="mobile">Mobile Development</label>
        <input
          type="checkbox"
          id="mobile"
          name="mobile"
          checked={interests.mobile}
          onChange={handleCheckboxClick}/>

        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thank you for subscribing!</p>}
    </div>
  );
};

export default App;
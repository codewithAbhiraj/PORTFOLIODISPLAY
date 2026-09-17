
import React from "react";

function Portfolio({ name, email, age, setName, setEmail, setAge }) {
  return (
    <div>
      <h1>My Portfolio</h1>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <br />
      <br />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <br />
      <br />

      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />
    </div>
  );
}

export default Portfolio;

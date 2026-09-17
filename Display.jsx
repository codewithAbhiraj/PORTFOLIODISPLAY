import React from "react";

function Display({ name, email, age }) {
  return (
    <div>
      <h1>Display</h1>

      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}

export default Display;
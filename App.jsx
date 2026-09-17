import React, { useState } from "react";
import Portfolio from "./Portfolio";
import Display from "./Display";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <Portfolio
        name={name}
        email={email}
        age={age}
        setName={setName}
        setEmail={setEmail}
        setAge={setAge}
      />

      <hr />

      <Display
        name={name}
        email={email}
        age={age}
      />
    </div>
  );
}

export default App;
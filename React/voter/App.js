import "./App.css";
import { useState } from "react";
import Person from "./Person";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="main">
      <div>
        <h1>Voting Eligibility</h1>
      </div>
      <div>
        <h1>Name:</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <h1>Age:</h1>
        <input type="text" onChange={(e) => setAge(e.target.value)} />
      </div>
      <Person name={name} age={age} />
    </div>
  );
}
export default App;

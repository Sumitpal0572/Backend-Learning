import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setjokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h3>Full Stack Application For Practice</h3>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h4>{joke.title}</h4>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;

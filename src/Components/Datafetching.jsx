import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://the-trivia-api.com/v2/questions")
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); // <-- Provide an empty dependency array to useEffect to run it only once

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {card.map((item, index) => (
          <div key={index} className="cards border-2 red max-w-[23vw]">
            <h1>items</h1>
            <h1>{item.question.text}</h1>
            <p>Correct Answer: {item.correctAnswer}</p>
            <p>Difficulty: {item.difficulty}</p>
            <p>Category: {item.category}</p>
            <p>Type: {item.type}</p>
            {/* You can add more details as needed */}
          </div>
        ))}
      </div>
    </>
  );
}

export default DataFetching;

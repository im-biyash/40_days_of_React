import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
        {card.map((item) => {
          return (
            <div  className="cards border-2 red max-w-[23vw]">
              <h1>{item.title}</h1>
              <p>{item.body}</p>
              <span>BY: {item.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

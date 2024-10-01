import React, { useState } from "react";
import arpita from "../assets/arpita.png";

function Statecolor() {
  const [color, setColor] = useState(null);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    if (inputValue === "arpita") {
      setColor("white");
    } else {
      setColor(null);
    }
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <h1 className="text-white mb-7">Enter your first name</h1>
      <div
        className="card bg-blue-200 mt-4 h-[300px] w-[250px]"
        style={{ backgroundColor: color }}
      >
        {color === "white" && (
          <img src={arpita} alt="Roshni" className="w-full h-full object-cover" />
        )}
      </div>
      <div className="field flex absolute top-[550px]">
        <input
          type="text"
          className="flex items-center"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Statecolor;

import React, { useState } from "react";
import questions from "./Data";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

 

  return (
    <div className="bg-blue-300 text-white flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-black font-mono font-bold">
        Simple Quiz app
      </h1>
      <div className="question_card bg-white bg-opacity-400 flex flex-col justify-start h-[400px] w-[500px] border-b-black shadow-md p-4 rounded-t-2xl rounded-b-2xl">
        <div className="questions mb-4">
          <h2 className="text-xl text-black mb-2">
            {questions[currentQuestion].question}
          </h2>
        </div>
        <div className="flex flex-col my-6 mx-4 w-full p-10">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="text-black p-2 rounded focus:outline-none hover:bg-gray-400"
                
                >
                  {option}
                </button>
              ))}
            </div>
      </div>
    </div>
  );
}

export default Quiz;

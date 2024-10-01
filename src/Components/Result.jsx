// Result.jsx

import React from "react";

function Result({ score, totalQuestion }) {
  return (
    <div className="text-white flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="text-white mb-5 text-3xl">Quiz app</h1>
      <div>
        <h1 className="ml-16 items-center font-bold">Results</h1>
        <h1 className="text-4xl text-red-500">Congratulations!!!!</h1>
        <h2 className="mt-7 ml-8">
          Your score is {score} out of {totalQuestion}
        </h2>
      </div>
    </div>
  );
}

export default Result;

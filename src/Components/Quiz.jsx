import React, { useState } from 'react';
import questions from './Data';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <div className='bg-black flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-white text-3xl'>Quiz App</h1>
            <div className="question_card bg-white bg-opacity-40 h-[400px] w-[400px] grid grid-cols-1">
                <div className="questions text-white font-semibold text-2xl p-4">
                    <h2>{questions[currentQuestion].question}</h2>
                </div>
                <div className="grid grid-cols-1 gap-y-2">
                    {questions[currentQuestion].options.map((option, index) => (
                        <button key={index} className='text-white p-2 rounded-lg hover:bg-gray-600 focus:outline-none'>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Quiz;

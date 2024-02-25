import React, { useState } from 'react';
import { list } from '../data/data';

const Play = () => {
  const [choice, setChoice] = useState("");
  const [choiceCom, setChoiceCom] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0)
  const [health, setHealth] = useState(5)

  const handleUserChoice = choi =>{
    setChoice(choi)

    const random = Math.floor(Math.random() * list.length)
    const comChoice = list[random]

    setChoiceCom(comChoice)

    handleResult(choi, comChoice)
  }

  const handleResult = (choos, comchoos) =>{
    if(choos === comchoos){
      setResult("Draw")
    }else if(
      (choos === "✌️" && comchoos === "🖐") ||
      (choos === "✊" && comchoos === "✌️") ||
      (choos === "🖐" && comchoos === "✊")
    ){
      setResult("You Win")
      setScore(prev => prev+1)
    }else{
      setResult("Com Win")
      setHealth(prev => prev - 1)
      if(health - 1 < 0){
        const confirm = window.confirm("Play again?")
        confirm ? window.location.href = '/play' : window.location.href = '/'
      }
    }

    if(score+1==5){
      const confirm = window.confirm("You Win, play again?")
      confirm ? window.location.href = '/play' : window.location.href = '/'
    }
  }
  return (
    <div className="border h-[100dvh] flex justify-center items-center">÷
    <div className="p-8 flex flex-col items-center gap-20 shadow-md">
      <div className="flex justify-between gap-60 items-center">
        <h1 className='text-xl font-bold px-3 py-1 text-[#fff] bg-slate-800 rounded-md'>health: {health}</h1>
        <h1 className='text-xl font-bold px-3 py-1 text-[#fff] bg-slate-800 rounded-md'>score: {score}</h1>
      </div>

      <div className="">
        <h1>User : {choice}</h1>
        <h1>Computer: {choiceCom}</h1>
      </div>

      <div>
        <h1 className="uppercase font-semibold px-3 py-2 bg-slate-800 rounded-md text-white">Result : {result}</h1>
      </div>

      <div className="flex gap-6">
        {list.map((e, index) => (
          <button
            className="px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700"
            onClick={() => handleUserChoice(e)}
            key={index}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Play;

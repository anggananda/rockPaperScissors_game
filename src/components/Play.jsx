import React, { useState } from 'react';
import { list } from '../data/data';

const Play = () => {
  const [choice, setChoice] = useState("");
  const [choiceCom, setChoiceCom] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0)
  const [health, setHealth] = useState(3)

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
        const confirm = window.confirm("Oh Noo You Lose 😔, Play again?")
        confirm ? window.location.href = '/play' : window.location.href = '/'
      }
    }

    if(score+1==5){
      const confirm = window.confirm("You Win 😃, play again?")
      confirm ? window.location.href = '/play' : window.location.href = '/'
    }
  }
  return (
    <div className="border h-[100dvh] flex justify-center items-center bg-[#eaeaea]">÷
    <div className="p-8 flex w-[60%] flex-col items-center gap-20 shadow-md rounded-md bg-[#fff]">
      <div className="flex justify-between gap-60 items-center">
        <h1 className='text-xl font-bold px-3 py-1 text-[#fff] bg-slate-800 rounded-md'>health: {health}</h1>
        <h1 className='text-xl font-bold px-3 py-1 text-[#fff] bg-slate-800 rounded-md'>score: {score}</h1>
      </div>

      <div className="flex flex-col p-4 h-[350px] border border-[rgba(0,0,0,0.1)] rounded-md shadow-lg w-[70%] justify-between items-center">
        <h1 className="flex flex-col items-center gap-6"><p className="px-3 py-2 rounded-md bg-slate-800 text-white font-bold flex flex-col items-center"> <span>🖥</span> Com Choice</p> <p className="text-6xl">{choiceCom}</p></h1>
        <h1 className="flex flex-col-reverse items-center gap-6"><p className="px-3 py-2 rounded-md bg-slate-800 text-white font-bold flex flex-col-reverse items-center"> <span>👨🏼</span> Your Choice</p> <p className="text-6xl">{choice}</p></h1>
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

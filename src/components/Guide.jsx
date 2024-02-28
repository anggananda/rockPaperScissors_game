import React from 'react'
import { Link } from 'react-router-dom'

const Guide = () => {
  return (
    <div className="h-[100dvh] flex justify-center items-center flex-col gap-4">
        <div className="flex justify-center max-w-[70%] gap-6 items-center border border-[rgba(0,0,0,0.1)] shadow-md p-8 flex-col">
            <h1 className="font-bold text-2xl ">How to Play the Game?</h1>
            
            <div className="flex text-justify gap-6 font-semibold flex-col">
                <p>Simple you just have to choose what you want. For example you choose rock or paper or scissor and then the computer (your enemy) will chosee randomly. So the result will be get when both of your choosen compare.</p>

                <p>You have 3 health, you have to prepare yourself if your health lower than 0 you'll lose the game 😏</p>
                <p>To win this game you must get 5 points to your score and then you'll win the game. Just that simple 🥳</p>
            </div>
        </div>

        <Link
        className="px-3 py-2 rounded-md bg-slate-800 text-white" 
        to="/">Back</Link>
    </div>
  )
}

export default Guide
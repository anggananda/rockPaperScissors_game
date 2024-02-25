import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import {list} from '../data/data'

const Home = () => {
  const li = list.map((e, index) => (
    <li key={index}>
      <p className="text-8xl">{e}</p>
    </li>
  ));
  return (
    <div className="h-[100dvh] flex flex-col justify-center gap-8 items-center">
      <h1 className="text-4xl font-bold">🔥 SUIT GAME 🔥</h1>

      <div className="max-w-[800px] p-10 rounded-md shadow-lg mx-auto border flex justify-center items-center flex-col gap-20 ">
        <div>
          <ul className="flex justify-center items-center gap-4">{li}</ul>
        </div>

        <ReactTyped 
        className="text-2xl font-bold"
        strings={["HELLO THERE ✨", "LET'S ENJOY THE GAME"]}
        backSpeed={50}
        typeSpeed={100}
        loop
        />

        <button className="bg-slate-800 px-4 py-2 rounded-md text-[#fff] hover:bg-slate-700">
          <Link to="/play">Play</Link>
        </button>
      </div>

      <ReactTyped 
        className="uppercase text-xs font-bold"
        strings={["Credit By DwiAngga❤️"]}
        backSpeed={100}
        typeSpeed={100}
        loop
        />
    </div>
  );
};

export default Home;

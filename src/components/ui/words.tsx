import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["view", "location", "food"];

  return (
    <div  className="h-[40rem] max-w-[85%]  md:max-w-[100%] flex justify-center items-center px-4">
      <div className="md:text-4xl text-3xl max-w-[85%] md:max-w-[100%] mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      A place with incredible

        <FlipWords words={words} /> <br />
       to enjoy with your loved ones
      </div>
    </div>
  );
}

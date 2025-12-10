import React from "react";

export default function CvListElement({ svgIcon, company, position, years }) {
  return (
    <div className="flex my-6 items-center ">
      <div className="shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 p-[5px] rounded-full  mr-4">
        <img src={svgIcon} alt="icon" className="w-8 aspect-square" />
      </div>
      <div className="flex flex-col text-sm w-full">
        <h1 className="font-semibold text-zinc-800 dark:text-white">
          {company}
        </h1>
        <div className="flex justify-between text-zinc-400 dark:text-gray-500 w-full pr-2">
          <p>{position}</p>
          <p>{years}</p>
        </div>
      </div>
    </div>
  );
}

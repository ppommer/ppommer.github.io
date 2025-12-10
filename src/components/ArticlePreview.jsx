import React from "react";
import { useNavigation } from "react-router-dom";
import { getFormattedDate } from "../utils/utilities";

export default function ArticlePreview({ title, description, isoDate }) {
  const dateDisplayed = getFormattedDate(isoDate);

  return (
    <div className="group relative cursor-pointer mb-12 scale-100 mx-4 sm:mx-7 md:mx-0 select-none">
      <div className=" md:justify-normal p-1">
        <div className="border-l-2 border-l-slate-400 text-slate-400 px-3 text-sm mb-3">
          {dateDisplayed}
        </div>
        <div className="-inset-5 absolute transition bg-zinc-50 dark:bg-zinc-800/50 scale-95 group-hover:opacity-100 group-hover:scale-100 opacity-0  overflow-hidden sm:rounded-2xl -z-10  sm:w-auto"></div>
        <h2 className=" mb-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <p className=" mb-3 relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <p className="text-teal-500 font-semibold text-sm ">
          Read article {">"}
        </p>
      </div>
    </div>
  );
}

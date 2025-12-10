import React from "react";
import { getFormattedDate } from "../utils/utilities";

export default function ArticlesElement({ title, description, isoDate }) {
  const formattedDate = getFormattedDate(isoDate);

  return (
    <div className="md:grid md:grid-cols-4 scale-100 group relative  select-none">
      <div className="absolute md:hidden -inset-6 transition bg-zinc-50 dark:bg-zinc-800/50 scale-95 group-hover:opacity-100 group-hover:scale-100 opacity-0  overflow-hidden -z-10  sm:w-auto"></div>
      <p className="col-start-1 pl-3 md:pl-5 mb-3 md:mb-0 md:pt-1 text-sm text-zinc-400 dark:text-zinc-500 border-l-2 md:border-0 border-l-slate-400 ">
        {formattedDate}
      </p>
      <div className="col-start-2 col-end-5 group/partial relative cursor-pointer  w-full lg:w-[70%]">
        <p className="font-semibold mb-2">{title}</p>
        <div className="md:absolute -inset-5 transition bg-zinc-50 dark:bg-zinc-800/50 scale-95 group-hover/partial:opacity-100 group-hover/partial:scale-100 opacity-0  overflow-hidden sm:rounded-2xl -z-10  sm:w-auto"></div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 ">
          {description}
        </p>
        <p className="text-teal-500 font-semibold text-sm ">
          Read article {">"}
        </p>
      </div>
    </div>
  );
}

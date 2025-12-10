import React from "react";
import { ReactComponent as LinkIcon } from "../assets/ui-icons/link-icon.svg";

export default function ProjectElement({
  className,
  svgIcon,
  title = "no title",
  description = "no desc",
  url = "no url",
}) {
  return (
    <div
      className={`${className} flex flex-col gap-y-4 group relative z-10 cursor-pointer  select-none`}
    >
      <div className="w-12 aspect-square  p-[6px] rounded-full  mr-4 bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img src={svgIcon} alt="icon" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-zinc-800 dark:text-zinc-100 font-semibold">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
      <a href={"https://www." + url}>
        <span className=" -inset-6 absolute transition bg-zinc-50 dark:bg-zinc-800/50 scale-95 group-hover:opacity-100 group-hover:scale-100 opacity-0  overflow-hidden sm:rounded-2xl -z-10 sm:w-auto"></span>
      </a>
      <p className="text-sm font-medium text-zinc-400 dark:text-zinc-200  flex gap-x-2 group-hover:text-teal-500 transition-colors items-center">
        <LinkIcon
          alt="link"
          className="w-4 aspect-square fill-zinc-400 dark:fill-zinc-200  group-hover:fill-teal-500 transition-colors"
        />
        <span>{url}</span>
      </p>
    </div>
  );
}

import React from "react";

export default function CVElement({ position, company, dateRange, description }) {
  return (
    <div className="scale-100 group relative flex flex-col select-none">
      <div className="col-start-2 col-end-5 group/partial relative cursor-pointer w-full lg:w-[100%] gap-y-3 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <div className="flex flex-col">
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
              {position}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {company}
            </p>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
            {dateRange}
          </p>
        </div>
        {description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

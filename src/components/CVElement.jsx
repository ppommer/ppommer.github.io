import React, { useState } from "react";

export default function CVElement({ position, company, dateRange, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="scale-100 group relative flex flex-col select-none">
      <div className="col-start-2 col-end-5 group/partial relative w-full lg:w-[100%] gap-y-3 flex flex-col">
        <div
          onClick={toggleExpanded}
          className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 ${
            description ? "cursor-pointer" : ""
          }`}
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-start gap-2">
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                {position}
              </h3>
              {description && (
                <svg
                  className={`w-4 h-4 mt-1 text-zinc-400 dark:text-zinc-500 transition-transform flex-shrink-0 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {company}
            </p>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
            {dateRange}
          </p>
        </div>
        {description && (
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-400 pt-2">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

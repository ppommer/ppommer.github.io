import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center mb-[10%]">
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold text-gray-500 mb-6">404</p>
        <h1 className="font-bold text-5xl mb-5">Page not found</h1>
        <p className="text-gray-400 mb-4">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <button
          className="  bg-zinc-800/80 hover:bg-zinc-800/100 transition-colors font-semibold text-white rounded-md text-sm py-2 px-6"
          onClick={() => navigate("/")}
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

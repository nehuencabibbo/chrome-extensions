import { useState } from "react";

function Popup() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex justify-center items-center min-h-screen flex-col gap-4 p-4">
      <h1 className="text-xl font-bold">
        Tailwind + React + Vite + HMR Template!
      </h1>
      <button
        className="bg-gray-300 border-2 border-black w-[160px] h-[70px] rounded hover:bg-gray-600 transition-colors"
        onClick={() => setCount(count + 1)}
      >
        Click to increment: {count}
      </button>
    </main>
  );
}

export default Popup;

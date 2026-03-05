import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Handlers: Separamos la lógica del JSX para que sea más legible
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(0, prev - 1)); // Evita números negativos si quieres
  const reset = () => setCount(0);

  return (
    <div className="p-8 max-w-sm mx-auto bg-slate-50 rounded-2xl shadow-lg flex flex-col items-center space-y-6 border border-slate-100 transition-all hover:shadow-xl">
      <header className="text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Mi Contador
        </h2>
        <p className="text-6xl font-black text-indigo-600 tabular-nums">
          {count}
        </p>
      </header>

      <div className="flex items-center gap-3">
        <button 
          className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors active:scale-95"
          onClick={decrement}
        >
          -1
        </button>

        <button 
          className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95"
          onClick={increment}
        >
          Añadir
        </button>
      </div>

      <button 
        className="text-xs font-medium text-slate-400 hover:text-indigo-500 transition-colors uppercase tracking-widest"
        onClick={reset}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default Counter;
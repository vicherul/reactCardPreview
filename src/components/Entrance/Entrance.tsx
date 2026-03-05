import { useState } from "react";

const Entrance = () => {
  const [isLogged, setIsLogged] = useState(false);

  // Handlers para limpiar el JSX
  const toggleAuth = () => setIsLogged((prev) => !prev);

  return (
    <div className="relative p-10 max-w-sm mx-auto bg-slate-50 border border-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500">
      
      {/* Elemento decorativo de fondo */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-colors duration-700 ${isLogged ? 'bg-emerald-100' : 'bg-indigo-100'}`} />

      <div className="relative z-10 space-y-8 flex flex-col items-center">
        
        {/* Avatar Dinámico */}
        <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-inner transition-all duration-500 ${isLogged ? 'bg-emerald-500 scale-110' : 'bg-slate-200'}`}>
          {isLogged ? "👤" : "🔒"}
        </div>

        <div className="space-y-2 text-center">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
            Panel de Control
          </h2>
          <p className={`text-2xl font-bold transition-all duration-500 ${isLogged ? 'text-slate-800' : 'text-slate-400 italic'}`}>
            {isLogged ? "¡Hola de nuevo!" : "Acceso restringido"}
          </p>
        </div>

        {/* Botón con estado dinámico y Feedback Háptico Visual */}
        <button
          onClick={toggleAuth}
          className={`group relative w-full py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95 shadow-lg ${
            isLogged 
              ? 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 shadow-slate-200' 
              : 'bg-slate-900 text-white hover:bg-black shadow-slate-300'
          }`}
        >
          <span className="relative z-10">
            {isLogged ? "Finalizar Sesión" : "Entrar al Sistema"}
          </span>
          
          {/* Brillo sutil al pasar el mouse */}
          {!isLogged && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          )}
        </button>

        {/* Footer info */}
        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
          {isLogged ? "Sesión activa • Encriptación AES-256" : "Identificación requerida"}
        </p>
      </div>
    </div>
  );
};

export default Entrance;
import { useState } from "react";

const Entrance = () => {
  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'logged'

  const handleLogin = () => {
    setStatus("loading");
    // Simulamos una llamada a API de 1.5 segundos
    setTimeout(() => {
      setStatus("logged");
    }, 1500);
  };

  const handleLogout = () => setStatus("idle");

  return (
    <div className="relative p-10 max-w-sm mx-auto bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500">
      
      {/* Fondo dinámico sutil */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 transition-colors duration-1000 ${
        status === 'logged' ? 'bg-emerald-500' : status === 'loading' ? 'bg-amber-500' : 'bg-indigo-500'
      }`} />

      <div className="relative z-10 flex flex-col items-center space-y-8">
        
        {/* Avatar / Icono de Estado */}
        <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-xl transition-all duration-500 ${
          status === 'loading' ? 'bg-slate-100 animate-pulse' : 
          status === 'logged' ? 'bg-emerald-500 text-white scale-110' : 'bg-slate-900 text-white'
        }`}>
          {status === 'loading' ? '⏳' : status === 'logged' ? '👤' : '🔒'}
        </div>

        {/* Textos con Skeleton Loader */}
        <div className="space-y-3 text-center w-full">
          {status === 'loading' ? (
            <div className="space-y-2 flex flex-col items-center">
              <div className="h-4 w-24 bg-slate-200 animate-pulse rounded" />
              <div className="h-8 w-48 bg-slate-200 animate-pulse rounded-lg" />
            </div>
          ) : (
            <>
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">
                {status === 'logged' ? "Sesión Activa" : "Seguridad"}
              </h2>
              <p className="text-2xl font-bold text-slate-800">
                {status === 'logged' ? "¡Bienvenido, Victor!" : "Acceso Protegido"}
              </p>
            </>
          )}
        </div>

        {/* Botón de Acción */}
        <button
          onClick={status === 'logged' ? handleLogout : handleLogin}
          disabled={status === 'loading'}
          className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95 shadow-lg flex justify-center items-center ${
            status === 'loading' ? 'bg-slate-100 text-slate-400 cursor-not-allowed' :
            status === 'logged' ? 'bg-white border border-slate-200 text-slate-500 hover:bg-red-50 hover:text-red-500 hover:border-red-100' : 
            'bg-slate-900 text-white hover:shadow-indigo-200'
          }`}
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
               Validando...
            </span>
          ) : (
            status === 'logged' ? "Cerrar Sesión" : "Iniciar Sesión"
          )}
        </button>
      </div>
    </div>
  );
};

export default Entrance;
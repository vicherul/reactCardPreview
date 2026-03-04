import { useState } from "react";

const Interruptor = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div className={`flex flex-col items-center justify-center min-h-[400px] w-full max-w-md mx-auto rounded-[3rem] transition-all duration-700 ease-in-out border-8 ${
      isOn 
      ? "bg-yellow-50 border-yellow-200 shadow-[0_0_100px_rgba(253,224,71,0.3)]" 
      : "bg-slate-900 border-slate-800 shadow-2xl"
    }`}>
      
      {/* Lámpara / Indicador de Estado */}
      <div className={`w-24 h-24 rounded-full mb-12 transition-all duration-500 shadow-inner flex items-center justify-center ${
        isOn 
        ? "bg-yellow-300 shadow-[0_0_60px_rgba(253,224,71,0.8)] scale-110" 
        : "bg-slate-800 shadow-none scale-100"
      }`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-10 w-10 transition-colors duration-500 ${isOn ? "text-yellow-700" : "text-slate-600"}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* Contenedor del Botón */}
      <div className="text-center space-y-6">
        <h2 className={`text-xs font-black uppercase tracking-[0.3em] transition-colors ${isOn ? "text-yellow-600" : "text-slate-500"}`}>
          Estado del Sistema: {isOn ? "Activo" : "Inactivo"}
        </h2>

        <button
          onClick={() => setIsOn(!isOn)}
          className={`relative group overflow-hidden px-10 py-4 rounded-full font-bold transition-all duration-300 active:scale-95 shadow-lg ${
            isOn 
            ? "bg-white text-yellow-600 hover:shadow-yellow-200" 
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          <span className="relative z-10 tracking-widest">
            {isOn ? "APAGAR" : "ENCENDER"}
          </span>
          
          {/* Efecto de brillo al pasar el mouse */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>

      <p className={`mt-10 text-[10px] font-medium transition-opacity duration-700 ${isOn ? "text-yellow-500 opacity-100" : "opacity-0"}`}>
        SISTEMA DE ILUMINACIÓN INTELIGENTE V.1.0
      </p>
    </div>
  );
};

export default Interruptor;
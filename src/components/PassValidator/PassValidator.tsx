import { useState } from "react";

const PassValidator = () => {
  const [password, setPassword] = useState("");

  // Lógica de seguridad (puedes añadir más reglas fácilmente)
  const isLongEnough = password.length >= 8;
  const hasContent = password.length > 0;
  
  // Calculamos el porcentaje de "fuerza" para la barra de progreso
  const strengthProgress = Math.min((password.length / 8) * 100, 100);

  return (
    <div className="p-8 max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Crea tu contraseña
        </label>
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition-all placeholder:text-slate-600 text-white"
          />
        </div>
      </div>

      {/* Barra de progreso visual */}
      {hasContent && (
        <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ease-out ${isLongEnough ? 'bg-emerald-400' : 'bg-amber-400'}`}
              style={{ width: `${strengthProgress}%` }}
            />
          </div>

          <div className="flex items-center gap-2">
            {isLongEnough ? (
              <div className="flex items-center text-emerald-400 text-sm font-medium transition-all">
                <span className="mr-2">✓</span>
                Contraseña segura
              </div>
            ) : (
              <div className="flex items-center text-slate-400 text-sm transition-all">
                <span className="mr-2 text-amber-500">○</span>
                Mínimo 8 caracteres ({password.length}/8)
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mensaje de éxito final con un toque sutil */}
      {isLongEnough && (
        <p className="text-[10px] text-center text-slate-500 italic">
          ¡Lista para proteger tu cuenta! ✨
        </p>
      )}
    </div>
  );
};

export default PassValidator;
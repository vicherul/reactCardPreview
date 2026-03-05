import { useState } from "react";

const Entrance = () => {
  const [step, setStep] = useState("idle"); // 'idle', 'loading', 'logged', 'error'
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Simulación de una llamada a Servidor/API
  const fakeAuthApi = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email === "admin@test.com" && data.password === "1234") {
          resolve();
        } else {
          reject("Credenciales incorrectas");
        }
      }, 1500);
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setStep("loading");
    
    try {
      await fakeAuthApi(formData);
      setStep("logged");
    } catch (err) {
      setStep("error");
      setTimeout(() => setStep("idle"), 3000); // Quitamos el error tras 3s
    }
  };

  const isFormEmpty = !formData.email || !formData.password;

  // Renderizado de la Pantalla de Bienvenida (Logueado)
  if (step === "logged") {
    return (
      <div className="p-10 max-w-sm mx-auto bg-white rounded-[2.5rem] shadow-2xl text-center space-y-6 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto shadow-inner">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-slate-800">¡Bienvenido!</h2>
        <p className="text-slate-500">Has accedido al panel de administración.</p>
        <button 
          onClick={() => { setStep("idle"); setFormData({email:"", password:""}); }}
          className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
    );
  }

  // Renderizado del Formulario (Idle / Loading / Error)
  return (
    <div className="p-10 max-w-sm mx-auto bg-slate-950 rounded-[2.5rem] shadow-2xl border border-slate-800 space-y-8 relative overflow-hidden transition-all">
      
      {/* Indicador de Error Sutil en el fondo */}
      {step === "error" && <div className="absolute inset-0 bg-red-500/10 animate-pulse" />}

      <header className="relative z-10 text-center space-y-2">
        <h2 className="text-2xl font-bold text-white tracking-tight">Iniciar Sesión</h2>
        <p className="text-slate-400 text-xs uppercase tracking-widest font-medium">Control de Acceso</p>
      </header>

      <form onSubmit={handleLogin} className="relative z-10 space-y-4">
        <div className="space-y-1">
          <input
            type="email"
            placeholder="Email (admin@test.com)"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-white outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
          />
        </div>

        <div className="space-y-1">
          <input
            type="password"
            placeholder="Contraseña (1234)"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-white outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
          />
        </div>

        {step === "error" && (
          <p className="text-red-400 text-xs font-bold text-center animate-bounce">
            ❌ Acceso denegado. Revisa tus datos.
          </p>
        )}

        <button
          type="submit"
          disabled={step === "loading" || isFormEmpty}
          className={`w-full py-4 rounded-2xl font-bold transition-all flex justify-center items-center shadow-lg shadow-indigo-500/20 ${
            isFormEmpty ? 'bg-slate-800 text-slate-600 cursor-not-allowed' :
            step === "loading" ? 'bg-indigo-600/50 text-white animate-pulse' : 'bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95'
          }`}
        >
          {step === "loading" ? "Procesando..." : "Entrar al Sistema"}
        </button>
      </form>
    </div>
  );
};

export default Entrance;
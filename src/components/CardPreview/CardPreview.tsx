import { useState } from "react"

const CardPreview = () => {
    const [name, setName] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <div className="flex flex-col items-center justify-center p-10 space-y-10 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] rounded-[2.5rem] min-h-[450px] transition-all">
            
            {/* Sección del Input */}
            <div className="w-full max-w-sm">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">
                    Identificación
                </label>
                <div className="relative">
                    <input 
                        type="text" 
                        value={name} 
                        placeholder="Introduce tu nombre..." 
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl text-slate-700 placeholder:text-slate-300 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all outline-none shadow-sm"
                        onChange={handleChange} 
                    />
                    {name && (
                        <button 
                            onClick={() => setName('')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-indigo-500 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Tarjeta Visual */}
            <div className={`relative group w-full max-w-sm h-48 rounded-[2rem] overflow-hidden transition-all duration-500 ease-out p-8 flex flex-col justify-between shadow-2xl ${
                name 
                ? 'bg-gradient-to-br from-indigo-600 to-violet-700 scale-[1.02] rotate-1' 
                : 'bg-slate-100'
            }`}>
                {/* Decoración abstracta de la tarjeta */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="z-10">
                    <p className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${name ? 'text-indigo-200' : 'text-slate-400'}`}>
                        Tarjeta de Identidad Digital
                    </p>
                    <h2 className={`text-3xl font-medium mt-4 tracking-tight break-words transition-colors duration-500 ${name ? 'text-white' : 'text-slate-300'}`}>
                        {name || "Tu Nombre Aquí"}
                    </h2>
                </div>

                <div className="flex justify-between items-center z-10">
                    <div className={`h-8 w-12 rounded-md transition-colors duration-500 ${name ? 'bg-white/20' : 'bg-slate-200'}`}></div>
                    <div className={`text-[10px] font-mono transition-colors duration-500 ${name ? 'text-indigo-100' : 'text-slate-300'}`}>
                        04/26
                    </div>
                </div>
            </div>

            <p className="text-slate-400 text-xs italic">
                La vista previa se actualiza en tiempo real
            </p>
        </div>
    )
}

export default CardPreview
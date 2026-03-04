import { useState } from "react"

const Entrance = () => {

    const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="p-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg border text-center space-y-4">
        <h2 className="text-xl font-bold">Panel de Control</h2>
        {/* 1.- Usamos el operador ternario para el mensaje */}
        <p className={`text-lg ${isLogged ? 'text-green-600': 'text-red-600'}`}>
            {isLogged ? "Bienvenido Usuario": "Por favor, inicia Sesion"}
        </p>

        {/* Boton para tambien cambiar text y su funcion */}
        <button className={`px-6 py-2 rounded-full font-bold text-white transition-all ${isLogged ? 'bg-slate-500 hover:bg-slate-600':'bg-indigo-600 hover:bg-indigo-700'}`} onClick={()=>setIsLogged(!isLogged)}>
        { isLogged ? "Cerrar Sesion" : "Iniciar Sesion"}
        </button>

    </div>
  )
}

export default Entrance
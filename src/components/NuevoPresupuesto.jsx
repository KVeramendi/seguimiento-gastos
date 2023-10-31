import React, { useState } from 'react'
import Mensaje from './Mensaje';

export default function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {
    const [mensaje, setMensaje] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!presupuesto || presupuesto < 0) {
            return setMensaje("No es un presupuesto válido");
        }
        setMensaje("");
        setIsValidPresupuesto(true);
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handleSubmit}>
                <div className='campo'>
                    <label>Establecer Presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Ingrese el presupuesto (S/.)'
                        value={presupuesto === 0 ? null : presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                    <input
                        type="submit"
                        value="Añadir"
                    />
                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                </div>
            </form>

        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ControlPresupuesto({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) {
    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
        const totalDisponible = presupuesto - totalGastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        setGastado(totalGastado)
        setDisponible(totalDisponible)
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000);
    }, [gastos])


    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-PE', {
            style: 'currency',
            currency: 'PEN',
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Desea restablecer el presupuesto y los gastos?')
        if (resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#5D3FD3',
                        trailColor: "#F5F5F5",
                        textColor: porcentaje > 100 ? '#DC2626' : '5D3FD3'
                    })}
                    value={porcentaje}
                    text={`${porcentaje} % Gastado`}
                />
            </div>
            <div className='contenido-presupuesto'>
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Restablecer Presupuesto
                </button>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
import React from 'react'
import Gasto from './Gasto'

function ListadoGastos({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrados
}) {
    return (
        <div className='Listado-gastos contenedor'>
            {
                filtro ? (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No hay gasto en esta categoría'}</h2>
                        {gastosFiltrados.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) :
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'Aún no hay gastos que mostrar'}</h2>
                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
            }
        </div>
    )
}

export default ListadoGastos
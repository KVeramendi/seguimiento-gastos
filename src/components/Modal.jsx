import { useState, useEffect } from 'react'
import cerrarIcono from '../img/cerrar.svg'
import Mensaje from './Mensaje'

function Modal({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gasoEditar,
    setGastoEditar
}) {
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (Object.keys(gasoEditar).length > 0) {
            setNombre(gasoEditar.nombre)
            setCantidad(gasoEditar.cantidad)
            setCategoria(gasoEditar.categoria)
            setFecha(gasoEditar.fecha)
            setId(gasoEditar.id)
        }
    }, [])


    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 200);
    }
    const handleSubmit = e => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }
        guardarGasto({ nombre, cantidad, categoria, fecha, id })
    }


    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={cerrarIcono}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            >
                <legend>{gasoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                <div className='campo'>
                    <label htmlFor="Nombre">Nombre Gasto</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="Nombre">Cantidad</label>
                    <input
                        id="Monto"
                        type="number"
                        placeholder='Añade el monto del gasto: ej. S/. 300'
                        value={cantidad}
                        onChange={e => setCantidad(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categorias">Categoría</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">--- Seleccione ---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastosVarios">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input style={{ marginTop: '4rem' }}
                    type="submit"
                    value={gasoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"}
                />
            </form>
        </div>
    )
}

export default Modal
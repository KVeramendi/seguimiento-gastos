import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
}) => {
    return (
        <header>
            <h1>Seguimiento de Gastos</h1>
            {
                isValidPresupuesto ?
                    <ControlPresupuesto
                        presupuesto={presupuesto}
                        setGastos={setGastos}
                        gastos={gastos}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                    : <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
            }

        </header>
    )
}

export default Header
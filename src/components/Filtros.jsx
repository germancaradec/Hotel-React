import { useId } from 'react';
import { useFiltros } from '../hooks/useFiltros.js';
import './Filtros.css';


export function FiltrosConsultas() {
    const { filtros, setFiltros } = useFiltros();

    const apellidoFiltroId = useId();
    const nombreFiltroId = useId();

    const handleChangeApellido = (event) => {
        setFiltros(prevState => ({
        ...prevState,
        apellido: event.target.value
        }));
    };

    const handleChangeNombre = (event) => {
        setFiltros(prevState => ({
        ...prevState,
        nombre: event.target.value
        }));
    };

    return (
        <section className='filtros'>
        <div>
            <label htmlFor={apellidoFiltroId}>Filtrar por Apellido:</label>
            <input
            type='text'
            id={apellidoFiltroId}
            onChange={handleChangeApellido}
            value={filtros.apellido}
            />
        </div>

        <div>
            <label htmlFor={nombreFiltroId}>Filtrar por Nombre:</label>
            <input
            type='text'
            id={nombreFiltroId}
            onChange={handleChangeNombre}
            value={filtros.nombre}
            />
        </div>
        </section>
    );
}

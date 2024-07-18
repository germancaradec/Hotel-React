import { useId } from 'react'
import { useLista } from '../hooks/useLista.js'
import './Lista.css';

function ConsultaItem ({ apellido, nombre, telefono, texto, agregarEnLista, cantidad }) {
    return (
        <li>
        <div>
            <strong>{apellido} {nombre}</strong>
        </div>
        <div>
            <small>Teléfono: {telefono}</small>
        </div>
        <div>
            <small>{texto}</small>
        </div>
        <footer>
            <small>
            Cantidad: {cantidad}
            </small>
            <button onClick={agregarEnLista}>+</button>
        </footer>
        </li>
    )
}

export function Lista () {
    const listaCheckboxId = useId()
    const { lista, limpiarLista, agregarEnLista } = useLista()

    return (
        <>
        <label className='lista-button' htmlFor={listaCheckboxId}>
            Lista
        </label>
        <input id={listaCheckboxId} type='checkbox' hidden />

        <aside className='lista'>
            <ul>
            {lista.map(consulta => (
                <ConsultaItem
                key={consulta.id}
                agregarEnLista={() => agregarEnLista(consulta)}
                {...consulta}
                />
            ))}
            </ul>

            <button onClick={limpiarLista} className="btn btn-danger my-2">
            Limpiar Lista
            </button>
        </aside>
        </>
    )
}

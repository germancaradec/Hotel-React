import { useId } from 'react'
import { useLista } from '../hooks/useLista.js'
import './Lista.css';


function ConsultaItem ({ id, apellido, nombre,  texto, quitarDeLista, consulta  }) {
    return (
        <li>
        <div>
            <small>{texto}</small>
        </div>
        <div>
            <strong>{apellido} {nombre}</strong>
        </div>
        <button onClick={() => quitarDeLista(consulta)}>Quitar de lista</button>

        </li>
    )
}

export function Lista () {
    const listaCheckboxId = useId()
    const { lista, limpiarLista, agregarEnLista, quitarDeLista } = useLista()
    

    return (
        <>
        <label className='lista-button' htmlFor={listaCheckboxId}>
            Ver consultas en proceso
        </label>
        <input id={listaCheckboxId} type='checkbox' hidden />

        <aside className='lista'>
            <ul>
            {lista.map(consulta => (
                <ConsultaItem
                key={consulta.id}
                id={consulta.id}
                agregarEnLista={() => agregarEnLista(consulta)}
                consulta = {consulta}
                quitarDeLista={quitarDeLista}
                {...consulta}
                />
            ))}
            </ul>

            <button onClick={limpiarLista} className="btn btn-danger my-2">
            Vaciar lista procesadas
            </button>
        </aside>
        </>
    )
}

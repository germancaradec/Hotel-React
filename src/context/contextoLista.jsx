import { useReducer, createContext } from 'react'
import { listaReducer, listaEstadoInicial } from '../reducers/reducerLista.js'

export const ContextoLista = createContext()

function useListaReducer() {
    const [state, dispatch] = useReducer(listaReducer, listaEstadoInicial)

    const agregarEnLista = consulta => dispatch({
        type: 'AGREGAR_EN_LISTA',
        payload: consulta
    })

    const quitarDeLista = consulta => dispatch({
        type: 'QUITAR_DE_LISTA',
        payload: consulta
    })

    const limpiarLista = () => dispatch({ type: 'LIMPIAR_LISTA' })

    return { state, agregarEnLista, quitarDeLista, limpiarLista }
}

export function ProveedorLista({ children }) {
    const { state, agregarEnLista, quitarDeLista, limpiarLista } = useListaReducer()

    return (
        <ContextoLista.Provider value={{
        lista: state,
        agregarEnLista,
        quitarDeLista,
        limpiarLista
        }}>
        {children}
        </ContextoLista.Provider>
    )
}

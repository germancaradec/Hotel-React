export const listaEstadoInicial = JSON.parse(window.localStorage.getItem('listaConsultas')) || []

export const LISTA_ACTION_TYPES = {
    AGREGAR_EN_LISTA: 'AGREGAR_EN_LISTA',
    QUITAR_DE_LISTA: 'QUITAR_DE_LISTA',
    LIMPIAR_LISTA: 'LIMPIAR_LISTA'
}

// update localStorage with state for list
export const updateLocalStorage = state => {
    window.localStorage.setItem('listaConsultas', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
    [LISTA_ACTION_TYPES.AGREGAR_EN_LISTA]: (state, action) => {
        const { id } = action.payload
        const consultaEnListaIndex = state.findIndex(item => item.id === id)

        if (consultaEnListaIndex >= 0) {
            return state
        }

        const newState = [...state, action.payload]

        updateLocalStorage(newState)
        return newState
        },
        [LISTA_ACTION_TYPES.QUITAR_DE_LISTA]: (state, action) => {
            const { id } = action.payload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        },
        [LISTA_ACTION_TYPES.LIMPIAR_LISTA]: () => {
            updateLocalStorage([])
            return []
        }
}

export const listaReducer = (state, action) => {
    const { type: actionType } = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state, action) : state
}

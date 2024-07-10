const API_URL = "http://127.0.0.1:8000/contacto/consultas/"

export const listarConsultas = async () => {
    return await fetch(API_URL)
}

export const registrarConsulta = async (NuevaConsulta) => {
    return await fetch(API_URL,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "nombre":String(NuevaConsulta.nombre).trim(),
            "apellido":String(NuevaConsulta.apellido).trim(),
            "telefono":parseInt(NuevaConsulta.telefono),
            "texto":String(NuevaConsulta.texto).trim()
        })
    }

    )
}

export const actualizarConsulta = async (consultaId, consultaActualizada) => {
    return await fetch(`${API_URL}${consultaId}`,{
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "nombre":String(consultaActualizada.nombre).trim(),
            "apellido":String(consultaActualizada.apellido).trim(),
            "telefono":parseInt(consultaActualizada.telefono),
            "texto":String(consultaActualizada.texto).trim()
        })
    }

    )
}

export const obtenerConsulta = async (consultaId) => {
    return await fetch(`${API_URL}${consultaId}`)
}

export const eliminarConsulta = async (consultaId) => {
    return await fetch(`${API_URL}${consultaId}`, {
        method: 'DELETE'
    });
};
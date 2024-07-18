import React  from "react"
import { useNavigate } from 'react-router-dom'

import * as ServidorConsultas from './ServidorConsultas'


const ItemConsulta = ({consulta, listaConsul})=>{
    const navigate = useNavigate()
    // console.log(props.consultas)
    // console.log(consulta)
    const handleDelete = async (consultaId) => {
        console.log(consulta.id)
        await ServidorConsultas.eliminarConsulta(consulta.id)
        listaConsul()
        }

    return(
        <div className="col-md-4 mb-4 ">
            <div className="card card-body">
                <h3 className="card-title"> {consulta.apellido} {consulta.nombre}
                    <button onClick={()=>navigate(`/modificarConsulta/${consulta.id}`)}
                    className="ms-2 btn btn-sm btn-info">Modificar</button></h3>
                <p className="card-text"> 
                    Telefono: <strong>{consulta.telefono}</strong> 
                </p>
                <p className="card-text"> 
                    Consulta: <strong>{consulta.texto}</strong> 
                </p>
                <button onClick={() => consulta.id && handleDelete(consulta.id)} className="btn btn-danger my-2">
                    Eliminar consulta
                </button>
            </div>

        </div>
    )
}

export default ItemConsulta
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import * as ServidorConsultas from './ServidorConsultas'

const FormConsulta = () => {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    const initialState={id:0,nombre:"",apellido:"",telefono:0,texto:""}

    const [consulta, setConsulta] = useState(initialState)

    const handleInputChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setConsulta({ ...consulta, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            let res
            if (!params.id){
                res = await ServidorConsultas.registrarConsulta(consulta)
                const data=await res.json()
                // console.log(data)
                if(data.message==="Consulta agregada correctamente"){
                    setConsulta(initialState)}
            }else{
                await ServidorConsultas.actualizarConsulta(params.id, consulta)
            }
            navigate("/")
        }catch(error){
            console.log(error)
        }
    }

    const obtenerConsulta=async(consultaId)=>{
        try{
            const res = await ServidorConsultas.obtenerConsulta(consultaId)
            const data = await res.json()
            console.log(data)
            const {nombre, apellido, telefono, texto}=data.consulta
            setConsulta({nombre, apellido, telefono, texto})
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if (params.id){
            obtenerConsulta(params.id)
        }
        // eslint-disable-next-line
    },[])

    return(
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Consulta</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="nombre" value={consulta.nombre} onChange={handleInputChange}
                    className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input type="text" name="apellido" value={consulta.apellido} onChange={handleInputChange} 
                    className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input type="number" name="telefono" value={consulta.telefono} onChange={handleInputChange}
                    className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Consulta</label>
                    <textarea name="texto" className="form-control" maxLength="3000" 
                    rows="10" cols="50" required  value={consulta.texto} onChange={handleInputChange} ></textarea>
                </div>
                <div className="d-grid gap-2">
                {params.id ? (
                        <button type="submit" className="btn btn-block btn-primary">
                        Modificar
                        </button>
                    ) : (
                        <button type="submit" className="btn btn-block btn-success">
                        Registrar
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default FormConsulta

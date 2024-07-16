import React, { useEffect, useState } from "react";

// Componentes
import ModifConsulta from "./ModifConsulta";

import * as ServidorConsultas from './ServidorConsultas'

const ListarConsulta = () => {
    const [consultas, setConsultas] = useState([])

    const listaConsul = async () => {
        try{
            const res = await ServidorConsultas.listarConsultas()
            const data = await res.json()
            console.log(data)
            setConsultas(data.consultas)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listaConsul();
    }, [])

    return(
        <div className="row">
            {consultas.slice(0, 9).map((consulta)=>(
                <ModifConsulta key={consulta.id} consulta={consulta} listaConsul={listaConsul}/>
            ))}
        </div>
    )

}


export default ListarConsulta;
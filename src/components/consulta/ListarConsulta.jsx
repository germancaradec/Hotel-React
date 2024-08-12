import React, { useEffect, useState } from "react";
import Consulta from "./Consulta";
import * as ServidorConsultas from './ServidorConsultas';
import FiltroConsultas from "./FiltroConsultas";

const ListarConsulta = () => {
    const [consultas, setConsultas] = useState([]);
    const [consultasOriginales, setConsultasOriginales] = useState([]);

    const listaConsul = async () => {
        try {
            const res = await ServidorConsultas.listarConsultas();
            const data = await res.json();
            console.log(data);
            setConsultas(data.consultas);
            setConsultasOriginales(data.consultas); // Guardar una copia de las consultas originales
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listaConsul();
    }, []);

<<<<<<< HEAD
    return(
        <div className="row">
            {consultas.map((consulta)=>(
                <Consulta key={consulta.id} consulta={consulta} listaConsul={listaConsul}/>
            ))}
=======
    return (
        <div className="container">
            <FiltroConsultas consultasOriginales={consultasOriginales} setConsultas={setConsultas} />
            
            <div className="row">
                {consultas.slice(0, 9).map((consulta) => (
                    <Consulta key={consulta.id} consulta={consulta} />
                ))}
            </div>
>>>>>>> filtros1
        </div>
    );
};

export default ListarConsulta;

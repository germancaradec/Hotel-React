import React from 'react';
import { useLista } from '../hooks/useLista';
import * as ServidorConsultas from './ServidorConsultas';
import './Consultas.css';
import { useNavigate } from 'react-router-dom'
import { Header } from './Header.jsx';


export function Consultas({ consultas, listaConsul }) {
    const { agregarEnLista, quitarDeLista, lista } = useLista();
    const navigate = useNavigate()

    const checkConsultaEnLista = consulta => {
        return lista.some(item => item.id === consulta.id);
    }

    const handleDelete = async (consultaId) => {
        console.log(consultaId);
        await ServidorConsultas.eliminarConsulta(consultaId);
        listaConsul();
    }

    return (
        <main className="consultas">
            <div>
            <Header />
            <ul>
                {Array.isArray(consultas) && consultas.slice(0, 18).map(consulta => {
                    const consultaEnLista = checkConsultaEnLista(consulta);
                    
                    return (
                            <li key={consulta.id} className="consulta">
                                <div>
                                    <span>Apellido:</span> {consulta.apellido}
                                </div>
                                <div>
                                    <span>Nombre:</span> {consulta.nombre}
                                </div>
                                <div>
                                    <span>Teléfono:</span> {consulta.telefono}
                                </div>
                                <div>
                                    <span>Texto:</span> {consulta.texto}
                                </div>
                                <button
                                    onClick={() => {
                                        consultaEnLista ? quitarDeLista(consulta) : agregarEnLista(consulta);
                                    }}
                                    className={consultaEnLista ? "btn btn-outline-secondary" : "btn btn-outline-primary"}
                                >
                                    {consultaEnLista ? 'No procesar' : 'Procesar'}
                                </button>

                                <button onClick={()=>navigate(`/modificarConsulta/${consulta.id}`)}
                                    className="btn btn-sm btn-warning">Modificar
                                    </button>
                                
                                <button onClick={() => consulta.id && handleDelete(consulta.id)} className="btn btn-outline-danger">
                                    Eliminar consulta
                                </button>
                            </li>
                    );
                })}
            </ul>
                    </div>
        </main>
    );
}

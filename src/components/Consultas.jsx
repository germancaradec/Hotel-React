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
                {Array.isArray(consultas) && consultas.slice(0, 9).map(consulta => {
                    const consultaEnLista = checkConsultaEnLista(consulta);
                    
                    return (
                            <li key={consulta.id} className="consulta">
                                <div>
                                    <strong>Apellido:</strong> {consulta.apellido}
                                </div>
                                <div>
                                    <strong>Nombre:</strong> {consulta.nombre}
                                </div>
                                <div>
                                    <strong>Teléfono:</strong> {consulta.telefono}
                                </div>
                                <div>
                                    <strong>Texto:</strong> {consulta.texto}
                                </div>
                                
                                <button onClick={()=>navigate(`/modificarConsulta/${consulta.id}`)}
                                        className="ms-2 btn btn-sm btn-warning">Modificar
                                </button>
                                
                                
                                <button
                                    onClick={() => {
                                        consultaEnLista ? quitarDeLista(consulta) : agregarEnLista(consulta);
                                    }}
                                    className="btn my-2 btn-info"
                                >
                                    {consultaEnLista ? 'No procesar' : 'Procesar'}
                                </button>
                                
                                <button onClick={() => consulta.id && handleDelete(consulta.id)} className="btn btn-danger my-2">
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

import React from 'react';
import { useLista } from '../hooks/useLista';
import * as ServidorConsultas from './ServidorConsultas';
import './Consultas.css';

export function Consultas({ consultas, obtenerConsultas }) {
    const { agregarEnLista, quitarDeLista, lista } = useLista();

    const checkConsultaEnLista = consulta => {
        return lista.some(item => item.id === consulta.id);
    }

    const handleDelete = async (consultaId) => {
        console.log(consultaId);
        await ServidorConsultas.eliminarConsulta(consultaId);
        obtenerConsultas();
    }

    return (
        <main className="consultas">
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
                            <div>
                                <button
                                    onClick={() => consulta.id && handleDelete(consulta.id)}
                                    className="btn btn-danger my-2"
                                >
                                    Eliminar consulta
                                </button>
                                <button
                                    onClick={() => {
                                        consultaEnLista ? quitarDeLista(consulta) : agregarEnLista(consulta);
                                    }}
                                    className="btn my-2"
                                >
                                    {consultaEnLista ? 'Quitar de lista en proceso...' : 'Agregar a lista procesar'}
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

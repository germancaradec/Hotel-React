import { useState, useEffect } from 'react';
import { listarConsultas } from '../components/ServidorConsultas';

const useConsultas = () => {
    const [consultas, setConsultas] = useState([]);

    const obtenerConsultas = async () => {
        try {
            const response = await listarConsultas();
            const data = await response.json();
            setConsultas(data.consultas);
        } catch (error) {
            console.error("Error al obtener las consultas:", error);
            setConsultas([]);
        }
    };

    useEffect(() => {
        obtenerConsultas();
    }, []);

    return { consultas, obtenerConsultas };
};

export default useConsultas;

import { useContext } from 'react';
import { ContextoFiltros } from '../context/contextoFiltros.jsx';

export function useFiltros() {
    const { filtros, setFiltros } = useContext(ContextoFiltros);

    const filtrarConsultas = (consultas) => {
        return consultas.filter(consulta => {
            const apellidoMatches = consulta.apellido.toLowerCase().includes(filtros.apellido.toLowerCase());
            const nombreMatches = consulta.nombre.toLowerCase().includes(filtros.nombre.toLowerCase());

            return apellidoMatches && nombreMatches;
        });
    };

    return { filtros, filtrarConsultas, setFiltros };
}

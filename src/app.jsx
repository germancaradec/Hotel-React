import React from 'react';
import useConsultas from './hooks/useConsultas';
import { Consultas } from './components/Consultas.jsx';
import { Header } from './components/Header.jsx';
import { useFiltros } from './hooks/useFiltros.js';
import { Lista } from './components/Lista.jsx';
import { ProveedorLista } from './context/contextoLista.jsx';

function App() {
    const { consultas, obtenerConsultas } = useConsultas();
    const { filtrarConsultas } = useFiltros();

    const consultasFiltradas = filtrarConsultas(consultas);

    return (
        <ProveedorLista>
            <Header />
            <Lista />
            <Consultas consultas={consultasFiltradas} listaConsul={obtenerConsultas} />
        </ProveedorLista>
    );
}

export default App;

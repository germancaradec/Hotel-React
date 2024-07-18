import React from 'react';
import useConsultas from './hooks/useConsultas';
import { Consultas } from './components/Consultas.jsx';
import { Header } from './components/Header.jsx';
import { useFiltros } from './hooks/useFiltros.js';
import { Lista } from './components/Lista.jsx';
import { ProveedorLista } from './context/contextoLista.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BarraNav from './components/barraNav/BarraNav';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const { consultas, obtenerConsultas } = useConsultas();
    const { filtrarConsultas } = useFiltros();

    const consultasFiltradas = filtrarConsultas(consultas);

    return (
        <BrowserRouter>
            <BarraNav/>
            <ProveedorLista className='container my-4'>
                <Header />
                <Lista />
                <Consultas consultas={consultasFiltradas} listaConsul={obtenerConsultas} />
            </ProveedorLista>
        </BrowserRouter>
    );
}

export default App;

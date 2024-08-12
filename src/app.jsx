import React from 'react';
import useConsultas from './hooks/useConsultas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
//Componentes
import BarraNav from './components/barraNav/BarraNav';
import { Consultas } from './components/Consultas.jsx';
import FormConsulta from './components/FormConsulta.jsx';
//Hooks
import { useFiltros } from './hooks/useFiltros.js';
//Contexto
import { ProveedorLista } from './context/contextoLista.jsx';


function App() {
    const { consultas, obtenerConsultas } = useConsultas();
    const { filtrarConsultas } = useFiltros();

    const consultasFiltradas = filtrarConsultas(consultas);

    return (
        <BrowserRouter>
            <BarraNav/>
            <ProveedorLista className='container my-4'>
                <div className='container my-4'>
                    <Routes>
                        <Route path='/' element={<Consultas consultas={consultasFiltradas} listaConsul={obtenerConsultas} /> } />
                        <Route path='/formConsulta' element={<FormConsulta />} />
                        <Route path='/modificarConsulta/:id' element={<FormConsulta />} />
                    </Routes>
                </div>
            </ProveedorLista>
        </BrowserRouter>
    );
}

export default App;

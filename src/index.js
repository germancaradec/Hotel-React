import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Componentes:
import BarraNav from './components/barraNav/BarraNav';
import ListarConsulta from './components/consulta/ListarConsulta';
import FormConsulta from './components/consulta/FormConsulta';




import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <BarraNav/>
    <div className='container my-4'>
      <Routes>
        <Route exact path='/' Component={ListarConsulta} />
        <Route path='/formConsulta' Component={FormConsulta} />
        <Route path='/modificarConsulta/:id' Component={FormConsulta} />
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

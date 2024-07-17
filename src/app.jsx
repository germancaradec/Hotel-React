import { BrowserRouter, Route, Routes } from 'react-router-dom';

//componentes
import BarraNav from './components/barraNav/BarraNav';
import ListarConsulta from './components/consulta/ListarConsulta';
import FormConsulta from './components/consulta/FormConsulta';


function App () {

        return (
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

        )
    }
    
    export default App
import { FiltrosConsultas } from './Filtros.jsx'
import './Header.css';
import { Lista } from './Lista.jsx';

export function Header () {
    return (
        <header className='container1'>
            <h1 className='h1'>Consultas</h1>
            <div className='container2'>
                <FiltrosConsultas />
                <Lista  className='Lista' />
            </div>
        </header>
    )
}
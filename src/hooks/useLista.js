import { useContext } from 'react';
import { ContextoLista } from '../context/contextoLista.jsx';

export const useLista = () => {
    const context = useContext(ContextoLista);

    if (context === undefined) {
        throw new Error('useLista must be used within a ProveedorLista');
    }

    return context;
};

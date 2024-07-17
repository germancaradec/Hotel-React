import React, { createContext, useState } from 'react';

// Crear el contexto
export const ContextoFiltros = createContext();

// Proveedor de los filtros
export const ProveedorFiltros = ({ children }) => {
    // Estado inicial de los filtros
    const [filtros, setFiltros] = useState({
        apellido: '',
        nombre: ''
    });

    return (
        <ContextoFiltros.Provider value={{ filtros, setFiltros }}>
        {children}
        </ContextoFiltros.Provider>
    );
};

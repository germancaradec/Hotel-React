import React, { useState } from "react";

const FiltroConsultas = ({ consultasOriginales, setConsultas }) => {
    const [filtros, setFiltros] = useState({
        apellido: "",
        nombre: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFiltros({
            ...filtros,
            [name]: value
        });
    };

    const filtrarConsultas = () => {
        if (filtros.apellido === "" && filtros.nombre === "") {
            setConsultas(consultasOriginales); // Mostrar todas las consultas si los filtros están vacíos
        } else {
            const consultasFiltradas = consultasOriginales.filter((consulta) =>
                consulta.apellido.toLowerCase().includes(filtros.apellido.toLowerCase())
            ).filter((consulta) =>
                consulta.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())
            );
            setConsultas(consultasFiltradas);
        }
    };

    return (
            <div className="row mb-3">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Filtrar por Apellido"
                        name="apellido"
                        value={filtros.apellido}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Filtrar por Nombre"
                        name="nombre"
                        value={filtros.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col">
                    <button className="btn btn-primary" onClick={filtrarConsultas}>
                        Aplicar Filtros
                    </button>
                </div>
            </div>
    );
};

export default FiltroConsultas;

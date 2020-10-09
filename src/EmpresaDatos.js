import './App.css';
import "antd/dist/antd.css";
import React from 'react';

const datos = [
    {
        nombre: 'POKEMON SHOP',
        ciudad: 'Caazapa',
        pais: 'Paraguay',
    },
];

function EmpresaDatos() {
    return (
        <div>
            {datos.map(dato => {
                return (
                    <div>
                        <p>{dato.ciudad} - {dato.pais} </p>
                    </div>
                )
            })}
        </div>
    )
}

export default EmpresaDatos;
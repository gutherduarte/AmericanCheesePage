import React from 'react'

export const ListadoInventario = (props) => {
    const {
        data
    } = props;
    return (
        <div className="listado-inventario">
            <ul>
                {data && data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
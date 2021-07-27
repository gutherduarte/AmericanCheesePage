import React, {useState, useEffect} from 'react'

import {Listado} from './../componentes/Listado'

export const ListadoContenedor = () => {

    const data = [
        {name: 'Nicho'}
    ]

    return (
        <Listado
            data={data}
        />
    )
}
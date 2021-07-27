import React from 'react'

import {Header} from './Header'
import {Footer} from './Footer'

export const Theme = ({children}) => {
    return (
        <>
            <Header />
            <div className="contenedor">
                {children}
            </div>
            <Footer />
        </>
    )
}
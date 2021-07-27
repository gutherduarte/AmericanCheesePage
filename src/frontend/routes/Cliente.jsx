import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import { Inicio } from './../pages/Inicio'

export const Cliente = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Inicio} />
            </Switch>
        </Router>
    )

}
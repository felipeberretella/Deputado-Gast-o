import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Deputados from './pages/deputados/index'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/deputados" component={Deputados}/>
            </Switch>
        </BrowserRouter>
    )
}
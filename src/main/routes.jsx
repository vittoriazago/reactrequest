import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Importar from './importar'
import Requisicao from '../requisicao/requisicao'
import Exportar from './exportar'
import Salvar from './salvar'
import Configuracoes from '../configuracoes/configuracoes'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Importar} />
            <Route path='requisicao' component={Requisicao} />
            <Route path='configuracoes' component={Configuracoes} />
            <Route path='salvar' component={Salvar} />
            <Route path='exportar' component={Exportar} />
            <Route path='importar' component={Importar} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)
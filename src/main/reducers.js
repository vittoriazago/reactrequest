import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'
import requisicaoReducer from '../requisicao/requisicaoReducer';
import configuracoesReducer from '../configuracoes/configuracoesReducer';

const rootReducer = combineReducers({
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
    requisicao: requisicaoReducer,
    configuracoes: configuracoesReducer
})

export default rootReducer
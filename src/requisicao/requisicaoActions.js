import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:8484/gateway'
const INITIAL_VALUES = {responsebody: '', method: 'GET'}

export function getList() {
    const request = axios.get(`${BASE_URL}/`)
    return {
        type: 'REQUISICOES',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/${id}`, values)
            .then(resp => {
                console.log(resp)
                values.responseBody = resp.data.body
                dispatch(initialize('requisicaoForm', values))
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
                initialize('requisicaoForm', e.response)

            })
    }
}

export function showUpdate(requisicao) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('requisicaoForm', requisicao)
    ]
}

export function showDelete(requisicao) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('requisicaoForm', requisicao)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        //getList(),
        //initialize('requisicaoForm', INITIAL_VALUES)
    ]
}
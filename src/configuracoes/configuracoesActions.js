import axios from 'axios'

const BASE_URL = 'http://localhost:8484/gateway'
const INITIAL_VALUES = {responsebody: '', method: 'GET'}

export function getList() {
    const request = axios.get(`${BASE_URL}/`)
    return {
        type: 'CONFIGURACOES',
        payload: request
    }
}

const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CONFIGURACOES':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}
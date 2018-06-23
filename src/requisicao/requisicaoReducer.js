const INITIAL_STATE = {summary: {path:'',host:'',method:'',resultBody:''}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REQUISICAO':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}
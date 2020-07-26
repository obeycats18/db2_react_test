import {InfoActionsT} from '../thunks/infoThunks'
import {InfoT} from "../../@types/response.types";

type InitialStateT = {
    info: InfoT
    loading: boolean
}

const _initialState: InitialStateT = {
    info: [],
    loading: false
}

const _infoReducer = (state: InitialStateT = _initialState, action: InfoActionsT): InitialStateT => {
    switch (action.type) {
        case 'GET_INFO': return {
            ...state,
            info: action.info
        }
        case 'SET_LOADING': return {
            ...state,
            loading: action.loading
        }
        default: return state
    }
}

export default _infoReducer

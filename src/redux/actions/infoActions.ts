import {InfoT} from "../../@types/response.types";

const GET_INFO = 'GET_INFO'
const SORT_INFO = 'SORT_INFO'
const SET_LOADING = 'SET_LOADING'

const _getInfoAction = (info: InfoT) => ({type: GET_INFO, info} as const)
const _sortArrayAction = () => ({type: SORT_INFO} as const)
const _setLoadingAction = (loading: boolean) => ({type: SET_LOADING, loading} as const)

export default {
    getInfoAction: _getInfoAction,
    sortArrayAction: _sortArrayAction,
    setLoadingAction: _setLoadingAction
}

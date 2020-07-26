import {infoActions} from "../actions";
import {Dispatch} from "redux";
import {InferType} from "../../@types/actions.types";
import {swAPI} from "../../api";
import {InfoT} from "../../@types/response.types";

export type InfoTypeT = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles'

const {
    getInfoAction,
    setLoadingAction
} = infoActions

export type InfoActionsT = ReturnType<InferType<typeof infoActions>>

const _getInfoThunk = (type: InfoTypeT) => {
    return async (dispath: Dispatch<InfoActionsT>) => {
        dispath(setLoadingAction(true))
        const info: InfoT = await swAPI.getInfo(type)
        if(info) dispath(setLoadingAction(false))
        dispath(getInfoAction(info))
    }
}

const _searchInfoThunk = (type: InfoTypeT, query: string) => {
    return async (dispath: Dispatch<InfoActionsT>) => {
        const info: InfoT = await swAPI.search(type, query)
        dispath(getInfoAction(info))
    }
}
const _sortInfoThunk = (type: InfoTypeT) => {
    return async (dispath: Dispatch<InfoActionsT>) => {
        const info: any = await swAPI.getInfo(type)
        let _sortedInfo: any
        if(type === 'films') {
            _sortedInfo = info.sort( (a:any, b:any) => {
                if( a.title.toLowerCase() < b.title.toLowerCase()) return -1
                else if( a.title.toLowerCase() > b.title.toLowerCase() ) return 1
                return 0
            } )
        }else {
            _sortedInfo = info.sort( (a:any, b:any) => {
                if( a.name.toLowerCase() < b.name.toLowerCase()) return -1
                else if( a.name.toLowerCase() > b.name.toLowerCase() ) return 1
                return 0
            } )
        }
        dispath(getInfoAction(_sortedInfo))
    }
}

export default {
    getInfoThunk: _getInfoThunk,
    searchInfoThunk: _searchInfoThunk,
    sortInfoThunk: _sortInfoThunk
}

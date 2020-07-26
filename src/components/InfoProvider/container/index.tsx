import React, {useEffect} from "react";
import {connect, ConnectedProps} from 'react-redux'
import {infoThunk} from "../../../redux/thunks";
import {GlobalStateT} from "../../../redux/store";

import {Empty, Spin} from 'antd';

import {InfoTypeT} from "../../../redux/thunks/infoThunks";
import {RenderComponent} from "../../Tabs";

import './styles.css'

const {getInfoThunk} = infoThunk

type _FCProps = ConnectedProps<typeof _connector> & InfoOwnPropsT

type InfoOwnPropsT = {
    infoType: InfoTypeT,
    render: RenderComponent,
    loading: boolean
}

const _mapStateToProps = ({info}: GlobalStateT) => ({
    info: info.info,
    loading: info.loading
})

const _InfoProvider: React.FC<InfoOwnPropsT & _FCProps> = (
    {
        info,
        getInfoThunk,
        infoType,
        render,
        loading
    }) => {

    useEffect(() => {
        getInfoThunk(infoType)
    }, [])

    return (
        (!loading)
            ?
                (info && info.length)
                    ? <div className='films-container'>
                        {render(info)}
                    </div>
                    : <Empty description='Поиск не дал результатов'/>
            : <Spin/>

    )
}

const _connector = connect(_mapStateToProps, {getInfoThunk})

export default _connector(_InfoProvider)


import React, {useState} from "react";
import {Col, Input, Row} from "antd";

import {Select} from '../index';

import {OptionT} from "../../@types/select.types";
import {useDispatch, useSelector} from "react-redux";
import {infoThunk} from "../../redux/thunks";
import {getTypeByKey} from "../../utils/getInfoType";
import {GlobalStateT} from "../../redux/store";

const {Search} = Input
const {searchInfoThunk, sortInfoThunk} = infoThunk

type TopBarPropsT = {
    activeKey: string
}

const sorts: OptionT[] = [
    {value: 'by_name', title: 'По названию'},
]

const TopBar: React.FC<TopBarPropsT> = ({activeKey}) => {

    const dispatch = useDispatch()
    const info = useSelector(({info}: GlobalStateT) => info.info)

    const [typingTimeout, setTypingTimeout] = useState<any>()
    const [searchValue, setSearchValue] = useState('')

    const _handleOptionSelected = () => {
        dispatch(sortInfoThunk(getTypeByKey(activeKey)))
    }

    const _handleSearch = (value: string) => dispatch(searchInfoThunk(getTypeByKey(activeKey), value))

    const _handleInputChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        if(typingTimeout) clearTimeout(typingTimeout)

        setSearchValue(value)
        setTypingTimeout(setTimeout( () => {
            _handleSearch(value)
        }, 200))
    }

    return (
        <Row align='middle'>
            <Col span={10}>
                <Search
                    placeholder="Начните вводить название фильма..."
                    onSearch={value => _handleSearch(value)}
                    onChange={_handleInputChange}
                    value={searchValue}

                />
            </Col>
            <Col span={4} offset={2}>
                <Select disabled={!info.length} options={sorts} defaultValue={sorts[0].title} onSelect={_handleOptionSelected}/>
            </Col>
        </Row>
    )
}

export default TopBar

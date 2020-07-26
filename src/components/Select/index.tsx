import React from 'react'
import {Select} from "antd";
import {OptionT} from "../../@types/select.types";
import {LabeledValue} from "antd/es/select";

const {Option} = Select

type SelectT = {
    options: OptionT[],
    defaultValue?: string,
    onSelect: (value: string | number | LabeledValue) => void
    disabled: boolean
}


const SelectCommon: React.FC<SelectT> = ({options, defaultValue, onSelect, disabled}) => {
    return (
        <Select
            style={{width: '100%'}}
            showSearch
            placeholder={defaultValue}
            onSelect={onSelect}
            disabled={disabled}
        >
            {
                options.map( (option, index) => <Option key={index} value={option.value}>{option.title}</Option> )
            }
        </Select>
    )
}

export default SelectCommon

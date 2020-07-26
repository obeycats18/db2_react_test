import React, {useEffect, useState} from "react";

import {Film, Vehicles} from "../../@types/response.types";

import './styles.css'
import {renderTables, tablesStr} from "../../utils/createTables";
import {swAPI} from "../../api";
import {useInfoItem} from "../../hooks/useInfoItem";

type _VehicleItemPropsT = {
    info: Vehicles
}

const VehicleItem: React.FC<_VehicleItemPropsT> = ({info}) => {

    const [visible, setVisible] = useState<boolean>(false)
    const [films, setFilms] = useState<Film[]>([])

    useEffect(() => {
        const res = async () => {
            if (info) {
                setFilms(await swAPI.getInfoArray(info.films))
            }
        }
        if (visible) res()
    }, [visible])


    const _thumbRender = () => {
        return (
            <>
                <p><strong>Модель: </strong> {info.model}</p>
                <p><strong>Производитель: </strong> {info.manufacturer}</p>
                <p><strong>Грузоподъемность: </strong> {info.cargo_capacity}</p>
            </>
        )
    }

    const _detailRender = () => {
        return (
            <div>
                <p><strong>Модель: </strong> {info.model}</p>
                <p><strong>Производитель: </strong> {info.manufacturer}</p>
                <p><strong>Грузоподъемность: </strong> {info.cargo_capacity}</p>
                <p><strong>Стоимость в кредитах: </strong> {info.cost_in_credits}</p>
                <p><strong>Длина: </strong> {info.length}</p>
                <p><strong>Максимальная скорость: </strong> {info.max_atmosphering_speed}</p>
                <p><strong>Пассажиры: </strong> {info.passengers}</p>
                {
                    tablesStr(undefined, undefined, undefined, undefined, undefined, films).map((table) => renderTables(table))
                }
            </div>
        )
    }

    return useInfoItem(
        {
            thumbRender: _thumbRender,
            detailRender: _detailRender,
            visible,
            setVisible,
            header: info.name
        }
    )

}

export default VehicleItem

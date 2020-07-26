import React, {useEffect, useState} from "react";

import {Film, Planet} from "../../@types/response.types";

import './styles.css'
import {swAPI} from "../../api";
import {renderTables, tablesStr} from "../../utils/createTables";
import {useInfoItem} from "../../hooks/useInfoItem";

type _PlanetsItemPropsT = {
    info: Planet
}

const PlanetsItem: React.FC<_PlanetsItemPropsT> = ({info}) => {

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
                <p><strong>Климат: </strong> {info.climate}</p>
                <p><strong>Диаматр: </strong> {info.diameter}</p>
                <p><strong>Местность: </strong> {info.terrain}</p>
                <p><strong>Гравитация: </strong> {info.gravity}</p>
            </>
        )
    }

    const _detailRender = () => {
        return (
            <div>
                <p><strong>Климат: </strong> {info.climate}</p>
                <p><strong>Диаматр: </strong> {info.diameter}</p>
                <p><strong>Местность: </strong> {info.terrain}</p>
                <p><strong>Гравитация: </strong> {info.gravity}</p>
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

export default PlanetsItem

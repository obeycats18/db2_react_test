import React, {useEffect, useState} from "react";

import {Film, People, Species} from "../../@types/response.types";

import './styles.css'
import {swAPI} from "../../api";
import {renderTables, tablesStr} from "../../utils/createTables";
import {useInfoItem} from "../../hooks/useInfoItem";

type _SpeciesItemPropsT = {
    info: Species
}

const SpeciesItem: React.FC<_SpeciesItemPropsT> = ({info}) => {

    const [visible, setVisible] = useState<boolean>(false)
    const [films, setFilms] = useState<Film[]>([])
    const [characters, setCharacters] = useState<People[]>([])

    useEffect(() => {
        const res = async () => {
            if (info) {
                setFilms(await swAPI.getInfoArray(info.films))
                setCharacters(await swAPI.getInfoArray(info.people))

            }
        }
        if (visible) res()
    }, [visible])

    const _thumbRender = () => {
        return (
            <>
                <p><strong>Классификация: </strong> {info.classification}</p>
                <p><strong>Обозначение: </strong> {info.designation}</p>
                <p><strong>Язык: </strong> {info.language}</p>
                <p><strong>Цвет кожи: </strong> {info.skin_colors}</p>
            </>
        )
    }

    const _detailRender = () => {
        return (
            <div>
                <p><strong>Классификация: </strong> {info.classification}</p>
                <p><strong>Обозначение: </strong> {info.designation}</p>
                <p><strong>Язык: </strong> {info.language}</p>
                <p><strong>Цвет кожи: </strong> {info.skin_colors}</p>
                <p><strong>Средний рост: </strong> {info.average_height}</p>
                <p><strong>Средная продолжительность жизни: </strong> {info.average_lifespan}</p>
                <p><strong>Дата создания: </strong> {info.created}</p>
                <p><strong>Цвета глаз: </strong> {info.eye_colors}</p>
                <p><strong>Цвета волос: </strong> {info.hair_colors}</p>
                {
                    tablesStr(undefined, characters, undefined, undefined, undefined, films).map((table) => renderTables(table))
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

export default SpeciesItem

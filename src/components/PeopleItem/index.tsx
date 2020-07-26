import React, {useEffect, useState} from "react";

import {Film, People, Species, Starships, Vehicles} from "../../@types/response.types";

import './styles.css'
import {swAPI} from "../../api";
import {renderTables, tablesStr} from "../../utils/createTables";
import {useInfoItem} from "../../hooks/useInfoItem";

type _PeopleItemPropsT = {
    info: People
}

const PeopleItem: React.FC<_PeopleItemPropsT> = ({info}) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [species, setSpecies] = useState<Species[]>([])
    const [starships, setStarships] = useState<Starships[]>([])
    const [vehicles, setVehicles] = useState<Vehicles[]>([])
    const [films, setFilms] = useState<Film[]>([])

    useEffect(() => {
        const res = async () => {
            if(info) {
                setSpecies(await swAPI.getInfoArray(info.species))
                setStarships(await swAPI.getInfoArray(info.starships))
                setVehicles(await swAPI.getInfoArray(info.vehicles))
                setFilms(await swAPI.getInfoArray(info.films))
            }
        }
        if(visible) res()
    }, [visible])

    const _thumbRender = () => {
        return (
            <>
                <p><strong>Пол: </strong> {info.gender}</p>
                <p><strong>Цвет глаз: </strong> {info.eye_color}</p>
                <p><strong>Цвет волос: </strong> {info.hair_color}</p>
                <p><strong>Рост: </strong> {info.height}</p>
                <p><strong>Вес: </strong> {info.mass}</p>
            </>
        )
    }

    const _detailRender = () => {
        return (
            <div>
                <p><strong>Пол: </strong> {info.gender}</p>
                <p><strong>Цвет глаз: </strong> {info.eye_color}</p>
                <p><strong>Цвет волос: </strong> {info.hair_color}</p>
                <p><strong>Рост: </strong> {info.height}</p>
                <p><strong>Вес: </strong> {info.mass}</p>
                {
                    tablesStr(undefined, undefined, species, starships, vehicles, films).map((table) => renderTables(table))
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

export default PeopleItem

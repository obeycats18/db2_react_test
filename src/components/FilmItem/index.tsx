import React, {useEffect, useState} from "react";

import {Film, People, Planet, Species, Starships, Vehicles} from "../../@types/response.types";

import './styles.css'
import {swAPI} from "../../api";
import {renderTables, tablesStr} from "../../utils/createTables";
import {useInfoItem} from "../../hooks/useInfoItem";

type _FilmItemPropsT = {
    info: Film
}

const FilmItem: React.FC<_FilmItemPropsT> = ({info}) => {
    const [visible, setVisible] = useState<boolean>(false)

    const [characters, setCharacters] = useState<People[]>([])
    const [species, setSpecies] = useState<Species[]>([])
    const [starships, setStarships] = useState<Starships[]>([])
    const [vehicles, setVehicles] = useState<Vehicles[]>([])
    const [planets, setPlanet] = useState<Planet[]>([])

    useEffect(() => {
        const res = async () => {
            setCharacters(await swAPI.getInfoArray(info.characters))
            setSpecies(await swAPI.getInfoArray(info.species))
            setStarships(await swAPI.getInfoArray(info.starships))
            setVehicles(await swAPI.getInfoArray(info.vehicles))
            setPlanet(await swAPI.getInfoArray(info.planets))
        }
        if (visible) res()
    }, [visible])

    const _thumbRender = () => {
        return (
            <>
                <p><strong>Режисер: </strong> {info.director}</p>
                <p><strong>Продюсер: </strong> {info.producer}</p>
                <p><strong>Дата выхода: </strong> {info.release_date}</p>
            </>
        )
    }

    const _detailRender = () => {
        return (
            <div>
                <p><strong>Режисер: </strong> {info.director}</p>
                <p><strong>Продюсер: </strong> {info.producer}</p>
                <p><strong>Дата выхода: </strong> {info.release_date}</p>
                <p><strong>Номер эпизода: </strong> {info.episode_id}</p>
                <p><strong>Начальный текст: </strong> {info.opening_crawl}</p>
                {
                    tablesStr(planets, characters, species, starships, vehicles).map(table => renderTables(table))
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
            header: info.title
        }
    )
}

export default FilmItem

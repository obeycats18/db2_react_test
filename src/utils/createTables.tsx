import {Column} from "../components/Table";
import {Film, People, Planet, Species, Starships, Vehicles} from "../@types/response.types";
import {Table} from "../components";
import React from "react";

const characterColumns: Column[] = [
    {title: 'Имя', dataIndex: 'name', key: 'name'},
    {title: 'Год рождения', dataIndex: 'birth_year', key: 'birth_year'},
    {title: 'Пол', dataIndex: 'gender', key: 'gender'},
]
const planetsColumns: Column[] = [
    {title: 'Имя', dataIndex: 'name', key: 'name'},
    {title: 'Климат', dataIndex: 'climate', key: 'climate'},
    {title: 'Диаметр', dataIndex: 'diameter', key: 'diameter'},
]
const starshipsColumns: Column[] = [
    {title: 'Имя', dataIndex: 'name', key: 'name'},
    {title: 'Модель', dataIndex: 'model', key: 'model'},
    {title: 'Класс', dataIndex: 'starship_class', key: 'starship_class'},
]
const speciesColumns: Column[] = [
    {title: 'Имя', dataIndex: 'name', key: 'name'},
    {title: 'Язык', dataIndex: 'language', key: 'language'},
    {title: 'Цвет кожи', dataIndex: 'skin_colors', key: 'skin_colors'},
]
const vehiclesColumns: Column[] = [
    {title: 'Имя', dataIndex: 'name', key: 'name'},
    {title: 'Модель', dataIndex: 'model', key: 'model'},
    {title: 'Производитель', dataIndex: 'manufacturer', key: 'manufacturer'},
]
const filmsColumns: Column[] = [
    {title: 'Название', dataIndex: 'title', key: 'title'},
    {title: 'Режисер', dataIndex: 'director', key: 'director'},
    {title: 'Дата выхода', dataIndex: 'release_date', key: 'release_date'},
]

type _TablesT = {
    title: string,
    columns: Column[],
    dataSource: any
}

export const tablesStr = (
    planets?: Planet[],
    characters?: People[],
    species?: Species[],
    starships?: Starships[],
    vehicles?: Vehicles[],
    films?: Film[]
): _TablesT[] => {

    let _tableStructure: _TablesT[] = []

    if(planets) {
        _tableStructure.push({
            title: 'Планета',
            columns: planetsColumns,
            dataSource: planets.map( (_p, index) => ({key: index, name: _p.name, climate: _p.climate, diameter: _p.diameter}))
        })
    }
    if(characters){
        _tableStructure.push({
            title: 'Персонажи',
            columns: characterColumns,
            dataSource: characters.map( (_c, index) => ({key: index, name: _c.name, birth_year: _c.birth_year, gender: _c.gender}))
        })
    }
    if(species){
        _tableStructure.push({
            title: 'Виды персонажей',
            columns: speciesColumns,
            dataSource: species.map( (_sp, index) => ({key: index, name: _sp.name, language: _sp.language, skin_colors: _sp.skin_colors}))
        })
    }
    if(starships){
        _tableStructure.push({
            title: 'Корабли',
            columns: starshipsColumns,
            dataSource: starships.map( (_st, index) => ({key: index, name: _st.name, model: _st.model, starship_class: _st.starship_class}))
        })
    }
    if(vehicles){
        _tableStructure.push({
            title: 'Транспортные средства',
            columns: vehiclesColumns,
            dataSource: vehicles.map( (_v, index) => ({key: index, name: _v.name, model: _v.model, manufacturer: _v.manufacturer}))
        })
    }
    if(films){
        _tableStructure.push({
            title: 'Фильмы',
            columns: filmsColumns,
            dataSource: films.map( (_f, index) => ({key: index, title: _f.title, director: _f.director, release_date: _f.release_date}))
        })
    }

    return _tableStructure
}

export const renderTables = ({title, columns, dataSource}: _TablesT) => {
    return (
        <div key={title} style={{marginTop: '24px'}}>
            <h2 style={{marginBottom: '10px'}}>{title}</h2>
            <Table
                columns={columns}
                dataSource={dataSource}
            />
        </div>
    )
}

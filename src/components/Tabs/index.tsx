import React from "react";
import {useDispatch} from "react-redux";

import {Tabs} from 'antd';
import {
    FilmItem,
    InfoProvider,
    PeopleItem,
    PlanetsItem,
    SpeciesItem, StarshipItem,
    VehicleItem,

} from "../index";
import {InfoTypeT} from "../../redux/thunks/infoThunks";
import {Film, People, Planet, Species, Starships, Vehicles} from "../../@types/response.types";
import {infoThunk} from "../../redux/thunks";
import {getTypeByKey} from "../../utils/getInfoType";

const {TabPane} = Tabs;

const {getInfoThunk} = infoThunk

type TabsPropsT = {
    handleTabChange: (tab: string) => any
}

export type RenderComponent = (info: any) => React.ReactNode

type TabT = {
    type: InfoTypeT,
    title: string,
    provider: React.ReactNode,
}


const tabs: TabT[] = [
    {
        type: 'films',
        title: 'Фильмы',
        provider: <InfoProvider
            render={(info: Film[]) => (info.map((_info, index: number) => <FilmItem key={index} info={_info}/>))}
            infoType='films'
        />
    },
    {
        type: 'people',
        title: 'Персонажи',
        provider: <InfoProvider
            render={(info: People[]) => info.map((_info, index: number) => <PeopleItem key={index} info={_info}/>)}
            infoType='people'
        />
    },
    {
        type: 'planets',
        title: 'Планеты',
        provider: <InfoProvider
            render={(info: Planet[]) => info.map((_info, index: number) => <PlanetsItem key={index} info={_info}/>)}
            infoType='planets'
        />
    },
    {
        type: 'starships',
        title: 'Корабли',
        provider: <InfoProvider
            render={(info: Starships[]) => info.map((_info, index: number) => <StarshipItem key={index} info={_info}/>)}
            infoType='starships'
        />
    },
    {
        type: 'species',
        title: 'Виды персонажей',
        provider: <InfoProvider
            render={(info: Species[]) => info.map((_info, index: number) => <SpeciesItem key={index} info={_info}/>)}
            infoType='species'
        />
    },
    {
        type: 'vehicles',
        title: 'Транспортные средства',
        provider: <InfoProvider
            render={(info: Vehicles[]) => info.map((_info, index: number) => <VehicleItem key={index} info={_info}/>)}
            infoType='vehicles'
        />
    },
]

const _Tabs: React.FC<TabsPropsT> = ({handleTabChange}) => {

    const dispatch = useDispatch()

    return (
        <Tabs
            onChange={(key) => handleTabChange(key)}
            defaultActiveKey="0"
            style={{marginTop: '24px'}}
            onTabClick={(key) => {
                dispatch(getInfoThunk(getTypeByKey(key)))
            }}
        >
            {
                tabs.map((tab, index) => (
                    <TabPane tab={tab.title} key={index}>
                        {tab.provider}
                    </TabPane>
                ))
            }

        </Tabs>
    )
}

export default _Tabs

import React from "react";
import {Table} from "antd";

export type Column = {
    title: string,
    dataIndex: string,
    key: string,
}

type TablesPropsT = {
    columns: Column[],
    dataSource: Array<any>
}

const _Table: React.FC<TablesPropsT> = ({columns, dataSource}) => {


    return <Table columns={columns} dataSource={dataSource} />
}

export default _Table

import React, {useState} from 'react';

import {Layout} from 'antd';
import {Tabs, TopBar} from './components'

import './App.css';

import logo from './assets/logo.svg'

const {Header, Footer, Content} = Layout;

function App() {

    const [activeTab, setActiveTab] = useState<string>('0')

    const handleTabChange = (tab:string) => setActiveTab(tab)

    return (
        <Layout>
            <Header>
                <a href="/"><img src={logo} alt="DB2 Limited"/></a>
            </Header>
            <Content style={{padding: '20px 50px'}}>
                <TopBar activeKey={activeTab}/>
                <Tabs handleTabChange={handleTabChange}/>
            </Content>
            <Footer>Powered by kapishdima@gmail.com</Footer>
        </Layout>
    );
}

export default App;

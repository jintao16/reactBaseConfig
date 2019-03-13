import React from 'react'
import { Layout } from 'antd';
import '../styles/common.css'
import MainMenu from '../../components/menu'

const { Header, Content, } = Layout;

export default class Main extends React.Component {
    render() {
        return (
            <Layout className="main-layout">
                <Header className="main-header">
                    <MainMenu />
                </Header>
                <Content className="main-content">
                  {this.props.children}
                </Content>
            </Layout>
        )
    }
}




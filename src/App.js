import './App.css';
import "antd/dist/antd.css";
import React from 'react';
import { Layout, Menu, Row, Col, Space, Button, message} from 'antd';
import {SearchOutlined } from '@ant-design/icons';
import PokemonList from './PokemonList.js'
import EmpresaDatos from './EmpresaDatos.js'

const { Header, Content, Footer } = Layout;

const registro = () => {
  message
    .loading('En proceso..', 2.5)
    .then(() => message.success('Se ha registrado correctamente', 2.0))
};

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Row>
          <Col span={16}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">HOME</Menu.Item>
              <Menu.Item key="2">CATALOGO</Menu.Item>
              <Menu.Item key="3">ABOUT US</Menu.Item>
            </Menu>
          </Col>
          <Col span={8} align='right'>
            <Space>
              <Button icon={<SearchOutlined />} > Buscar...</Button>
              <Button className="boton" onClick={registro}> Registrarse</Button>
              <Button className="boton" onClick={() => alert("Usted ha Iniciado Sesión")} > Iniciar sesión</Button>
            </Space>
          </Col>
        </Row>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1><b>CATALOGO DE POKEMONES</b></h1><br></br>
          <PokemonList />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Created by Zileidy Argüello Barreto - TIE
        <EmpresaDatos />
      </Footer>
    </Layout>
  )
}
export default App;
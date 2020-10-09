import './App.css';
import "antd/dist/antd.css";
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Divider, Space, Button } from 'antd';
import axios from 'axios';
import Meta from 'antd/lib/card/Meta';
import Tooltip from 'antd/lib/tooltip';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

function PokemonList(props) {
    const [cards, setCards] = useState([]);

    const getCards = () => {
        axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic')
            .then(res => {
                setCards(res.data.cards);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getCards();
    }, [])

    const deleteCards = id => {
        axios.delete(`https://api.pokemontcg.io/v1/cards?subtype=Basic/${id}`)
            .then(res => {
                alert(`EL producto con el ID ${id} ha sido borrado correctamente`);
                getCards();
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <div>
                <Row gutter={[16, 16]}>
                    {cards.map(card => {
                        return (
                            <Col span={6}>
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt='imagen'
                                            src={card.imageUrl}
                                        />
                                    }
                                >
                                    <Meta
                                        title={card.name}
                                        description={card.artist}
                                        align='center'
                                    />
                                    <Divider />

                                    <ul>
                                        <li>{'Tipo: ' + card.types}</li>
                                        <li>{'Supertipo: ' + card.supertype}</li>
                                        <li>{'Subtipo: ' + card.subtype}</li>
                                    </ul>
                                    <h3>Más información: </h3>
                                    <p>{'Rarity: ' + card.rarity}</p>
                                    <p>{'Serie: ' + card.series}</p>
                                    <div align= 'right'>
                                        <Space>
                                            <Tooltip title="Edit">
                                                <Button
                                                    type="primary"
                                                    shape="circle"
                                                    onClick={() => props.history.push(`${props.match.url}/edit/${card.id}`)}
                                                    icon={<EditFilled />} />
                                            </Tooltip>
                                            <Tooltip title="Delete">
                                                <Button
                                                    type="danger"
                                                    shape="circle"
                                                    onClick={() => deleteCards(card.id)}
                                                    icon={<DeleteFilled />} />
                                            </Tooltip>
                                        </Space>
                                    </div>
                                </Card>
                                <div></div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>

        // <div className="App">
        //   <Layout className="layout">
        //     <Header>
        //       <p>HOLA</p>
        //     </Header>

        //     <Content style={{ padding: '0 50px' }}>
        //       <div className="site-layout-content">
        //         <h1><b>LISTA DE POKEMONES</b></h1>
        //         {
        //         cards.map(card => {
        //           return (
        //             <div>{cards.name}</div>
        //           )
        //         })
        //         }

        //         {/* <div align={'right'}>
        //           <Space>
        //             <Tooltip title="Nuevo">
        //               <Button
        //                 type="primary"
        //                 shape="round"
        //                 onClick={() => props.history.push(`${props.match.url}/new`)}
        //                 icon={<PlusOutlined />}>Nuevo Producto
        //                     </Button>
        //             </Tooltip>
        //             <Tooltip title="Búsqueda">
        //               <Button
        //                 type="primary"
        //                 shape="round"
        //                 icon={<SearchOutlined />}
        //                 onClick={success}
        //               >
        //                 Buscar producto
        //                     </Button>
        //             </Tooltip>
        //           </Space>
        //         </div> */}
        //         <br></br>
        //         {/* <div>
        //           <Row gutter={[16, 16]}>
        //             {cards.map(card => {
        //               return (
        //                 <Col span={6}>
        //                   <div style={{ height: 450 }}>
        //                     <Card
        //                       style={{ width: 300 }}
        //                       cover={
        //                         <img
        //                           alt='imagen'
        //                           src={card.imageUrl}
        //                         // style={{ height: 200 }}
        //                         />
        //                       }
        //                     >
        //                       <Meta
        //                         title={card.name}
        //                         description={card.supertype}
        //                       /><br></br>
        //                       {/* <div align='center'>
        //                         <br></br>
        //                         <Space>
        //                           <Tooltip title="Edit">
        //                             <Button
        //                               type="primary"
        //                               shape="circle"
        //                               onClick={() => props.history.push(`${props.match.url}/edit/${card.id}`)}
        //                               icon={<EditFilled />} />
        //                           </Tooltip>
        //                           <Tooltip title="Delete">
        //                             <Button
        //                               type="danger"
        //                               shape="circle"
        //                               onClick={() => deleteCards(card.id)}
        //                               icon={<DeleteFilled />} />
        //                           </Tooltip>
        //                         </Space>
        //                       </div> 
        //                     </Card>
        //                   </div>
        //                   <br></br>
        //                   <br></br>
        //                   <br></br>
        //                 </Col>
        //               )
        //             })}
        //           </Row>
        //         </div> */}
        //       </div>
        //     </Content>

        //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        //   </Layout>
        // </div>
    );
}
export default PokemonList;
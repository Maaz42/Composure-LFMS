import React, { useState } from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import type { MenuProps } from 'antd';
import { Button, Col,  Dropdown, Flex,  Row,Typography, Layout  } from 'antd';
import {MORE } from '@/constants/images';
import {  MenuOutlined } from '@ant-design/icons';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from './Container';


const { Header } = Layout;
const { Title } = Typography;

export default function FormBuilderAdd() {
    const topBoxStyle = {
        width: '100%',
        height: '65px',
    };


    const colStyle = {
        padding: '8px'
    };

    const [items, setItems] = useState<MenuProps['items']>([]);

    const navDropDown = [
        {
            key: '1',
            label: " Nav  1st menu item"
        },
        {
            key: '2',
            label: " Nav 2nd menu item"

        },
        {
            key: '3',
            label: " Nav 3rd menu item"
        },
    ];


    return (
        <>
            <Header style={{ padding: 0, background: 'white', borderBottom: '1px solid #eeeeee' }}>
                <Flex gap='middle' align='start' vertical className='mx-3'>
                    <Flex style={topBoxStyle} justify={'space-between'} align={'center'}>
                        <Title level={4}>Add Form Builder</Title>
                        <Flex justify={'flex-end'} align={'center'}>
                            <MenuOutlined className={styles.collapseMenu} style={{ marginRight: "5px" }} />
                            <Button className={styles.collapseTo} style={{ color: 'white', background: '#333793' }}>Create</Button>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => {
                                    e.preventDefault()
                                    setItems(navDropDown)
                                }}>
                                    <Title style={{ marginTop: '20px' }}><Image src={MORE} height={18} alt='' /></Title>
                                </a>
                            </Dropdown>
                        </Flex>
                    </Flex>
                </Flex>
            </Header>
            <Layout style={{
                height: 'calc(100vh - 120px)',
                background: 'white'
            }}>
               
                    <DndProvider backend={HTML5Backend}>
					<Container />
				</DndProvider>
                
            </Layout>
        </>
    )
}

import React, { useState } from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import type { MenuProps } from 'antd';
import { Avatar, Button, Col, Divider, Dropdown, Flex, Input, Row, Space, Typography, Layout, Upload } from 'antd';
import { CLOCK, FOLDER, INFO, MORE, PROFILE, SEND,PLUS_SOLID } from '@/constants/images';
import { UserOutlined, InboxOutlined, MenuOutlined } from '@ant-design/icons';
import CustomDropDown from '@/components/ReusableComponents/DropDown';




const { Header } = Layout;
const { Dragger } = Upload;
const { Title } = Typography;

const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onDrop({ e }: any) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export default function TicketDetail() {
    const topBoxStyle = {
        width: '100%',
        height: '65px',
    };

    const boxStyle = {
        height: '50px',
        borderBottom: '1px solid #eeeeee',
    };

    const cardStyle = {
        border: '1px solid rgb(223 223 223)',
        padding: '20px',
        backgroundColor: '#FAFAFA',
    };

    const cardTitleStyle = {
        fontSize: '18px',
        fontWeight: '600',
        color: '#000000',
        display: 'flex',
    };

    const cardTitleSmallStyle = {
        fontSize: '11px',
        fontWeight: '600',
        color: '#000000',
        display: 'flex',
    };

    const cardTitleSmall2Style = {
        fontSize: '11px',
        fontWeight: '600',
        color: '#000000',
        display: 'flex',
        marginTop: '12px'
    };

    const cardTitleSmall3Style = {
        fontSize: '11px',
        fontWeight: '600',
        color: '#9E9E9E',
        display: 'flex',
        marginTop: '12px'
    };

    const folderNameStyle = {
        fontSize: '11px',
        fontWeight: '600',
        color: '#000000',
        display: 'flex',
        marginTop: '5px',
        alignItems: 'center'
    };

    const cardTitleStyle2 = {
        fontSize: '14px',
        fontWeight: '600',
        color: '#000000',
        display: 'flex',
    };

    const colStyle = {
        padding: '8px'
    };

    const comment2Style = {
        fontSize: '11px',
        fontWeight: '600',
        color: '#000000',
        display: 'flex',
        marginTop: '-5px',
        marginLeft: '1px',
        width: '85%'
    };

    const [items, setItems] = useState<MenuProps['items']>([]);

    const navDropDown = [
        {
            key: '1',
            label: "Mark As Non-Urgent"
        },
        {
            key: '2',
            label: "Delete"
            

        },
        
    ];

    const statusDropDown = [
        {
            key: '1',
            label: "Status 1st menu item"
        },
        {
            key: '2',
            label: " Status 2nd menu item"
        },
        {
            key: '3',
            label: "Status 3rd menu item"
        },
    ];

    const typeDropDown = [
        {
            key: '1',
            label: " Type  1st menu item"
        },
        {
            key: '2',
            label: "Type 2nd menu item"
        },
        {
            key: '3',
            label: "Type 3rd menu item"
        },
    ];

    const priorityDropDown = [
        {
            key: '1',
            label: "Priority 1st menu item"
        },
        {
            key: '2',
            label: "Priority  2nd menu item"
        },
        {
            key: '3',
            label: "Priority  3rd menu item"
        },
    ];

    const docsDropDown = [
        {
            key: '1',
            label: "Docs 1st menu item"
        },
        {
            key: '2',
            label: "Docs 2nd menu item"
        },
        {
            key: '3',
            label: "Docs 3rd menu item"
        },
    ];

    const commentsDropDown = [
        {
            key: '1',
            label: "Comments 1st menu item"
        },
        {
            key: '2',
            label: "Comments 2nd menu item"
        },
        {
            key: '3',
            label: " Comments  3rd menu item"
        },
    ];

    return (
        <>
            <Header style={{ padding: 0, background: 'white', borderBottom: '1px solid #eeeeee' }}>
                <Flex gap='middle' align='start' vertical className='mx-3'>
                    <Flex style={topBoxStyle} justify={'space-between'} align={'center'}>
                        <Title level={4}>Ticket Details</Title>
                        <Flex justify={'flex-end'} align={'center'}>
                            <MenuOutlined className={styles.collapseMenu} style={{ marginRight: "5px" }} />
                            
                            <Button className={styles.collapseTo} style={{ color: 'white', background: '#7E81E8' }}>Move to Project</Button>
                            <Button className={styles.collapseTo} style={{ color: 'white', background: '#333793' }}>Assign Member</Button>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => {
                                    e.preventDefault()
                                    setItems(navDropDown)
                                }
                                }>
                                    <Title style={{ marginTop: '20px' }}><Image src={MORE} height={18} alt='' /></Title>
                                </a>
                            </Dropdown>
                        </Flex>
                    </Flex>
                </Flex>
            </Header>
            <Flex style={boxStyle} align={'center'}>
                <CustomDropDown title={"Status"} dropDownItems={statusDropDown} />
                <Divider style={{ height: '50px', margin: '0' }} type='vertical' />
                <CustomDropDown title={"Type"} dropDownItems={typeDropDown} />
                <Divider style={{ height: '50px', margin: '0' }} type='vertical' />
                <CustomDropDown title={"Priority"} dropDownItems={priorityDropDown} />
                <Divider style={{ height: '50px', margin: '0' }} type='vertical' />
            </Flex>
            
            <Layout style={{
                height: 'calc(100vh - 120px)',
                background: 'white'
            }}>
                <Row>
                    <Col xxl={16} lg={16} md={24} sm={24} xs={24} style={colStyle}>
                        <Flex style={cardStyle} vertical>
                            <Row align={'middle'} justify='space-between'>
                                <Title style={cardTitleStyle}>NDA Review</Title>
                                <Button style={{ color: 'white', background: '#C8473E', borderRadius: '20px' }}>Urgent</Button>
                            </Row>
                            <Title style={cardTitleSmallStyle}>Requested By: anmol.sahai@gmail.com</Title>
                            <Space wrap size={5} style={{ marginTop: '10px' }}>
                                <Avatar icon={<UserOutlined />} />
                                <Avatar icon={<UserOutlined />} />
                                {/* <Avatar icon={<UserOutlined />} /> */}
                                <Avatar style={{
                border: "1px dashed gray",
                backgroundColor: "#ffff",
                display: "flex",
                alignItems: "center",
              }} > 
                                    <Image
                                        src={PLUS_SOLID}
                                        height={25}
                                        alt="..."
                                        
                                        /></Avatar>

                            </Space>
                            <Row>
                                <Title style={cardTitleSmall2Style} className='mr-3'><Image src={PROFILE} height={15} alt='' />&nbsp;2 people Invloved</Title>
                                <Title style={cardTitleSmall2Style} ><Image src={CLOCK} height={15} alt='' />&nbsp;Requested at Aug 23, 2023 06:27 PM</Title>
                            </Row>
                        </Flex>
                        <Row>
                            <Col xxl={12} lg={12} md={12} sm={24} xs={24} className={styles.documentSection}>
                                <Flex className={styles.cardStyle340px} vertical>
                                    <Title style={cardTitleStyle2}>Documents (2)</Title>
                                    <Row style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                        <Title style={folderNameStyle}>  <Image src={FOLDER} height={18} alt='' />&nbsp;GroupProject.doc&nbsp;< Image src={INFO} height={18} alt='...' /></Title>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setItems(docsDropDown);
                                            }}
                                        >
                                            <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                            >
                                                <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                            </Dropdown>
                                        </a>
                                    </Row>
                                    <Row style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                        <Title style={folderNameStyle}>  <Image src={FOLDER} height={18} alt='' />&nbsp;GroupProject.doc&nbsp;< Image src={INFO} height={18} alt='...' /></Title>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setItems(docsDropDown);
                                            }}
                                        >
                                            <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                            </Dropdown>
                                        </a>
                                    </Row>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '20px', width: '85%',
                                        height: '56px', borderRadius: '10px',
                                        backgroundColor: '#0000000F', left: 0,
                                        right: 0,
                                        marginLeft: 'auto',
                                        marginRight: 'auto'
                                    }}>
                                        <Dragger {...props} >
                                            <Row style={{ justifyContent: 'center' }}>
                                                <InboxOutlined style={{ fontSize: '24px' }} /> &nbsp;Drag or browse from device
                                            </Row>
                                        </Dragger>
                                    </div>
                                </Flex>
                            </Col>
                            <Col xxl={12} lg={12} md={12} sm={24} xs={24} className={styles.commentSection}>
                                <Flex className={styles.cardStyle340px} vertical>
                                    <Title style={cardTitleStyle2}>Comments (3)</Title>
                                    <Row style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                        <Flex style={{ width: '90%' }}>
                                            <Flex>
                                                <Avatar icon={<UserOutlined />} />
                                            </Flex>
                                            <Flex vertical style={{ marginLeft: '5px' }}>
                                                <Row>
                                                    <Title style={cardTitleStyle2}> Melissa Alwins</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
                                                </Row>
                                                <Row>
                                                    <Title style={comment2Style}> @Jim Carrey Progress is well!</Title>
                                                </Row>
                                            </Flex>
                                        </Flex>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setItems(commentsDropDown);
                                            }}
                                        >
                                            <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                            </Dropdown>
                                        </a>
                                    </Row>
                                    <Row style={{ alignItems: 'baseline', justifyContent: 'space-between', marginTop: '8px' }}>
                                        <Flex style={{ width: '90%' }}>
                                            <Flex>
                                                <Avatar icon={<UserOutlined />} />
                                            </Flex>
                                            <Flex vertical style={{ marginLeft: '5px' }}>
                                                <Row>
                                                    <Title style={cardTitleStyle2}> Robert Fox</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
                                                </Row>
                                                <Row>
                                                    <Title style={comment2Style}> Can you please tell me the status of case. Can you please call me after 6PM ?</Title>
                                                </Row>
                                            </Flex>
                                        </Flex>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setItems(commentsDropDown);
                                            }}
                                        >
                                            <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                            </Dropdown>
                                        </a>
                                    </Row>
                                    <Row style={{ alignItems: 'baseline', justifyContent: 'space-between', marginTop: '8px' }}>
                                        <Flex style={{ width: '90%' }}>
                                            <Flex>
                                                <Avatar icon={<UserOutlined />} />
                                            </Flex>
                                            <Flex vertical style={{ marginLeft: '5px' }}>
                                                <Row>
                                                    <Title style={cardTitleStyle2}> Annette Black</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
                                                </Row>
                                                <Row>
                                                    <Title style={comment2Style}>Please check all the documents before starting any work</Title>
                                                </Row>
                                            </Flex>
                                        </Flex>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setItems(commentsDropDown);
                                            }}
                                        >
                                            <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                            </Dropdown>
                                        </a>
                                    </Row>
                                    <Row className={styles.commentBox}>
                                        <Flex style={{
                                            width: '90%',
                                            justifyContent: 'center',
                                            background: 'white',
                                            height: '38px',
                                            margin: 'auto',
                                            borderRadius: '5px'
                                        }}>
                                            <input placeholder='input with clear icon' style={{ border: 'none',width:"90%" }} />
                                            <Image src={SEND} height={18} alt='' style={{ marginRight: '5px' }} />
                                        </Flex>
                                    </Row>
                                </Flex>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={8} lg={8} md={24} sm={24} xs={24} style={colStyle} >
                        <Flex className={styles.detailsSection} vertical>
                            <Title style={cardTitleStyle2}>Details</Title>
                            <Row justify='space-between'>
                                <Title style={cardTitleSmall3Style}>Ticket</Title>
                                <Title style={cardTitleSmall2Style}>T-101</Title>
                            </Row>
                            <Row justify='space-between'>
                                <Title style={cardTitleSmall3Style}>Type</Title>
                                <Title style={cardTitleSmall2Style}>Request for info</Title>
                            </Row>
                            <Row justify='space-between'>
                                <Title style={cardTitleSmall3Style}>Status</Title>
                                <Title style={cardTitleSmall2Style}>In Review</Title>
                            </Row>
                            <Row justify='space-between'>
                                <Title style={cardTitleSmall3Style}>Medium</Title>
                                <Title style={cardTitleSmall2Style}>Slack</Title>
                            </Row>
                            <Row justify='space-between'>
                                <Title style={cardTitleSmall3Style}>Task Load</Title>
                                <Title style={cardTitleSmall2Style}>T-101</Title>
                            </Row>
                            <Row justify='space-between'>
                                <Title style={cardTitleSmall3Style}>Linked Project</Title>
                                <Title style={cardTitleSmall2Style}>-</Title>
                            </Row>
                        </Flex>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}

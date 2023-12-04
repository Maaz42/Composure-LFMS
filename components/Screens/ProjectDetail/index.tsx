import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image';
import { Avatar, Layout, Typography, Flex, Button, Dropdown, Divider, Row, Col, Upload, Timeline, Tooltip, Progress } from 'antd';
import { MenuOutlined, InboxOutlined, UserOutlined } from '@ant-design/icons';
import { ARROW, ARROWDOWN, BLUEDOT, CALENDAR, CHECKCIRCLE, CLOCK, EDIT, FILEUPLOAD, FOLDER, GREENDOT, INFO, MORE, PROFILEUSERS, RATING, REDDOT, SEND, TICKCOMPLETE, YELLOWDOT } from '@/constants/images'
import CustomDropDown from '@/components/ReusableComponents/DropDown';

const { Header } = Layout;
const { Title } = Typography;
const { Dragger } = Upload;

const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onDrop({ e }: any) {
        console.log('Dropped files', e.dataTransfer.files);
    },
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
    fontSize: '20px',
    fontWeight: '600',
    color: '#000000',
    display: 'flex',
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
export default function ProjectDetail() {
    const [items, setItems] = useState<any>([])
    const navDropDown = [
        {
            key: "1",
            label: "nav1"
        },
        {
            key: "2",
            label: "nav2"
        },
        {
            key: "3",
            label: "nav3"
        }
    ]
    const statusDropDown = [
        {
            key: "1",
            label: (<div className={styles.lines}><Image style={{ marginRight: "5px" }} src={REDDOT} alt="..." /> <div>New</div></div>)
        },
        {
            key: "2",
            label: (<div className={styles.lines}><Image style={{ marginRight: "5px" }} src={YELLOWDOT} alt="..." /> <div>In Review</div></div>)
        },
        {
            key: "3",
            label: (<div className={styles.lines}><Image style={{ marginRight: "5px" }} src={BLUEDOT} alt="..." /> <div>In Progress</div></div>)
        },
        {
            key: "4",
            label: (<div className={styles.lines}><Image height={16} width={16} style={{ marginRight: "5px" }} src={GREENDOT} alt="..." /> <div>Complete</div></div>)
        },
    ];

    const legalDropDown = [
        {
            key: '1',
            label: "Legal 1"
        },
        {
            key: '2',
            label: "Legal 2"
        },
        {
            key: '3',
            label: "Legal 3"
        }
    ];

    return (
        <>
            <Header className={styles.header}>

                <Flex gap='middle' align={'start'} vertical className='mx-3'  >
                    <Flex className={styles.topBoxStyle}>
                        <Title level={4}>Project Details</Title>
                        <Flex justify={'flex-end'} align={'center'}>
                            <MenuOutlined className={styles.collapseMenu} style={{ marginRight: "5px" }} />
                            <Button className={styles.collapseTo} style={{ backgroundColor: "#7E81E8", color: "#fff" }}>Add Task</Button>
                            <Button className={styles.collapseTo} style={{ backgroundColor: "#333793", color: "#fff" }}>Add Collaborators</Button>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => {
                                    e.preventDefault()
                                    setItems(navDropDown)
                                }}>
                                    <Title style={{ marginTop: '20px' }}><Image src={MORE} height={25} alt='' /></Title>
                                </a>
                            </Dropdown>
                        </Flex>
                    </Flex>
                </Flex>
            </Header>
            <Flex className={styles.boxStyle} >

                <div style={{ alignItems: "center" }} className={styles.lines}>
                    <CustomDropDown title={"Status"} dropDownItems={statusDropDown} />
                    <Divider className={styles.divider} type='vertical' />
                    <CustomDropDown title={"Legal"} dropDownItems={legalDropDown} />
                    <Divider className={styles.divider} type='vertical' />
                </div>
                <div style={{ width: "250px" }} className={`${styles.lines} mr-4`}><Progress percent={50} showInfo={false} />6/12</div>
            </Flex>

            <Layout style={{ height: '(100vh -120px)' }}>
                <Flex gap={'24px'} style={{ padding: "20px" }}>
                    <Col span={16} style={{ width: "100%", padding: "24px", backgroundColor: "#FAFAFA" }} className={styles.colStyle}>
                        <Row justify='space-between' style={{ marginBottom: "15px" }}>
                            <Title level={5}>Tasks(4)</Title>
                            <Button style={{ borderRadius: "65px", display: "flex" }}>All <Image style={{ marginTop: "4px" }} src={ARROWDOWN} width={15} height={15} alt='...' /></Button>
                        </Row>
                        <Row className={styles.cardStyle}>
                            <Row style={{ width: "100%", backgroundColor: "#FFFFFF" }} >
                                <Row className={styles.cardTitleStyle}> Final Structure Chart at Closing – Please update the structure chart, attached, with final ownership percentages </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Task Load</Col><Col><Image src={RATING} alt='...' /></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Date</Col><Col className={styles.lines} ><Image src={CALENDAR} alt='...' /> <div className='underline ml-2'>08/02/2023</div></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>File</Col><Col className={styles.lines}><Image src={FILEUPLOAD} alt='...' /> <div className='underline ml-2'>Upload File</div></Col> </Row>
                                <Row className={styles.cardSDetailStyle} >
                                    <Avatar.Group>
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                        <a href="https://ant.design">
                                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                        </a>
                                        <Tooltip title="Ant User" placement="top">
                                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                        </Tooltip>
                                        <Avatar style={{ border: "1px dashed gray", backgroundColor: "#ffff", display: 'flex', alignItems: 'center' }} >
                                            <Image src={EDIT} height={25} alt="..." />
                                        </Avatar>
                                    </Avatar.Group></Row>
                            </Row>
                            <Row style={{ width: "100%", marginTop: "20px", backgroundColor: "#FAFAFA" }} justify={'space-between'} >
                                <Button className={styles.taskCompleted}>
                                    <Image src={TICKCOMPLETE} alt="..." style={{ marginRight: "5px", marginTop: "3px" }} />Task Completed</Button>
                                <Image src={MORE} alt="..." />
                            </Row>
                        </Row>
                        <Row className={styles.cardStyle}>
                            <Row style={{ width: "100%", backgroundColor: "#FFFFFF" }} >
                                <Row className={styles.cardTitleStyle}> Final Structure Chart at Closing – Please update the structure chart, attached, with final ownership percentages </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Task Load</Col><Col><Image src={RATING} alt='...' /></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Date</Col><Col className={styles.lines} ><Image src={CALENDAR} alt='...' /> <div className='underline ml-2'>08/02/2023</div></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>File</Col><Col className={styles.lines}><Image src={FILEUPLOAD} alt='...' /> <div className='underline ml-2'>Upload File</div></Col> </Row>
                                <Row className={styles.cardSDetailStyle} style={{ width: "100%" }}>
                                    <Avatar.Group>
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                        <a href="https://ant.design">
                                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                        </a>
                                        <Tooltip title="Ant User" placement="top">
                                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                        </Tooltip>
                                        <Avatar style={{ border: "1px dashed gray", backgroundColor: "#ffff", display: 'flex', alignItems: 'center' }} >
                                            <Image src={EDIT} height={25} alt="..." />
                                        </Avatar>
                                    </Avatar.Group></Row>
                                <Row className={styles.cardSDetailStyle} style={{ width: "100%" }}>
                                    <Timeline
                                        items={[
                                            {
                                                dot: <Row> <Image src={CHECKCIRCLE} height={15} width={15} alt="..." /></Row>,
                                                children: (
                                                    <>
                                                        <Button className={styles.taskCompletedSmall}>Completed</Button>
                                                        <div className='font-medium text-base'>Shareholder Agreements</div>
                                                        <div className={styles.lines}><Avatar size={"small"} style={{ backgroundColor: '#f56a00' }}>K </Avatar>
                                                            <div style={{ borderRight: "1px solid #BDBDBD", padding: "3px" }}></div>
                                                            <Col className={styles.lines} ><Image className='ml-2' src={CALENDAR} alt='...' /> <div className='ml-2 text-gray-400' > 08/02/2023</div> </Col> </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                dot: <Image src={CHECKCIRCLE} height={15} width={15} alt="..." />,
                                                children: (
                                                    <>
                                                        <Button className={styles.taskCompletedSmall}>Completed</Button>
                                                        <div className='font-medium text-base'>Subscription Agreements</div>
                                                        <div className={styles.lines}>
                                                            <Col className={styles.lines} ><Image className='ml-2' src={CALENDAR} alt='...' /> <div className='ml-2 text-gray-400' > 08/02/2023</div> </Col> </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                dot: <Image src={INFO} alt="..." />,
                                                color: 'gray',
                                                children: (
                                                    <>
                                                        <Button className='rounded-3xl'>Mark as Completed?</Button>
                                                        <div className='font-medium text-base'>Credit Agreements</div>
                                                        <div className={styles.lines}>
                                                            <Col className={styles.lines} ><Image className='ml-2' src={CALENDAR} alt='...' /> <div className='ml-2 text-gray-400 underline' > Select Date</div> </Col> </div>
                                                    </>
                                                ),
                                            },

                                        ]}
                                    />
                                </Row>
                            </Row>
                            <Row style={{ width: "100%", marginTop: "20px", backgroundColor: "#FAFAFA" }} justify={'space-between'} >
                                <Button className={styles.infoButton}>
                                    <Image src={INFO} alt="..." style={{ marginRight: "5px", marginTop: "3px" }} />Mark As?</Button>
                                <Image src={MORE} alt="..." />
                            </Row>
                        </Row>
                        <Row className={styles.cardStyle}>
                            <Row style={{ width: "100%", backgroundColor: "#FFFFFF" }} >
                                <Row className={styles.cardTitleStyle}> FATCA/CRS Requirements: Please provide for all non coinvestors a complete and valid OECD Self-Certification Form, IRS Form W-9, W-8BEN, W-8BEN-E, W-8ECI, W-8EXP or W-8IMY, as applicable, and a certificate of information or equivalent</Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Task Load</Col><Col><Image src={RATING} alt='...' /></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Date</Col><Col className={styles.lines} ><Image src={CALENDAR} alt='...' /> <div className='underline ml-2'>08/02/2023</div></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>File</Col><Col className={styles.lines}><Image src={FILEUPLOAD} alt='...' /> <div className='underline ml-2'>Upload File</div></Col> </Row>

                                <Row className={styles.cardSDetailStyle} >
                                    <Avatar.Group>
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                        <a href="https://ant.design">
                                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                        </a>
                                        <Tooltip title="Ant User" placement="top">
                                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                        </Tooltip>
                                        <Avatar style={{ border: "1px dashed gray", backgroundColor: "#ffff", display: 'flex', alignItems: 'center' }} >
                                            <Image src={EDIT} height={25} alt="..." />
                                        </Avatar>
                                    </Avatar.Group></Row>
                            </Row>
                            <Row style={{ width: "100%", marginTop: "20px", backgroundColor: "#FAFAFA" }} justify={'space-between'} >
                                <Button className={styles.infoButton}>
                                    <Image src={INFO} alt="..." style={{ marginRight: "5px", marginTop: "3px" }} />Mark As?</Button>
                                <Image src={MORE} alt="..." />
                            </Row>
                        </Row>
                    </Col>
                    <Col span={8} style={{ paddingRight: "24px" }}>
                        <Row className='mb-8'>
                            <Flex className={styles.cardStyle350px} vertical>
                                <Title level={3}>Affiliated Entity Creation</Title>
                                <Row style={{ color: "#54577A", fontWeight: "500", fontSize: "14px" }}> Created By: Anmol Sahai </Row>
                                <Row className='my-8'>
                                    <Col><Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=13" /></Col>
                                    <Col><Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=12" /></Col>
                                    <Col><Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=11" /></Col>
                                    <Col><Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" /></Col>
                                    <Avatar size={'large'} style={{ backgroundColor: '#f56a00' }}>+</Avatar>
                                </Row>
                                <Row className='my-5' >
                                    <Col className={styles.lines}><Image className='mr-2' src={PROFILEUSERS} alt='...' /> 6 People Involved</Col>
                                    <Col className={styles.lines}> <Image className='mx-2' src={CLOCK} alt='...' />Due at Aug 23,2023</Col>
                                </Row>
                            </Flex>
                        </Row>
                        <Row className='mb-8'>
                            <Flex className={styles.cardStyle340px} vertical>
                                <Row className={`${styles.lines} mb-6`} justify={'space-between'}>
                                    <Title style={cardTitleStyle2}>Documents (7)</Title>
                                    <Button className={`${styles.lines} rounded-3xl text-sm text-gray-400`}>Internal <Image className='ml-2' src={ARROWDOWN} alt='...' height={20} /></Button>
                                </Row>
                                <Row style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <Title style={folderNameStyle}>  <Image src={FOLDER} height={18} alt='' />&nbsp;Case_Lab_Report.pdf&nbsp;< Image src={INFO} height={18} alt='...' /></Title>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // setItems(docsDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                        >
                                            <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <Title style={folderNameStyle}>  <Image src={FOLDER} height={18} alt='' />&nbsp;Investigation_Document.doc&nbsp;< Image src={INFO} height={18} alt='...' /></Title>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // setItems(docsDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                        >
                                            <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <Title style={folderNameStyle}>  <Image src={FOLDER} height={18} alt='' />&nbsp;Medical_Results.xlsx&nbsp;< Image src={INFO} height={18} alt='...' /></Title>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // setItems(docsDropDown);
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
                                            // setItems(docsDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                        >
                                            <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <Title style={folderNameStyle}>  <Image src={FOLDER} height={18} alt='' />&nbsp;Medical Notes.docx&nbsp;< Image src={INFO} height={18} alt='...' /></Title>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // setItems(docsDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                            <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <Title style={folderNameStyle}>  <Image src={FOLDER} height={18} alt='' />&nbsp;ListOfPeopleInvolved.pdf&nbsp;< Image src={INFO} height={18} alt='...' /></Title>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // setItems(docsDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                        >
                                            <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row >
                                    <Flex style={{ paddingLeft: "20%" }}>
                                        <Dragger  {...props} >
                                            <Row style={{ justifyContent: 'center' }}>
                                                <InboxOutlined style={{ fontSize: '15px' }} /> &nbsp;Drag or browse from device
                                            </Row>
                                        </Dragger>
                                    </Flex>
                                </Row>

                            </Flex>
                        </Row>
                        <Row>
                            <Flex className={styles.cardStyle340px} vertical>
                                <Row className={`${styles.lines} mb-6`} justify={'space-between'}>
                                    <Title style={cardTitleStyle2}>Commets (9)</Title>
                                    <Button className={`${styles.lines} rounded-3xl text-sm text-gray-400`}>Internal <Image className='ml-2' src={ARROWDOWN} alt='...' height={20} /></Button>
                                </Row>
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
                                            // setItems(commentsDropDown);
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
                                            // setItems(commentsDropDown);
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
                                            // setItems(commentsDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                            <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                        </Dropdown>
                                    </a>
                                </Row>
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
                                            // setItems(commentsDropDown);
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
                                            // setItems(commentsDropDown);
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
                                            // setItems(commentsDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                            <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                        </Dropdown>
                                    </a>
                                </Row>
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
                                            // setItems(commentsDropDown);
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
                                            // setItems(commentsDropDown);
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
                                            // setItems(commentsDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                            <Title style={{ marginTop: '0px' }}><Image src={MORE} height={18} alt='' /></Title>
                                        </Dropdown>
                                    </a>
                                </Row>
                            </Flex>
                            <Row className={styles.commentBox}>
                                <Flex style={{
                                    width: '90%',
                                    justifyContent: 'center',
                                    background: 'white',
                                    height: '38px',
                                    margin: 'auto',
                                    borderRadius: '5px'
                                }}>
                                    <input placeholder='Comment Now' style={{ border: 'none', width: "90%" }} />
                                    <Image src={SEND} height={18} alt='' style={{ marginRight: '5px' }} />
                                </Flex>
                            </Row>
                        </Row>
                    </Col>
                </Flex>
            </Layout >
        </>
    )
}



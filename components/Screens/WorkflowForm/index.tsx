import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image';
import { Avatar, Layout, Typography, Flex, Button, Dropdown, Row, Col, Upload, Timeline, Tooltip, Input, Drawer, Select } from 'antd';
import { MenuOutlined, InboxOutlined, UserOutlined } from '@ant-design/icons';
import { ARROWDOWN, BLUEDOT, CALENDAR, CHECKCIRCLE, CLOCK, CLOSE, EDIT, FILEUPLOAD, FOLDER, GREENDOT, INFO, MORE, PROFILEUSERS, RATING, REDDOT, SEND, TICKCOMPLETE, YELLOWDOT } from '@/constants/images'
import FloatLabelArrow from '@/components/ReusableComponents/FloatLabelArrow';
import FloatLabel from '@/components/ReusableComponents/FloatLabel';
const { Header } = Layout;
const { Title } = Typography;
const { Dragger } = Upload;
const { Option } = Select;

const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onDrop({ e }: any) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export default function WorkflowForm() {
    const [items, setItems] = useState<any>([])
    const [collaboratorDrawer, setCollaboratorDrawer] = useState(false)
    const [selectCollaboratorValue, setSelectCollaboratorValue] = useState<any>();
    const [title, setTitle] = useState("Hold Harmless (Indemnity) Agreement");

    const onClose = () => {
        setCollaboratorDrawer(false);
    }

    const showCollaboratorDrawer = () => {
        setCollaboratorDrawer(true);
    }

    const navDropDown = [
        {
            key: "1",
            label: "Delete"
        },

    ]
    const statusDropDown = [
        {
            key: "1",
            label: (<div className='flex'><Image style={{ marginRight: "5px" }} src={REDDOT} alt="..." /> <div>New</div></div>)
        },
        {
            key: "2",
            label: (<div className='flex'><Image style={{ marginRight: "5px" }} src={YELLOWDOT} alt="..." /> <div>In Review</div></div>)
        },
        {
            key: "3",
            label: (<div className='flex'><Image style={{ marginRight: "5px" }} src={BLUEDOT} alt="..." /> <div>In Progress</div></div>)
        },
        {
            key: "4",
            label: (<div className='flex'><Image height={16} width={16} style={{ marginRight: "5px" }} src={GREENDOT} alt="..." /> <div>Complete</div></div>)
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
    const commentsDropDown = [
        {
            key: '1',
            label: "Comment 1"
        },
        {
            key: '2',
            label: "Comment 1"
        },
        {
            key: '3',
            label: "Comment 1"
        }
    ];
    const docDropDown = [
        {
            key: '1',
            label: "Export as Zip"
        },
        {
            key: '2',
            label: "Export to Dropbox"
        },
        {
            key: '3',
            label: "Export  to Sharepoint"
        }
    ];
    const singleDocDropDown = [
        {
            key: '1',
            label: "View Varaitions"
        },
        {
            key: '2',
            label: "Upload another Varation"
        },
        {
            key: '3',
            label: "Download"
        },
        {
            key: '4',
            label: "Delete"
        }
    ];
    const taskDropDown = [
        {
            key: '1',
            label: "Add Subtask"
        },
        {
            key: '2',
            label: "Add Collaborators"
        },
        {
            key: '3',
            label: " Collaborators"
        },
        {
            key: '4',
            label: "Delete"
        }
    ];
    const taskStatusDropDown = [
        {
            key: '1',
            label: (
                <>
                    <div className='flex'> <Image className='mr-2' src={GREENDOT} alt='...' />  Complete</div>
                </>
            )
        },
        {
            key: '2',
            label: (
                <>
                    <div className='flex'> <Image className='mr-2' src={YELLOWDOT} alt='...' />  Not Requried</div>
                </>
            )
        },

    ];
    const allDropDown = [
        {
            key: '1',
            label: (
                <>
                    <div>All</div>
                </>
            )
        },
        {
            key: '2',
            label: (
                <>
                    <div>My Task</div>
                </>
            )
        },

    ];

    return (
        <>
            <Header className={styles.header}>
                <Flex gap='middle' align={'start'} vertical className='mx-3'  >
                    <Flex className={styles.topBoxStyle}>
                        <Title level={4}> Add Workflow </Title>
                        <Flex justify={'flex-end'} align={'center'}>
                            <MenuOutlined className={styles.collapseMenu} style={{ marginRight: "5px" }} />
                            <Button className={styles.collapseTo} style={{ backgroundColor: "#C8473E", color: "#fff" }}>Delelte</Button>
                            <Button onClick={(e) => {
                                e.preventDefault();
                                showCollaboratorDrawer()
                            }} className={styles.collapseTo} style={{ backgroundColor: "#333793", color: "#fff" }}>Add</Button>
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
            <Layout style={{ height: '(100vh -120px)' }}>
                <Row className={styles.mainRow}>
                    <Col xxl={16} lg={16} md={24} sm={24} xs={24} className={`${styles.colStyle}`}>

                        <Row className={`${styles.cardStyle} flex`} align={'middle'}>
                            <Row className='flex w-full custom'>
                                <div className='w-full m-0'>
                                    <FloatLabel label="Title" value={title}>
                                        <Input value={title} onChange={e => setTitle(e.target.value)} />
                                    </FloatLabel>
                                </div>
                            </Row>

                        </Row>
                        <Row className={styles.cardStyle}>
                            <Row style={{ width: "100%", backgroundColor: "#FFFFFF" }} >
                                <Row className={styles.cardTitleStyle}> Final Structure Chart at Closing – Please update the structure chart, attached, with final ownership percentages </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col >Task Load</Col><Col><Image src={RATING} alt='...' /></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Date</Col><Col className='flex'  ><Image className='underline mr-2' src={CALENDAR} alt='...' /> <div >08/02/2023</div></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>File</Col><Col className='flex'><Image className='underline mr-2' src={FILEUPLOAD} alt='...' /> <div >Upload File</div></Col> </Row>
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
                                <div className={styles.cardSDetailStyle} style={{ width: "100%" }}>
                                    <Timeline
                                        items={[
                                            {
                                                dot: <Row> <Image src={CHECKCIRCLE} height={15} width={15} alt="..." /></Row>,
                                                children: (
                                                    <>
                                                        <Flex style={{ width: "100%" }} justify={'space-between'}>
                                                            <Button className={styles.taskCompletedSmall}>Completed</Button>
                                                            <a
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setItems(taskDropDown);
                                                                }}
                                                            >
                                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                                    <Image className='mt-2' src={MORE} height={18} alt='' />
                                                                </Dropdown>
                                                            </a>
                                                        </Flex>
                                                        <div className='font-medium text-base'>Shareholder Agreements</div>
                                                        <div className='flex'><Avatar size={"small"} style={{ backgroundColor: '#f56a00' }}>K </Avatar>
                                                            <div className='mr-2' style={{ borderRight: "1px solid #BDBDBD", padding: "3px" }}></div>
                                                            <Col className='flex' >
                                                                <Image className='mr-2' src={CALENDAR} alt='...' />
                                                                <div className=' text-gray-400' > 08/02/2023</div>
                                                            </Col>
                                                        </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                dot: <Image src={CHECKCIRCLE} height={15} width={15} alt="..." />,
                                                children: (
                                                    <>
                                                        <Flex style={{ width: "100%" }} justify={'space-between'}>
                                                            <Button className={styles.taskCompletedSmall}>Completed</Button>
                                                            <a
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setItems(taskDropDown);
                                                                }}
                                                            >
                                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                                    <Image className='mt-2' src={MORE} height={18} alt='' />
                                                                </Dropdown>
                                                            </a>
                                                        </Flex>
                                                        <div className='font-medium text-base'>Subscription Agreements</div>
                                                        <div className='flex'>
                                                            <Col className='flex' >
                                                                <Image className='mr-2' src={CALENDAR} alt='...' />
                                                                <div className='  text-gray-400' > 08/02/2023</div> </Col>
                                                        </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                dot: <Image src={INFO} alt="..." />,
                                                color: 'gray',
                                                children: (
                                                    <>
                                                        <Flex style={{ width: "100%" }} justify={'space-between'}>
                                                            <a onClick={(e) => {
                                                                e.preventDefault();
                                                                setItems(taskStatusDropDown);
                                                            }}>
                                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                                    <Button className='rounded-3xl'>Mark as Completed?</Button>
                                                                </Dropdown>
                                                            </a>
                                                            <a
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setItems(taskDropDown);
                                                                }}
                                                            >
                                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                                    <Image className='mt-2' src={MORE} height={18} alt='' />
                                                                </Dropdown>
                                                            </a>
                                                        </Flex>
                                                        <div className='font-medium text-base'>Credit Agreements</div>
                                                        <div className='flex'>
                                                            <Col className='flex' >
                                                                <Image className='mr-2' src={CALENDAR} alt='...' />
                                                                <div className='text-gray-400 underline' >Select Date</div>
                                                            </Col>
                                                        </div>
                                                    </>
                                                ),
                                            },

                                        ]}
                                    />
                                </div>
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
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Date</Col><Col className='flex'><Image className='underline mr-2' src={CALENDAR} alt='...' /> <div >08/02/2023</div></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>File</Col><Col className='flex'><Image className='underline mr-2' src={FILEUPLOAD} alt='...' /> <div >Upload File</div></Col> </Row>
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
                                    </Avatar.Group>
                                </Row>
                            </Row>
                            <Row style={{ width: "100%", marginTop: "20px", backgroundColor: "#FAFAFA" }} justify={'space-between'} >
                                <Button className={styles.infoButton}>
                                    <Image src={INFO} alt="..." style={{ marginRight: "5px", marginTop: "3px" }} />Mark As?</Button>
                                <Image src={MORE} alt="..." />
                            </Row>
                        </Row>
                    </Col>
                    <Col xxl={8} lg={8} md={24} sm={24} xs={24} style={{ paddingRight: "24px" }} className={styles.colStyle2}>
                        <Row className='mb-8'>
                            <Flex className={styles.cardStyle450px} vertical>
                                <Title className={styles.cardTitleStyle2}>Affiliated Entity Creation</Title>
                                <Row style={{ color: "#54577A", fontWeight: "500", fontSize: "12px" }}> Created By: Anmol Sahai </Row>
                                <Row className='my-2'>
                                    <Col><Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=13" /></Col>
                                    <Col><Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=12" /></Col>
                                    <Col><Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=11" /></Col>
                                    <Col><Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=17" /></Col>
                                    <Avatar size={'large'} style={{ backgroundColor: '#f56a00' }}>+</Avatar>
                                </Row>
                                <Row className='my-2' >
                                    <Col className='flex mr-2'><Image className='mr-2' src={PROFILEUSERS} alt='...' /> 6 People Involved</Col>
                                    <Col className='flex'> <Image className='mr-2' src={CLOCK} alt='...' />Due at Aug 23,2023</Col>
                                </Row>
                            </Flex>
                        </Row>
                        <Row className='mb-8'>
                            <Flex className={styles.cardStyle340px} vertical>
                                <Row className="flex mb-6" justify={'space-between'}>
                                    <Title className={styles.cardTitleStyle2} >Documents (7)</Title>
                                    <Flex>
                                        <Button className={styles.internalButton}>Internal <Image className='ml-2' src={ARROWDOWN} alt='...' height={20} width={20} />
                                        </Button>&nbsp;
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setItems(docDropDown);
                                            }}
                                        >
                                            <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                <Image className='mt-2' src={MORE} height={18} alt='' />
                                            </Dropdown>
                                        </a>
                                    </Flex>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>

                                    <div className="d-flex align-center ">
                                        <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                        <Tooltip title={'GroupProject.doc'} placement="top">
                                            <div
                                                className={styles.folderTitle}> GroupProject.doc
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setItems(singleDocDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                        >
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <div className="d-flex align-center ">
                                        <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                        <Tooltip title={'GroupProject.doc'} placement="top">
                                            <div
                                                className={styles.folderTitle}> GroupProject.doc
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setItems(singleDocDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                        >
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <div className="d-flex align-center ">
                                        <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                        <Tooltip title={'GroupProject.doc'} placement="top">
                                            <div
                                                className={styles.folderTitle}> GroupProject.doc
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setItems(singleDocDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <div className="d-flex align-center ">
                                        <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                        <Tooltip title={'GroupProject.doc'} placement="top">
                                            <div
                                                className={styles.folderTitle}> GroupProject.doc
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setItems(singleDocDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <div className="d-flex align-center ">
                                        <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                        <Tooltip title={'GroupProject.doc'} placement="top">
                                            <div
                                                className={styles.folderTitle}> GroupProject.doc
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setItems(singleDocDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <div className="d-flex align-center ">
                                        <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                        <Tooltip title={'GroupProject.doc'} placement="top">
                                            <div
                                                className={styles.folderTitle}> GroupProject.doc
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setItems(singleDocDropDown);
                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row >
                                    <Flex style={{ width: "100%", justifyContent: "center" }}>
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
                                <Row className="flex mb-6" justify={'space-between'}>
                                    <Title className={styles.cardTitleStyle2} >Commets (9)</Title>
                                    <Button className={styles.internalButton} >Internal <Image className='ml-2' src={ARROWDOWN} alt='...' height={20} width={20} /></Button>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <Flex style={{ width: '90%' }}>
                                        <Flex>
                                            <Avatar icon={<UserOutlined />} />
                                        </Flex>
                                        <Flex vertical style={{ marginLeft: '5px' }}>
                                            <Row>
                                                <Title className={styles.cardTitleStyle3} > Melissa Alwins</Title>
                                                <Title className={styles.commentTS}>24/07/23 06:04PM</Title>
                                            </Row>
                                            <Row>
                                                <Title className={styles.comment2Style}> @Jim Carrey Progress is well!</Title>
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
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between', marginTop: '8px' }}>
                                    <Flex style={{ width: '90%' }}>
                                        <Flex>
                                            <Avatar icon={<UserOutlined />} />
                                        </Flex>
                                        <Flex vertical style={{ marginLeft: '5px' }}>
                                            <Row>
                                                <Title className={styles.cardTitleStyle3} > Annette Black</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
                                            </Row>
                                            <Row>
                                                <Title className={styles.comment2Style}>Please check all the documents before starting any work</Title>
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
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <Flex style={{ width: '90%' }}>
                                        <Flex>
                                            <Avatar icon={<UserOutlined />} />
                                        </Flex>
                                        <Flex vertical style={{ marginLeft: '5px' }}>
                                            <Row>
                                                <Title className={styles.cardTitleStyle3} > Melissa Alwins</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
                                            </Row>
                                            <Row>
                                                <Title className={styles.comment2Style}> @Jim Carrey Progress is well!</Title>
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
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>

                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between', marginTop: '8px' }}>
                                    <Flex style={{ width: '90%' }}>
                                        <Flex>
                                            <Avatar icon={<UserOutlined />} />
                                        </Flex>
                                        <Flex vertical style={{ marginLeft: '5px' }}>
                                            <Row>
                                                <Title className={styles.cardTitleStyle3}> Annette Black</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
                                            </Row>
                                            <Row>
                                                <Title className={styles.comment2Style}>Please check all the documents before starting any work</Title>
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
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    <Flex style={{ width: '90%' }}>
                                        <Flex>
                                            <Avatar icon={<UserOutlined />} />
                                        </Flex>
                                        <Flex vertical style={{ marginLeft: '5px' }}>
                                            <Row>
                                                <Title className={styles.cardTitleStyle3}> Melissa Alwins</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
                                            </Row>
                                            <Row>
                                                <Title className={styles.comment2Style}> @Jim Carrey Progress is well!</Title>
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
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </Row>
                                <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between', marginTop: '8px' }}>
                                    <Flex style={{ width: '90%' }}>
                                        <Flex>
                                            <Avatar icon={<UserOutlined />} />
                                        </Flex>
                                        <Flex vertical style={{ marginLeft: '5px' }}>
                                            <Row>
                                                <Title className={styles.cardTitleStyle3}> Annette Black</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
                                            </Row>
                                            <Row>
                                                <Title className={styles.comment2Style}>Please check all the documents before starting any work</Title>
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
                                            <Image className='mt-1' src={MORE} height={18} alt='' />
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
                </Row>
                <Drawer
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={CLOSE} height={18} alt="..." onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "33px", marginTop: "6px", fontSize: "14px" }}>Collaborator Management</h2>
                            <Button style={{ backgroundColor: "#7E81E8", width: "100px", color: "#fff" }}  >
                                Save
                            </Button>
                        </div>}
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    key="placement"
                    open={collaboratorDrawer}
                >
                    <FloatLabelArrow label="Collaborators" value={selectCollaboratorValue}>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            onChange={value => setSelectCollaboratorValue(value)}
                            value={selectCollaboratorValue}
                            suffixIcon={null}
                            mode="multiple"
                        >
                            <Option value="Ali">Ali</Option>
                            <Option value="Haider">Haider</Option>
                            <Option value="Hassan">Hassan</Option>
                        </Select>
                    </FloatLabelArrow>
                </Drawer>
            </Layout >
        </>
    )
}
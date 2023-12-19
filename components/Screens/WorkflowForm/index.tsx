import React, { useState } from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import type { MenuProps } from 'antd';
import { Avatar, Button, Col, Dropdown, Timeline, Flex, Input, Row, Tooltip, Typography, Layout, Upload, message, Select } from 'antd';
import { CALENDAR, ADDSUBTASK, REDCLOSECIRCLE, TRASH, REDCROSS, TICKCIRCLE, DOCUMENTUPLOAD, EDIT, FILEUPLOAD, FOLDER, INFO, MORE, WHITESTAR, BLACKSTAR, SEND, ARROWDOWN } from '@/constants/images';
import { UserOutlined, InboxOutlined, MenuOutlined } from '@ant-design/icons';
import FloatLabel from '@/components/ReusableComponents/FloatLabel';
import FloatLabelArrow from '@/components/ReusableComponents/FloatLabelArrow';
import type { UploadProps } from 'antd';

const { Header } = Layout;
const { Dragger } = Upload;
const { Title } = Typography;
const { Option } = Select;

const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onDrop({ e }: any) {
        https://ant.design/
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const props2: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


export default function TicketDetail() {
    const [title, setTitle] = useState<string>("");
    const [selectCollaboratorsValue, setSelectCollaboratorsValue] = useState<any>();
    const topBoxStyle = {
        width: '100%',
        height: '65px',
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

    const docsDropDown = [
        {
            key: '11',
            label: "Docs 1st menu item"
        },
        {
            key: '22',
            label: "Docs 2nd menu item"
        },
        {
            key: '33',
            label: "Docs 3rd menu item"
        },
    ];

    const commentsDropDown = [
        {
            key: '1st',
            label: "Comments 1st menu item"
        },
        {
            key: '2nd',
            label: "Comments 2nd menu item"
        },
        {
            key: '3rd',
            label: " Comments  3rd menu item"
        },
    ];

    return (
        <>
            <Header style={{ padding: 0, background: 'white', borderBottom: '1px solid #eeeeee' }}>
                <Flex gap='middle' align='start' vertical className='mx-3'>
                    <Flex style={topBoxStyle} justify={'space-between'} align={'center'}>
                        <Title level={4}>Add Workflow</Title>
                        <Flex justify={'flex-end'} align={'center'}>
                            <MenuOutlined className={styles.collapseMenu} style={{ marginRight: "5px" }} />
                            <Button className={styles.collapseTo} style={{ color: 'white', background: '#C8473E' }}>Delete</Button>
                            <Button className={styles.collapseTo} style={{ color: 'white', background: '#333793' }}>Add</Button>
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
            <Layout style={{
                height: 'calc(100vh - 120px)',
                background: 'white'
            }}>
                <Row>
                    <Col xxl={16} lg={16} md={24} sm={24} xs={24} style={colStyle}>
                        <Row className={styles.cardStyle}>
                            <Row className='flex w-full'> <div className='w-full m-0'>
                                <FloatLabel label="Title" value={title}> <Input value={title} onChange={e => setTitle(e.target.value)} />
                                </FloatLabel>
                            </div>
                            </Row>
                        </Row>
                        <Row className={styles.cardStyle}>
                            <Row className='flex w-full'> <div className='w-full m-0'>
                                <FloatLabelArrow label="Collaborators" value={selectCollaboratorsValue}>
                                    <Select
                                        showSearch
                                        style={{ width: "100%" }}
                                        onChange={value => setSelectCollaboratorsValue(value)}
                                        value={selectCollaboratorsValue}
                                        suffixIcon={null}
                                        mode="multiple"
                                    >
                                        <Option value="Ali">Ali</Option>
                                        <Option value="Haider">Haider</Option>
                                        <Option value="Hassan">Hassan</Option>
                                    </Select>
                                </FloatLabelArrow>
                            </div>
                            </Row>
                        </Row>
                        <Row>
                            <Col xxl={12} lg={12} md={12} sm={24} xs={24} className={styles.documentSection}>
                                <Flex className={styles.cardStyle340px} vertical>
                                    <Title style={cardTitleStyle2}>Documents (2)</Title>
                                    <div style={{ height: "850px", overflow: "auto" }}>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                                >
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>

                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                                >
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>

                                            <div className="flex align-center ">
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
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                                >
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}
                                                >
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
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
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <div className="flex align-center ">
                                                <Image src={FOLDER} height={18} alt="" /> &nbsp;
                                                <Tooltip title={'GroupProject.doc'} placement="top">
                                                    <div
                                                        className={styles.folderTitle}> GroupProject.doc
                                                    </div>
                                                </Tooltip>
                                                <Image src={INFO} height={18} alt="" /> &nbsp;
                                            </div>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    //setItems(singleDocDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Image className='mt-1' src={MORE} height={18} alt='' />
                                                </Dropdown>
                                            </a>
                                        </Row>
                                    </div>
                                    <Row >
                                        <Flex style={{ width: "100%", justifyContent: "center", marginTop: "20px" }}>
                                            <Dragger  {...props} className='w-full'>
                                                <Row style={{ justifyContent: 'center' }}>
                                                    <InboxOutlined style={{ fontSize: '15px' }} /> &nbsp;Drag or browse from device
                                                </Row>
                                            </Dragger>
                                        </Flex>
                                    </Row>

                                </Flex>
                            </Col>
                            <Col xxl={12} lg={12} md={12} sm={24} xs={24} className={styles.commentSection}>
                                <Flex className={styles.cardStyle340px} vertical>
                                    <Title style={cardTitleStyle2}>Comments (3)</Title>
                                    <div style={{ height: "600px", overflow: "auto" }}>
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
                                                <input placeholder='input with clear icon' style={{ border: 'none', width: "90%" }} />
                                                <Image src={SEND} height={18} alt='' style={{ marginRight: '5px' }} />
                                            </Flex>
                                        </Row>
                                    </div>

                                </Flex>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={8} lg={8} md={24} sm={24} xs={24} style={colStyle} >
                        <Flex className={styles.detailsSection} vertical>
                            <Title level={5}>Tasks(3)</Title>
                            <Row className={styles.cardStyle3}>
                                <Row className='flex w-full'> <div className='w-full m-0'>
                                    <div className="mb-5" >
                                        <FloatLabel label="Title" value={title}> <Input value={title} onChange={e => setTitle(e.target.value)} />
                                        </FloatLabel>
                                    </div>
                                </div>
                                </Row>
                                <Row className='flex w-full'> <div className='mb-5' style={{ width: "100%", }}>
                                    <Button
                                        style={{ width: "100%", height: "48px", display: "flex", justifyContent: "space-between", alignItems: "center" }} onClick={() => {}}
                                    >
                                        <div>File</div>
                                        <input type="file" id="myFile" name="filename" style={{ display: "none" }} />
                                        <Image src={DOCUMENTUPLOAD} alt='...' />
                                    </Button>

                                </div>
                                </Row>
                                <Row className='flex w-full'> <div className='w-full m-0'>
                                    <div className="mb-5">
                                        <FloatLabelArrow label="Action" value={selectCollaboratorsValue}>
                                            <Select
                                                showSearch
                                                style={{ width: "100%" }}
                                                onChange={value => setSelectCollaboratorsValue(value)}
                                                value={selectCollaboratorsValue}
                                                suffixIcon={null}
                                                mode="multiple"
                                            >
                                                <Option value="Ali">Ali</Option>
                                                <Option value="Haider">Haider</Option>
                                                <Option value="Hassan">Hassan</Option>
                                            </Select>
                                        </FloatLabelArrow>
                                    </div>
                                </div>
                                </Row>
                                <Row className='flex w-full'> <div className='w-full m-0'>
                                    <div className="mb-5">
                                        <FloatLabelArrow label="Sub Action" value={selectCollaboratorsValue}>
                                            <Select
                                                showSearch
                                                style={{ width: "100%" }}
                                                onChange={value => setSelectCollaboratorsValue(value)}
                                                value={selectCollaboratorsValue}
                                                suffixIcon={null}
                                                mode="multiple"
                                            >
                                                <Option value="Ali">Ali</Option>
                                                <Option value="Haider">Haider</Option>
                                                <Option value="Hassan">Hassan</Option>
                                            </Select>
                                        </FloatLabelArrow>
                                    </div>
                                </div>
                                </Row>
                                <Row className='w-full'> <div className='w-full m-0'>
                                    <div className="mb-5">
                                        <FloatLabelArrow label="Collaborators" value={selectCollaboratorsValue}>
                                            <Select
                                                showSearch
                                                style={{ width: "100%" }}
                                                onChange={value => setSelectCollaboratorsValue(value)}
                                                value={selectCollaboratorsValue}
                                                suffixIcon={null}
                                                mode="multiple"
                                            >
                                                <Option value="Ali">Ali</Option>
                                                <Option value="Haider">Haider</Option>
                                                <Option value="Hassan">Hassan</Option>
                                            </Select>
                                        </FloatLabelArrow>
                                    </div>
                                </div>
                                </Row>
                                <Row className='w-full' justify={'end'}>
                                    <Button style={{ color: 'white', background: '#333793' }}>Add</Button>
                                </Row>

                            </Row>
                            <Row className={styles.cardStyle2}>
                                <Row style={{ width: "100%", backgroundColor: "#FFFFFF", padding: '20px' }} >
                                    <Row className='flex' justify={'space-between'} >
                                        <div className={styles.cardTitleStyle}> FATCA/CRS Requirements: Please provide for all non coinvestors a complete and valid OECD Self-Certification Form, IRS Form W-9, W-8BEN, W-8BEN-E, W-8ECI, W-8EXP or W-8IMY, as applicable, and a certificate of information or equivalent
                                        </div>
                                        <Image src={TRASH} alt='...' />
                                    </Row>
                                    <Row className={styles.cardSDetailStyle}
                                        justify={'space-between'} style={{ width: "100%" }}>
                                        <Col>File</Col>
                                        <Col className='flex'>
                                            <Image className='mr-2' src={REDCLOSECIRCLE} alt='...' />
                                            <div className='underline text-black' >Case_Lab_Report.pdf</div>
                                        </Col>
                                    </Row>
                                    <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}>
                                        <Col>Condition</Col><Col className='flex'>
                                            <Image className='mr-2' height={15} width={15} src={ARROWDOWN} alt='...' />
                                            <div className='underline text-black' >Case_Lab_Report.pdf</div></Col>
                                    </Row>
                                    <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Action</Col><Col className='flex'><Image className='underline mr-2' src={FILEUPLOAD} alt='...' /> <div >Upload File</div></Col> </Row>
                                    <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Sub Action</Col><Col className='flex'><Image className='underline mr-2' src={FILEUPLOAD} alt='...' /> <div >Upload File</div></Col> </Row>
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
                                    <div className={styles.cardSDetailStyle} style={{ width: "100%" }}>
                                        <Timeline
                                            items={[
                                                {
                                                    dot: <Row> <Image src={ADDSUBTASK} height={20} width={20} alt="..." /></Row>,
                                                    children: (
                                                        <>
                                                            <Flex style={{ width: "100%" }} justify={'space-between'}>
                                                                <div style={{ color: "gray", fontSize: "12px" }}>
                                                                    Add Sub Task
                                                                </div>
                                                            </Flex>
                                                        </>
                                                    ),
                                                },


                                            ]}
                                        />
                                    </div>
                                </Row>

                            </Row>
                            <Row className={styles.cardStyle2}>
                                <Row style={{ width: "100%", backgroundColor: "#FFFFFF", padding: '20px' }} >
                                    <Row className={styles.cardTitleStyle}> FATCA/CRS Requirements: Please provide for all non coinvestors a complete and valid OECD Self-Certification Form, IRS Form W-9, W-8BEN, W-8BEN-E, W-8ECI, W-8EXP or W-8IMY, as applicable, and a certificate of information or equivalent</Row>
                                    <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Task Load</Col><Row>
                                        <Image src={BLACKSTAR} alt='...' />
                                        <Image src={BLACKSTAR} alt='...' />
                                        <Image src={BLACKSTAR} alt='...' />
                                    </Row> </Row>
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
                                    <div className={styles.cardSDetailStyle} style={{ width: "100%" }}>
                                        <Timeline
                                            items={[
                                                {
                                                    dot: <Row> <Image src={TICKCIRCLE} height={18} width={18} alt="..." /></Row>,
                                                    children: (
                                                        <>
                                                            <div className='flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <div className='font-medium text-base'>Mention All legal points</div>
                                                                    <Col className='flex' >
                                                                        <div className=' text-gray-400 mr-2' >Collaborator</div>
                                                                        <Image src={ARROWDOWN} alt='...' />
                                                                    </Col>
                                                                </div>
                                                                <Image src={REDCROSS} alt='...' />
                                                            </div>
                                                        </>
                                                    ),
                                                },
                                                {
                                                    dot: <Row> <Image src={TICKCIRCLE} height={18} width={18} alt="..." /></Row>,
                                                    children: (
                                                        <>
                                                            <div className='flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <div className='font-medium text-base'>Mention All legal points</div>
                                                                    <Col className='flex' >
                                                                        <div className=' text-gray-400 mr-2' >Collaborator</div>
                                                                        <Image src={ARROWDOWN} alt='...' />
                                                                    </Col>
                                                                </div>
                                                                <Image src={REDCROSS} alt='...' />
                                                            </div>
                                                        </>
                                                    ),
                                                },
                                                {
                                                    dot: <Row> <Image src={ADDSUBTASK} height={20} width={20} alt="..." /></Row>,
                                                    children: (
                                                        <>
                                                            <Flex style={{ width: "100%" }} justify={'space-between'}>
                                                                <div style={{ color: "gray", fontSize: "12px" }}>
                                                                    Add Sub Task
                                                                </div>
                                                            </Flex>
                                                        </>
                                                    ),
                                                },


                                            ]}
                                        />
                                    </div>
                                </Row>

                            </Row>
                            <Row className={styles.cardStyle2}>
                                <Row style={{ width: "100%", backgroundColor: "#FFFFFF", padding: '20px' }} >
                                    <Row className={styles.cardTitleStyle}> FATCA/CRS Requirements: Please provide for all non coinvestors a complete and valid OECD Self-Certification Form, IRS Form W-9, W-8BEN, W-8BEN-E, W-8ECI, W-8EXP or W-8IMY, as applicable, and a certificate of information or equivalent</Row>
                                    <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Task Load</Col><Row>
                                        <Image src={BLACKSTAR} alt='...' />
                                        <Image src={WHITESTAR} alt='...' />
                                        <Image src={WHITESTAR} alt='...' />

                                    </Row> </Row>
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
                                    <div className={styles.cardSDetailStyle} style={{ width: "100%" }}>
                                        <Timeline
                                            items={[
                                                {
                                                    dot: <Row> <Image src={TICKCIRCLE} height={18} width={18} alt="..." /></Row>,
                                                    children: (
                                                        <>
                                                            <div className='flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <div className='font-medium text-base'>Mention All legal points</div>
                                                                    <Col className='flex' >
                                                                        <div className=' text-gray-400 mr-2' >Collaborator</div>
                                                                        <Image src={ARROWDOWN} alt='...' />
                                                                    </Col>
                                                                </div>
                                                                <Image src={REDCROSS} alt='...' />
                                                            </div>
                                                        </>
                                                    ),
                                                },
                                                {
                                                    dot: <Row> <Image src={TICKCIRCLE} height={18} width={18} alt="..." /></Row>,
                                                    children: (
                                                        <>
                                                            <div className='flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <div className='font-medium text-base'>Mention All legal points</div>
                                                                    <Col className='flex' >
                                                                        <div className=' text-gray-400 mr-2' >Collaborator</div>
                                                                        <Image src={ARROWDOWN} alt='...' />
                                                                    </Col>
                                                                </div>
                                                                <Image src={REDCROSS} alt='...' />
                                                            </div>
                                                        </>
                                                    ),
                                                },
                                                {
                                                    dot: <Row> <Image src={ADDSUBTASK} height={20} width={20} alt="..." /></Row>,
                                                    children: (
                                                        <>
                                                            <Flex style={{ width: "100%" }} justify={'space-between'}>
                                                                <div style={{ color: "gray", fontSize: "12px" }}>
                                                                    Add Sub Task
                                                                </div>
                                                            </Flex>
                                                        </>
                                                    ),
                                                },


                                            ]}
                                        />
                                    </div>
                                </Row>

                            </Row>
                        </Flex>
                    </Col>
                </Row>
            </Layout >
        </>
    )
}

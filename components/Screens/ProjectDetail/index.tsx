import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image';
import { Avatar, Layout, Typography, Flex, Button, Dropdown, Input, Collapse, Divider, Checkbox, List, Row, Col, Upload, Timeline, Tooltip, Progress, Drawer, Select, TableColumnsType, Space } from 'antd';
import { MenuOutlined, InboxOutlined, UserOutlined } from '@ant-design/icons';
import { ARROWDOWN, BLACKSTAR, BLUEDOT, NOTES, CALENDAR, EXCEL_ICON, WORD_ICON, CLOCK, CLOSE, EDIT, FILEUPLOAD, FOLDER, GREENDOT, INFO, MORE, PROFILEUSERS, REDDOT, SEND, TICKCOMPLETE, WHITESTAR, YELLOWDOT, tick_button, ADDCIRCLE, CALENDER, BRIGHTFLAG, CLOSE_RED, NOTE_DOCS, PDF_ICON, CLOSE_CIRCLE, CHECKCIRCLE, MARK_ICON, TASKCOMPLETE, downArrow, ARROW_DOWN_2, ARROW_DOWN, downArrow2, ARROW_DOWN_BUTTON, ARROWDOWNWHITE, ARROWUP, Arrow_Up } from '@/constants/images'
import CustomDropDown from '@/components/ReusableComponents/DropDown';
import FloatLabelArrow from '@/components/ReusableComponents/FloatLabelArrow';
import { CustomTable } from '@/components/ReusableComponents/CustomTable';
import projectDetailData from "./projectDetailData.json"
const { Header } = Layout;
const { Title } = Typography;
const { Dragger } = Upload;
const { Option } = Select;
const { Text } = Typography;
const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onDrop({ e }: any) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
interface DataType {
    key: React.Key;
    title: string;
    due_date: string;
    status: string;
    progress: any[];
    collaboration: any[];
    rowData: any[];
}

const { TextArea } = Input;

export default function ProjectDetail() {
    const [items, setItems] = useState<any>([])
    const [collaboratorDrawer, setCollaboratorDrawer] = useState(false)
    const [selectCollaboratorValue, setSelectCollaboratorValue] = useState<any>();
    const [tableData, setTableData] = useState<any>(projectDetailData);
    const [notesVisible, setNotesVisible] = useState(false);
    const [rowDetail, setRowDetail] = useState(false);
    const [expandedRowKeys, setExpandedRowKeys] = useState<any[]>([]);
    const [expandedRows, setExpandedRows] = useState<any[]>([]);

    const handleRowClick = (key: any) => {
        const keys = expandedRowKeys.includes(key) ?
            expandedRowKeys.filter((k) => k !== key) : [...expandedRowKeys, key];
        setExpandedRowKeys(keys);
        const isExpanded = expandedRows.includes(key);
        const updatedRows = isExpanded ? expandedRows.filter((k) => k !== key)
            : [...expandedRows, key];
        setExpandedRows(updatedRows);
    }

    const handleShowNotes = () => {
        setNotesVisible(!notesVisible);
    };
    const onClose = () => {
        setCollaboratorDrawer(false);
    }

    const showCollaboratorDrawer = () => {
        setCollaboratorDrawer(true);
    }

    const markAsDropDown = [

        {
            key: "1",
            label: (
                <div className="flex">
                    <Image style={{ marginRight: "5px" }} src={YELLOWDOT} alt="..." />{" "}
                    <div>Not Required</div>
                </div>
            ),
        },

        {
            key: "2",
            label: (
                <div className="flex">
                    <Image
                        height={16}
                        width={16}
                        style={{ marginRight: "5px" }}
                        src={GREENDOT}
                        alt="..."
                    />{" "}
                    <div>Complete</div>
                </div>
            ),
        },
    ];
    const navDropDown = [
        {
            key: "1",
            label: "Delete"
        },

    ];
    const columns: TableColumnsType<DataType> = [
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>Title</div>
                </div>
            ),
            dataIndex: "title",
            key: "title"

        },
        {
            title: (<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>   Status</div>
            </div>),
            dataIndex: "status",
            key: "status",
            render: (status, record) => {
                return (
                    <>

                        {status && status === "Task incomplete" ? (

                            <>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Dropdown menu={{ items }} trigger={['click']}>
                                        <a onClick={(e) => {

                                            e.preventDefault()
                                            setItems(markAsDropDown)
                                        }}>

                                            <Button className={styles.infoButton}>
                                                <Image style={{ marginLeft: "-10px", marginRight: "2px" }} src={INFO} alt="..." /> Mark As?
                                            </Button>
                                        </a>
                                    </Dropdown>

                                    <Image onClick={(e) => { e.preventDefault(), handleRowClick(record.key) }} src={expandedRows.includes(record.key) ? Arrow_Up : downArrow} style={{ marginLeft: "-10px", marginTop: "2px", marginRight: "2px" }} alt="..." />
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <a onClick={(e) => {
                                        e.preventDefault()
                                        setItems(markAsDropDown)
                                    }}>
                                        <Button style={{}} className={styles.taskCompleted}>
                                            <Image src={tick_button} style={{ marginLeft: "-10px", marginTop: "2px", marginRight: "2px" }} alt="..." /> Task Completed!
                                        </Button>
                                    </a>

                                    <Image onClick={(e) => { e.preventDefault(), handleRowClick(record.key) }} src={expandedRows.includes(record.key) ? Arrow_Up : downArrow} style={{ marginLeft: "-10px", marginTop: "2px", marginRight: "2px" }} alt="..." />
                                </div>

                            </>
                        )

                        }




                    </>
                )


            }
        }
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
            label: "Add Collaborator"
        },
        {
            key: '2',
            label: "Recurring Task"
        },
        {
            key: '3',
            label: "Delete"
        }
    ];
    const taskdetailDropDown = [
        {
            key: '1',
            label: "Recurring Task"
        },
        {
            key: '2',
            label: "Delete"
        },

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
            label: "Add Note"
        },
        {
            key: '2',
            label: "Add Revision"
        },
        {
            key: '3',
            label: "Delete"
        },
    ]
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
    const docNoteDropDown = [
        {
            key: '1',
            label: "View Variations",
            src: WORD_ICON
        },
        {
            key: '2',
            label: "Upload Another Variation",
            src: EXCEL_ICON

        },
        {
            key: "3",
            label: "Download",
            src: PDF_ICON
        },
        {
            key: "4",
            label: "Delete",
            src: WORD_ICON
        }
    ]

    const documentsData = [
        {
            key: '1',
            label: "Document 1.docs",
            details: "Added on March 21  \n Last Notified Yesterday \n  2 Reviews",
            src: WORD_ICON

        },
        {
            key: "2",
            label: "Document 2.docs",
            details: "Added on March 21  \n Last Notified Yesterday \n  2 Reviews",
            src: EXCEL_ICON
        },
        {
            key: "3",
            label: "Case Lab Report",
            details: "Added on March 21  \n Last Notified Yesterday \n  2 Reviews",
            src: PDF_ICON
        },
        {
            key: '4',
            label: "Document 1.docs",
            details: "Added on March 21  \n Last Notified Yesterday \n  2 Reviews",
            src: EXCEL_ICON
        },
        {
            key: "5",
            label: "Document 2.docs",
            details: "Added on March 21  \n Last Notified Yesterday \n  2 Reviews",
            src: EXCEL_ICON
        },
        {
            key: "6",
            label: "Case Lab Report",
            details: "Added on March 21  \n Last Notified Yesterday \n  2 Reviews",
            src: PDF_ICON
        },

    ]

    const dataSubtasks = [
        {
            taskName: 'Shareholder Agreements ',
            assignedTo: 'John Doe',
            assignedDate: '24/07/23 06:04PM',
        },
        {
            taskName: 'Credit Agreements',
            assignedTo: 'Jane Smith',
            assignedDate: '24/07/23 06:04PM',
        },
        {
            taskName: 'Submit the final documentation in the legal office ',
            assignedTo: 'John Doe',
            assignedDate: '24/07/23 06:04PM',
        },
        {
            taskName: 'Submit the final documentation in the legal office',
            assignedTo: 'Jane Smith',
            assignedDate: '24/07/23 06:04PM',
        },
        {
            taskName: 'Credit Agreements ',
            assignedTo: 'John Doe',
            assignedDate: '24/07/23 06:04PM',
        },
        {
            taskName: 'Credit Agreements',
            assignedTo: 'Jane Smith',
            assignedDate: '24/07/23 06:04PM',
        }

    ];

    const dataSubTasks = [
        {
            taskName: 'Shareholder Agreements ',
            assignedTo: 'John Doe',
            assignedDate: '24/07/23 06:04PM',
            status: "Complete"
        },
        {
            taskName: 'Credit Agreements',
            assignedTo: 'Jane Smith',
            assignedDate: '24/07/23 06:04PM',
            status: "Complete"
        },
        {
            taskName: 'Submit the final documentation in the legal office ',
            assignedTo: 'John Doe',
            assignedDate: '24/07/23 06:04PM',
            status: "Complete"
        },
        {
            taskName: 'Submit the final documentation in the legal office',
            assignedTo: 'Jane Smith',
            assignedDate: '24/07/23 06:04PM',
            status: "Incomplete"
        },
        {
            taskName: 'Credit Agreements ',
            assignedTo: 'John Doe',
            assignedDate: '24/07/23 06:04PM',
            status: "Incomplete"
        },
        {
            taskName: 'Credit Agreements',
            assignedTo: 'Jane Smith',
            assignedDate: '24/07/23 06:04PM',
            status: "Incomplete"
        }

    ];



    const expandedRowRender = (rowData: any) => {
        return (

            <>

                <div className={styles.cardSDetailStyle} style={{ width: "100%" }}>
                    <Row className="flex mb-4" justify={'space-between'}>
                        <Row className={styles.cardSDetailStyle1} justify={'space-between'} style={{ width: "100%" }}><Col>Task Load</Col><Row>
                            <Image src={BLACKSTAR} alt='...' />
                            <Image src={BLACKSTAR} alt='...' />
                            <Image src={BLACKSTAR} alt='...' />
                        </Row></Row>
                        <Row className={styles.cardSDetailStyle1} justify={'space-between'} style={{ width: "100%" }}>
                            <Col>Date</Col>
                            <Col className='flex'><Image className='underline mr-2' src={CALENDAR} alt='...' /> <div className={styles.detailExpandableDate} >08/02/2023</div></Col> </Row>
                        <Row className={styles.cardSDetailStyle1} justify={'space-between'} style={{ width: "100%" }}>
                            <Col>File</Col><Col className='flex'><Image className='underline mr-2' src={CLOSE_CIRCLE} alt='...' /><Typography className={styles.detailExpandable}>
                                Case_Lab_Report</Typography>
                            </Col> </Row>
                        <Row className={styles.cardSDetailStyle1} >
                            <Avatar.Group>
                                <Avatar size="small" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                <a href="https://ant.design">
                                    <Avatar size="small" style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                </a>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                </Tooltip>
                                <Avatar size="small" style={{ border: "1px dashed gray", backgroundColor: "#ffff", display: 'flex', alignItems: 'center' }} >
                                    <Image src={EDIT} height={25} alt="..." />
                                </Avatar>
                            </Avatar.Group>
                        </Row>
                    </Row>

                    <div style={{ marginTop: "28px" }}>

                        <Timeline
                            items={[
                                {
                                    dot: <div style={{ backgroundColor: "#fafafa" }}><Image src={CHECKCIRCLE} height={15} width={15} alt="..." /></div>,
                                    color: "#fafafa",
                                    children: (
                                        <>
                                            <Flex style={{ width: "100%" }} justify={'space-between'}>
                                                <Button style={{ height: "25px" }} className={styles.taskCompletedSmall}>Completed</Button>
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
                                            <div className='mt-2 font-medium text-base'>Shareholder Agreements</div>
                                            <div className='flex mt-2'><Avatar size={"small"} style={{ backgroundColor: '#f56a00' }}>K </Avatar>
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
                                                <Button style={{ height: "25px" }} className={styles.taskCompletedSmall}>Completed</Button>
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
                                            <div className='mt-2 font-medium text-base'>Subscription Agreements</div>
                                            <div className='flex mt-2'>
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
                                                        <Button style={{ height: "25px" }} className={styles.markButton}>Mark as Completed?</Button>
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
                                            <div className='mt-2 font-medium text-base'>Credit Agreements</div>
                                            <div className='flex mt-2'>
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
                </div>

                {/* <Row style={{ marginTop: "3px", marginLeft: "-3px" }}>
                                        {data.status === "Complete" ? <>
                                            <Image className='underline mr-2' src={CHECKCIRCLE} alt='...' />
                                            <Button size="small" style={{}} className={styles.taskCompletedSmall}>
                                                Completed
                                            </Button></> : <><Image className='underline mr-2' src={MARK_ICON} alt='...' />
                                            <Button size="small" style={{}} className={styles.markButton}>
                                                Mark As Complete?
                                            </Button> </>}

                                    </Row> */}


                {/* <Row key={index} className='mb-2 mt-4 flex' style={{ alignItems: 'center', justifyContent: 'space-between' }}>

                                        <Flex style={{ display: "flow", width: '90%' }}>


                                            <Flex style={{ display: "flex", justifyContent: "space-between" }}>

                                                <Title className={styles.subTasksTitle} > {data.taskName}</Title>
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

                                            </Flex>
                                            <Flex style={{ display: "flex", alignItems: "center" }}>

                                                <Avatar size="small" src={"https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600"} />
                                                <Divider style={{ height: "20px", marginLeft: "10px" }} type="vertical" />
                                                <Image style={{ height: "20px", marginBottom: "6px" }} src={CALENDER} alt="doc" />
                                                <Title className={styles.commentTS1}>{data.assignedDate}</Title>


                                            </Flex>
                                        </Flex>

                                    </Row > */}







            </>
        );
    }



    return (
        <>
            <Header className={styles.header}>
                <Flex gap='middle' align={'start'} vertical className='mx-3'  >
                    <Flex className={styles.topBoxStyle}>
                        <Title level={4}>Project Details</Title>
                        <Flex justify={'flex-end'} align={'center'}>
                            <MenuOutlined className={styles.collapseMenu} style={{ marginRight: "5px" }} />
                            <Button className={styles.collapseTo} style={{ backgroundColor: "#7E81E8", color: "#fff" }}>Add Task</Button>
                            <Button onClick={(e) => {
                                e.preventDefault();
                                showCollaboratorDrawer()
                            }} className={styles.collapseTo} style={{ backgroundColor: "#333793", color: "#fff" }}>Add Collaborators</Button>
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
            <Flex className={styles.boxStyle} align={"center"} justify="space-between" >
                <MenuOutlined className={styles.collapseMenu} style={{ marginRight: "5px" }} />
                <Flex className={styles.collapseTo} align={"center"} justify="space-between">
                    <CustomDropDown className={styles.collapseTo} title={"Status"} dropDownItems={statusDropDown} />
                    <Divider className={styles.divider} type='vertical' />
                    <CustomDropDown className={styles.collapseTo} title={"Legal"} dropDownItems={legalDropDown} />
                    <Divider className={styles.divider} type='vertical' />
                </Flex>

                <div style={{ width: "200px" }} className={`flex mr-2`}><Progress percent={50} showInfo={false} />6/12</div>
            </Flex>
            <Layout style={{ height: '(100vh -120px)' }}>
                <Row className={styles.mainRow}>

                    <Col xxl={16} lg={16} md={24} sm={24} xs={24} className={`${styles.colStyle}`}>
                        <Row justify='space-between' style={{ marginBottom: "15px" }}>
                            <Title level={5}>Tasks(4)</Title>
                            <a onClick={(e) => {
                                e.preventDefault();
                                setItems(allDropDown);
                            }} >
                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                    <Button style={{ borderRadius: "65px", display: "flex", }}><Typography style={{ marginRight: "3px", color: "#9E9E9E" }}>All </Typography><Image className='mt-1' src={ARROWDOWN} width={15} height={15} alt='...' /></Button>
                                </Dropdown>
                            </a>

                        </Row>
                        <CustomTable
                            columns={columns}
                            data={tableData}
                            isChecked={2}
                            onRow={(record: DataType) => ({
                                onClick: () => {
                                }
                            })}
                            expandable={{
                                expandedRowRender,
                                rowExpandable: () => true,
                                expandedRowKeys,
                                onExpand: (record: any) => {
                                    handleRowClick(record.key);
                                },
                                expandIcon: () => <></>,
                            }}
                        />
                        {/* <Row className={styles.cardStyle}>
                            <Row className={styles.cardInnerStyle} >
                                <Row className={styles.cardTitleStyle}> Final Structure Chart at Closing – Please update the structure chart, attached, with final ownership percentages </Row> */}
                        {/* <Row className={styles.cardSDetailStyle} justify={'space-between'} align={'middle'} style={{ width: "100%" }}><div>Task Load</div>
                                    <Row>
                                        <Image src={BLACKSTAR} alt='...' />
                                        <Image src={BLACKSTAR} alt='...' />
                                        <Image src={WHITESTAR} alt='...' />
                                    </Row></Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Date</Col><Col className='flex' ><Image className='mr-2' src={CALENDAR} alt='...' /> <div>08/02/2023</div></Col> </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>File</Col><Col className='flex'><Image className='underline mr-2' src={FILEUPLOAD} alt='...' /> <div>Upload File</div></Col> </Row>
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
                                    </Avatar.Group></Row> */}
                        {/* </Row>
                            <Row style={{ width: "100%", marginTop: "20px", backgroundColor: "#FAFAFA" }} justify={'space-between'} >
                                <Button className={styles.taskCompleted}>
                                    <Image src={TICKCOMPLETE} alt="..." style={{ marginRight: "5px", marginTop: "3px" }} />Task Completed</Button>
                                <Image src={MORE} alt="..." />
                            </Row>
                        </Row>
                        <Row className={styles.cardStyle}>
                            <Row className={styles.cardInnerStyle} >
                                <Row className={styles.cardTitleStyle}> Final Structure Chart at Closing – Please update the structure chart, attached, with final ownership percentages </Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col >Task Load</Col><Row>
                                    <Image src={BLACKSTAR} alt='...' />
                                    <Image src={BLACKSTAR} alt='...' />
                                    <Image src={BLACKSTAR} alt='...' />
                                </Row> </Row>
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
                                                                    <Button className={styles.resButton}>Mark as Completed?</Button>
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
                        <Row className={styles.cardStyle}> */}
                        {/* <Row className={styles.cardInnerStyle} >
                                <Row className={styles.cardTitleStyle}> FATCA/CRS Requirements: Please provide for all non coinvestors a complete and valid OECD Self-Certification Form, IRS Form W-9, W-8BEN, W-8BEN-E, W-8ECI, W-8EXP or W-8IMY, as applicable, and a certificate of information or equivalent</Row>
                                <Row className={styles.cardSDetailStyle} justify={'space-between'} style={{ width: "100%" }}><Col>Task Load</Col><Row>
                                    <Image src={BLACKSTAR} alt='...' />
                                    <Image src={BLACKSTAR} alt='...' />
                                    <Image src={BLACKSTAR} alt='...' />
                                </Row></Row>
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
                            </Row> */}
                        {/* <Row style={{ width: "100%", marginTop: "20px", backgroundColor: "#FAFAFA" }} justify={'space-between'} >
                                <Button className={styles.infoButton}>
                                    <Image src={INFO} alt="..." style={{ marginRight: "5px", marginTop: "3px" }} />Mark As?</Button>
                                <Image src={MORE} alt="..." />
                            </Row> */}
                        {/* </Row> */}
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
                                <Row style={{ flexDirection: "column", alignItems: "flex-start" }}>

                                    <Row style={{ width: '100%' }}>
                                        <Col span={24}>
                                            <Button
                                                style={{ backgroundColor: "#333793", color: "white", display: "flex", alignItems: "center" }}
                                                onClick={handleShowNotes}
                                            >
                                                <Image style={{ marginRight: "10px" }} alt="notes" src={NOTES} />
                                                {notesVisible === false ?
                                                    " Show Notes " : "Hide Notes"}

                                            </Button>
                                        </Col>
                                        {notesVisible && (
                                            <Col span={24} style={{ marginTop: '10px' }}>
                                                <TextArea
                                                    rows={4}
                                                    maxLength={6}
                                                    style={{ width: "400px", backgroundColor: "#FAFAFA", height: "100px" }}
                                                    placeholder="Add notes here..."
                                                />
                                            </Col>
                                        )}
                                    </Row>
                                </Row>
                            </Flex>
                        </Row>
                        <Row className='mb-8'>
                            <Col xs={24} md={24} lg={24} xl={24}>

                                {/* <Row className="flex mb-3" justify={'space-between'}>
                                        <Title className={styles.cardTitleStyle2} >Documents</Title>
                                        <Flex>
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setItems(docDropDown);
                                                }}
                                            >
                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                    <Button className={styles.internalButton} >Internal <Image className='ml-2' src={ARROWDOWN} alt='...' height={20} width={20} /></Button>

                                                </Dropdown>

                                            </a>
                                            <Image className='mb-1' src={MORE} height={18} alt='' />

                                        </Flex>
                                    </Row> */}
                                <Collapse items={[
                                    {
                                        key: 1,
                                        label: (
                                            <Row className="flex mb-3" justify={'space-between'}>
                                                <Title className={styles.cardTitleStyle2} >Documents</Title>
                                                <Flex>
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setItems(docDropDown);
                                                        }}
                                                    >
                                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                            <Button className={styles.internalButton} >Internal <Image className='ml-2' src={ARROWDOWN} alt='...' height={20} width={20} /></Button>

                                                        </Dropdown>

                                                    </a>
                                                    <Image className='mb-1' src={MORE} height={18} alt='' />

                                                </Flex>
                                            </Row>

                                        ),

                                        children: <><div style={{ marginBottom: "30px", overflow: "auto" }}>
                                            {documentsData.map((data) => {
                                                return (
                                                    <Row key={data.key} className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                                        <div className="flex align-center ">
                                                            <Image src={data.src} height={18} alt="" /> &nbsp;
                                                            <div
                                                                className={styles.folderTitle}> {data?.label}
                                                            </div>
                                                            <div
                                                                className={styles.folderTitle}>
                                                                <a
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        setItems(docNoteDropDown);
                                                                    }}
                                                                >
                                                                    <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                                        <Image className='ml-2' src={NOTE_DOCS} height={18} alt='' />
                                                                    </Dropdown>
                                                                </a>

                                                            </div>
                                                            <Tooltip title={data?.details} placement="top">
                                                                <Image src={INFO} height={18} alt="" />
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
                                                )
                                            })}


                                        </div>
                                            <Row >
                                                <Flex style={{ width: "100%", justifyContent: "center" }}>
                                                    <Dragger  {...props} className='w-full'>
                                                        <Row style={{ justifyContent: 'center' }}>
                                                            <InboxOutlined style={{ fontSize: '15px' }} /> &nbsp;Drag or browse from device
                                                        </Row>
                                                    </Dragger>
                                                </Flex>
                                            </Row></>
                                    }
                                ]} />
                                {/* <div style={{ marginBottom: "30px", overflow: "auto" }}>
                                        {documentsData.map((data) => {
                                            return (
                                                <Row key={data.key} className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                                    <div className="flex align-center ">
                                                        <Image src={data.src} height={18} alt="" /> &nbsp;
                                                        <div
                                                            className={styles.folderTitle}> {data?.label}
                                                        </div>
                                                        <div
                                                            className={styles.folderTitle}>
                                                            <a
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setItems(docNoteDropDown);
                                                                }}
                                                            >
                                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                                    <Image className='ml-2' src={NOTE_DOCS} height={18} alt='' />
                                                                </Dropdown>
                                                            </a>

                                                        </div>
                                                        <Tooltip title={data?.details} placement="top">
                                                            <Image src={INFO} height={18} alt="" />
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
                                            )
                                        })}


                                    </div>
                                    <Row >
                                        <Flex style={{ width: "100%", justifyContent: "center" }}>
                                            <Dragger  {...props} className='w-full'>
                                                <Row style={{ justifyContent: 'center' }}>
                                                    <InboxOutlined style={{ fontSize: '15px' }} /> &nbsp;Drag or browse from device
                                                </Row>
                                            </Dragger>
                                        </Flex>
                                    </Row> */}

                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} md={24} lg={24} xl={24}>
                                <Collapse items={[
                                    {
                                        key: "1",
                                        label: <Row className="flex mb-6" justify={'space-between'}>
                                            <Title className={styles.cardTitleStyle2} >Comments (9)</Title>
                                            <Button className={styles.internalButton} >Internal <Image className='ml-2' src={ARROWDOWN} alt='...' height={20} width={20} /></Button>
                                        </Row>,
                                        children: <><Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                            <Flex style={{ width: '90%' }}>
                                                <Flex>
                                                    <Avatar icon={<UserOutlined />} />
                                                </Flex>
                                                <Flex vertical style={{ marginLeft: '5px' }}>
                                                    <Row>
                                                        <Title className={styles.cardTitleStyle5} > Melissa Alwins</Title>
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
                                                            <Title className={styles.cardTitleStyle5} > Annette Black</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
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
                                                            <Title className={styles.cardTitleStyle5} > Melissa Alwins</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
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
                                                            <Title className={styles.cardTitleStyle5}> Annette Black</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
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
                                                            <Title className={styles.cardTitleStyle5}> Melissa Alwins</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
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
                                                            <Title className={styles.cardTitleStyle5}> Annette Black</Title><Title className={styles.commentTS}>24/07/23 06:04PM</Title>
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
                                        </>
                                    }
                                ]} />



                                {/* <Row className={styles.commentBox}>
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
                            </Row> */}
                                git pull</Col>
                        </Row>
                    </Col>
                    {/*                         
                        <Col xxl={8} lg={8} md={24} sm={24} xs={24} style={{ paddingRight: "24px" }} className={styles.colStyle2}>
                            <Row className='mb-8' style={{ display: "flex", justifyContent: "space-between" }} >
                                <Image src={CLOSE_RED} onClick={() => { setRowDetail(false) }} alt="CLOSE" />
                                <div style={{ display: "flex", justifyContent: 'right' }}>
                                    <Button className={styles.infoButton}>
                                        <Image style={{ marginLeft: "-10px", marginRight: "2px" }} src={INFO} alt="..." /> Mark As?
                                    </Button>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setItems(taskdetailDropDown);

                                        }}
                                    >
                                        <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                            <Image className='mt-2' src={MORE} height={18} alt='' />
                                        </Dropdown>
                                    </a>
                                </div>
                            </Row>


                            <Flex className={styles.cardStyle350px} vertical>
                                <Row className="flex mb-6" justify={'space-between'}>

                                    <Row className={styles.cardTitleStyle}> FATCA/CRS Requirements: Please provide for all non coinvestors a complete and valid OECD Self-Certification Form, IRS Form W-9, W-8BEN, W-8BEN-E, W-8ECI, W-8EXP or W-8IMY, as applicable, and a certificate of information or equivalent</Row>
                                    <Divider></Divider>
                                    <Row className={styles.cardSDetailStyle1} justify={'space-between'} style={{ width: "100%" }}><Col>Task Load</Col><Row>
                                        <Image src={BLACKSTAR} alt='...' />
                                        <Image src={BLACKSTAR} alt='...' />
                                        <Image src={BLACKSTAR} alt='...' />
                                    </Row></Row>
                                    <Row className={styles.cardSDetailStyle1} justify={'space-between'} style={{ width: "100%" }}><Col>Date</Col><Col className='flex'><Image className='underline mr-2' src={CALENDAR} alt='...' /> <div >08/02/2023</div></Col> </Row>
                                    <Row className={styles.cardSDetailStyle1} justify={'space-between'} style={{ width: "100%" }}><Col>Collaborators</Col><Col className='flex'> <Avatar.Group>
                                        <Avatar size="small" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                        <a href="https://ant.design">
                                            <Avatar size="small" style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                        </a>
                                        <Tooltip title="Ant User" placement="top">
                                            <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                        </Tooltip>
                                        <Avatar size="small" style={{ border: "1px dashed gray", backgroundColor: "#ffff", display: 'flex', alignItems: 'center' }} >
                                            <Image src={EDIT} height={25} alt="..." />
                                        </Avatar>
                                    </Avatar.Group></Col> </Row>
                                    <Row className={styles.cardSDetailStyle1} >

                                    </Row>
                                </Row>
                            </Flex>


                            <Divider></Divider>
                            <Row className='mb-8'>
                                <Flex className={styles.cardStyle350px} vertical>
                                    <Row className="flex mb-3" justify={'space-between'}>
                                        <Title className={styles.cardTitleStyle2} >Documents</Title>
                                        <Flex>

                                            <Image width={20} style={{ marginBottom: "10px" }} className='ml-2' src={ADDCIRCLE} alt='...' />
                                        </Flex>
                                    </Row>
                                    <div style={{ marginBottom: "30px", overflow: "auto" }}>
                                        {documentsData.map((data) => {
                                            return (
                                                <Row key={data.key} className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                                    <div className="flex align-center ">
                                                        <Image src={data.src} height={18} alt="" /> &nbsp;
                                                        <div
                                                            className={styles.folderTitle}> {data?.label}
                                                        </div>
                                                        <div
                                                            className={styles.folderTitle}>
                                                            <a
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setItems(docNoteDropDown);
                                                                }}
                                                            >
                                                                <Dropdown menu={{ items }} placement='bottom' trigger={['click']} arrow={{ pointAtCenter: true }}>
                                                                    <Image className='ml-2' src={NOTE_DOCS} height={18} alt='' />
                                                                </Dropdown>
                                                            </a>
                                                        </div>
                                                        <Tooltip title={data?.details} placement="top">
                                                            <Image src={INFO} height={18} alt="" />
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
                                            )
                                        })}


                                    </div>

                                </Flex>
                            </Row>
                            <Divider></Divider>
                            <Row>
                                <Flex className={styles.cardStyle350px} vertical>
                                    <Row className="flex mb-6" justify={'space-between'}>
                                        <Title className={styles.cardTitleStyle3} >Sub Tasks</Title>
                                        <Image width={30} className='ml-2' src={ADDCIRCLE} alt='...' />
                                    </Row>
                                    {dataSubtasks.map((data, index) => {
                                        return (
                                            <Row key={index} className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                                <Flex style={{ display: "flow", width: '90%' }}>

                                                    <Flex>
                                                        <Checkbox style={{ marginRight: '10px', marginBottom: "6px" }} />
                                                        <Title className={styles.subTasksTitle} > {data.taskName}</Title>

                                                    </Flex>
                                                    <Flex style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>

                                                        <Avatar src={"https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600"} />
                                                        <Title className={styles.subTasksName}>{data.assignedTo}</Title>
                                                        <Divider style={{ height: "20px", marginLeft: "10px" }} type="vertical" />
                                                        <Image style={{ height: "20px", marginBottom: "6px" }} src={CALENDER} alt="doc" />
                                                        <Title className={styles.commentTS1}>{data.assignedDate}</Title>


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
                                        )
                                    })}

                                </Flex>

                            </Row>
                        </Col> */}
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
                    <div className="mb-5">
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
                    </div>
                </Drawer>

            </Layout >
        </>
    )
}
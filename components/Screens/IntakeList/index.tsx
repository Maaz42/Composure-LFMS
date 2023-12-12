import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { MenuOutlined, InboxOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps, RadioChangeEvent } from 'antd';
import {
    Button,
    Divider,
    Dropdown,
    Flex,
    Typography,
    Layout,
    Tag,
    Row,
    Col,
    Pagination,
    Drawer,
    Input,
    Select,
    Upload,
    Radio,
    Tooltip
} from "antd";
import {
    ARROW,
    SEARCH,
    NAVBARS,
    REDDOT,
    GREENDOT,
    BLUEDOT,
    YELLOWDOT,
    GRAYDOT,
    CLOSE,
    ADDSQUARE,
    TICKSQAURE,
    FORWARDSQUARE,
    SLACK,
    ARROWUP,
    WORD,
    PDF,
    EXCEL,
    UNKNOWN,
    MORE,
    ARROWDOWNWHITE,
    IRONCLAD,
    BRIGHTFLAG,
    DROPBOX,
    ICERTIS,
    GOOGLEDRIVE,
    ADDCIRCLEWHITE,
} from "@/constants/images";
import intakeData from './intakeData.json'
import FloatLabel from "../../ReusableComponents/FloatLabel";
import FloatLabelArrow from "../../ReusableComponents/FloatLabelArrow";
import CustomDropDown from "@/components/ReusableComponents/DropDown";
import { CustomTable } from "@/components/ReusableComponents/CustomTable";

const { Header } = Layout;
const { Option } = Select;
const { Dragger } = Upload;
const { TextArea } = Input;
const { Title } = Typography;

const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onDrop({ e }: any) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export default function IntakeList() {
    const [items, setItems] = useState<MenuProps['items']>([]);
    const [tableData, setTableData] = useState<any>(intakeData)
    const [pageSize, setPageSize] = useState(10)
    const [open, setOpen] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [mergeDrawer, setMergeDrawer] = useState(false)
    const [projectDrawer, setProjectDrawer] = useState(false)
    const [ticketDrawer, setTicketDrawer] = useState(false)
    const [taskDrawer, setTaskDrawer] = useState(false)
    const [viewDrawer, setViewDrawer] = useState(false)
    const [intakeTitle, setIntakeTitle] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [mergeIntakeTitle, setMergeIntakeTitle] = useState("Affiliated Entity Creation");
    const [ticketTitle, setTicketTitle] = useState("");
    const [ticketRequestedBy, setTicketRequestedBy] = useState("");
    const [description, setDescription] = useState("");
    const [selectCreatedByValue, setSelectCreatedByValue] = useState<any>();
    const [selectWorkFlowValue, setSelectWorkFlowValue] = useState<any>();
    const [selectTaskTitleValue, setSelectTaskTitleValue] = useState<any>();
    const [selectStatusValue, setSelectStatusValue] = useState<any>();
    const [selectPriorityValue, setSelectPriorityValue] = useState<any>();
    const [selectCollaboratorsValue, setSelectCollaboratorsValue] = useState<any>();
    const [selectAssigneeValue, setSelectAssigneeValue] = useState<any>();
    const [existingTask, setExistingTask] = useState(true);
    const [value, setValue] = useState("Public");
    const [showMore, setShowMore] = useState(false);
    const [keyValue, setKeyValue] = useState<any>(0);
    const [viewTaskText, setViewTaskText] = useState("The app is a comprehensive resource that can help you stay up-to-date on everything that's happening at the company. You can find news article Lorem ipsum dolor sit ametSoluta You can find news article Lorem ipsum dolor sit ametSoluta thsi is vert akkjasf adfn  fa")

    // Callback function to receive the value from the child
    const handleValueFromChild = (value: Number) => {
        setKeyValue(value);
    };

    const onRadioChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const showDrawer = () => {
        setOpen(true);
    }
    const showDetailDrawer = () => {
        setOpenDetail(true);
    }

    const showMergeDrawer = () => {
        setMergeDrawer(true);
    }

    const showProjectDrawer = () => {
        setProjectDrawer(true);
    }

    const showTicketDrawer = () => {
        setTicketDrawer(true);
    }

    const showTaskDrawer = () => {
        setTaskDrawer(true);
    }

    const showViewDrawer = () => {
        setViewDrawer(true);
    }

    const onClose = () => {
        setOpen(false);
        setMergeDrawer(false);
        setProjectDrawer(false);
        setTicketDrawer(false);
        setTaskDrawer(false);
        setViewDrawer(false);
        setOpenDetail(false);
    }

    const topBoxStyle = {
        width: "100%",
        height: "65px",
    };

    const boxStyle = {
        height: "50px",
        borderBottom: "1px solid #eeeeee",
    };

    const handleSearch = ({ event }: any) => {
        const searchTerm = event.target.value;
        console.log("Search term:", searchTerm);
    };

    interface DataType {
        key: React.Key;
        createdBy: string;
        title: string;
        status: string[];
        platform: string[];
        dropDown: any;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Created by
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="..." />
                    </div>
                </div>
            ),
            dataIndex: "createdBy",
            key: "createdBy",
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Title
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="aaa" />
                    </div>
                </div>
            ),
            dataIndex: "title",
            key: "title",
            ellipsis: {
                showTitle: false,
            },
            render: (title) => (
                <a onClick={showDetailDrawer}>
                    {title}
                </a>
            ),
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Status
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            key: "status",
            dataIndex: "status",
            render: (_, { status }) => (
                <>
                    {status.map((status) => {
                        let color = status == "Pending" ? ("#7F7FEF") : (status == "Complete" ? "#4CAF50" : (status == "On Hold" ? "#D83A36" : (status == "Signature" ? "#FF9800" : (status == "To Projects" || "To Tickets" ? "#2196F3" : "#000000"))));
                        return (
                            <Tag
                                style={{
                                    backgroundColor: "#ffff",
                                    display: "inline-flex",
                                    border: "1px solid #E0E0E0",
                                    borderRadius: "65px",
                                    justifyContent: "space-evenly",
                                    padding: '0 10px 0 10px',
                                    color: color
                                }}
                                key={status}
                            >
                                {status == "Pending" ? (
                                    <div className={styles.purple} style={{ height: '10px', width: '10px', borderRadius: '50%', marginTop: '5px' }}></div>
                                ) : (
                                    status == "Complete" ? (
                                        <div className={styles.green} style={{ height: '10px', width: '10px', borderRadius: '50%', marginTop: '5px' }}></div>
                                    ) : (
                                        status == "On Hold" ? (
                                            <div className={styles.red} style={{ height: '10px', width: '10px', borderRadius: '50%', marginTop: '5px' }}></div>
                                        ) : (
                                            status == "Signature" ? (
                                                <div className={styles.yellow} style={{ height: '10px', width: '10px', borderRadius: '50%', marginTop: '5px' }}></div>
                                            ) : (
                                                status == "To Projects" || "To Tickets" ? (
                                                    <div className={styles.blue} style={{ height: '10px', width: '10px', borderRadius: '50%', marginTop: '5px' }}></div>
                                                ) : (
                                                    <></>
                                                )
                                            )
                                        )
                                    ))}
                                &nbsp; {status}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Platform
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="..." />
                    </div>
                </div>
            ),
            dataIndex: "platform",
            key: "platform",
            render: (_, { platform }) => (
                <>
                    {platform.map((platform) => {
                        return (
                            <>
                                {platform == "slack" ? (
                                    <Image src={SLACK} height={20} alt="" />) : (<> </>)
                                }
                            </>
                        );
                    })}
                </>
            ),
        },
        {
            title: "Quick Actions",
            dataIndex: "quickActions",
            key: "quickActions",
            render: () => (
                <div style={{ display: "flex" }}>
                    <a onClick={(e) => {
                        e.preventDefault();
                        setItems(addQuickActionDropDown)
                    }}>
                        <Dropdown menu={{ items }} trigger={["click"]}>
                            <Image src={ADDSQUARE} alt="..." style={{ width: "24px", height: "24px", marginRight: "15px" }} />
                        </Dropdown>
                    </a>
                    <a onClick={(e) => {
                        e.preventDefault();
                        setItems(tickQuickActionDropDown)
                    }}>
                        <Dropdown
                            menu={{ items }}
                            trigger={["click"]}
                        >
                            <Image src={TICKSQAURE} alt="..." style={{ width: "24px", height: "24px", marginRight: "15px", }} />
                        </Dropdown>
                    </a>
                    <a onClick={(e) => {
                        e.preventDefault();
                        setItems(forwardQuickActionDropDown)
                    }}>
                        <Dropdown
                            menu={{ items }}
                            trigger={["click"]}
                        >
                            <Image src={FORWARDSQUARE} alt="..." style={{ width: "24px", height: "24px", marginRight: "15px" }} />
                        </Dropdown>
                    </a>
                </div>
            ),
        },
        // {
        //     title: " ",
        //     dataIndex: "dropDown",
        //     key: "dropDown",
        //     render: () => (
        //         <Dropdown
        //             menu={{ items }}
        //             trigger={["click"]}
        //         >
        //             <Image src={THREEDOTS} alt="..." onClick={(e) => {
        //                 e.preventDefault();
        //                 setItems(ticketDropDown);
        //             }} style={{ maxWidth: "24px", width: "24px", height: "28px", cursor: "pointer" }} />
        //         </Dropdown>
        //     ),
        // },
    ];
    const platformDropDown = [
        {
            key: "1",
            label: "Platform 1st  item"
        },
        {
            key: "2",
            label: "All 2nd menu item"
        },
        {
            key: "3",
            label: "All 3rd menu item"
        },
    ];

    const statusDropDown = [
        {
            key: "1",
            label: "Pending"
        },
        {
            key: "2",
            label: "Complete"
        },
        {
            key: "3",
            label: "To Tickets"
        },
        {
            key: "4",
            label: "To Projects"
        },
    ];

    const createdByDropDown = [
        {
            key: "1",
            label: "Ali"
        },
        {
            key: "2",
            label: "Hassan"

        },
        {
            key: "3",
            label: "Anas"

        },
    ];

    const resolveDropDown = [
        {
            label: "Document Send",
            key: '0',
        },
        {
            label: "Email Sent",
            key: '1',
        },
        {
            label: "Task Done",
            key: '2',
        },
    ];

    const createDropDown = [
        {
            label: <a onClick={showProjectDrawer}>Project</a>,
            key: '0',
        },
        {
            label: <a onClick={showTicketDrawer}>Ticket</a>,
            key: '1',
        },
        {
            label: <a onClick={showTaskDrawer}>Task</a>,
            key: '2',
        },
    ];

    const addQuickActionDropDown = [
        {
            label: "Project",
            key: '0',
        },
        {
            label: "Ticket",
            key: '1',
        },
        {
            label: "Task",
            key: '2',
        },
    ];

    const tickQuickActionDropDown = [
        {
            label: "Duplicate",
            key: '0',
        },
        {
            label: "Managed",
            key: '1',
        },

    ];

    const forwardQuickActionDropDown = [
        {
            label: <div style={{ display: "flex", }}><Image style={{ marginRight: "5px" }} src={IRONCLAD} alt="..." />Ironclad</div>,
            key: '0',
        },
        {
            label: <div style={{ display: "flex", }}><Image style={{ marginRight: "5px" }} src={BRIGHTFLAG} alt="..." />Brightflag</div>,
            key: '1',
        },
        {
            label: <div style={{ display: "flex", }}><Image style={{ marginRight: "5px" }} src={ICERTIS} alt="..." />Icertis</div>,
            key: '2',
        },
        {
            label: <div style={{ display: "flex", }}><Image style={{ marginRight: "5px" }} src={GOOGLEDRIVE} alt="..." />Google Drive</div>,
            key: '3',
        },
        {
            label: <div style={{ display: "flex", }}><Image style={{ marginRight: "5px" }} src={DROPBOX} alt="..." />Dropbox</div>,
            key: '4',
        },
    ];

    const ticketDropDown = [
        {
            key: "1",
            label: (
                <a onClick={showViewDrawer}>View</a>
            ),
        },
        {
            key: "3",
            label: "Mark Urgent"

        },
        {
            key: "4",
            label: "Delete",
        },
    ];

    const moreDropDown = [
        {
            key: "1",
            label: "View"
        },
        {
            key: "3",
            label: "Download"
        },
    ];

    const paginationDropDown = [
        {
            key: "1",
            label: (
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        setPageSize(10);
                    }}
                >
                    10
                </a>
            ),
        },
        {
            key: "2",
            label: (
                <a onClick={(e) => {
                    e.preventDefault();
                    setPageSize(15);
                }}
                >
                    15
                </a>
            ),
        },
        {
            key: "3",
            label: (
                <a onClick={(e) => {
                    e.preventDefault();
                    setPageSize(20);
                }}
                >
                    20
                </a>
            ),
        },
    ];

    return (
        <>
            <Header
                style={{
                    padding: 0,
                    background: "white",
                    borderBottom: "1px solid #eeeeee",

                }}
            >
                <Flex gap="middle" align="start" vertical className="mx-3">
                    <Flex style={topBoxStyle} justify={"space-between"} align={"center"}>
                        <Title level={4}>Intake</Title>
                        <Flex className={styles.collapseTo} justify={"flex-end"} align={"center"}>
                            <div
                                style={{
                                    justifyContent: "space-between",
                                    display: "flex",
                                    width: "300px",
                                    height: "40px",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "65px",
                                }}
                            >
                                <input
                                    type="search"
                                    id="searchField"
                                    name="searchField"
                                    placeholder="Search"
                                    onChange={handleSearch}
                                    style={{
                                        width: "250px",
                                        outline: "none",
                                        padding: "10px",
                                    }}
                                />
                                <Image src={SEARCH} height={18} alt="" />
                            </div>
                        </Flex>
                    </Flex>
                </Flex>
            </Header>
            <Flex style={boxStyle} align={"center"} justify="space-between">
                <MenuOutlined className={styles.collapseMenu} style={{ marginLeft: "10px" }} />
                <Flex className={styles.collapseTo} align={"center"} justify="space-between">
                    <Dropdown
                        menu={{ items }}
                        trigger={["click"]}
                        placement="bottom"
                        arrow={{ pointAtCenter: true }}
                    >
                        <Title className={styles.dropDownFilter}>
                            <Image src={NAVBARS} height={18} alt="" onClick={({ e }: any) => {
                                e.preventDefault();
                            }} />
                        </Title>
                    </Dropdown>
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"Platform"} dropDownItems={platformDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"Status"} dropDownItems={statusDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"Created By"} dropDownItems={createdByDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                </Flex>
                <Flex align={"center"} justify="space-between">

                    {keyValue >= 2 ? <Button
                        onClick={showMergeDrawer}
                        style={{ color: "white", background: "#A3A5F6", marginRight: "5px" }}
                    >
                        Merge
                    </Button> : <></>}

                    {keyValue >= 1 ? <><Dropdown menu={{ items }} trigger={['click']}>
                        <a onClick={(e) => {
                            e.preventDefault()
                            setItems(createDropDown)
                        }}>
                            <Button
                                style={{ color: "white", background: "#7E81E8", marginRight: "5px", display: 'flex' }}
                            >
                                Create <Image src={ARROWDOWNWHITE} height={12} style={{ marginLeft: '5px', marginTop: '5px' }} alt="" />
                            </Button>
                        </a>
                    </Dropdown></> : <></>}
                    {keyValue >= 1 ? <>
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => {
                                e.preventDefault()
                                setItems(resolveDropDown)
                            }
                            }>
                                <Button
                                    style={{ color: "white", background: "#333793", marginRight: "5px", display: 'flex' }}
                                >
                                    Resolve <Image src={ARROWDOWNWHITE} height={12} style={{ marginLeft: '5px', marginTop: '5px' }} alt="" />
                                </Button>
                            </a>
                        </Dropdown></> : <></>}



                    {keyValue == 0 ? <Tooltip title={"Add Intake Manually"}>
                        <Button
                            onClick={showDrawer}
                            style={{ color: "white", background: "#333793", marginRight: "20px" }}
                        >
                            <Image src={ADDCIRCLEWHITE} alt='...' />
                        </Button>
                    </Tooltip> : <></>}
                </Flex>
            </Flex>
            <Layout
                style={{
                    height: "calc(100vh - 120px)",
                    background: "white"
                }}>
                <Row>
                    <Col span={24} >
                        <CustomTable columns={columns} data={tableData} isChecked={1} scroll={{}} onValueChange={handleValueFromChild} />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "end" }}>
                    <Col>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                setItems(paginationDropDown);
                            }}>
                            <Dropdown
                                menu={{ items }}
                                trigger={["click"]}
                                placement="bottom"
                                arrow={{ pointAtCenter: true }}
                            >
                                <Title className={styles.paginationdropDownField}>
                                    Rows Per Page:  {pageSize} <Image src={ARROW} height={18} alt="^" />
                                </Title>
                            </Dropdown>
                        </a>
                    </Col>
                    <Pagination
                        total={tableData.length}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} `}
                        defaultPageSize={10}
                        pageSize={pageSize}
                        defaultCurrent={1}
                    />
                    <Col>
                    </Col>
                </Row>
                <Drawer
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    open={openDetail}
                    key="placement">
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => {
                                e.preventDefault()
                                setItems(createDropDown)
                            }}>
                                <Button
                                    style={{ color: "white", background: "#7E81E8", marginRight: "5px", display: 'flex' }}
                                >
                                    Create <Image src={ARROWDOWNWHITE} height={12} style={{ marginLeft: '5px', marginTop: '5px' }} alt="" />
                                </Button>
                            </a>
                        </Dropdown>

                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => {
                                e.preventDefault()
                                setItems(resolveDropDown)
                            }
                            }>
                                <Button
                                    style={{ color: "white", background: "#333793", marginRight: "5px", display: 'flex' }}
                                >
                                    Resolve <Image src={ARROWDOWNWHITE} height={12} style={{ marginLeft: '5px', marginTop: '5px' }} alt="" />
                                </Button>
                            </a>
                        </Dropdown>
                    </div>
                    <div className="mt-2">

                        <Title level={4}>
                            Need legal advice on taxes applied on food chains in one state
                        </Title>
                        <p>
                            The app is a comprehensive resource that can help you stay up-to-date on everything that's happening at the company. You can find news articl... Show More
                        </p>
                        <Divider></Divider>
                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <div className={styles.titleClr}>
                                Status
                            </div>
                            <div >
                                Pending
                            </div>
                        </Row>
                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <div className={styles.titleClr}>
                                Source
                            </div>
                            <div className={styles.answer}>
                                Slack
                            </div>
                        </Row>
                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <div className={styles.titleClr}>
                                Created By
                            </div>
                            <div >
                                Alex Rose
                            </div>
                        </Row>
                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <div className={styles.titleClr}>
                                Created At
                            </div>
                            <div >
                                3 days ago
                            </div>
                        </Row>
                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <div className={styles.titleClr}>
                                Linked Projects
                            </div>
                            <div >
                                -                                </div>
                        </Row>
                        <Row className='mb-2' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <div className={styles.titleClr}>
                                Linked Tickets
                            </div>
                            <div >
                                -                                </div>
                        </Row>
                        <Divider></Divider>


                        <div>
                            Documents
                        </div>

                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                                <div style={{ display: 'flex' }}>
                                    <Image style={{ marginRight: "5px" }} src={WORD} height={25} alt="" />GroupProject.doc
                                </div>
                                <Image src={MORE} height={20} alt="" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                                <div style={{ display: 'flex' }}>
                                    <Image style={{ marginRight: "5px" }} src={PDF} height={25} alt="" />Case_Lab_Report.pdf
                                </div>
                                <Image src={MORE} height={20} alt="" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                                <div style={{ display: 'flex' }}>
                                    <Image style={{ marginRight: "5px" }} src={EXCEL} height={25} alt="" />Investigation_Document.xlx
                                </div>
                                <Image src={MORE} height={20} alt="" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                                <div style={{ display: 'flex' }}>
                                    <Image style={{ marginRight: "5px" }} src={UNKNOWN} height={25} alt="" />Comapany_Draft.flv
                                </div>
                                <Image src={MORE} height={20} alt="" />
                            </div>
                        </div>
                    </div>
                </Drawer>
                <Drawer
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={CLOSE} height={18} alt='...' onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "100px", marginTop: "3px" }}>Create Intake </h2>
                            <Button style={{ backgroundColor: "#7E81E8", width: "100px", color: "#fff" }}  >
                                Add
                            </Button>
                        </div>
                    }
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    open={open}
                    key="placement">
                    <div>
                        <div className="mb-5">
                            <FloatLabel label="Title" value={intakeTitle}>
                                <Input style={{ height: "48px" }} value={intakeTitle} onChange={e => setIntakeTitle(e.target.value)} />
                            </FloatLabel>
                        </div>
                        <div className="mb-5">
                            <FloatLabelArrow label="Created By" value={selectCreatedByValue}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    onChange={value => setSelectCreatedByValue(value)}
                                    value={selectCreatedByValue}
                                    suffixIcon={null}
                                >
                                    <Option value="Ali">Ali</Option>
                                    <Option value="Haider">Haider</Option>
                                    <Option value=" Asad">Asad</Option>
                                    <Option value="Maaz">Maaz</Option>
                                </Select>
                            </FloatLabelArrow>
                        </div>
                        <div className="mb-5">
                            <FloatLabel label="Description" value={description}>
                                <TextArea rows={3} value={intakeTitle} onChange={e => setIntakeTitle(e.target.value)} />
                            </FloatLabel>
                        </div>
                        <div style={{ marginTop: '55px' }}>
                            Add Documents
                        </div>
                        <div>
                            <Dragger {...props} >
                                <Row style={{ justifyContent: 'center' }}>
                                    <InboxOutlined style={{ fontSize: '24px' }} /> &nbsp;Drag or browse from device
                                </Row>
                            </Dragger>
                        </div>
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                                <div style={{ display: 'flex' }}>
                                    <Image style={{ marginRight: "5px" }} src={WORD} height={25} alt="" />GroupProject.doc
                                </div>
                                <Image src={MORE} height={20} alt="" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                                <div style={{ display: 'flex' }}>
                                    <Image style={{ marginRight: "5px" }} src={PDF} height={25} alt="" />Case_Lab_Report.pdf
                                </div>
                                <Image src={MORE} height={20} alt="" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                                <div style={{ display: 'flex' }}>
                                    <Image style={{ marginRight: "5px" }} src={EXCEL} height={25} alt="" />Investigation_Document.xlx
                                </div>
                                <Image src={MORE} height={20} alt="" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                                <div style={{ display: 'flex' }}>
                                    <Image style={{ marginRight: "5px" }} src={UNKNOWN} height={25} alt="" />Comapany_Draft.flv
                                </div>
                                <Image src={MORE} height={20} alt="" />
                            </div>
                        </div>
                    </div>
                </Drawer>
                <Drawer
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={CLOSE} height={18} alt="..." onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "125px", marginTop: "3px" }}>Add Title</h2>
                            <Button onClick={showDrawer} style={{ backgroundColor: "#7E81E8", width: "100px", color: "#fff" }}  >
                                Merge
                            </Button>
                        </div>
                    }
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    key="mergeDrawer"
                    open={mergeDrawer}
                >
                    <div className="mb-5">
                        <FloatLabel label="Title" value={mergeIntakeTitle}>
                            <Input style={{ height: "48px" }} value={mergeIntakeTitle} onChange={e => setMergeIntakeTitle(e.target.value)} />
                        </FloatLabel>
                    </div>
                </Drawer>
                <Drawer
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={CLOSE} height={18} alt='...' onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "95px", marginTop: "3px" }}>Create Project</h2>
                            <Button style={{ backgroundColor: "#7E81E8", width: "100px", color: "#fff" }}  >
                                Add
                            </Button>
                        </div>
                    }
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    open={projectDrawer}
                    key="projectDrawer"
                >
                    <div className="example"  >
                        <div className="mb-5">
                            <FloatLabel label="Title" value={projectTitle}>
                                <Input style={{ height: "48px" }} value={projectTitle} onChange={e => setProjectTitle(e.target.value)} />
                            </FloatLabel>
                        </div>
                        <div className="mb-5">
                            <FloatLabelArrow label="Workflow" value={selectWorkFlowValue}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    onChange={value => setSelectWorkFlowValue(value)}
                                    value={selectWorkFlowValue}
                                    suffixIcon={null}
                                >
                                    <Option value="In Review">In Review</Option>
                                    <Option value="Complete">Complete</Option>
                                    <Option value="On Hold">On Hold</Option>
                                    <Option value="In Progress">In Progress</Option>
                                    <Option value="In Signature">In Signature</Option>
                                </Select>
                            </FloatLabelArrow>
                        </div>
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
                        <div style={{ color: "#9e9e9e", marginBottom: "10px", fontSize: "12px" }}>Project Privacy</div>
                        <Radio.Group onChange={onRadioChange} value={value} >
                            <Radio value={"Public"}>Public</Radio>
                            <Radio value={"Private"}>Private</Radio>
                        </Radio.Group>
                    </div>
                </Drawer>
                <Drawer
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={CLOSE} height={18} alt='...' onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "95px", marginTop: "3px" }}>Create Ticket</h2>
                            <Button style={{ backgroundColor: "#7E81E8", width: "100px", color: "#fff" }}  >
                                Add
                            </Button>
                        </div>
                    }
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    open={ticketDrawer}
                    key="ticketDrawer"
                >
                    <div className="example"  >
                        <div className='mb-5'>
                            <FloatLabel label="Requested By" value={ticketRequestedBy}>
                                <Input style={{ height: "48px" }} value={ticketRequestedBy} onChange={e => setTicketRequestedBy(e.target.value)} />
                            </FloatLabel>
                        </div>
                        <div className='mb-5'>
                            <FloatLabel label="Title" value={ticketTitle}>
                                <Input style={{ height: "48px" }} value={ticketTitle} onChange={e => setTicketTitle(e.target.value)} />
                            </FloatLabel>
                        </div>
                        <div className='mb-5'>
                            <FloatLabelArrow label="Status" value={selectStatusValue}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    onChange={value => setSelectStatusValue(value)}
                                    value={selectStatusValue}
                                    suffixIcon={null}
                                >
                                    <Option value="finalReview">
                                        <div style={{ display: "flex", color: "#F44336" }}><Image src={REDDOT} height={10} alt="" style={{ width: 'auto', marginRight: "5px" }} />Final Review</div>
                                    </Option>
                                    <Option value="initailReview">
                                        <div style={{ display: "flex", color: "#FF9800" }}><Image src={YELLOWDOT} height={10} alt="" style={{ width: 'auto', marginRight: "5px" }} />Intial Review</div>
                                    </Option>

                                    <Option value="In Progress">
                                        <div style={{ display: "flex", color: "#2196F3" }}><Image src={BLUEDOT} height={10} alt="" style={{ width: 'auto', marginRight: "5px" }} />In Progress</div>
                                    </Option>
                                    <Option value="complete">
                                        <div style={{ display: "flex", color: "#4CAF50" }}><Image src={GREENDOT} height={10} alt="" style={{ width: 'auto', marginRight: "5px" }} />Complete</div>
                                    </Option>
                                </Select>
                            </FloatLabelArrow>
                        </div>
                        <div className="mb-5">
                            <FloatLabelArrow label="Priority" value={selectPriorityValue}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    onChange={value => setSelectPriorityValue(value)}
                                    value={selectPriorityValue}
                                    suffixIcon={null}
                                >
                                    <Option value="critical ">
                                        <div style={{ display: "flex", color: "#F44336" }}><Image src={REDDOT} height={10} alt="" style={{ width: 'auto', marginRight: "5px" }} />Critical</div>
                                    </Option>
                                    <Option value="high ">
                                        <div style={{ display: "flex", color: "#FF9800" }}><Image src={YELLOWDOT} height={10} alt="" style={{ width: 'auto', marginRight: "5px" }} />High</div>
                                    </Option>
                                    <Option value="medium">
                                        <div style={{ display: "flex", color: "#2196F3" }}><Image src={BLUEDOT} height={10} alt="" style={{ width: 'auto', marginRight: "5px" }} />Medium</div>
                                    </Option>
                                    <Option value="low">
                                        <div style={{ display: "flex", color: "#9E9E9E" }}><Image src={GRAYDOT} height={10} alt="" style={{ width: 'auto', marginRight: "5px" }} />Low</div>
                                    </Option>
                                </Select>
                            </FloatLabelArrow>
                        </div>

                        <div className="mb-5">
                            <FloatLabelArrow label="Assignee" value={selectAssigneeValue}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    onChange={value => setSelectAssigneeValue(value)}
                                    value={selectAssigneeValue}
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
                </Drawer>
                <Drawer
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={CLOSE} height={18} alt='...' onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "115px", marginTop: "3px" }}>Create Task</h2>
                            <Button style={{ backgroundColor: "#7E81E8", width: "100px", color: "#fff" }}  >
                                Add
                            </Button>
                        </div>
                    }
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    open={taskDrawer}
                    key="taskDrawer"
                >
                    <div className="example"  >
                        <div style={{ color: "#9E9E9E", marginBottom: "10px" }}>Add Task To</div>
                        {existingTask ? (
                            <>
                                <Button style={{ backgroundColor: "#7E81E8", color: "#fff", marginBottom: "10px" }}>
                                    Existing Task
                                </Button>
                                <Button onClick={(e) => {
                                    e.preventDefault();
                                    setExistingTask(false)
                                }}>
                                    New Project
                                </Button>
                                <div className="mb-5">
                                    <FloatLabelArrow label="Task Title" value={selectTaskTitleValue}>
                                        <Select
                                            showSearch
                                            style={{ width: "100%" }}
                                            onChange={value => setSelectTaskTitleValue(value)}
                                            value={selectTaskTitleValue}
                                            suffixIcon={null}
                                        >
                                            <Option value="In Review">In Review</Option>
                                            <Option value="Complete">Complete</Option>
                                            <Option value="On Hold">On Hold</Option>
                                            <Option value="In Progress">In Progress</Option>
                                            <Option value="In Signature">In Signature</Option>
                                        </Select>
                                    </FloatLabelArrow>
                                </div>
                                <div className="mb-5">
                                    <FloatLabelArrow label="Project Tittle" value={selectWorkFlowValue}>
                                        <Select
                                            showSearch
                                            style={{ width: "100%" }}
                                            onChange={value => setSelectWorkFlowValue(value)}
                                            value={selectWorkFlowValue}
                                            suffixIcon={null}
                                        >
                                            <Option value="In Review">In Review</Option>
                                            <Option value="Complete">Complete</Option>
                                            <Option value="On Hold">On Hold</Option>
                                            <Option value="In Progress">In Progress</Option>
                                            <Option value="In Signature">In Signature</Option>
                                        </Select>
                                    </FloatLabelArrow>
                                </div>
                            </>
                        ) : (<>
                            <Button onClick={(e) => {
                                e.preventDefault();
                                setExistingTask(true)
                            }}>
                                Existing Task
                            </Button>
                            <Button style={{ backgroundColor: "#7E81E8", color: "#fff", marginBottom: "10px" }}>
                                New Project
                            </Button>
                            <div className="mb-5">
                                <FloatLabelArrow label="Task Title" value={selectTaskTitleValue}>
                                    <Select
                                        showSearch
                                        style={{ width: "100%" }}
                                        onChange={value => setSelectTaskTitleValue(value)}
                                        value={selectTaskTitleValue}
                                        suffixIcon={null}
                                    >
                                        <Option value="In Review">In Review</Option>
                                        <Option value="Complete">Complete</Option>
                                        <Option value="On Hold">On Hold</Option>
                                        <Option value="In Progress">In Progress</Option>
                                        <Option value="In Signature">In Signature</Option>
                                    </Select>
                                </FloatLabelArrow>
                            </div>
                            <div className="mb-5">
                                <FloatLabel label="Projec Title" value={projectTitle}>
                                    <Input style={{ height: "48px" }} value={projectTitle} onChange={e => setProjectTitle(e.target.value)} />
                                </FloatLabel>
                            </div>
                            <div className="mb-5">
                                <FloatLabelArrow label="Workflow" value={selectWorkFlowValue}>
                                    <Select
                                        showSearch
                                        style={{ width: "100%" }}
                                        onChange={value => setSelectWorkFlowValue(value)}
                                        value={selectWorkFlowValue}
                                        suffixIcon={null}
                                    >
                                        <Option value="In Review">In Review</Option>
                                        <Option value="Complete">Complete</Option>
                                        <Option value="On Hold">On Hold</Option>
                                        <Option value="In Progress">In Progress</Option>
                                        <Option value="In Signature">In Signature</Option>
                                    </Select>
                                </FloatLabelArrow>
                            </div>
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
                        </>)}
                    </div>
                </Drawer>
                <Drawer
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    open={viewDrawer}
                    key="viewDrawer"
                >
                    <div style={{ display: "flex", justifyContent: "end", marginBottom: "5px" }}>
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => {
                                e.preventDefault()
                                setItems(createDropDown)
                            }}>
                                <Button style={{ color: "white", background: "#7E81E8", display: 'flex' }}>
                                    Create <Image src={ARROWDOWNWHITE} height={12} style={{ marginLeft: '5px', marginTop: '5px' }} alt="" />
                                </Button>
                            </a>
                        </Dropdown>
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => {
                                e.preventDefault()
                                setItems(resolveDropDown)
                            }
                            }>
                                <Button
                                    style={{ color: "white", background: "#333793", marginRight: "5px", display: 'flex' }}
                                >
                                    Resolve <Image src={ARROWDOWNWHITE} height={12} style={{ marginLeft: '5px', marginTop: '5px' }} alt="" />
                                </Button>
                            </a>
                        </Dropdown>
                    </div>
                    <div>
                        <Title level={4}>Need legal advice on taxes applied on food chains in one state</Title>
                    </div>
                    <div>
                        <h6>
                            {showMore ? viewTaskText : `${viewTaskText.substring(0, 250)}`}
                            <button className="btn" style={{ color: "#333793" }} onClick={() => {
                                setShowMore(!showMore);
                            }}>{showMore ? " Show less" : "...Show more"}</button>
                        </h6>
                    </div>
                    <Divider />
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div className="textColor" style={{ display: 'flex' }}>
                                Status
                            </div>
                            <div style={{ color: "#7F7FEF" }}>Pending</div>
                        </div>
                        <div className="textColor" style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div className="textColor" style={{ display: 'flex' }}>
                                Source
                            </div>
                            <div style={{ display: "flex" }}>Slack<Image src={SLACK} alt=",,," style={{ marginLeft: "10px" }} /></div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div className="textColor" style={{ display: 'flex' }}>
                                Created By
                            </div>
                            <div>Alex Rose</div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div className="textColor" style={{ display: 'flex' }}>
                                Created At
                            </div>
                            <div>3 Days Ago</div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div className="textColor" style={{ display: 'flex' }}>
                                Linked Project
                            </div>
                            <div style={{ fontSize: "10px", textDecoration: "underline", color: "#333793" }}>Confidentiality Agreement</div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div className="textColor" style={{ display: 'flex' }}>
                                Linked Ticket
                            </div>
                            <div style={{ fontSize: "10px", textDecoration: "underline", color: "#333793" }}>Investor Loan Financing</div>
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <Image style={{ marginRight: "5px" }} src={WORD} height={25} alt="" />GroupProject.doc
                            </div>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={() => {
                                    setItems(moreDropDown)
                                }}>
                                    <Image src={MORE} height={20} alt="" />
                                </a>
                            </Dropdown>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <Image style={{ marginRight: "5px" }} src={PDF} height={25} alt="" />Case_Lab_Report.pdf
                            </div>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={() => {
                                    setItems(moreDropDown)
                                }}>
                                    <Image src={MORE} height={20} alt="" />
                                </a>
                            </Dropdown>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <Image style={{ marginRight: "5px" }} src={EXCEL} height={25} alt="" />Investigation_Document.xlx
                            </div>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={() => {
                                    setItems(moreDropDown)
                                }}>
                                    <Image src={MORE} height={20} alt="" />
                                </a>
                            </Dropdown>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <Image style={{ marginRight: "5px" }} src={UNKNOWN} height={25} alt="" />Comapany_Draft.flv
                            </div>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={() => {
                                    setItems(moreDropDown)
                                }}>
                                    <Image src={MORE} height={20} alt="" />
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </Drawer>
            </Layout>
        </>
    );
}

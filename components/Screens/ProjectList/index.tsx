import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { MenuOutlined, InboxOutlined } from '@ant-design/icons';
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
    ConfigProvider,
    Input,
    Select,
    Upload,
    TableColumnsType,
    Space,
    Progress,
    Avatar,
    Tooltip,
    Radio
} from 'antd';

import {
    ARROW,
    SEARCH,
    NAVBARS,
    REDDOT,
    PURPLEDOT,
    GREENDOT,
    BLUEDOT,
    YELLOWDOT,
    CLOSE,
    THREEDOTS,
    EDIT,
    ADDCIRCLE
} from "@/constants/images";
import projectsData from './projectData.json'
import FloatLabel from "../../ReusableComponents/FloatLabel";
import FloatLabelArrow from "../../ReusableComponents/FloatLabelArrow";
import { CustomTable } from "@/components/ReusableComponents/CustomTable";
import CustomDropDown from "@/components/ReusableComponents/DropDown";

const { Header } = Layout;
const { Option } = Select;
const { Title } = Typography;

interface DataType {
    key: React.Key;
    title: string;
    due_date: string;
    stage: string[];
    progress: any[];
    collaboration: any[];
    rowData: any[];
}
console.log("projectsData", projectsData);

export default function ProjectList() {
    const [items, setItems] = useState<MenuProps['items']>([]);
    const [tableData, setTableData] = useState<any>(projectsData)
    const [pageSize, setPageSize] = useState(10)
    const [open, setOpen] = useState(false);
    const [collaoratorDrawer, setCollaoratorDrawer] = useState(false)
    const [projectTitle, setproJectTitle] = useState("");
    const [projectWorkflow, setprojectWorkflow] = useState("");
    const [selectCollaboratorValue, setSelectCollaoratorValue] = useState<any>();
    const [value, setValue] = useState("Public");

    const onRadioChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const showDrawer = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
        setCollaoratorDrawer(false);
    }

    const showAssingeeDrawer = () => {
        setCollaoratorDrawer(true);
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

    const projectActinDropDown = [
        {
            key: "1",
            label: (
                <Link href="/projectDetail">View</Link>
            ),
        },
        {
            key: "2",
            label: <a>Delete</a>
        }
    ];


    const expandedRowRender = (rowData: any) => {
        return (
            <>
                {rowData.rowData.map((data: any) => {
                    return (
                        <>
                            <div style={{ borderBottom: "1px solid #dbdbdb", padding: "5px 0 5px 0px", display: "flex", justifyContent: "space-between" }}>
                                <div style={{ maxWidth: "720px" }}>{data}</div>
                                <div>
                                    <Button
                                        style={{ color: "#7E81E8", marginRight: "20px", border: "1px solid #7E81E8", borderRadius: "20px" }}
                                    >
                                        <div style={{ display: "flex" }}>   <Image src={ADDCIRCLE} alt="..." style={{ marginRight: "5px" }} /> Add Collaborators </div>
                                    </Button>
                                    <Button
                                        style={{ color: "#7E81E8", marginRight: "20px", border: "1px solid #7E81E8", borderRadius: "20px" }}
                                    >
                                        <div style={{ display: "flex", }}>   <Image src={ADDCIRCLE} alt="..." style={{ marginRight: "5px" }} /> Add Subtask </div>
                                    </Button>
                                </div>
                            </div >
                        </>
                    );
                })
                }
            </>
        )
    };

    const columns: TableColumnsType<DataType> = [
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Due Date', dataIndex: 'due_date', key: 'due_date' },
        {
            title: 'Stage', key: 'stage',
            render: (_, { stage }) => (
                <>
                    {stage.map((status) => {
                        let color = status == "Pending" ? ("#7F7FEF") : (status == "Complete" ? "#4CAF50" : (status == "On Hold" ? "#D83A36" : (status == "Signature" ? "#FF9800" : (status == "To Projects" || "To Tickets" ? "#2196F3" : "#000000"))));
                        return (
                            <Tag
                                style={{
                                    backgroundColor: "#ffff",
                                    display: "inline-flex",
                                    border: "1px solid #E0E0E0",
                                    borderRadius: "65px",
                                    justifyContent: "space-evenly",
                                    width: "100px",
                                    color: color
                                }}
                                key={status}
                            >
                                {status == "Pending" ? (
                                    <Image src={PURPLEDOT} height={10} alt="aaa" />
                                ) : (
                                    status == "Complete" ? (
                                        <Image src={GREENDOT} height={10} alt="" />
                                    ) : (
                                        status == "On Hold" ? (
                                            <Image src={REDDOT} height={10} alt="" />
                                        ) : (
                                            status == "Signature" ? (
                                                <Image src={YELLOWDOT} height={10} alt="" />
                                            ) : (
                                                status == "To Projects" || "To Tickets" ? (
                                                    <Image src={BLUEDOT} height={10} alt="" />
                                                ) : (
                                                    <></>
                                                )
                                            )
                                        )
                                    ))}
                                {status}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Progress', key: 'progress',
            render: (_, { progress }) => (
                <>
                    {progress.map((p) => {
                        console.log(p)
                        return (
                            <div key={p.key} className={styles.lines}>
                                <Progress percent={50} showInfo={false} />
                                {p.gained}/{p.total}</div>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Collaboration', key: 'collaboration',
            render: (_, { collaboration }) => (
                <>
                    <Avatar.Group>
                        {collaboration.map((collaboration) => {
                            return (
                                <Space size='middle' key={collaboration.key}>
                                    <Tooltip title={collaboration.name} placement="bottom">
                                        <Avatar style={{ border: "1px solid gray" }} src={collaboration.img} />
                                    </Tooltip>
                                </Space>

                            );
                        })}
                        <Avatar style={{ border: "1px dashed gray", backgroundColor: "#ffff", display: 'flex', alignItems: 'center' }} >
                            <Tooltip title="Edit Assignee" placement="bottom">
                                <Image src={EDIT} height={25} alt="..." onClick={showAssingeeDrawer} />
                            </Tooltip>
                        </Avatar>
                    </Avatar.Group>
                </>
            ),
        },
        {
            title: 'Action', key: 'operation',
            render: () => (<Dropdown
                menu={{ items }}
                trigger={["click"]}
            >
                <Image src={THREEDOTS} alt="..." onClick={(e) => {
                    e.preventDefault();
                    setItems(projectActinDropDown);
                }} style={{ maxWidth: "24px", width: "24px", height: "28px", cursor: "pointer" }} />
            </Dropdown>)
        },
    ];

    const userDropDown = [
        {
            key: "1",
            label: " User 1st menu item"
        },
        {
            key: "2",
            label: "All 2nd menu item"
        },
        {
            key: "3",
            label: "All 3rd menu item"
        }
    ];

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

    const typeDropDown = [
        {
            key: "1",
            label: "Type 1st menu item"
        },
        {
            key: "2",
            label: " Type 2nd menu item"
        },
        {
            key: "3",
            label: "Type 3rd menu item"
        },
    ];

    const allProjectsDropDown = [
        {
            key: "1",
            label: "Project 1"
        },
        {
            key: "2",
            label: "Project 2"
        },
        {
            key: "3",
            label: "Project 3"
        },
    ];

    const paginationDropDown = [
        {
            key: "1",
            label: 10

        },
        {
            key: "2",
            label: 15
        },
        {
            key: "3",
            label: 20
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
                        <Title level={4}>Projects</Title>
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
                            <Image src={NAVBARS} height={18} alt="" onClick={({ e }: any) => {}} />
                        </Title>
                    </Dropdown>
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"Status"} dropDownItems={statusDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"User"} dropDownItems={userDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"Type"} dropDownItems={typeDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"All Project"} dropDownItems={allProjectsDropDown} />
                </Flex>
                <Flex align={"center"} justify="space-between">
                    <Button
                        onClick={showDrawer}
                        style={{ color: "white", background: "#333793", marginRight: "20px" }}
                    >
                        Add Projects
                    </Button>
                </Flex>
            </Flex>
            <Layout
                style={{
                    height: "calc(100vh - 120px)",
                    background: "white"
                }}>
                <Row>
                    <Col span={24} >
                        <CustomTable
                            columns={columns}
                            data={tableData}
                            isChecked={2}
                            expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "end" }}>
                    <Col >
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
                                <Title className={styles.paginatindropDownField}>
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
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={CLOSE} height={18} alt='...' onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "100px", marginTop: "3px" }}>Add Project </h2>
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
                    key="placement"
                >
                    <div>
                        <FloatLabel label="Title" value={projectTitle}>
                            <Input style={{ height: "48px" }} value={projectTitle} onChange={e => setproJectTitle(e.target.value)} />
                        </FloatLabel>
                        <FloatLabel label="Workflow" value={projectWorkflow}>
                            <Input style={{ height: "48px" }} value={projectWorkflow} onChange={e => setprojectWorkflow(e.target.value)} />
                        </FloatLabel>
                        <FloatLabelArrow label="Collaborators" value={selectCollaboratorValue}>
                            <Select
                                showSearch
                                style={{ width: "100%" }}
                                onChange={value => setSelectCollaoratorValue(value)}
                                value={selectCollaboratorValue}
                                suffixIcon={null}
                            >
                                <Option value="Ali">Ali</Option>
                                <Option value="Haider">Haider</Option>
                                <Option value=" Asad">Asad</Option>
                                <Option value="Maaz">Maaz</Option>
                            </Select>
                        </FloatLabelArrow>
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
                            <Image src={CLOSE} height={18} alt="..." onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "33px", marginTop: "6px", fontSize: "14px" }}>Collaborator Management</h2>
                            <Button style={{ backgroundColor: "#7E81E8", width: "100px", color: "#fff" }}  >
                                Save
                            </Button>
                        </div>
                    }
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    key="placement"
                    open={collaoratorDrawer}
                >
                    <FloatLabelArrow label="Collaborators" value={selectCollaboratorValue}>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            onChange={value => setSelectCollaoratorValue(value)}
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
            </Layout>
        </>
    );
}

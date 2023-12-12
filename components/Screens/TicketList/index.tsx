import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';
import CustomDropDown from '../../ReusableComponents/DropDown';
import {
    Avatar,
    Button,
    Divider,
    Dropdown,
    Flex,
    Space,
    Typography,
    Layout,
    Tag,
    Tooltip,
    Row,
    Col,
    Pagination,
    Drawer,
    Input,
    Select,
} from "antd";
import {
    ARROW,
    SEARCH,
    NAVBARS,
    THREEDOTS,
    EDIT,
    CLOSE,
    ARROWUP
} from "@/constants/images";
import ticketsData from './ticketsData.json'
import FloatLabel from "../../ReusableComponents/FloatLabel";
import FloatLabelArrow from "../../ReusableComponents/FloatLabelArrow";
import { CustomTable } from "../../ReusableComponents/CustomTable";

const { Header } = Layout;
const { Option } = Select;
const { Title } = Typography;

export default function TicketList() {
    const [items, setItems] = useState<MenuProps['items']>([]);
    const [tableData, setTableData] = useState<any>(ticketsData)
    const [pageSize, setPageSize] = useState(10)
    const [open, setOpen] = useState(false);
    const [assigneeDrawer, setAssigneeDrawer] = useState(false)
    const [ticketTitle, setTicketTitle] = useState("NDA Review");
    const [selectTypeValue, setSelectTypeValue] = useState<any>();
    const [selectStatusValue, setSelectStatusValue] = useState<any>();
    const [selectProiorityValue, setSelectProiorityValue] = useState<any>();
    const [selectAssigneeValue, setSelectAssigneeValue] = useState<any>();
    const [requestedBy, setRequestedBy] = useState("");

    const showDrawer = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
        setAssigneeDrawer(false);
    }

    const showAssingeeDrawer = () => {
        setAssigneeDrawer(true);
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
        status: string[];
        priority: string;
        ticketNo: string;
        ticket: number;
        type: string;
        received: string;
        assignee: any[];
        dropDown: any;
    }

    const columns: ColumnsType<DataType> = [
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
                        let color = status == "In Review" ? ("#7F7FEF") : (status == "Complete" ? "#4CAF50" : (status == "On Hold" ? "#D83A36" : (status == "Signature" ? "#FF9800" : (status == "In Progress" ? "#2196F3" : "#000000"))));
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
                                &nbsp;  {status}
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
                        Priority
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            dataIndex: "priority",
            key: "priority",
            render: (priority) => (
                <>
                    <Space size="middle">
                        {priority == "critical" ? (
                            <>
                                 <div className={styles.red} style={{ height: '18px', width: '18px', borderRadius: '50%', marginTop: '5px' }}></div>
                            </>
                        ) : (
                            priority == "high" ? (
                                <>
                                    <div className={styles.yellow} style={{ height: '18px', width: '18px', borderRadius: '50%', marginTop: '5px' }}></div>
                                </>
                            ) : (
                                priority == "medium" ? (
                                    <>
                                          <div className={styles.blue} style={{ height: '18px', width: '18px', borderRadius: '50%', marginTop: '5px' }}></div>
                                    </>
                                ) : (
                                    priority == "low" ? (
                                        <>
                                              <div className={styles.grey} style={{ height: '18px', width: '18px', borderRadius: '50%', marginTop: '5px' }}></div>
                                        </>
                                    ) : (
                                        <></>
                                    )
                                )
                            )
                        )}
                    </Space>
                </>
            ),
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Ticket No.
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            dataIndex: "ticketNo",
            key: "ticketNo",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Ticket
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            dataIndex: "ticket",
            key: "ticket",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Type
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            dataIndex: "type",
            key: "type",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Recieved
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            dataIndex: "received",
            key: "received",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Assignee
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            dataIndex: "assignee",
            key: "assignee",
            render: (_, { assignee }) => (
                <>
                    <Avatar.Group>
                        {assignee.map((assignee) => {
                            return (
                                <Space size='middle' key={assignee.key}>
                                    <Tooltip title={assignee.name} placement="bottom">
                                        <Avatar style={{ border: "1px solid gray" }} src={assignee.img} />
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
            title: " ",
            dataIndex: "dropDown",
            key: "dropDown",
            render: () => (
                <Dropdown
                    menu={{ items }}
                    trigger={["click"]}
                >
                    <Image src={THREEDOTS} alt="..." onClick={(e) => {
                        e.preventDefault();
                        setItems(ticketDropDown);
                    }} style={{ maxWidth: "24px", width: "24px", height: "28px", cursor: "pointer" }} />
                </Dropdown>
            ),
        },
    ];

    const allDropDown = [
        {
            key: "1",
            label: "All 1st menu item",
        },
        {
            key: "2",
            label: "All 2nd menu item",
        },
        {
            key: "3",
            label: "All 3rd  menu item",
        },
    ];

    const ticketDropDown = [
        {
            key: "1",
            label: (
                <Link href={`/ticketDetail`}>View</Link>
            ),
        },
        {
            key: "2",
            label: "Move to Project"
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
    const userDropDown = [
        {
            key: "1",
            label: "User 1st menu item"
        },
        {
            key: "2",
            label: "User 2nd menu item"
        },
        {
            key: "3",
            label: " User 3rd menu item"
        },
    ];
    const statusDropDown = [
        {
            key: "1",
            label: " Status 1st menu item",
        },
        {
            key: "2",
            label: "Status 2nd menu item"
        },
        {
            key: "3",
            label: " Status 3rd menu item"
        },
    ];
    const typeDropDown = [
        {
            key: "2",
            label: "Request for info"
        },
        {
            key: "3",
            label: "Advice / Opinion"
        },
        {
            key: "4",
            label: "Document Management"
        },
        {
            key: "5",
            label: "Action"
        },
    ];
    const priorityDropDown = [
        {
            key: "1",
            label: "Priority 1st menu item"
        },
        {
            key: "2",
            label: "Priority 2nd menu item"
        },
        {
            key: "3",
            label: "Priority 3rd menu item"
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
                <a
                    onClick={(e) => {
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
                <a
                    onClick={(e) => {
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
                        <Title level={4}>Tickets</Title>
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
                            <Image src={NAVBARS} height={18} alt="" />
                        </Title>
                    </Dropdown>
                    <CustomDropDown title={"All"} dropDownItems={allDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"User"} dropDownItems={userDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"Status"} dropDownItems={statusDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"Type"} dropDownItems={typeDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"Priority"} dropDownItems={priorityDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                </Flex>
                <Flex align={"center"} justify="space-between">
                    <Button
                        onClick={showDrawer}
                        style={{ color: "white", background: "#333793", marginRight: "20px" }}
                    >
                        Add Ticket
                    </Button>
                </Flex>
            </Flex>
            <Layout
                style={{
                    height: "calc(100vh - 120px)",
                    background: "white",
                }}
            >
                <Row>
                    <Col span={24} >
                        <CustomTable columns={columns} data={tableData} isChecked={0} />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "end" }}>
                    <Col >
                        <a
                            onClick={(e) => {
                                setItems(paginationDropDown);
                                e.preventDefault();
                            }}
                        >
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
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={CLOSE} height={18} alt='...' onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "117px", marginTop: "3px" }}>Add Ticket</h2>
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
                    key="ticketDrawer"
                >
                    <div className="example"  >
                        <div className="mb-5">
                            <FloatLabel label="Title" value={ticketTitle}>
                                <Input style={{ height: "48px" }} value={ticketTitle} onChange={e => setTicketTitle(e.target.value)} />
                            </FloatLabel>
                        </div>
                        <div className="mb-5">
                            <FloatLabelArrow label="Type" value={selectTypeValue}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    onChange={value => setSelectTypeValue(value)}
                                    value={selectTypeValue}
                                    suffixIcon={null}
                                >
                                    <Option value="Request for Info">Request for Info</Option>
                                    <Option value="Advice / Opinion">Advice / Opinion</Option>
                                    <Option value="Doc. Management">Doc. Management</Option>
                                    <Option value="Action">Action</Option>
                                </Select>
                            </FloatLabelArrow>
                        </div>
                        <div className="mb-5">
                            <FloatLabel label="Requested By" value={requestedBy}>
                                <Input style={{ height: "48px" }} value={requestedBy} onChange={e => setRequestedBy(e.target.value)} />
                            </FloatLabel>
                        </div>
                        <div className="mb-5">
                            <FloatLabelArrow label="Status" value={selectStatusValue}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    onChange={value => setSelectStatusValue(value)}
                                    value={selectStatusValue}
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
                            <FloatLabelArrow label="Proiority" value={selectProiorityValue}    >
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    onChange={value => setSelectProiorityValue(value)}
                                    value={selectProiorityValue}
                                    suffixIcon={null}
                                >
                                    <Option value="Critical">Critical</Option>
                                    <Option value="High">High</Option>
                                    <Option value="Medium">Medium</Option>
                                    <Option value="Low">Low</Option>
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
                            <Image src={CLOSE} height={18} alt="..." onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "36px", marginTop: "3px" }}>Assignee Management</h2>
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
                    open={assigneeDrawer}
                >
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
                </Drawer>
            </Layout>
        </>
    );
}

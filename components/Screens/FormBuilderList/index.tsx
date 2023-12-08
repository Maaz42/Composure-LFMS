import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { MenuOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';
import {
    Button,
    Divider,
    Dropdown,
    Flex,
    Typography,
    Layout,
    Row,
    Col,
    Tooltip,
    Pagination,
    Tag
} from "antd";
import {
    SEARCH,
    NAVBARS,
    THREEDOTS,
    PURPLEDOT,
    GREENDOT,
    REDDOT,
    YELLOWDOT,
    BLUEDOT,
    ARROWUP,
    ARROW
} from "@/constants/images";
import intakeData from './formData.json'
import CustomDropDown from "@/components/ReusableComponents/DropDown";
import { CustomTable } from "@/components/ReusableComponents/CustomTable";
import { useRouter } from "next/router";

const { Header } = Layout;
const { Title } = Typography;

export default function FormBuilderList() {
    const [items, setItems] = useState<MenuProps['items']>([]);
    const [tableData, setTableData] = useState<any>(intakeData);
    const [pageSize, setPageSize] = useState(10)
    const router = useRouter()

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


    interface DataType {
        key: React.Key;
        form: string;
        createdAt: string;
        createdBy: string[];
        status: string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Form
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            dataIndex: "form",
            key: "form",
            width: 350,
            ellipsis: {
                showTitle: false,
            },
            render: (form) => (
                <Tooltip placement="topLeft" title={form}>
                    {form}
                </Tooltip>
            ),
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Created At
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            dataIndex: "createdAt",
            key: "createdAt",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        Created By
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" />
                    </div>
                </div>
            ),
            dataIndex: "createdBy",
            key: "createdBy",
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
                        setItems(formDropDown);
                    }} style={{ maxWidth: "24px", width: "24px", height: "28px", cursor: "pointer" }} />
                </Dropdown>
            ),
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

    const formDropDown = [
        {
            key: "1",
            label: "Move to Folder",
        },
        {
            key: "3",
            label: "Download"
        },
        {
            key: "4",
            label: "Delete",
        },
        {
            key: "5",
            label: "Show Revisions",
        },
        {
            key: "6",
            label: "Add Another Version",
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
                        <Title level={4}>Form Builder</Title>
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

                    <CustomDropDown title={"Status"} dropDownItems={statusDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                </Flex>
                <Flex align={"center"} justify="space-between">
                    <Button
                        onClick={() => router.push('/formBuilderAdd')}
                        style={{ color: "white", background: "#333793", marginRight: "20px" }}
                    >
                        Add Form
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
                        <CustomTable columns={columns} data={tableData} isChecked={0} />
                    </Col>
                    <Row className="w-full" style={{ justifyContent: "end" }}>
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
                </Row>
            </Layout>
        </>
    );
}

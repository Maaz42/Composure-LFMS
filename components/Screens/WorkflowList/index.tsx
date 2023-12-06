import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import CustomDropDown from '../../ReusableComponents/DropDown';
import {
    Button,
    Divider,
    Dropdown,
    Flex,
    Typography,
    Layout,
    Row,
    Col,
    Pagination,
    Modal,
} from "antd";
import {
    ARROW,
    SEARCH,
    NAVBARS,
    THREEDOTS,
    ARROWUP,
} from "@/constants/images";
import workflowData from './workflowData.json'
import { ColumnsType } from "antd/es/table";
import { CustomTable } from "@/components/ReusableComponents/CustomTable";

const { Header } = Layout;
const { Title } = Typography;

export default function WorkflowList() {
    const [items, setItems] = useState<MenuProps['items']>([]);
    const [tableData, setTableData] = useState<any>(workflowData)
    const [pageSize, setPageSize] = useState(10)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const topBoxStyle = {
        width: "100%",
        height: "65px",
    };

    const boxStyle = {
        height: "50px",
        borderBottom: "1px solid #eeeeee",
    };

    const handleSearch = (event: any) => {
        const searchTerm = event.target.value;
        console.log("Search term:", searchTerm);
    };

    interface DataType {
        Title: string;
        Tasks: Number;
        Documnets: Number;
        Collaborators: number;
        CreatedBy: string;
        dropDown: any;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-end" }}>
                    <div>
                        Title
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" style={{ position: "absolute", top: "22px", right: "10px" }} />
                    </div>
                </div>
            ),
            key: "title",
            dataIndex: "title",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-end" }}>
                    <div>
                        Tasks
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" style={{ position: "absolute", top: "22px", right: "10px" }} />
                    </div>
                </div>
            ),
            dataIndex: "tasks",
            key: "tasks",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-end" }}>
                    <div>
                        Documents
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" style={{ position: "absolute", top: "22px", right: "10px" }} />
                    </div>
                </div>
            ),
            dataIndex: "documents",
            key: "documents",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-end" }}>
                    <div>
                        Collaborators
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" style={{ position: "absolute", top: "22px", right: "10px" }} />
                    </div>
                </div>
            ),
            dataIndex: "collaborators",
            key: "collaborators",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-end" }}>
                    <div>
                        Creaed By
                    </div>
                    <div>
                        <Image src={ARROWUP} height={10} alt="" style={{ position: "absolute", top: "22px", right: "10px" }} />
                    </div>
                </div>
            ),
            dataIndex: "created_by",
            key: "created_by",
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

    const ticketDropDown = [
        {
            key: "1",
            label: (
                <Link href={`/ticketDetail`}>Edit</Link>
            ),
        },
        {
            key: "2",
            label: "Use in Project"
        },
        {
            key: "3",
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
                        <Title level={4}>Workflow</Title>
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
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"User"} dropDownItems={userDropDown} />
                </Flex>
                <Flex align={"center"} justify="space-between">
                    <Button
                        onClick={showModal}
                        style={{ color: "white", background: "#333793", marginRight: "20px" }}
                    >
                        Add Workflow
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
                        <CustomTable columns={columns} data={tableData} isChecked={false} />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "end" }}>
                    <Col>
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
            </Layout>
            <Modal title="Form Template" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Divider />
                <div className='d-flex'
                    style={{
                        justifyContent: "space-between",
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
                <div className={styles.formTemplate} >
                    <div className={styles.formHeading} >Cease and Desist Copyright Infringement Letter</div>
                    <div className={styles.formDes} >Brooklyn Simmons</div>
                </div>
                <div className={styles.formTemplate} >
                    <div className={styles.formHeading} >Cease and Desist Copyright Infringement Letter</div>
                    <div className={styles.formDes} >Brooklyn Simmons</div>
                </div>
                <div className={styles.formTemplate} >
                    <div className={styles.formHeading} >Cease and Desist Copyright Infringement Letter</div>
                    <div className={styles.formDes} >Brooklyn Simmons</div>
                </div>
                <div className={styles.formTemplate} >
                    <div className={styles.formHeading} >Cease and Desist Copyright Infringement Letter</div>
                    <div className={styles.formDes} >Brooklyn Simmons</div>
                </div>
            </Modal>
        </>
    );
}
import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { MenuOutlined, InboxOutlined } from '@ant-design/icons';
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
    Drawer,
    Input,
    Select,
    Upload,
    Tag
} from "antd";
import {
    SEARCH,
    NAVBARS,
    CLOSE,
    THREEDOTS,
    FOLDERBLUE,
    PURPLEDOT,
    GREENDOT,
    REDDOT,
    YELLOWDOT,
    BLUEDOT
} from "@/constants/images";
import intakeData from './formData.json'
import FloatLabel from "../../ReusableComponents/FloatLabel";
import FloatLabelArrow from "../../ReusableComponents/FloatLabelArrow";
import CustomDropDown from "@/components/ReusableComponents/DropDown";
import { CustomTable } from "@/components/ReusableComponents/CustomTable";

const { Header } = Layout;
const { Option } = Select;
const { Dragger } = Upload;
const { Title } = Typography;

const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onDrop({ e }: any) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export default function FormBuilderList() {
    const [items, setItems] = useState<MenuProps['items']>([]);
    const [tableData, setTableData] = useState<any>(intakeData);
    const [open, setOpen] = useState(false);
    const [folderDrawer, setFolderDrawer] = useState(false)
    const [title, setTitle] = useState("Affiliated Entity Creation");
    const [selectLinkToFolderValue, setSelectLinkToFolderValue] = useState<any>();
    const [selectLinkToProjectValue, setSelectLinkToProjectValue] = useState<any>();
    const [selectFolderValue, setSelectFolderValue] = useState<any>();

    const showDrawer = () => {
        setOpen(true);
    }

    const showfolderDrawer = () => {
        setFolderDrawer(true);
    }

    const onClose = () => {
        setOpen(false);
        setFolderDrawer(false);
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
        form: string;
        createdAt: string;
        createdBy: string[];
        status: string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: "Form",
            dataIndex: "form",
            key: "form",
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            key: "createdAt",
        },
        {
            title: "Created By",
            dataIndex: "createdBy",
            key: "createdBy",
        },
        {
            title: "Status",
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
                        onClick={showDrawer}
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
                </Row>
                <Drawer
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={CLOSE} height={18} alt='...' onClick={onClose} />
                            <h2 style={{ color: "#fff", marginRight: "100px", marginTop: "3px" }}>Add File</h2>
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
                        <div className="mb-4">
                            <Dragger {...props} >
                                <Row style={{ justifyContent: 'center' }}>
                                    <InboxOutlined style={{ fontSize: '24px' }} /> &nbsp;Drag or browse from device
                                </Row>
                            </Dragger>
                        </div>
                        <FloatLabelArrow label="Folder" value={selectFolderValue}>
                            <Select
                                showSearch
                                style={{ width: "100%" }}
                                onChange={value => setSelectFolderValue(value)}
                                value={selectFolderValue}
                                suffixIcon={null}
                            >
                                <Option value="Ali">Ali</Option>
                                <Option value="Haider">Haider</Option>
                                <Option value=" Asad">Asad</Option>
                                <Option value="Maaz">Maaz</Option>
                            </Select>
                        </FloatLabelArrow>
                    </div>
                </Drawer>
                <Drawer
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Image src={CLOSE} height={18} alt='...' onClick={onClose} />
                        <h2 style={{ color: "#fff", marginRight: "100px", marginTop: "3px" }}>Add Folder</h2>
                        <Button style={{ backgroundColor: "#7E81E8", width: "100px", color: "#fff" }}  >
                            Add
                        </Button>
                    </div>
                    }
                    className={styles.customDrawerHeader}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    key="folderDrawer"
                    open={folderDrawer}
                >
                    <FloatLabel label="Title" value={title}>
                        <Input style={{ height: "48px" }} value={title} onChange={e => setTitle(e.target.value)} />
                    </FloatLabel>

                    <FloatLabelArrow label="Link To Folder" value={selectLinkToFolderValue}>
                            <Select
                                showSearch
                                style={{ width: "100%" }}
                                onChange={value => setSelectLinkToFolderValue(value)}
                                value={selectLinkToFolderValue}
                                suffixIcon={null}
                            >
                                <Option value="Ali">Ali</Option>
                                <Option value="Haider">Haider</Option>
                                <Option value=" Asad">Asad</Option>
                                <Option value="Maaz">Maaz</Option>
                            </Select>
                        </FloatLabelArrow>
                        <FloatLabelArrow label="Link To Project" value={selectLinkToProjectValue}>
                            <Select
                                showSearch
                                style={{ width: "100%" }}
                                onChange={value => setSelectLinkToProjectValue(value)}
                                value={selectLinkToProjectValue}
                                suffixIcon={null}
                            >
                                <Option value="Ali">Ali</Option>
                                <Option value="Haider">Haider</Option>
                                <Option value=" Asad">Asad</Option>
                                <Option value="Maaz">Maaz</Option>
                            </Select>
                        </FloatLabelArrow>
                </Drawer>
            </Layout>
        </>
    );
}

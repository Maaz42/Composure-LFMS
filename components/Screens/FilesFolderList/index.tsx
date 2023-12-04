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
    Upload
} from "antd";
import {
    SEARCH,
    NAVBARS,
    CLOSE,
    THREEDOTS,
    FOLDERBLUE
} from "@/constants/images";
import intakeData from './fileData.json'
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

export default function FilesFolderList() {
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
        title: string;
        addedBy: string;
        dateAdded: string[];
        dateModified: string[];
        revision: any;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: "title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Added By",
            dataIndex: "addedBy",
            key: "addedBy",
        },
        {
            title: "Date Added",
            dataIndex: "dateAdded",
            key: "dateAdded",
        },
        {
            title: "Last Modified",
            dataIndex: "lastModified",
            key: "lastModified",
        },
        {
            title: "Revisions",
            dataIndex: "revisions",
            key: "revisions",
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
                        setItems(fileDropDown);
                    }} style={{ maxWidth: "24px", width: "24px", height: "28px", cursor: "pointer" }} />
                </Dropdown>
            ),
        },
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

    const fileDropDown = [
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

    const folderDropdown = [
        {
            key: "1",
            label: "Link to Folder",
        },
        {
            key: "3",
            label: "Link to Project"
        },
        {
            key: "4",
            label: "Delete",
        },
        {
            key: "5",
            label: "Download",
        },
        {
            key: "6",
            label: "Rename",
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
                        <Title level={4}>File Management</Title>
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
                    <CustomDropDown title={"User"} dropDownItems={platformDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"Type"} dropDownItems={statusDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                    <CustomDropDown title={"All Projects"} dropDownItems={createdByDropDown} />
                    <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
                </Flex>
                <Flex align={"center"} justify="space-between">

                    <Button
                        onClick={showfolderDrawer}
                        style={{ color: "white", background: "#333793", marginRight: "20px" }}
                    >
                        Add Folders
                    </Button>
                    <Button
                        onClick={showDrawer}
                        style={{ color: "white", background: "#333793", marginRight: "20px" }}
                    >
                        Add Files
                    </Button>
                </Flex>
            </Flex>
            <Layout
                style={{
                    height: "calc(100vh - 120px)",
                    background: "white"
                }}>
                <Title level={4} className="ml-2 mt-2">Folders</Title>
                <Row>
                    <Col xxl={6} lg={6} md={8} sm={12} xs={24}>
                        <div className={styles.innerBox}>
                            <div className="d-flex align-center">
                                <Image src={FOLDERBLUE} height={18} alt="" /> &nbsp; Employement Litigation
                            </div>
                            <Dropdown
                                menu={{ items }}
                                trigger={["click"]}
                            >
                                <Image src={THREEDOTS} alt="..." onClick={(e) => {
                                    e.preventDefault();
                                    setItems(folderDropdown);
                                }} style={{ maxWidth: "20px", width: "20px", height: "20px", cursor: "pointer" }} />
                            </Dropdown>
                        </div>
                    </Col>
                    <Col xxl={6} lg={6} md={8} sm={12} xs={24}>
                        <div className={styles.innerBox}>
                            <div className="d-flex align-center">
                                <Image src={FOLDERBLUE} height={18} alt="" /> &nbsp; Employement Litigation
                            </div>
                            <Dropdown
                                menu={{ items }}
                                trigger={["click"]}
                            >
                                <Image src={THREEDOTS} alt="..." onClick={(e) => {
                                    e.preventDefault();
                                    setItems(folderDropdown);
                                }} style={{ maxWidth: "20px", width: "20px", height: "20px", cursor: "pointer" }} />
                            </Dropdown>
                        </div>
                    </Col>
                    <Col xxl={6} lg={6} md={8} sm={12} xs={24}>
                        <div className={styles.innerBox}>
                            <div className="d-flex align-center">
                                <Image src={FOLDERBLUE} height={18} alt="" /> &nbsp; Employement Litigation
                            </div>
                            <Dropdown
                                menu={{ items }}
                                trigger={["click"]}
                            >
                                <Image src={THREEDOTS} alt="..." onClick={(e) => {
                                    e.preventDefault();
                                    setItems(folderDropdown);
                                }} style={{ maxWidth: "20px", width: "20px", height: "20px", cursor: "pointer" }} />
                            </Dropdown>
                        </div>
                    </Col>
                    <Col xxl={6} lg={6} md={8} sm={12} xs={24}>
                        <div className={styles.innerBox}>
                            <div className="d-flex align-center">
                                <Image src={FOLDERBLUE} height={18} alt="" /> &nbsp; Employement Litigation
                            </div>

                            <Dropdown
                                menu={{ items }}
                                trigger={["click"]}
                            >
                                <Image src={THREEDOTS} alt="..." onClick={(e) => {
                                    e.preventDefault();
                                    setItems(folderDropdown);
                                }} style={{ maxWidth: "20px", width: "20px", height: "20px", cursor: "pointer" }} />
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
                <Title level={4} className="ml-2">Files</Title>
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

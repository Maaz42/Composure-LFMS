import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps, RadioChangeEvent } from "antd";
import { useRouter } from 'next/router'

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
  TableColumnsType,
  Space,
  Progress,
  Avatar,
  Tooltip,
  Radio,
  Menu,
  Modal,
  List,
} from "antd";

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
  ADDCIRCLE,
  ARROWUP,
  ADDCIRCLEWHITE,
  LIGHT_BULB,
  USER_ADD,
  ARROW_DOWN,
  TICK_SQUARE,
  ARROW_DOWN_2,
  ARROW_DOWN_BUTTON,
  DOTS_VERTICAL,
  SWITCH
} from "@/constants/images";
import projectsData from "./projectData.json";
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
  stage: string;
  progress: any[];
  collaboration: any[];
  rowData: any[];
}

export default function ProjectList() {
  const [items, setItems] = useState<MenuProps["items"]>([]);
  const [tableData, setTableData] = useState<any>(projectsData);
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const [collaoratorDrawer, setCollaoratorDrawer] = useState(false);
  const [projectTitle, setproJectTitle] = useState("");
  const [projectWorkflow, setprojectWorkflow] = useState("");
  const [selectCollaboratorValue, setSelectCollaoratorValue] = useState<any>();
  const [value, setValue] = useState("Public");
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
  const [expandedRows, setExpandedRows] = useState<any[]>([]);





  const handleRowClick = (key: any) => {
    const keys = expandedRowKeys.includes(key)
      ? expandedRowKeys.filter((k) => k !== key)
      : [...expandedRowKeys, key];
    setExpandedRowKeys(keys);
    const isExpanded = expandedRows.includes(key);
    const updatedRows = isExpanded
      ? expandedRows.filter((k) => k !== key)
      : [...expandedRows, key];
    setExpandedRows(updatedRows);

  };
  const onRadioChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const ModalData = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];


  const onClose = () => {
    setOpen(false);
    setCollaoratorDrawer(false);
  };

  const showAssingeeDrawer = () => {
    setCollaoratorDrawer(true);
  };

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
      key: "2",
      label: <a>Delete</a>,
    },
  ];

  const expandedRowRender = (rowData: any) => {
    return (
      <>
        {rowData.rowData.map((data: any) => {
          return (
            <>
              <div
                style={{
                  borderBottom: "1px solid #dbdbdb",
                  padding: "5px 0 5px 0px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ maxWidth: "720px" }}>{data}</div>
                <div>
                  <Button
                    style={{
                      color: "#7E81E8",
                      marginRight: "20px",
                      border: "1px solid #7E81E8",
                      borderRadius: "20px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <Image
                        src={ADDCIRCLE}
                        alt="..."
                        style={{ marginRight: "5px" }}
                      />{" "}
                      Add Collaborators
                    </div>
                  </Button>
                  <Button
                    style={{
                      color: "#7E81E8",
                      marginRight: "20px",
                      border: "1px solid #7E81E8",
                      borderRadius: "20px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <Image
                        src={ADDCIRCLE}
                        alt="..."
                        style={{ marginRight: "5px" }}
                      />{" "}
                      Add Subtask{" "}
                    </div>
                  </Button>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  const exportDropDown = [
    {
      key: '1',
      label: "PDF"
    },
    {
      key: '2',
      label: "CSV"
    },
    {
      key: '3',
      label: "Excel"
    },
  ];

  const threedotdropdown = [
    {
      key: '1',
      label: "Manage Fields",
      onClick: () => setModalVisible(true),
    },

  ];

  const hideModal = () => setModalVisible(false);
  const columns: TableColumnsType<DataType> = [
    {
      title: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Title</div>

        </div>
      ),
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.length - b.title.length,
      width: "480px",

      render: (text, record: any) => (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => handleRowClick(record.key)}
        >
          {text}
        </span>
      ),
    },
    {
      title: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Due Date</div>

        </div>
      ),
      dataIndex: "due_date",
      key: "due_date",
      sorter: (a, b) => new Date(a.due_date as string).getTime() - new Date(b.due_date as string).getTime(),


      width: "110px",
    },
    {
      title: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Stage</div>

        </div>
      ),
      key: "stage",
      sorter: (a, b) => a.stage.length - b.stage.length,
      width: "130px",
      render: (_, { stage }) => {
        let color =
          stage === "In Progress"
            ? "#7F7FEF"
            : stage === "Complete"
              ? "#4CAF50"
              : stage === "New"
                ? "#D83A36"
                : stage === "Signature"
                  ? "#FF9800"
                  : stage === "To Projects" || "To Tickets"
                    ? "#2196F3"
                    : "#000000";
        return (
          <>
            <Tag
              style={{
                backgroundColor: "#ffff",
                display: "inline-flex",
                border: "1px solid #E0E0E0",
                borderRadius: "65px",
                justifyContent: "space-evenly",
                color: color,
              }}
              key={stage}
            >
              {stage == "In Progress" ? (
                <Image src={PURPLEDOT} height={10} alt="aaa" />
              ) : stage == "Complete" ? (
                <Image src={GREENDOT} height={10} alt="" />
              ) : stage == "New" ? (
                <Image src={REDDOT} height={10} alt="" />
              ) : stage == "Signature" ? (
                <Image src={YELLOWDOT} height={10} alt="" />
              ) : stage == "To Projects" || "To Tickets" ? (
                <Image src={BLUEDOT} height={10} alt="" />
              ) : (
                <></>
              )}
              &nbsp;{stage}
            </Tag>
          </>
        );
      }
    },
    {
      title: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Progress</div>

        </div>
      ),
      key: "progress",
      width: "170px",
      render: (_, { progress }) => (
        <>
          {progress.map((p) => {
            return (
              <div key={p} className="flex">
                <Progress size="small" percent={60} showInfo={false} />
                {p.gained}/{p.total}
              </div>
            );
          })}
        </>
      ),
    },
    {
      title: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Collaboration</div>

        </div>
      ),
      key: "collaboration",
      width: "130px",
      render: (_, { collaboration }) => (
        <>
          <Avatar.Group>
            {collaboration.map((collaboration) => {
              return (
                <Space size="middle" key={collaboration}>
                  <Tooltip title={collaboration.name} placement="bottom">
                    <Avatar
                      size="small"
                      style={{ border: "1px solid gray" }}
                      src={collaboration.img}
                    />
                  </Tooltip>
                </Space>
              );
            })}
            <Avatar
              size="small"
              style={{
                border: "1px dashed gray",
                backgroundColor: "#ffff",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Edit Assignee" placement="bottom">
                <Image
                  src={EDIT}
                  height={25}
                  alt="..."
                  onClick={showAssingeeDrawer}
                />
              </Tooltip>
            </Avatar>
          </Avatar.Group>
        </>
      ),
    },

    {
      title: "Quick Actions",
      dataIndex: "quickActions",
      key: "quickActions",
      width: "120px",

      render: (_, record) => (
        <div style={{ display: "flex" }}>
          <a
            onClick={(e) => {

              e.preventDefault();
              e.stopPropagation();

            }}
          >

            <Image
              src={USER_ADD}
              alt="..."
              style={{ width: "auto", height: "auto", marginRight: "15px", border: "1px", borderRadius: "7px" }}
              onClick={(e) => {
                e.stopPropagation();
                showAssingeeDrawer();
              }}
            />

          </a>
          <a
            onClick={(e) => {

              e.preventDefault();
              e.stopPropagation();
              setItems(statusDropDown)


            }}
          >

            <Dropdown
              trigger={["click"]}
              menu={{ items }}>
              <Image
                src={TICK_SQUARE}
                alt="..."
                style={{ width: "auto", height: "auto", marginRight: "15px", border: "1px", borderRadius: "7px" }}
              />
            </Dropdown>
          </a>

          <a
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleRowClick(record.key);


            }}
          >

            <Image

              src={expandedRows.includes(record.key) ? ARROW_DOWN_2 : ARROW_DOWN}
              alt="..."
              style={{ width: "auto", height: "auto", marginRight: "15px", border: "1px", borderRadius: "7px" }}
            />

          </a>
        </div>
      ),
    },
  ];

  const userDropDown = [
    {
      key: "1",
      label: " User 1st menu item",
    },
    {
      key: "2",
      label: "All 2nd menu item",
    },
    {
      key: "3",
      label: "All 3rd menu item",
    },
  ];

  const statusDropDown = [
    {
      key: "1",
      label: (
        <div className="flex">
          <Image style={{ marginRight: "5px" }} src={REDDOT} alt="..." />{" "}
          <div>New</div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex">
          <Image style={{ marginRight: "5px" }} src={YELLOWDOT} alt="..." />{" "}
          <div>In Review</div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex">
          <Image style={{ marginRight: "5px" }} src={BLUEDOT} alt="..." />{" "}
          <div>In Progress</div>
        </div>
      ),
    },
    {
      key: "4",
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

  const typeDropDown = [
    {
      key: "1",
      label: "Type 1st menu item",
    },
    {
      key: "2",
      label: " Type 2nd menu item",
    },
    {
      key: "3",
      label: "Type 3rd menu item",
    },
  ];

  const allProjectsDropDown = [
    {
      key: "1",
      label: "Project 1",
    },
    {
      key: "2",
      label: "Project 2",
    },
    {
      key: "3",
      label: "Project 3",
    },
  ];
  const ManageFieldsData = [
    {
      key: "1",
      label: "Title",
    },
    {
      key: "2",
      label: "Due Date",
    },
    {
      key: "3",
      label: "Stage",
    },
    {
      key: "4",
      label: "Progress",
    },
    {
      key: "5",
      label: "Collaborators",

    },
    {
      key: "6",
      label: "Quick Actions",
    },
  ];


  const paginationDropDown = [
    {
      key: "1",
      label: 10,
    },
    {
      key: "2",
      label: 15,
    },
    {
      key: "3",
      label: 20,
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
            <Title level={4}>Workflows</Title>
            <Flex
              className={styles.collapseTo}
              justify={"flex-end"}
              align={"center"}
            >
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
        <MenuOutlined
          className={styles.collapseMenu}
          style={{ marginLeft: "10px" }}
        />
        <Flex
          className={styles.collapseTo}
          align={"center"}
          justify="space-between"
        >
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <Title className={styles.dropDownFilter}>
              <Image
                src={NAVBARS}
                height={18}
                alt=""
                onClick={({ e }: any) => { }}
              />
            </Title>
          </Dropdown>
          <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
          <CustomDropDown title={"Status"} dropDownItems={statusDropDown} />
          <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
          <CustomDropDown title={"User"} dropDownItems={userDropDown} />
          <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
          <CustomDropDown title={"Type"} dropDownItems={typeDropDown} />
          <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
          <CustomDropDown
            title={"All Project"}
            dropDownItems={allProjectsDropDown}
          />
        </Flex>
        <Flex align={"center"} justify="space-between">
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => {
              e.preventDefault()
              setItems(exportDropDown)
            }
            }>
              <Button
                style={{
                  color: "white",
                  background: "#333793",
                  marginRight: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "5px" }}>Export</span>
                <Image alt="export button" src={ARROW_DOWN_BUTTON} />
              </Button>

            </a>
          </Dropdown>
          <Tooltip title={"Add Project"}>
            <Button
              onClick={showDrawer}
              style={{
                color: "white",
                background: "#333793",
                marginRight: "20px",
              }}
            >
              Add Workflow
            </Button>
          </Tooltip>
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => {
              e.preventDefault()
              setItems(threedotdropdown)
            }
            }>
              <Image
                style={{ marginRight: "3px" }} alt="3" src={DOTS_VERTICAL} />
            </a>
          </Dropdown>
        </Flex>
      </Flex>
      <Layout
        style={{
          height: "calc(100vh - 120px)",
          background: "white",
        }}
      >
        <Row>
          <Col span={24}>
            <CustomTable
              columns={columns}
              data={tableData}
              isChecked={2}
              onRow={() => ({
                onClick: () => {
                  console.log("new one")
                  router.push("/projectDetail")

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
          </Col>
        </Row>
        <Row style={{ justifyContent: "end" }}>
          <Col>
            <a
              onClick={(e) => {
                e.preventDefault();
                setItems(paginationDropDown);
              }}
            >
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <Title className={styles.paginationdropDownField}>
                  Rows Per Page: {pageSize}{" "}
                  <Image src={ARROW} height={18} alt="^" />
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
          <Col></Col>
        </Row>
        <Drawer
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Image src={CLOSE} height={18} alt="..." onClick={onClose} />
              <h2
                style={{
                  color: "#fff",
                  marginRight: "100px",
                  marginTop: "3px",
                }}
              >
                Add Workflow{" "}
              </h2>
              <Button
                style={{
                  backgroundColor: "#7E81E8",
                  width: "100px",
                  color: "#fff",
                }}
              >
                Add
              </Button>
            </div>
          }
          className={styles.customDrawerHeader}
          placement="right"
          closable={false}
          onClose={onClose}
          open={open}
          key="projectDrawer"
        >
          <div>
            <div className="mb-5">
              <FloatLabel label="Title" value={projectTitle}>
                <Input
                  style={{ height: "48px" }}
                  value={projectTitle}
                  onChange={(e) => setproJectTitle(e.target.value)}
                />
              </FloatLabel>
            </div>
            <div className="mb-5">
              <FloatLabel label="Workflow Template" value={projectWorkflow}>
                <Input
                  style={{ height: "48px" }}
                  value={projectWorkflow}
                  onChange={(e) => setprojectWorkflow(e.target.value)}
                />
              </FloatLabel>
            </div>
            <div className="mb-5">
              <FloatLabelArrow
                label="Collaborators"
                value={selectCollaboratorValue}
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  onChange={(value) => setSelectCollaoratorValue(value)}
                  value={selectCollaboratorValue}
                  suffixIcon={null}
                >
                  <Option value="Ali">Ali</Option>
                  <Option value="Haider">Haider</Option>
                  <Option value=" Asad">Asad</Option>
                  <Option value="Maaz">Maaz</Option>
                </Select>
              </FloatLabelArrow>
            </div>
            <div
              style={{
                color: "#9e9e9e",
                marginBottom: "10px",
                fontSize: "12px",
              }}
            >
              Project Privacy
            </div>
            <Radio.Group onChange={onRadioChange} value={value}>
              <Radio value={"Public"}>Public</Radio>
              <Radio value={"Private"}>Private</Radio>
            </Radio.Group>
          </div>
        </Drawer>
        <Drawer
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Image src={CLOSE} height={18} alt="..." onClick={onClose} />
              <h2
                style={{
                  color: "#fff",
                  marginRight: "33px",
                  marginTop: "6px",
                  fontSize: "14px",
                }}
              >
                Collaborator Management
              </h2>
              <Button
                style={{
                  backgroundColor: "#7E81E8",
                  width: "100px",
                  color: "#fff",
                }}
              >
                Save
              </Button>
            </div>
          }
          className={styles.customDrawerHeader}
          placement="right"
          closable={false}
          onClose={onClose}
          key="collaboratorDrawer"
          open={collaoratorDrawer}
        >
          <div className="mb-5">
            <FloatLabelArrow
              label="Collaborators"
              value={selectCollaboratorValue}
            >
              <Select
                showSearch
                style={{ width: "100%" }}
                onChange={(value) => setSelectCollaoratorValue(value)}
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
      </Layout>

      <Modal visible={isModalVisible} onCancel={hideModal}>
        <div style={{ backgroundColor: "#FAFAFA" }}>
          <Title level={5}>Mange Fields</Title>
        </div>

        {ManageFieldsData.map((data) => {
          return (
            <Row key={data.label} style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#FAFAFA", borderRadius: "1px solid #FAFAFA", marginTop: "20px" }}>
              <h1 style={{ marginLeft: "10px" }}>{data.label}</h1>
              <Button><Image alt="swicth" src={SWITCH} /></Button>
            </Row>)
        })}

      </Modal>
    </>
  );
}

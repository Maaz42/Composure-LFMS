import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { MenuOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { MenuProps } from "antd";
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
  Tag,
} from "antd";
import { SEARCH, NAVBARS, THREEDOTS, ARROWUP, ARROW } from "@/constants/images";
import intakeData from "./formData.json";
import CustomDropDown from "@/components/ReusableComponents/DropDown";
import { CustomTable } from "@/components/ReusableComponents/CustomTable";
import { useRouter } from "next/router";

const { Header } = Layout;
const { Title } = Typography;

export default function FormBuilderList() {
  const [items, setItems] = useState<MenuProps["items"]>([]);
  const [tableData, setTableData] = useState<any>(intakeData);
  const [pageSize, setPageSize] = useState(10);
  const router = useRouter();

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
      title:"Form",
      dataIndex: "form",
      key: "form",
      width: "920px",
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
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "130px",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
      width: "190px",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: "160px",
      render: (_, { status }) => (
        <>
          {status.map((status) => {
            let color =
              status == "Pending"
                ? "#7F7FEF"
                : status == "Complete"
                ? "#4CAF50"
                : status == "On Hold"
                ? "#D83A36"
                : status == "Signature"
                ? "#FF9800"
                : status == "To Projects" || "To Tickets"
                ? "#2196F3"
                : "#000000";
            return (
              <Tag
                style={{
                  backgroundColor: "#ffff",
                  display: "inline-flex",
                  border: "1px solid #E0E0E0",
                  borderRadius: "65px",
                  justifyContent: "space-evenly",
                  padding: "0 10px 0 10px",
                  color: color,
                }}
                key={status}
              >
                {status == "Pending" ? (
                  <div
                    className={styles.purple}
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      marginTop: "5px",
                    }}
                  ></div>
                ) : status == "Complete" ? (
                  <div
                    className={styles.green}
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      marginTop: "5px",
                    }}
                  ></div>
                ) : status == "On Hold" ? (
                  <div
                    className={styles.red}
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      marginTop: "5px",
                    }}
                  ></div>
                ) : status == "Signature" ? (
                  <div
                    className={styles.yellow}
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      marginTop: "5px",
                    }}
                  ></div>
                ) : status == "To Projects" || "To Tickets" ? (
                  <div
                    className={styles.blue}
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      marginTop: "5px",
                    }}
                  ></div>
                ) : (
                  <></>
                )}
                &nbsp; {status}
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
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Image
            src={THREEDOTS}
            alt="..."
            onClick={(e) => {
              e.preventDefault();
              setItems(formDropDown);
            }}
            style={{
              maxWidth: "24px",
              width: "24px",
              height: "28px",
              cursor: "pointer",
            }}
          />
        </Dropdown>
      ),
    },
  ];

  const statusDropDown = [
    {
      key: "1",
      label: "Pending",
    },
    {
      key: "2",
      label: "Complete",
    },
    {
      key: "3",
      label: "To Tickets",
    },
    {
      key: "4",
      label: "To Projects",
    },
  ];

  const formDropDown = [
    {
      key: "1",
      label: "Move to Folder",
    },
    {
      key: "3",
      label: "Download",
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
                onClick={({ e }: any) => {
                  e.preventDefault();
                }}
              />
            </Title>
          </Dropdown>
          <CustomDropDown title={"Status"} dropDownItems={statusDropDown} />
          <Divider style={{ height: "50px", margin: "0" }} type="vertical" />
        </Flex>
        <Flex align={"center"} justify="space-between">
          <Button
            onClick={() => router.push("/formBuilderAdd")}
            style={{
              color: "white",
              background: "#333793",
              marginRight: "20px",
            }}
          >
            Add Form
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
          <Col span={24}>
            <CustomTable columns={columns} data={tableData} isChecked={0} />
          </Col>
          <Row className="w-full" style={{ justifyContent: "end" }}>
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
                    Rows Per Page: {pageSize}
                    <Image src={ARROW} height={18} alt="^" />
                  </Title>
                </Dropdown>
              </a>
            </Col>
            <Pagination
              total={tableData.length}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} `
              }
              defaultPageSize={10}
              pageSize={pageSize}
              defaultCurrent={1}
            />
            <Col></Col>
          </Row>
        </Row>
      </Layout>
    </>
  );
}

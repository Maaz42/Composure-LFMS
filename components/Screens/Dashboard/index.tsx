import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import { MoreOutlined } from "@ant-design/icons";
import { Chart } from "react-google-charts";

import {
  Button,
  Flex,
  Typography,
  Layout,
  Row,
  Col,
  Space,
  Dropdown,
} from "antd";

import {
  SEARCH,
  DASHBOARDICON,
  BUILDING,
  TODO,
  USERIMAGE,
  INFO,
} from "@/constants/images";

const { Header } = Layout;
const { Title } = Typography;

export default function Dashboard() {
  useState<any>();
  const [items, setItems] = useState<any>([])
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const markAsDropDown = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <div
            className={styles.yellow}
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></div>
          <div>Not Required</div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center">
          <div
            className={styles.green}
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></div>
          <div>Complete</div>
        </div>
      ),
    },
  ];

  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];

  const handleSearch = ({ event }: any) => {
    const searchTerm = event.target.value;
    console.log("Search term:", searchTerm);
  };

  const projectsData = [
    { projectName: "Project A", number: 1 },
    { projectName: "Project B", number: 2 },
    { projectName: "Project C", number: 3 },
    { projectName: "Project D", number: 4 },
    { projectName: "Project E", number: 5 },
    { projectName: "Project F", number: 6 },
    { projectName: "Project G", number: 7 },
  ];

  const options = {
    title: "Total Projects Total Tasks Total Spend | This year",
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: {
      gridlines: { color: "transparent" }, // Make grid lines on the x-axis transparent
      textPosition: "out", // Move x-axis labels outside
      textStyle: { color: "grey" }, // Change color of x-axis labels to grey
    },
    vAxis: {
      gridlines: { color: "transparent" }, // Make grid lines on the y-axis transparent
      textStyle: { color: "grey" }, // Change color of y-axis labels to grey
    },
    backgroundColor: "#F7F9FB",
    chartArea: {
      left: 50,
      top: 20,
      width: "100%",
      height: "70%",
    }, // Expand chart area
  };

  const dataPie = [
    ["Task", "Hours per Day"],
    ["Jira", 11],
    ["Composure", 2],
    ["Email", 2],
    ["Slack", 2],
  ];

  const optionsPie = {
    pieHole: 0.5,
    is3D: false,
    title: "Intake Received by Platform",

    slices: [
      { color: "#95A4FC" },
      { color: "#1C1C1C" },
      { color: "#BAEDBD" },
      { color: "#B1E3FF" },
    ],
    pieSliceText: "none",
    backgroundColor: "#F7F9FB",
  };

  const optionsBar: any = {
    chart: {
      background: "#F7F9FB",
      foreColor: "#333", // Text color
      toolbar: {
        show: false, // Hide toolbar if not needed
      },
    },
    title: {
      text: "Intake Sent By Platform",
      align: "left", // Align the title to the left
      marginTop: 100,

      style: {
        fontSize: "14px",
        fontWeight: 600,
        fontFamily: "Work Sans, sans-serif", // Set the font family
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Ircolad",
        "Brightflag",
        "Icertis",
        "GDrive",
        "Dropbox",
        "Other",
      ],
      labels: {
        style: {
          colors: "#333", // X-axis label color
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#333", // Y-axis label color
        },
      },
    },
  };

  const seriesData = [
    {
      name: "Ircolad",
      data: [
        { x: "Ircolad", y: 10, color: "#4285F4" },
        { x: "Brightflag", y: 20, color: "#0F9D58" },
        { x: "Icertis", y: 15, color: "#F4B400" },
        { x: "GDrive", y: 25, color: "#DB4437" },
        { x: "Dropbox", y: 30, color: "#3F51B5" },
        { x: "Other", y: 18, color: "#FF5722" },
      ],
    },
  ];

  interface ProjectDetail {
    text: string;
  }

  const projectDetails: ProjectDetail[] = [
    { text: "FATCA/CRS Requirements: Please provide for all non-coinvestors a complete and valid OECD Self-Certification Form, IRS Form W-9, W-8BEN, W-8BEN-E, W-8ECI, W-8EXP or W-8IMY, as applicable, and a certificate of information or equivalent" },
    { text: "Structure Chart" },
    { text: "Logo Licensing Agreement" },
    { text: "Draft Handbook" },
  ];

  return (
    <>
      <Layout
        style={{
          height: "calc(100vh)",
          background: "white",
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={19} xl={19}>
            <Header
              style={{
                padding: 0,
                background: "white",
                borderBottom: "1px solid #eeeeee",
              }}
            >
              <Flex gap="middle" align="start" vertical className="mx-3">
                <Flex
                  className={styles.topBoxStyle}
                  justify={"space-between"}
                  align={"center"}
                >
                  <Title level={4}>Dashboard</Title>
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
            <Layout
              style={{
                background: "white",
                height: 'calc(100vh - 65px)',
                overflow: 'auto'
              }}
            >
              <Row gutter={[16, 16]} style={{ margin: "30px 3px" }}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                  <Layout
                    style={{
                      height: "100px",
                      position: "relative",
                      backgroundColor: "#BBBCF44D",
                    }}
                  >
                    <Title
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                      level={4}
                    >
                      Projects
                    </Title>
                    <Space
                      style={{
                        position: "absolute",
                        bottom: "25px",
                        right: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={DASHBOARDICON}
                        alt="icon"
                        width={24}
                        height={24}
                      />
                    </Space>
                    <Title style={{ marginLeft: "40px" }} level={4}>
                      42
                    </Title>
                  </Layout>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                  <Layout
                    style={{
                      height: "100px",
                      position: "relative",
                      backgroundColor: "#F8D1D04D",
                    }}
                  >
                    <Title
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                      level={4}
                    >
                      Law Firms
                    </Title>
                    <Space
                      style={{
                        position: "absolute",
                        bottom: "25px",
                        right: "20px",
                        display: "flex", // Use flexbox for responsive layout
                        alignItems: "center", // Center items vertically
                      }}
                    >
                      <Image src={BUILDING} alt="icon" width={24} height={24} />
                    </Space>
                    <Title style={{ marginLeft: "40px" }} level={4}>
                      17
                    </Title>
                  </Layout>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                  <Layout
                    style={{
                      height: "100px",
                      position: "relative",
                      backgroundColor: "#BBBCF44D",
                    }}
                  >
                    <Title
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                      level={4}
                    >
                      Pending Tasks
                    </Title>
                    <Space
                      style={{
                        position: "absolute",
                        bottom: "25px",
                        right: "20px",
                        display: "flex", // Use flexbox for responsive layout
                        alignItems: "center", // Center items vertically
                      }}
                    >
                      <Image src={TODO} alt="icon" width={24} height={24} />
                    </Space>
                    <Title style={{ marginLeft: "40px" }} level={4}>
                      3
                    </Title>
                  </Layout>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                  <Layout
                    style={{
                      height: "100px",
                      position: "relative",
                      backgroundColor: "#F8D1D04D",
                    }}
                  >
                    <Title
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                      level={4}
                    >
                      Departments
                    </Title>
                    <Space
                      style={{
                        position: "absolute",
                        bottom: "25px",
                        right: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={USERIMAGE}
                        alt="icon"
                        width={24}
                        height={24}
                      />
                    </Space>
                    <Title style={{ marginLeft: "40px" }} level={4}>
                      27
                    </Title>
                  </Layout>
                </Col>
              </Row>
              <Row justify="center" gutter={16} style={{ margin: 0 }}>
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                  <div className={styles.responsiveChartContainer}>
                    <Chart
                      chartType="LineChart"
                      width="100%"
                      height="260px"
                      data={data}
                      options={options}
                    />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <div
                    style={{
                      width: "100%",
                      padding: "20px",
                      background: "#F7F9FB",
                      borderRadius: "4px",
                      marginTop: "10px",
                      // overflow: "auto",
                    }}
                  >
                    <h3
                      style={{
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Top Projects
                    </h3>

                    {projectsData.map((project, index) => (
                      <div
                        key={index}
                        style={{
                          marginBottom: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ marginRight: "10px" }}>
                          {project.projectName}
                        </span>
                        <span style={{}}>{project.number}</span>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
              <Row justify="center" gutter={16} style={{ margin: 0 }}>
                <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                  <div
                    style={{
                      width: "100%",
                      padding: "20px",
                      background: "#F7F9FB",
                      borderRadius: "8px",
                      marginTop: "20px",
                    }}
                  >
                    <ReactApexChart
                      options={optionsBar}
                      series={seriesData}
                      type="bar"
                      width="100%"
                      height="320px"
                      colors={["#4285F4", "#0F9D58", "#F4B400", "#DB4437", "#3F51B5", "#FF5722"]}
                    />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                  <div
                    style={{
                      width: "100%",
                      padding: "20px",
                      background: "#F7F9FB",
                      borderRadius: "8px",
                      marginTop: "20px",
                    }}
                  >
                    <Chart
                      chartType="PieChart"
                      width="100%"
                      height="330px"
                      data={dataPie}
                      options={optionsPie}
                    />
                  </div>
                </Col>
              </Row>
            </Layout>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={5}
            xl={5}
            style={{ borderLeft: "1px solid #EEEEEE", height: 'calc(100vh - 0px)', overflow: 'auto' }}
          >
            <Row>
              <Title level={4} className="ml-2 mt-2">
                Pending Tasks
              </Title>
              <Row>
                {projectDetails.map((project) => (
                  <div style={{ margin: "8px", border: '1px solid #dbdbdb', borderRadius: "2%", width: '100%' }} key={project.text}>
                    <div style={{ padding: '20px' }}>
                      <Typography.Text
                        style={{ fontSize: "13px", color: "#2C2543" }}
                      >
                        {project.text}
                      </Typography.Text>
                      <div
                        style={{
                          width: "100%",
                          marginTop: "10px",
                          marginRight: "10px",
                          // padding: "10px",
                          fontSize: "13px",
                        }}
                      >
                        <Typography.Text style={{ color: "9E9E9E" }}>
                          Project
                        </Typography.Text>
                        <div>
                          <a
                            href="your-link-url"
                            style={{
                              textDecoration: "underline",
                            }}
                          >
                            Technology Acquisition
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#FAFAFA",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                      }}
                    >
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
                        </div>
                      </>
                      <Button icon={<MoreOutlined />} />
                    </div>
                  </div>
                ))}
              </Row>
            </Row>
          </Col>
        </Row>
      </Layout>
    </>
  );
}
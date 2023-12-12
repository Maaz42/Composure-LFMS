import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { MenuOutlined, InboxOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { MenuProps, RadioChangeEvent } from "antd";

import dynamic from "next/dynamic";

import {
  Button,
  Divider,
  Dropdown,
  Flex,
  Typography,
  Layout,
  Row,
  Col,
  Space,
  Card,
  Drawer,
  Input,
  Select,
  Upload,
} from "antd";
import {
  SEARCH,
  NAVBARS,
  CLOSE,
  THREEDOTS,
  FOLDERBLUE,
  DASHBOARDICON,
  BUILDING,
  TODO,
  USERIMAGE,
} from "@/constants/images";
// import { Line } from "@ant-design/plots";
import FloatLabel from "../../ReusableComponents/FloatLabel";
import FloatLabelArrow from "../../ReusableComponents/FloatLabelArrow";
import CustomDropDown from "@/components/ReusableComponents/DropDown";
import { CustomTable } from "@/components/ReusableComponents/CustomTable";
import { MoreOutlined } from "@ant-design/icons";
import { Chart } from "react-google-charts";

const { Header } = Layout;
const { Option } = Select;
const { Dragger } = Upload;
const { Title } = Typography;

const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onDrop({ e }: any) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export default function Dashboard() {
  const [items, setItems] = useState<MenuProps["items"]>([]);
  const [tableData, setTableData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [folderDrawer, setFolderDrawer] = useState(false);
  const [title, setTitle] = useState("Affiliated Entity Creation");
  const [selectLinkToFolderValue, setSelectLinkToFolderValue] = useState<any>();
  const [selectLinkToProjectValue, setSelectLinkToProjectValue] =
    useState<any>();
  const [selectFolderValue, setSelectFolderValue] = useState<any>();
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];

  //   const options = {
  //     maintainAspectRatio: false, // Allow chart to expand to container size
  //     scales: {
  //       x: {
  //         grid: {
  //           color: "grey", // X-axis grid color
  //         },
  //         ticks: {
  //           color: "grey", // X-axis label color
  //         },
  //       },
  //       y: {
  //         grid: {
  //           color: "grey", // Y-axis grid color
  //         },
  //         ticks: {
  //           color: "grey", // Y-axis label color
  //         },
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         position: "bottom",
  //       },
  //     },
  //   };

  const config: any = {
    data,
    xField: "year",
    yField: "gdp",
    seriesField: "name",
    yAxis: {
      tickCount: 6,
    },
    legend: {
      position: "top",
    },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const showfolderDrawer = () => {
    setFolderDrawer(true);
  };

  const onClose = () => {
    setOpen(false);
    setFolderDrawer(false);
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

  interface DataType {
    key: React.Key;
    title: string;
    addedBy: string;
    dateAdded: string[];
    dateModified: string[];
    revision: any;
  }

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
    title: "Total Projects Total Tasks Total Spend | &bull;This year",
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
    backgroundColor: "#f0f0f0",
    chartArea: {
      left: 50,
      top: 20,
      width: "100%",
      height: "70%",
    }, // Expand chart area
  };

  // const dataBar = [
  //   ["", ""],
  //   ["Ircolad", 100],
  //   ["Brightflag", 100],
  //   ["Icertis", 110],
  //   ["GDrive", 138],
  //   ["Dropbox", 120],
  //   ["Other", 120],
  // ];

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
    backgroundColor: "#f0f0f0",
  };
  // const optionsBar = {
  //   chart: {
  //     backgroundColor: {
  //       fill: "#F4F4F4", // Set the desired background color
  //     },
  //     title: "Intake Sent By Platform",
  //   },
  //   // hAxis: {
  //   //   gridlines: { color: "transparent" }, // Make grid lines on the x-axis transparent
  //   //   textPosition: "out", // Move x-axis labels outside
  //   //   textStyle: { color: "grey" }, // Change color of x-axis labels to grey
  //   // },
  //   // vAxis: {
  //   //   gridlines: { color: "transparent" }, // Make grid lines on the y-axis transparent
  //   //   textStyle: { color: "grey" }, // Change color of y-axis labels to grey
  //   // },
  //   backgroundColor: "#f0f0f0",
  //   chartArea: {
  //     left: 50,
  //     top: 20,
  //     width: "100%",
  //     height: "70%",
  //   },
  //   colors: ["#4285F4", "#0F9D58", "#F4B400", "#DB4437", "#3F51B5", "#FF5722"],
  // };

  const optionsBar = {
    chart: {
      background: "#f0f0f0",
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
    colors: ["#4285F4", "#0F9D58", "#F4B400", "#DB4437", "#3F51B5", "#FF5722"],
  };

  const dataBar = [
    {
      data: [100, 100, 110, 138, 120, 120],
    },
  ];
  interface ProjectDetail {
    text: string;
  }

  const projectDetails: ProjectDetail[] = [
    {
      text: "FATCA/CRS Requirements: Please provide for all non-coinvestors a complete and valid OECD Self-Certification Form, IRS Form W-9, W-8BEN, W-8BEN-E, W-8ECI, W-8EXP or W-8IMY, as applicable, and a certificate of information or equivalent",
    },
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
                  style={topBoxStyle}
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
                      Law Firms{" "}
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
                      background: "#f0f0f0",
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
                      background: "#f0f0f0", // Light grey background
                      borderRadius: "8px",

                      marginTop: "20px",
                    }}
                  >
                    {/* <Chart
                    chartType="Bar"
                    width="100%"
                    height="330px"
                    data={dataBar}
                    options={optionsBar}
                  /> */}
                    <ReactApexChart
                      options={optionsBar}
                      series={dataBar}
                      type="bar"
                      width="100%"
                      height="320px"
                    />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                  <div
                    style={{
                      width: "100%",
                      padding: "20px",
                      background: "#f0f0f0", // Light grey background
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
            style={{ borderLeft: "1px solid grey" }}
          >
            <Row>
              <Title level={4} className="ml-2 mt-2">
                Pending Tasks
              </Title>

              <Row>
                {projectDetails.map((project) => (
                  <div style={{ margin: "8px 8px 8px 8px" }} key={project.text}>
                    <Card
                      style={{
                        borderRadius: "2%",
                        width: "100%",
                        display: "flex",
                      }}
                    >
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

                      <div
                        style={{
                          backgroundColor: "lightgrey",
                          width: "100%",
                          marginTop: "10px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <span>Mark As:</span>
                        <Button icon={<MoreOutlined />} />
                      </div>
                    </Card>
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

import React, { useState } from "react";
import { Table, ConfigProvider } from "antd";

export const CustomTable = ({
  columns,
  data,
  isChecked,
  onRow,
  onValueChange = () => {
    return;
  },
  expandable = null,
}: any) => {
  const [tableData, setTableData] = useState<any>(data);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const scroll: { x?: number | string; y?: number | string } = {};

  scroll.y = 700;

  scroll.x = 1000;

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    onValueChange(newSelectedRowKeys.length);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#BBBBF9",
              headerColor: "#333793",
              headerBorderRadius: 0,
              rowExpandedBg: "#f3f3f3",
              cellPaddingBlock: 5,
            },
          },
        }}
      >
        {isChecked == 0 ? (
          //simple table
          <Table
            columns={columns}
            dataSource={tableData}
            style={{ overflowX: "auto", cursor: "pointer" }}
            pagination={false}
            expandable={expandable}
            onRow={onRow}
          />
        ) : isChecked == 1 ? (
          //checkbox table
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={tableData}
            style={{ overflowX: "auto", cursor: "pointer" }}
            pagination={false}
            scroll={scroll}
            onRow={onRow}
          />
        ) : (
          //expandable table
          <Table
            rowSelection={rowSelection}
            columns={columns}
            style={{ cursor: "pointer" }}
            expandable={expandable}
            dataSource={tableData}
            pagination={false}
            scroll={{ y: 700 }}
            onRow={onRow}
          />
        )}
      </ConfigProvider>
    </>
  );
};

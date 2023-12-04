import React, { useState } from "react";
import { Table, ConfigProvider } from "antd";

export const CustomTable = ({ columns, data, isChecked, expandable = null }: any) => {
  const [tableData, setTableData] = useState<any>(data)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
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
              rowExpandedBg: "#f3f3f3"
            },
          },
        }}
      >
        {
          isChecked == 0 ?
            <Table columns={columns} dataSource={tableData} style={{ overflowX: "auto" }} pagination={false} />
            :
            (
              isChecked == 1 ?
                <Table rowSelection={rowSelection} columns={columns} dataSource={tableData} style={{ overflowX: "auto" }} pagination={false} />
                :
                <Table rowSelection={rowSelection} columns={columns} expandable={expandable} dataSource={tableData} pagination={false} />
            )
        }
      </ConfigProvider>
    </>
  )
}

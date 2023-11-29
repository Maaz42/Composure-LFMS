import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import type { MenuProps } from 'antd';
import {
    Dropdown,
    Typography,
    Input,
    theme
} from "antd";
import { ARROW } from "@/constants/images";
const { Title } = Typography;
const { useToken } = theme;

export default function CustomDropDown({ title, dropDownItems }: any) {
    const { token } = useToken();
    const [items, setItems] = useState<MenuProps['items']>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const contentStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };
    const menuStyle: React.CSSProperties = {
        boxShadow: 'none',
    };
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value.toLowerCase();
        const filtered = dropDownItems.filter((item: any) =>
            item.label.toLowerCase().includes(searchText)
        );
        setItems(filtered);
        setSearchTerm(searchText);
    };

    return (
        <>
            <Dropdown
                trigger={["click"]}
                menu={{ items }}
                dropdownRender={(menu) => (
                    <div style={contentStyle}>
                        <Input placeholder="Search..." type="text" value={searchTerm}
                            onChange={handleSearch} style={{ border: "none", paddingLeft: "16px" }} />

                        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#eeeeee", }}>
                            <label style={{ color: "#9e9e9e", marginLeft: "14px", fontSize: "12px" }} htmlFor="">{title}</label>
                            <div style={{ textDecoration: "underline", color: "#9e9e9e", fontSize: "12px", marginRight: "10px", cursor: "pointer" }}>clear</div>
                        </div>
                        {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                    </div>
                )}
            >
                <a onClick={(e) => {
                    e.preventDefault();
                    setItems(dropDownItems)
                }}>
                    <Title className={styles.dropDownField}>
                        {title} <Image src={ARROW} height={18} alt="" />
                    </Title>
                </a>
            </Dropdown>
        </>
    );
}

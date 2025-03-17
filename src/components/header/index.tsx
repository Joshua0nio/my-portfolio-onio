"use client";
import { CaretRightOutlined, UserOutlined, BulbOutlined } from "@ant-design/icons";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import {
  Layout as AntdLayout,
  Button,
  Col,
  Menu,
  Row,
  Typography,
  Image,
  theme,
  Switch,
  Space,
} from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from './Header.module.css';
import Paragraph from "antd/es/typography/Paragraph";

const { Title } = Typography;
const { useToken } = theme;

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({ sticky = true }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila",
      };
      setCurrentTime(new Intl.DateTimeFormat("en-PH", options).format(now));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const headerStyles: React.CSSProperties = {
    backgroundColor: isDarkMode ? "#333" : "#f0f2f5",
    color: isDarkMode ? "#ffffff" : "#000000",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    padding: "0",
    ...(sticky ? { position: "sticky", top: 0, zIndex: 1 } : {}),
  };

  const bottomRowStyles: React.CSSProperties = {
    backgroundColor: isDarkMode ? "#505050" : "#ffffff",
    padding: "10px 20px",
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Change body background color based on dark mode
    document.body.style.backgroundColor = !isDarkMode ? "#333" : "#f0f2f5";
    document.body.style.color = !isDarkMode ? "#333" : "#f0f2f5";
  };

  return (
    <AntdLayout.Header style={headerStyles}>
      <Row style={bottomRowStyles} align="middle">
        {/* Title and Image on the left */}
        <Col span={12} style={{ display: "flex", alignItems: "center" }}>
          <Space>
            <Image
              src="/me.jpg" // Fallback image
              alt="Profile Picture"
              width={80}
              height={80}
              className={styles.animatedImage} // Add class name for animation
            />
            <Title level={3} className={styles.animatedTitle}>
              Joshua Onio
              <Paragraph>My Personal Portfolio</Paragraph>
            </Title>
          </Space>
        </Col>
        {/* Menu on the right */}
        <Col span={6} style={{ textAlign: "right" }}>
          <Menu
            mode="horizontal"
            theme={isDarkMode ? "dark" : "light"}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              borderBottom: "none",
              backgroundColor: "transparent",
              margin: 0,
              padding: 0,
            }}
            items={menuItems}
          />
        </Col>
        {/* Dark Mode Toggle on the right */}
        <Col span={6} style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <Switch
            checkedChildren={<BulbOutlined />}
            unCheckedChildren={<BulbOutlined />}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            style={{ marginLeft: "20px" }}
          />
        </Col>
      </Row>
    </AntdLayout.Header>
  );
};

const menuItems = [
  {
    key: "home",
    label: <Link href="#home" className={styles.menuLink}>Home</Link>,
  },
  {
    key: "about",
    label: <Link href="#about" className={styles.menuLink}>About</Link>,
  },
  {
    key: "experience",
    label: <Link href="#experience" className={styles.menuLink}>Experience</Link>,
  },
  {
    key: "education",
    label: <Link href="#education" className={styles.menuLink}>Education</Link>,
  },
  {
    key: "skills",
    label: <Link href="#skills" className={styles.menuLink}>Skills</Link>,
  },
  {
    key: "projects",
    label: <Link href="#projects" className={styles.menuLink}>Projects</Link>,
  },
  {
    key: "certificates",
    label: <Link href="#certificates" className={styles.menuLink}>Certificates</Link>,
  },
  {
    key: "contact",
    label: <Link href="#contact" className={styles.menuLink}>Contact</Link>,
  },
];

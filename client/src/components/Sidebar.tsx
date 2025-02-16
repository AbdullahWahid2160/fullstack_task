import React from "react";
import { Layout, Menu, Avatar, Typography, Button, Row, Col, Spin } from "antd";
import {
  UserOutlined,
  DownOutlined,
  MenuOutlined,
  BarChartOutlined,
  CalendarOutlined,
  SendOutlined,
  DashboardTwoTone,
  BellOutlined,
  BookTwoTone,
  WechatWorkOutlined,
  InfoCircleOutlined,
  FileTextTwoTone,
  DiffTwoTone,
  QuestionCircleTwoTone,
} from "@ant-design/icons";
import "./Sidebar.css"; // Custom CSS for additional styling
import useUser from "../hooks/useUser";

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = () => {
  const { user, loading, error } = useUser(); // Fetch user data

  if (loading) {
    return (
      <Sider theme="light" width={250} className="sidebar">
        <Spin
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        />
      </Sider>
    );
  }

  if (error) {
    return (
      <Sider theme="light" width={250} className="sidebar">
        <Text type="danger">Error loading user data.</Text>
      </Sider>
    );
  }
  return (
    <Sider theme="light" width={250} className="sidebar">
      {/* Logo and Action Icon */}
      <Row align="middle" justify="space-between" className="sidebar-header">
        <Col>
          <img
            src="/Logo.jpg" // Replace with your logo URL
            alt="Logo"
            className="sidebar-logo"
          />
        </Col>
        <Col>
          <Button
            type="text"
            icon={<MenuOutlined />}
            className="sidebar-action-icon"
          />
        </Col>
      </Row>

      {/* User Profile Section */}
      <div className="user-profile">
        <div className="avatar-container">
          <Avatar
            size={80}
            src="/DP.jfif" // Replace with user image URL
            icon={<UserOutlined />}
            className="user-avatar"
          />
          <span className="online-dot"></span> {/* Online/Away indicator */}
        </div>
        <Text strong className="user-name">
          {user?.name || "John Doe"}
        </Text>
        <Text type="secondary" className="user-email">
          {user?.email || "john.doe@example.com"} <DownOutlined />
        </Text>
        <Button type="primary" block className="live-metrics-button">
          Live Metrics
        </Button>
      </div>

      {/* Menu Items */}
      <Menu mode="inline" defaultSelectedKeys={["1"]} className="sidebar-menu">
        {/* Dashboard Submenu */}
        <Menu.SubMenu
          key="dashboard"
          icon={<DashboardTwoTone />}
          title="Dashboard"
        >
          <Menu.Item key="overview" icon={<BarChartOutlined />} disabled>
            Overview
          </Menu.Item>
          <Menu.Item key="calendar" icon={<CalendarOutlined />} disabled>
            Calendar
          </Menu.Item>
          <Menu.Item key="schedule-actions" icon={<SendOutlined />} disabled>
            Schedule Actions
          </Menu.Item>
          <Menu.Item key="live-alerts" icon={<BellOutlined />} disabled>
            Live Alerts
          </Menu.Item>
        </Menu.SubMenu>

        {/* Blogs Submenu */}
        <Menu.SubMenu key="blogs" icon={<BookTwoTone />} title="Blogs">
          <Menu.Item key="all" icon={<WechatWorkOutlined />} disabled>
            All
          </Menu.Item>
          <Menu.Item key="latest" icon={<InfoCircleOutlined />} disabled>
            Latest
          </Menu.Item>
          <Menu.Item key="archived" icon={<CalendarOutlined />} disabled>
            Archived
          </Menu.Item>
        </Menu.SubMenu>

        {/* Additional Menu Items */}
        <Menu.SubMenu
          key="documentation"
          icon={<FileTextTwoTone />}
          title="Documentation"
        ></Menu.SubMenu>
        <Menu.SubMenu
          key="reports"
          icon={<DiffTwoTone />}
          title="Reports"
        ></Menu.SubMenu>
        <Menu.SubMenu
          key="need-help"
          icon={<QuestionCircleTwoTone />}
          title="Need Help?"
        />
      </Menu>
    </Sider>
  );
};

export default Sidebar;

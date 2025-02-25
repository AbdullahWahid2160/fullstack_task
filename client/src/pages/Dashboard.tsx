import React from "react";
import {
  Layout,
  Card,
  Typography,
  Row,
  Col,
  Button,
  Input,
  Space,
  Avatar,
  Dropdown,
  MenuProps,
  List,
  Tabs,
  TabsProps,
} from "antd";
import {
  SearchOutlined,
  BellOutlined,
  MailOutlined,
  AppstoreOutlined,
  DownOutlined,
  UserOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;

const DashboardPage = () => {
  const items: MenuProps["items"] = [
    { key: "1", label: "Profile", disabled: true },
    { key: "2", label: "Settings", disabled: true },
    { key: "3", label: "Logout", disabled: true },
  ];

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: "Overview",
      children: (
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card title="Total Users" bordered>
              <Title level={2}>1,234</Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Active Sessions" bordered>
              <Title level={2}>567</Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Tasks Completed" bordered>
              <Title level={2}>890</Title>
            </Card>
          </Col>
        </Row>
      ),
    },
    {
      key: "2",
      label: "User Activity",
      children: (
        <List
          itemLayout="horizontal"
          dataSource={[
            { title: "John Doe completed a task" },
            { title: "Jane Smith updated her profile" },
            { title: "Alice Johnson created a new post" },
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={item.title}
              />
            </List.Item>
          )}
        />
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#fff",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Search dashboard"
          prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
        />
        <Space>
          <Button type="text" icon={<BellOutlined />} />
          <Button type="text" icon={<MailOutlined />} />
          <Button type="text" icon={<AppstoreOutlined />} />
          <Dropdown menu={{ items }}>
            <Space>
              <Avatar icon={<UserOutlined />} />
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </Header>

      <Content style={{ padding: 24 }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Space>
              <LineChartOutlined style={{ fontSize: 24, color: "#1890ff" }} />
              <Title level={4}>Dashboard Overview</Title>
            </Space>
          </Col>
        </Row>

        <Tabs defaultActiveKey="1" items={tabItems} />
      </Content>
    </Layout>
  );
};

export default DashboardPage;

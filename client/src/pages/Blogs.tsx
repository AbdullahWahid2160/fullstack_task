import React, { useEffect, useState } from "react";
import {
  Layout,
  Card,
  Typography,
  Row,
  Col,
  Button,
  Input,
  Space,
  Dropdown,
  MenuProps,
  Avatar,
  Modal,
  Form,
  List,
  Tabs,
  TabsProps,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  BellOutlined,
  MailOutlined,
  AppstoreOutlined,
  DownOutlined,
  WechatOutlined,
  FilterOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const { TextArea } = Input;

const BlogsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Dropdown menu for profile
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
      disabled: true,
    },
    {
      key: "2",
      label: "Settings",
      disabled: true,
    },
    {
      key: "3",
      label: "Logout",
      disabled: true,
    },
  ];

  // Fetch dynamic posts from the API
  useEffect(() => {
    const userId = Math.floor(Math.random() * 10) + 1;
    axios
      .get(`/proxy/api-posts/users/${userId}/posts`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (post: any) => {
    setSelectedPost(post);
    form.setFieldsValue({
      title: post.title,
      body: post.body,
    });
    setIsModalVisible(true);
  };

  const handleDelete = (postId: number) => {
    // Implement delete functionality
    console.log("Delete post with ID:", postId);
  };

  const handleSave = async (values: any) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`,
        values
      );
      console.log("Updated post:", response.data);
      setIsModalVisible(false);
      // Optionally, update the local state to reflect changes
      setPosts((prevPosts: any) =>
        prevPosts.map((post: any) =>
          post.id === selectedPost.id ? { ...post, ...values } : post
        )
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: "All Posts",
      children: [
        <List
          dataSource={posts}
          itemLayout="vertical"
          renderItem={(item: any) => (
            <List.Item>
              <Card
                hoverable
                style={{ width: "60%" }}
                cover={
                  <img
                    alt="Post"
                    src={`/BlogPost${item.id}.jpg`} // Replace with your local static image
                    style={{ height: "250px", objectFit: "contain" }}
                    onClick={() => navigate(`/posts/${item.id}`)}
                  />
                }
                actions={[
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(item)}
                    style={{
                      backgroundColor: "#1890ff",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Edit
                  </Button>,
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(item.id)}
                    style={{
                      backgroundColor: "#ff4d4f",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={item.title}
                  description={<Text ellipsis>{item.body}</Text>}
                />
              </Card>
            </List.Item>
          )}
        />,
      ],
    },
    {
      key: "2",
      label: "Latest Posts",
      children: [<></>],
      disabled: true,
    },
    {
      key: "3",
      label: "Archived",
      children: [<></>],
      disabled: true,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header
        style={{
          background: "#fff",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Search Bar on the Left */}
        <Input
          placeholder="Type here to search"
          prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
        />

        {/* Icons and Profile on the Right */}
        <Space>
          <Button type="text" icon={<PlusOutlined />}>
            Add
          </Button>
          <Button type="text" icon={<BellOutlined />} />
          <Button type="text" icon={<MailOutlined />} />
          <Button type="text" icon={<AppstoreOutlined />} />
          <Dropdown menu={{ items }}>
            <Space>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  size={30}
                  src="/DP.jpg" // Replace with user image URL
                  icon={<UserOutlined />}
                  className="user-avatar"
                />
              </div>
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </Header>

      {/* Content Area */}
      <div style={{ margin: "24px 16px", padding: 24 }}>
        {/* Filters Section */}
        <Row justify="space-between" align="middle">
          <Col>
            <Space>
              <WechatOutlined style={{ fontSize: 24, color: "#1890ff" }} />
              <Title level={4} style={{ margin: 0 }}>
                All Blog Posts
              </Title>
            </Space>
          </Col>
          <Col>
            <Button icon={<FilterOutlined />}>
              Filter/Sort By <DownOutlined />
            </Button>
          </Col>
        </Row>
      </div>

      {/* Content Area */}
      <Content
        style={{
          padding: 24,
          background: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tabs defaultActiveKey="1" items={tabItems} />;
      </Content>

      {/* Edit Modal */}
      <Modal
        title="Edit Post"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleSave}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="body"
            label="Body"
            rules={[{ required: true, message: "Please enter the body" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default BlogsPage;

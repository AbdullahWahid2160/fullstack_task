import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Button, Card, Typography, Modal, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

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

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>Blog Posts</Title>
      <List
        dataSource={posts}
        renderItem={(item: any) => (
          <List.Item
            actions={[
              <Button
                type="primary"
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
                type="primary"
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
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="Post"
                  src={`/BlogPost${item.id}.jpg`} // Replace with your local static image
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
              onClick={() => navigate(`/posts/${item.id}`)}
            >
              <Card.Meta
                title={item.title}
                description={<Text ellipsis>{item.body}</Text>}
              />
            </Card>
          </List.Item>
        )}
      />

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
    </div>
  );
};

export default Blogs;

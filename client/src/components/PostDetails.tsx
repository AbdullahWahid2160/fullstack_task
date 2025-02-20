import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const PostDetails = () => {
  const { postId } = useParams(); // Get postId from the URL

  // Fetch post details using postId (you can use a hook or API call here)
  const post = {
    id: postId,
    title: `Post ${postId}`,
    body: `This is the detailed view of post ${postId}.`,
    image: `/BlogPost${postId}.jpg`, // Dynamic image URL
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "24px" }}>
      <Card
        hoverable
        style={{
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={post.image}
          alt="Post"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
        <Title level={2} style={{ marginBottom: "12px" }}>
          {post.title}
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#555" }}>
          {post.body}
        </Paragraph>
      </Card>
    </div>
  );
};

export default PostDetails;

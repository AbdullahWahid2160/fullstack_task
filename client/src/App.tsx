import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";
import PostDetails from "./components/PostDetails";

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <Content style={{ padding: "24px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/posts/:postId" element={<PostDetails />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

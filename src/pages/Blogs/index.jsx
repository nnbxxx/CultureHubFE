import React, { useEffect, useState } from "react";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";

import {
  Avatar,
  Button,
  Card,
  Col,
  Image,
  Layout,
  Row,
  Typography,
  theme,
} from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import BlogItem from "./blogItem";
const { Text, Link, Title, Paragraph } = Typography;
const colors = [
  "#46178F",
  "#26890C",
  "#E21B3C",
  "#1368CE",
  "#eb2f96",
  "#f5222d",
  "#fadb14",
  "#fa8c16",
  "#13c2c2",
  "#52c41a",
  "#1677ff",
  "#722ed1",
  "#2f54eb",
  "#fa541c",
  "#faad14",
  "#a0d911",
];
const BlogsPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const [count, setCount] = useState([1, 1, 1]);
  const [currentCount, setCurrentCount] = useState(0);

  return (
    <Layout className='layout'>
      <HeaderUser />
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: "cover",
            width: "100%",
            height: "600px",
            padding: "10px",
          }}
        >
          <source
            src='../../../public/Video/video.mp4'
            type='video/mp4'
          ></source>
        </video>
      </div>
      <Content
        style={{
          padding: "0 50px",
          overflow: "initial",
          marginTop: "20px",
        }}
      >
        <div
          className='site-layout-content'
          style={{
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              display: "grid",
              gap: 30,
              gridTemplateColumns: " repeat(3, minmax(0, 1fr))",
            }}
          >
            {count &&
              count.length > 0 &&
              count.map((item, index) => {
                return (
                  <>
                    <BlogItem
                      color={colors[Math.floor(Math.random() * 15)]}
                    ></BlogItem>
                  </>
                );
              })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 90,
            }}
          >
            <Button
              type='primary'
              size={"large"}
              onClick={() => {
                setCount([...count, 1, 1, 1]);
              }}
              disabled={count.length > 3 ? true : false}
            >
              Load More Blogs
            </Button>
          </div>
        </div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default BlogsPage;

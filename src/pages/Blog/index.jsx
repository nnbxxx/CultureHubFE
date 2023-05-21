import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Layout, Row, Typography, theme } from "antd";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";
import Meta from "antd/es/card/Meta";
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import "./index.scss";
const { Text, Link, Title, Paragraph } = Typography;
const BlogPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='layout'>
      <HeaderUser />
      <Content
        style={
          {
            // padding: "0 50px",
            // overflow: "initial",
            // marginTop: "20px",
          }
        }
      >
        <div
          className='site-layout-content'
          style={{
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              minHeight: "425px",
              backgroundColor: "#46178F",
              color: "white",
              display: "block",
              padding: "30px 350px 30px 450px",
              borderRadius: "10px 10px 0 0",
              position: "relative",
            }}
          >
            <h1 style={{ fontSize: 44, textAlign: "left" }}>
              Gamified learning experiences were the main character at this
              year’s Kahoot! EDU Meetup!
            </h1>
            <span style={{ fontWeight: 400, fontSize: 22, textAlign: "left" }}>
              Yesterday, we learned why teachers around the world are gaming and
              learning with their students to boost engagement and learning
              retention!
            </span>
            <Meta
              avatar={
                <Avatar
                  src={"https://kahoot.com/files/2021/12/dimitri_yellow.png"}
                  size={70}
                  style={{ border: "5px solid #fff" }}
                />
              }
              title={
                <>
                  <Text underline style={{ color: "white", cursor: "pointer" }}>
                    Admin
                  </Text>
                </>
              }
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 5,
                position: "absolute",
                top: "50%",
                left: "20%",
              }}
              description={
                <>
                  <Text style={{ color: "white" }}>24 Mar 2023</Text>
                </>
              }
            ></Meta>
          </div>
          <div style={{ margin: "0 160px", padding: "50px 0" }}>
            <Row gutter={[10, 10]}>
              <Col
                span={4}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <Text strong style={{ fontSize: 18, fontWeight: 700 }}>
                  SHARE
                </Text>

                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                    width: "fit-content",
                    blockSize: "fit-content",
                    color: "#3C5A99",
                  }}
                  className='hover-underline'
                >
                  <FacebookFilled style={{ marginRight: 5 }} /> SHARE
                </Text>

                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                    width: "fit-content",
                    blockSize: "fit-content",
                    color: "#1DA1F2",
                  }}
                  className='hover-underline'
                >
                  <TwitterSquareFilled style={{ marginRight: 5 }} /> SHARE
                </Text>
                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                    width: "fit-content",
                    blockSize: "fit-content",
                    color: "#0077B5",
                  }}
                  className='hover-underline'
                >
                  <LinkedinFilled style={{ marginRight: 5 }} />
                  SHARE
                </Text>
              </Col>
              <Col span={20}>
                We know that students love gaming but yesterday at the Kahoot!
                EDU Meetup we were thrilled to find out how much teachers love
                playing our new game experiences as well! We had the opportunity
                to hear how teachers around the world are using each one of our
                unique game experiences to level up student engagement in their
                classrooms. We also got to hear directly from their students,
                who experience the fun firsthand! We know that students love
                gaming but yesterday at the Kahoot! EDU Meetup we were thrilled
                to find out how much teachers love playing our new game
                experiences as well! We had the opportunity to hear how teachers
                around the world are using each one of our unique game
                experiences to level up student engagement in their classrooms.
                We also got to hear directly from their students, who experience
                the fun firsthand!
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default BlogPage;

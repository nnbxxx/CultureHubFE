import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Layout,
  Progress,
  Row,
  Tabs,
  theme,
  Avatar,
  Badge,
  message,
  Button,
} from "antd";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";
import QuizItem from "./QuizItem";

const { Meta } = Card;
const itemsTab = [
  {
    key: "1",
    label: `All Quiz`,
    children: <></>,
  },
  {
    key: "2",
    label: `Popular`,
    children: <></>,
  },
  {
    key: "3",
    label: `New`,
    children: <></>,
  },
];
const ListQuiz = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='layout'>
      <HeaderUser />
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
          <Row>
            <Tabs defaultActiveKey='1' items={itemsTab} onChange={null} />
          </Row>
          <div
            style={{
              display: "grid",
              gap: 30,
              gridTemplateColumns: " repeat(4, minmax(0, 1fr))",
            }}
          >
            <QuizItem />
            <QuizItem />
            <QuizItem />
            <QuizItem />
            <QuizItem />
            <QuizItem />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 45,
            }}
          >
            <Button
              type='primary'
              size='large'
              onClick={() => {
                navigate("/quiz");
              }}
            >
              Show More
            </Button>
          </div>
        </div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default ListQuiz;

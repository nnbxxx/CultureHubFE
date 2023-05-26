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
import { v4 as uuidv4 } from "uuid";
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
const data = [
  {
    title: " Cố Đô Huế ",
    urlImg: "../../../public/Quiz/1.avif",
    author: "Admin",
    description: {
      play: "7",
      player: "3",
      numberQuestion: 5,
    },
  },
  {
    title: "Hồ Hoàn Kiếm Hà Nội",
    urlImg: "../../../public/Quiz/2.avif",
    author: "Admin",
    description: {
      play: "9",
      player: "5",
      numberQuestion: 5,
    },
  },
  {
    title: "Lăng chủ tịch Hồ Chí Minh",
    urlImg: "../../../public/Quiz/3.avif",
    author: "Admin",
    description: {
      play: "13",
      player: "5",
      numberQuestion: 5,
    },
  },
  {
    title: "Phố cổ Hội An",
    urlImg: "../../../public/Quiz/4.jpg",
    author: "Admin",
    description: {
      play: "5",
      player: "5",
      numberQuestion: 5,
    },
  },
  {
    title: "Đền Ngọc Sơn",
    urlImg: "../../../public/Quiz/5.jpg",
    author: "Admin",
    description: {
      play: "5",
      player: "5",
      numberQuestion: 5,
    },
  },
  {
    title: "Tháp Chàm",
    urlImg: "../../../public/Quiz/6.jpg",
    author: "Admin",
    description: {
      play: "5",
      player: "5",
      numberQuestion: 5,
    },
  },
];
const ListQuiz = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [dataQuiz, setDataQuiz] = useState(data);
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
            {dataQuiz &&
              dataQuiz.length > 0 &&
              dataQuiz.map((item, index) => {
                return <QuizItem key={uuidv4()} data={item} />;
              })}
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
              disabled
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

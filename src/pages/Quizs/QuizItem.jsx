import React, { useEffect, useState } from "react";
import { Card, Avatar, Badge, message, Tooltip, Typography } from "antd";
import {
  CaretRightOutlined,
  EllipsisOutlined,
  HeartFilled,
  StarFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const { Meta } = Card;
const { Text, Link, Title, Paragraph } = Typography;
import { v4 as uuidv4 } from "uuid";
const QuizItem = () => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const handleDirectPlayQuiz = () => {
    navigate(`/quiz/id=${uuidv4()}`);
  };
  return (
    <>
      <Badge.Ribbon text='Popular'>
        <Card
          style={{ cursor: "default" }}
          cover={
            <img
              alt='example'
              src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            />
          }
          hoverable
          actions={[
            <Tooltip title='Play Quiz'>
              <CaretRightOutlined
                onClick={() => {
                  if (!isAuthenticated) {
                    navigate("/login");
                  }
                  handleDirectPlayQuiz();
                }}
              />{" "}
            </Tooltip>,
            <Tooltip title='Favorite'>
              <HeartFilled
                className={favorite ? "like" : ""}
                onClick={() => {
                  setFavorite(!favorite);
                }}
              />
            </Tooltip>,
            <EllipsisOutlined
              key='ellipsis'
              onClick={() => {
                message.info("Coming Soon...");
              }}
            />,
          ]}
        >
          <Meta
            avatar={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Avatar
                  src='https://xsgames.co/randomusers/avatar.php?g=pixel'
                  style={{ border: "solid 3px #eee" }}
                />
                <Text
                  className='hover-underline highlight-first-letter'
                  style={{ color: "red" }}
                >
                  Admin
                </Text>
              </div>
            }
            title={
              <Text
                className='hover-underline'
                onClick={() => {
                  handleDirectPlayQuiz();
                }}
              >
                Python Programming Warm-Up Python Programming Warm-Up
              </Text>
            }
            description='15.6k plays • 22.2k players'
          />
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "37%",
              color: "white",
              backgroundColor: "rgba(51, 51, 51, 0.8)",
              padding: "1.5px 8px",
              borderRadius: 4,
            }}
          >
            {11} questions
          </div>
        </Card>
      </Badge.Ribbon>
    </>
  );
};

export default QuizItem;

import React, { useEffect, useState } from "react";
import { Card, Avatar, Badge, message, Tooltip, Typography, Image } from "antd";
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
const QuizItem = (props) => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const { data } = props;
  const handleDirectPlayQuiz = () => {
    navigate(`/quiz/id=${uuidv4()}`);
  };
  return (
    <>
      <Badge.Ribbon text='Popular'>
        <Card
          style={{ cursor: "default" }}
          cover={
            <Image
              alt='example'
              src={data.urlImg}
              preview={false}
              width={315}
              height={210}
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
                  {data.author}
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
                {data.title}
              </Text>
            }
            description={`${data.description.play} plays • ${data.description.player} players`}
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
            {data.description.numberQuestion} questions
          </div>
        </Card>
      </Badge.Ribbon>
    </>
  );
};

export default QuizItem;

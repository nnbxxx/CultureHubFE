import { Avatar, Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const BlogItem = (props) => {
  const { color } = props;
  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{
          height: 550,
          backgroundColor: color,
          borderColor: color,
          boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
          position: "relative",
        }}
        cover={
          <Image
            alt='example'
            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            preview={false}
            height={185}
          />
        }
      >
        <Meta
          style={{ marginBottom: 20 }}
          title={
            <div style={{ color: "white" }} className='hover-underline'>
              Admin
            </div>
          }
          description={
            <div style={{ color: "white", marginTop: -10 }}>March 24, 2023</div>
          }
          avatar={
            <Avatar
              src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
              size={50}
              style={{ border: "5px solid #fff" }}
            />
          }
        />
        <Paragraph
          style={{ fontSize: 18, color: "white" }}
          ellipsis={{ rows: 2 }}
          className='hover-underline'
          strong
          onClick={() => {
            navigate(`/blog/id=${uuidv4()}`);
          }}
        >
          Gamified learning experiences were the main character at this year’s
          Kahoot! EDU Meetup!
        </Paragraph>
        <Paragraph style={{ color: "white", fontSize: 14 }}>
          Yesterday, we learned why teachers around the world are gaming and
          learning with their students to boost engagement and learning
          retention!
        </Paragraph>
        <Text
          strong
          underline
          style={{
            color: "white",
            fontSize: 16,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(`/blog/id=${uuidv4()}`);
          }}
        >
          Learn More{" "}
        </Text>
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            margin: "0 -10px 0",
            padding: "10px 65px",
            borderRadius: "10px 10px 0 0",
            position: "absolute",
            top: "92%",
            right: 135,
            cursor: "pointer",
          }}
        >
          <Text
            style={{
              color: color,
              fontWeight: 700,
            }}
          >
            events
          </Text>
        </div>
      </Card>
    </>
  );
};

export default BlogItem;

import { Avatar, Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const BlogItem = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{
          height: 550,
          backgroundColor: data.color,
          borderColor: data.color,
          boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
          position: "relative",
        }}
        cover={
          <Image alt='example' src={data.urlImg} preview={false} height={185} />
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
            <div style={{ color: "white", marginTop: -10 }}>
              {data.createAt}
            </div>
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
          ellipsis={{ rows: 1 }}
          className='hover-underline'
          strong
          onClick={() => {
            navigate(`/blog/id=${uuidv4()}`);
          }}
        >
          {data.title}
        </Paragraph>
        <Paragraph
          style={{ color: "white", fontSize: 14 }}
          ellipsis={{ rows: 3 }}
        >
          {data.description}
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
              color: data.color,
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

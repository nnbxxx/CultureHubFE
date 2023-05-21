import { Avatar, Col, Image, Row, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const { Text, Link, Title, Paragraph } = Typography;
const QuizItem = (props) => {
  const [isUnderline, setIsUnderline] = useState(false);
  const user = useSelector((state) => state.account.user);
  const urlAvatar = `${import.meta.env.VITE_BACK_END_URL}/images/avatar/${
    user.avatar
  }`;
  const { data } = props;
  return (
    <>
      <Row
        style={{
          marginBottom: 10,
          cursor: "pointer",
          border: "1px solid #eee",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px",
        }}
        onMouseOver={() => {
          setIsUnderline(true);
        }}
        onMouseLeave={() => {
          setIsUnderline(false);
        }}
      >
        <Col span={3} style={{ position: "relative" }}>
          <Image width={110} height={75} src={data.urlImg} preview={false} />
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "7%",
              color: "white",
              backgroundColor: "rgba(51, 51, 51, 0.8)",
              padding: "1.5px 8px",
              borderRadius: 4,
            }}
          >
            {data.description.numberQuestion} questions
          </div>
        </Col>
        <Col span={21} style={{}}>
          <div style={{ padding: "10px 0" }}>
            <Text
              underline={isUnderline}
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#333",
              }}
            >
              {data.title}
            </Text>
          </div>
          <div
            style={{
              backgroundColor: "#f2f2f2",
              padding: "5px 0",
              borderRadius: "4px",
            }}
          >
            <Meta
              avatar={<Avatar src={urlAvatar} size={25} />}
              title={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{ color: "red" }}
                    className='highlight-first-letter'
                  >
                    Admin
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: 200,
                    }}
                  >
                    <Text>{data.description.play} plays</Text>
                    <Text>&nbsp;-&nbsp;</Text>
                    <Text>{data.description.player} players</Text>
                  </div>
                </div>
              }
            ></Meta>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default QuizItem;

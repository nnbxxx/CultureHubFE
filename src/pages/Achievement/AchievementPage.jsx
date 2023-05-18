import React, { useEffect, useState } from "react";
import { Avatar, Button, Layout, Progress, theme } from "antd";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AchievementPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const user = useSelector((state) => state.account.user);
  const urlAvatar = `${import.meta.env.VITE_BACK_END_URL}/images/avatar/${
    user.avatar
  }`;
  const navigate = useNavigate();
  console.log(
    "🚀 ~ file: AchievementPage.jsx:14 ~ AchievementPage ~ user:",
    user
  );

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
          style={
            {
              // background: colorBgContainer,
            }
          }
        >
          <Row gutter={[20, 20]} style={{ marginBottom: 20 }}>
            <Col span={8}>
              <Card>
                <Meta
                  avatar={<Avatar src={urlAvatar} size={70} />}
                  title={user.fullName}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  description={
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Total Point: 50</span>
                        <Button
                          type='default'
                          size='small'
                          style={{ margin: 5 }}
                          onClick={() => {
                            navigate(`/quiz`);
                          }}
                        >
                          More Point
                        </Button>
                      </div>
                      <div>
                        <MailOutlined style={{ marginRight: 10 }} />
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                      </div>
                      <div>
                        <PhoneOutlined style={{ marginRight: 10 }} />
                        <span>{user.phone} </span>
                      </div>
                    </div>
                  }
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <Card title='Chuỗi Ngày'>Achievement Content</Card>
            </Col>
            <Col span={12}>
              <Card title='Chuỗi Tuần'>Achievement Content</Card>
            </Col>
            <Col span={12}>
              <Card title='Số Cuộc thi tham gia '>Achievement Content</Card>
            </Col>
            <Col span={12}>
              <Card title='Số lượt Like bài viết'>Achievement Content</Card>
            </Col>
            <Col span={24}>
              <Card title='Thành tựu đặc biệt'>Achievement Content</Card>
            </Col>
          </Row>
        </div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default AchievementPage;

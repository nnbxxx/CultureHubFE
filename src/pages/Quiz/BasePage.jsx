import React, { useEffect, useState } from "react";
import { Card, Col, Layout, Progress, Row, theme } from "antd";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";

const Base = () => {
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
        ></div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default Base;

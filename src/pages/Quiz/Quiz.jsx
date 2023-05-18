import React, { useEffect, useState } from "react";
import { Layout, Progress, theme } from "antd";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";

const Quiz = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [timeQuiz, setTimeQuiz] = useState(0);
  const [totalTimeQuiz, setTotalTimeQuiz] = useState(5);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (timeQuiz < totalTimeQuiz)
      setTimeout(() => {
        setTimeQuiz((timeQuiz) => timeQuiz + 1);
      }, 1000);
    setPercent((timeQuiz / totalTimeQuiz) * 100);
  }, [timeQuiz]);

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
          <>Time : {timeQuiz}</>
          <Progress type='circle' size={50} percent={percent} />
        </div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default Quiz;

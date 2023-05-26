import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Layout,
  Progress,
  Row,
  theme,
  Avatar,
  Badge,
  message,
  Tooltip,
  Typography,
  Modal,
  Button,
  Result,
} from "antd";
const { Meta } = Card;
const { Text, Link, Title, Paragraph } = Typography;
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";
import {
  CaretRightOutlined,
  EllipsisOutlined,
  HeartFilled,
  StarFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuizContent from "./QuizContent";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

const dataQuizTmp = [
  {
    id: uuidv4(),
    question: "100",
    answer: [
      { id: uuidv4(), content: "1001", selected: false },
      { id: uuidv4(), content: "1002", selected: false },
      { id: uuidv4(), content: "1003", selected: false },
      { id: uuidv4(), content: "1004", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question: "101",
    answer: [
      { id: uuidv4(), content: "1005", selected: false },
      { id: uuidv4(), content: "1006", selected: false },
      { id: uuidv4(), content: "1007", selected: false },
      { id: uuidv4(), content: "1008", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question: "102",
    answer: [
      { id: uuidv4(), content: "1009", selected: false },
      { id: uuidv4(), content: "1010", selected: false },
      { id: uuidv4(), content: "1011", selected: false },
      { id: uuidv4(), content: "1012", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question: "103",
    answer: [
      { id: uuidv4(), content: "1013", selected: false },
      { id: uuidv4(), content: "1014", selected: false },
      { id: uuidv4(), content: "1015", selected: false },
      { id: uuidv4(), content: "1016", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question: "104",
    answer: [
      { id: uuidv4(), content: "1017", selected: false },
      { id: uuidv4(), content: "1018", selected: false },
      { id: uuidv4(), content: "1019", selected: false },
      { id: uuidv4(), content: "1020", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question: "105",
    answer: [
      { id: uuidv4(), content: "1021", selected: false },
      { id: uuidv4(), content: "1022", selected: false },
      { id: uuidv4(), content: "1023", selected: false },
      { id: uuidv4(), content: "1024", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question: "106",
    answer: [
      { id: uuidv4(), content: "1025", selected: false },
      { id: uuidv4(), content: "1026", selected: false },
      { id: uuidv4(), content: "1027", selected: false },
      { id: uuidv4(), content: "1028", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question: "107",
    answer: [
      { id: uuidv4(), content: "1029", selected: false },
      { id: uuidv4(), content: "1030", selected: false },
      { id: uuidv4(), content: "1031", selected: false },
      { id: uuidv4(), content: "1032", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question: "108",
    answer: [
      { id: uuidv4(), content: "1033", selected: false },
      { id: uuidv4(), content: "1034", selected: false },
      { id: uuidv4(), content: "1035", selected: false },
      { id: uuidv4(), content: "1036", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question: "109",
    answer: [
      { id: uuidv4(), content: "1037", selected: false },
      { id: uuidv4(), content: "1038", selected: false },
      { id: uuidv4(), content: "1039", selected: false },
      { id: uuidv4(), content: "1040", selected: false },
    ],
  },
];
const Quiz = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [favorite, setFavorite] = useState(false);
  const [ellipsis, setEllipsis] = useState(true);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const navigate = useNavigate();
  const [timeStart, setTimeStart] = useState(0);
  const [timeQuiz, setTimeQuiz] = useState(300);
  const [noRepeat, setNoRepeat] = useState(false);
  const [question, setQuestion] = useState(1);
  const [dataQuiz, setDataQuiz] = useState(dataQuizTmp);
  const [isModalOpenResult, setIsModalOpenResult] = useState(false);
  useEffect(() => {
    if (timeStart > 0)
      setTimeout(() => {
        setTimeStart((timeStart) => timeStart - 1);
      }, 1000);
    if (noRepeat && !timeStart) {
      setIsModalOpen(true);
      setTimeQuiz(300);
    }
  }, [timeStart]);
  useEffect(() => {
    if (timeQuiz > 0)
      setTimeout(() => {
        setTimeQuiz((timeQuiz) => timeQuiz - 1);
      }, 1000);
    if (!timeQuiz) {
      setIsModalOpen(false);
    }
  }, [timeQuiz]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCheckBox = (questionId, answerId) => {
    let dataQuizClone = _.cloneDeep(dataQuiz);
    let findQuestion = dataQuizClone.find((item) => item.id === questionId);
    findQuestion.answer = findQuestion.answer.map((item, index) => {
      if (item.id === answerId) {
        return { ...item, selected: true };
      } else return { ...item, selected: false };
    });
    dataQuizClone[question - 1] = findQuestion;
    setDataQuiz(dataQuizClone);
  };
  return (
    <Layout className='layout'>
      <HeaderUser />
      <Content
        style={{
          overflow: "initial",
          marginTop: 10,
        }}
      >
        <div className='site-layout-content' style={{ padding: 0 }}>
          <Row>
            <Col span={6}>
              <Badge.Ribbon text='Popular'>
                <Card
                  style={{ cursor: "default", position: "relative" }}
                  cover={
                    <>
                      <img
                        alt='example'
                        src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                      />
                    </>
                  }
                  actions={[
                    <Tooltip title='Play Quiz'>
                      <CaretRightOutlined
                        onClick={() => {
                          if (!isAuthenticated) {
                            navigate("/login");
                          }
                          if (!noRepeat) {
                            setTimeStart(5);
                            setNoRepeat(true);
                          }
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
                  <div
                    style={{
                      padding: "10px",
                      display: "flex",
                      gap: 10,
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        wordBreak: "break-word",
                        fontSize: 24,
                        fontWeight: 700,
                        lineHeight: 1.5,
                        overflowWrap: "break-word",
                        display: "block",
                      }}
                    >
                      Python Programming Warm-Up
                    </div>
                    <Text style={{ color: "#737373", fontSize: 12 }}>
                      15.6k plays • 22.5k players
                    </Text>
                    <Paragraph
                      ellipsis={
                        ellipsis
                          ? {
                              rows: 2,
                              expandable: true,
                              symbol: <>Show more</>,
                            }
                          : false
                      }
                    >
                      Teachers! Are you starting to teach Python programming?
                      Need to inspire your class with a quick
                      no-knowledge-required warmup? Play this Kahoot and then
                      visit https://gotyn.kr/kahoottext for fun Python Hour of
                      Code puzzles and projects with teacher guides and answer
                      keys!
                    </Paragraph>
                  </div>

                  <div>
                    <Meta
                      avatar={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            gap: 20,
                          }}
                        >
                          <Avatar
                            src='https://xsgames.co/randomusers/avatar.php?g=pixel'
                            style={{ border: "solid 3px #eee" }}
                          />
                          <Text
                            className='hover-underline highlight-first-letter'
                            style={{
                              color: "red",
                              marginLeft: -10,
                            }}
                          >
                            Admin
                          </Text>
                        </div>
                      }
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 195,
                      left: "40%",
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
            </Col>
            <Col
              span={18}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {timeStart > 0 && (
                <div
                  style={{
                    backgroundColor: "red",
                    width: 250,
                    height: 250,
                    borderRadius: "100rem",
                    color: "#f5222d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: 150,
                    }}
                  >
                    {timeStart}
                  </span>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Content>
      <FooterUser />
      <Modal
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Title level={3}>Python Programming Warm-Up</Title>
            <Title
              level={5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 40,
              }}
            >
              Time: {timeQuiz}s
            </Title>
          </div>
        }
        open={isModalOpen}
        onCancel={() => {}}
        width={"70vw"}
        bodyStyle={{ minHeight: "50vh" }}
        closable={false}
        maskClosable={false}
        footer={
          <>
            <Button
              disabled={question === 1}
              type='primary'
              onClick={() => {
                setQuestion(question - 1);
              }}
            >
              Previous
            </Button>
            <Button
              disabled={question === dataQuiz.length}
              type='primary'
              onClick={() => {
                setQuestion(question + 1);
              }}
            >
              Next
            </Button>
            <Button
              type='primary'
              onClick={() => {
                setIsModalOpen(false);
                setIsModalOpenResult(true);
              }}
            >
              Submit
            </Button>
          </>
        }

        // footer={<>123</>}
      >
        <QuizContent
          question={question}
          data={dataQuiz[question - 1]}
          handleCheckBox={handleCheckBox}
        />
      </Modal>
      <Modal
        title='Result'
        open={isModalOpenResult}
        onCancel={() => {
          setIsModalOpenResult(false);
          navigate("/quiz");
        }}
        footer={null}
        maskClosable={false}
      >
        <Result
          status='success'
          title='Successfully Quiz!'
          subTitle={
            <>
              <div>Total Question: 11</div>
              <div>Correct Question: 11</div>
              <div>Score : 11</div>
            </>
          }
          extra={[
            <Button
              type='primary'
              onClick={() => {
                navigate("/quiz");
              }}
            >
              Go Home
            </Button>,
          ]}
        />
      </Modal>
    </Layout>
  );
};

export default Quiz;

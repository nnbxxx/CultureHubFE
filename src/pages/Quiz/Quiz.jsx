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
    question:
      "Giặc xâm lược được nhắc đến trong truyền thuyết Sự tích Hồ Gươm là:",
    answer: [
      { id: uuidv4(), content: "Giặc  Ân", selected: false },
      { id: uuidv4(), content: "Giặc Tống", selected: false },
      { id: uuidv4(), content: "Giặc Thanh", selected: false },
      { id: uuidv4(), content: "Giặc Minh", selected: false, correct: true },
    ],
  },
  {
    id: uuidv4(),
    question:
      "Trong truyền thuyết Sự tích Hồ Gươm có đề cập đến cuộc khởi nghĩa nào trong lịch sử dân tộc?",
    answer: [
      { id: uuidv4(), content: "Khởi nghĩa Hai Bà Trưng", selected: false },
      { id: uuidv4(), content: "Khởi nghĩa Lí Bí", selected: false },
      {
        id: uuidv4(),
        content: "Khởi nghĩa Lam Sơn do Lê Lợi lãnh đạo",
        selected: false,
        correct: true,
      },
      {
        id: uuidv4(),
        content: " Khởi nghĩa Tây Sơn do ba anh em Nguyễn Nhạc lãnh đạo",
        selected: false,
      },
    ],
  },
  {
    id: uuidv4(),
    question: " Hồ Hoàn Kiếm rộng bao nhiêu ?",
    answer: [
      { id: uuidv4(), content: "1.5 ha", selected: false },
      { id: uuidv4(), content: "3 ha", selected: false },
      { id: uuidv4(), content: "12 ha", selected: false, correct: true },
      { id: uuidv4(), content: "15 ha", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question:
      "Trong truyền thuyết Sự tích Hồ Gươm, đức Long Quân quyết định cho nghĩa quân mượn vật gì?",
    answer: [
      {
        id: uuidv4(),
        content: "Thanh gươm thần",
        selected: false,
        correct: true,
      },
      { id: uuidv4(), content: "Chiếc nỏ thần", selected: false },
      {
        id: uuidv4(),
        content: "Bản đồ chỉ dẫn vào doanh trại quân giặc",
        selected: false,
      },
      { id: uuidv4(), content: "Lá cờ thêu sáu chữ vàng", selected: false },
    ],
  },
  {
    id: uuidv4(),
    question:
      " Điền vào ô trống : cái tên “Hoàn Kiếm” xuất phát từ một truyền thuyết vua ………………………… trả kiếm cho rùa thần mà hầu như bất cứ người Việt Nam nào cũng đều biết đến.",
    answer: [
      { id: uuidv4(), content: " Lê Thái Tổ", selected: false, correct: true },
      { id: uuidv4(), content: "Lê Thánh Tông", selected: false },
      { id: uuidv4(), content: "Lê Nhân Tông", selected: false },
      { id: uuidv4(), content: "Lê Uy Mục", selected: false },
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
  const [result, setResult] = useState(0);
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
  const handleSubmitQuiz = () => {
    let tmp = 0;
    dataQuiz.forEach((item, index) => {
      item.answer.forEach((item, index) => {
        if (item.selected && item.correct) {
          tmp++;
        }
      });
    });
    setResult(tmp);
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
                        src={`${
                          import.meta.env.VITE_BACK_END_URL
                        }/images/Quiz/2.avif`}
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
                      Hồ Hoàn Kiếm
                    </div>
                    <Text style={{ color: "#737373", fontSize: 12 }}>
                      15 plays • 6 players
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
                      Hồ Hoàn Kiếm được mệnh danh là “trái tim” của thủ đô Hà
                      Nội. Không chỉ là điểm đến yêu thích của du khách thập
                      phương mà nơi này còn mang giá trị lịch sử văn hóa quý báu
                      của dân tộc.
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
                      left: "39%",
                      color: "white",
                      backgroundColor: "rgba(51, 51, 51, 0.8)",
                      padding: "1.5px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {5} questions
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
            <Title level={3}>Hồ Hoàn Kiếm</Title>
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
                handleSubmitQuiz();
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
              <div>Total Question: {dataQuiz.length}</div>
              <div>Correct Question: {result}</div>
              <div>Score : {result}</div>
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

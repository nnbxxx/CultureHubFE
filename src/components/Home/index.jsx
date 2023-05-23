import {
  Button,
  Card,
  Col,
  Divider,
  Pagination,
  Rate,
  Row,
  Spin,
  Tabs,
  theme,
  Typography,
} from "antd";
const { Text, Link } = Typography;
import "./index.scss";
import { useEffect, useState } from "react";
import { callGetBooksWithPaginate } from "../../service/api";
import { useNavigate, useOutletContext } from "react-router-dom";
import Blog from "./Blog";
import QuizItem from "./QuizItem";
import { convertSlug } from "../ConvertSlug";
const baseURL = import.meta.env.VITE_BACK_END_URL;

const dataBlog = [
  {
    title:
      "Higher education faculty discover new ways to create engaging review sessions at the Kahoot! EDU Meetup!",
    description:
      "At our first higher education meetup last week we heard from hundreds of higher ed faculty around the world using Kahoot! in their courses for engaging review and exam prep.",
    urlImg:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    title:
      "Gamified learning experiences were the main character at this year’s Kahoot! EDU Meetup!",
    description:
      "Yesterday, we learned why teachers around the world are gaming and learning with their students to boost engagement and learning retention!",
    urlImg:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    title:
      "Bring a new level of powerful pedagogy to classrooms with Kahoot!’s game modes",
    description:
      "Disguise content learning in a game-oriented, student-centered dynamic with all new game modes on Kahoot!",
    urlImg:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    title: "Celebrating World Teachers’ Day with Kahoot!",
    description:
      "Thanks for an awesome year of milestones and memories! We appreciate you, teachers!",
    urlImg:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    title:
      "Student-centered learning was front and center at the Kahoot! EDU Fall Meetup 2022",
    description:
      "Teachers from around the world gathered yesterday to learn about new approaches to student-centered learning from shared teacher stories, Kahoot! ambassadors, and new Kahoot! feature demos!",
    urlImg:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];
const dataQuiz = [
  {
    title: "Python Programming Warm-Up",
    urlImg:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    description: {
      play: "5.9k",
      player: "21.4k",
      numberQuestion: 11,
    },
  },
  {
    title: "Ready, Set. . . Draw!",
    urlImg:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    description: {
      play: "5.9k",
      player: "21.1k",
      numberQuestion: 10,
    },
  },
  {
    title: "What's the Weather?",
    urlImg:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    description: {
      play: "5.4k",
      player: "27.5k",
      numberQuestion: 8,
    },
  },
  {
    title: "Python Programming Warm-Up",
    urlImg:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    description: {
      play: "556",
      player: "4k",
      numberQuestion: 16,
    },
  },
];
const Home = (props) => {
  const onChangeTab = (key) => {
    setSort(key);
  };
  const itemsTab = [
    {
      key: "&sort=-sold",
      label: `Popular`,
      children: <></>,
    },
    {
      key: "&sort=-updatedAt",
      label: `New Product`,
      children: <></>,
    },
    {
      key: "&sort=price",
      label: `Low To High Price`,
      children: <></>,
    },
    {
      key: "&sort=-price",
      label: `High To Low Price`,
      children: <></>,
    },
  ];
  const [searchBook, filter] = useOutletContext();
  const [listBook, setlistBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [toltalPage, setToltalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("&sort=-sold");

  const fetchListBook = async () => {
    let query = `current=${currentPage}&pageSize=${pageSize}`;
    if (searchBook) query += searchBook;
    if (sort) query += sort;
    if (filter) query += filter;
    setIsLoading(true);
    const res = await callGetBooksWithPaginate(query);
    if (res && res.data) {
      setlistBook(res.data.result);
      setToltalPage(res.data.meta.total);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }
  };
  const navigate = useNavigate();
  const handleDirectDetailBook = (book) => {
    const slug = convertSlug(book.mainText);
    navigate(`/book/${slug}?id=${book._id}`);
  };
  useEffect(() => {
    fetchListBook();
  }, [currentPage, pageSize, searchBook, sort, filter]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <div
        style={{
          marginBottom: 20,
          backgroundColor: colorBgContainer,
          padding: "0 20px",
          borderRadius: 8,
        }}
      >
        <Row>
          <Tabs defaultActiveKey='1' items={itemsTab} onChange={onChangeTab} />
        </Row>
        <Spin tip='Loading' size='large' spinning={isLoading}>
          <Row className='customize-row'>
            {listBook &&
              listBook.length > 0 &&
              listBook.map((item) => {
                return (
                  <>
                    <div
                      className='column'
                      key={item.thumbnail}
                      onClick={() => {
                        handleDirectDetailBook(item);
                      }}
                    >
                      <div className='wrapper'>
                        <div className='thumbnail'>
                          <img
                            src={`${baseURL}/images/book/${item.thumbnail}`}
                            alt='thumbnail book'
                          />
                        </div>
                        <div className='text'>{item.mainText}</div>
                        <div className='price'>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.price)}
                        </div>
                        <div className='rating'>
                          <Rate
                            value={5}
                            disabled
                            style={{ color: "#ffce3d", fontSize: 10 }}
                          />
                          <span>Sold: {item.sold}</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </Row>
        </Spin>
        <Divider />
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            current={currentPage}
            total={toltalPage}
            responsive
            pageSize={pageSize}
            pageSizeOptions={["5", "10", "20"]}
            showSizeChanger
            onChange={(page, pageSize) => {
              setCurrentPage(page);
              setPageSize(pageSize);
            }}
          />
        </Row>
        <Divider />
      </div>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Card
            title={
              <div
                style={{
                  color: "#333",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 0.2,
                }}
              >
                What's New
              </div>
            }
          >
            {dataBlog &&
              dataBlog.length > 0 &&
              dataBlog.map((item) => {
                return <Blog data={item} />;
              })}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#1368ce",
                textDecoration: "underline",

                fontSize: 14,
                fontWeight: 700,
                marginBottom: -15,
              }}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/blog");
                }}
              >
                Show More
              </div>
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            title={
              <div
                style={{
                  color: "#333",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 0.2,
                }}
              >
                Top picks
              </div>
            }
          >
            {dataQuiz &&
              dataQuiz.length > 0 &&
              dataQuiz.map((item) => {
                return <QuizItem data={item} />;
              })}

            <Text
              style={{
                fontSize: 16,
                color: "#333",
                letterSpacing: 0.2,
                fontWeight: 700,
                textAlign: "center",
                display: "block",
              }}
            >
              More awesomeness awaits! Search millions of CultureHub on any
              topic
            </Text>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <Button
                type='primary'
                size='large'
                onClick={() => {
                  navigate("/quiz");
                }}
              >
                Discover CultureHub
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Home;
/*
 total: toltalPage,
showSizeChanger: true,
current: currentPage,
pageSize: pageSize,
pageSizeOptions: ["2", "5", "10", "30", "50"],
responsive: true,
showTotal: (total, range) => {
  return `${range[0]}-${range[1]} of ${total} items`;
},
},
*/

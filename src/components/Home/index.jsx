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
    title: "Hồ Gươm Hà Nội – Vẻ đẹp cổ kính giữa lòng thủ đô",
    description:
      "Hồ Hoàn Kiếm (Hồ Gươm) nằm ngay trung tâm quận Hoàn Kiếm nên rất thuận tiện cho du khách tìm đến ngắm cảnh và khám phá nhiều trải nghiệm thú vị vào bất cứ thời điểm nào trong ngày.",
    urlImg: `${import.meta.env.VITE_BACK_END_URL}/images/Blog/1.png`,
  },
  {
    title: "Lịch Sử Hồ Hoàn Kiếm",
    description:
      "Hồ Hoàn Kiếm không chỉ đơn thuần là địa điểm du lịch hút khách, mà nơi đây còn là di tích đã trải qua biết bao thăng trầm lịch sử của mảnh đất Hà Thành. Hồ Hoàn Kiếm là một trong những biểu tượng của thủ đô, chỉ cần nhắc đến là nghĩ ngay đến Hà Nội.",
    urlImg: `${import.meta.env.VITE_BACK_END_URL}/images/Blog/2.png`,
  },
  {
    title: "Đôi Điều Về Rùa Hồ Hoàn Kiếm ",
    description:
      "Rùa hồ Hoàn Kiếm có tên gọi khoa học là Rafetus Leloii hay Rafetus Vietnamensis thuộc họ ba ba, có kích thước khá lớn. Trước đây rùa hồ Hoàn Kiếm có 4 cá thể nhưng đến hiện tại tất cả đều đã chết. Cũng có thông tin cho rằng vẫn còn khoảng 5 cá thể trong hồ nhưng điều này chưa được chứng minh.",
    urlImg: `${import.meta.env.VITE_BACK_END_URL}/images/Blog/3.png`,
  },
  {
    title: "Hồ Hoàn Kiếm Có Gì Chơi?",
    description:
      "Hồ Hoàn Kiếm Hà Nội có gì chơi? Đây luôn là địa điểm thu hút không chỉ du khách thập phương mà còn cả những cư dân địa phương. Thật là thiếu sót nếu bạn bỏ qua những địa danh nổi tiếng sau:",
    urlImg: `${import.meta.env.VITE_BACK_END_URL}/images/Blog/4.png`,
  },
  {
    title: "Rong ruổi đường ven biển Việt Nam từ Bà Rịa tới Lăng Cô Huế",
    description:
      "Với cung đường biển này bạn có thể đi trong vòng 7 ngày hoặc 10 ngày, càng dài ngày thì khám phá được nhiều sức khỏe cũng sẽ đảm bảo hơn, đường biển xuất phát từ Vũng Tàu đến Lăng Cô. Mình sẽ chia từng chặng cho các bạn tiện việc chọn cung phù hợp với sức khỏe và túi tiền của mình.",
    urlImg: `${import.meta.env.VITE_BACK_END_URL}/images/Blog/5.png`,
  },
];
const dataQuiz = [
  {
    title: " Cố Đô Huế ",
    urlImg: `${import.meta.env.VITE_BACK_END_URL}/images/Quiz/1.avif`,
    description: {
      play: "7",
      player: "3",
      numberQuestion: 5,
    },
  },
  {
    title: "Hồ Hoàn Kiếm Hà Nội",
    urlImg: `${import.meta.env.VITE_BACK_END_URL}/images/Quiz/2.avif`,

    description: {
      play: "9",
      player: "5",
      numberQuestion: 5,
    },
  },
  {
    title: "Lăng chủ tịch Hồ Chí Minh",
    urlImg: `${import.meta.env.VITE_BACK_END_URL}/images/Quiz/3.avif`,
    description: {
      play: "13",
      player: "5",
      numberQuestion: 5,
    },
  },
  {
    title: "Phố cổ Hội An",
    urlImg: `${import.meta.env.VITE_BACK_END_URL}/images/Quiz/4.avif`,
    description: {
      play: "5",
      player: "5",
      numberQuestion: 5,
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
  const [listBook, setListBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
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
      setListBook(res.data.result);
      setTotalPage(res.data.meta.total);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }
  };
  const navigate = useNavigate();
  const handleDirectDetailBook = (book) => {
    const slug = convertSlug(book.mainText);
    navigate(`/product/${slug}?id=${book._id}`);
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
            total={totalPage}
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
 total: totalPage,
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

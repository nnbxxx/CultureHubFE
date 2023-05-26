import React, { useEffect, useState } from "react";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";

import {
  Avatar,
  Button,
  Card,
  Col,
  Image,
  Layout,
  Row,
  Typography,
  theme,
} from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import BlogItem from "./blogItem";
const { Text, Link, Title, Paragraph } = Typography;
const colors = [
  "#46178F",
  "#26890C",
  "#E21B3C",
  "#1368CE",
  "#eb2f96",
  "#f5222d",
  "#fadb14",
  "#fa8c16",
  "#13c2c2",
  "#52c41a",
  "#1677ff",
  "#722ed1",
  "#2f54eb",
  "#fa541c",
  "#faad14",
  "#a0d911",
];
const data = [
  {
    color: colors[Math.floor(Math.random() * 15)],
    urlImg: "../../../public/Blog/1.png",
    author: "Admin",
    avatarAuthor: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    createAt: "March 24, 2023",
    title: "Hồ Gươm Hà Nội – Vẻ đẹp cổ kính giữa lòng thủ đô",
    description:
      "Hồ Hoàn Kiếm (Hồ Gươm) nằm ngay trung tâm quận Hoàn Kiếm nên rất thuận tiện cho du khách tìm đến ngắm cảnh và khám phá nhiều trải nghiệm thú vị vào bất cứ thời điểm nào trong ngày.",
  },
  {
    color: colors[Math.floor(Math.random() * 15)],
    urlImg: "../../../public/Blog/2.png",
    author: "Admin",
    avatarAuthor: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    createAt: "March 24, 2023",
    title: "Lịch Sử Hồ Hoàn Kiếm",
    description:
      "Hồ Hoàn Kiếm không chỉ đơn thuần là địa điểm du lịch hút khách, mà nơi đây còn là di tích đã trải qua biết bao thăng trầm lịch sử của mảnh đất Hà Thành. Hồ Hoàn Kiếm là một trong những biểu tượng của thủ đô, chỉ cần nhắc đến là nghĩ ngay đến Hà Nội.",
  },
  {
    color: colors[Math.floor(Math.random() * 15)],
    urlImg: "../../../public/Blog/3.png",
    author: "Admin",
    avatarAuthor: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    createAt: "March 24, 2023",
    title: "Đôi Điều Về Rùa Hồ Hoàn Kiếm ",
    description:
      "Rùa hồ Hoàn Kiếm có tên gọi khoa học là Rafetus Leloii hay Rafetus Vietnamensis thuộc họ ba ba, có kích thước khá lớn. Trước đây rùa hồ Hoàn Kiếm có 4 cá thể nhưng đến hiện tại tất cả đều đã chết. Cũng có thông tin cho rằng vẫn còn khoảng 5 cá thể trong hồ nhưng điều này chưa được chứng minh.",
  },
  {
    color: colors[Math.floor(Math.random() * 15)],
    urlImg: "../../../public/Blog/4.png",
    author: "Admin",
    avatarAuthor: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    createAt: "March 24, 2023",
    title: "Hồ Hoàn Kiếm Có Gì Chơi?",
    description:
      "Hồ Hoàn Kiếm Hà Nội có gì chơi? Đây luôn là địa điểm thu hút không chỉ du khách thập phương mà còn cả những cư dân địa phương. Thật là thiếu sót nếu bạn bỏ qua những địa danh nổi tiếng sau:",
  },
  {
    color: colors[Math.floor(Math.random() * 15)],
    urlImg: "../../../public/Blog/5.png",
    author: "Admin",
    avatarAuthor: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    createAt: "March 24, 2023",
    title: "Rong ruổi đường ven biển Việt Nam từ Bà Rịa tới Lăng Cô Huế",
    description:
      "Với cung đường biển này bạn có thể đi trong vòng 7 ngày hoặc 10 ngày, càng dài ngày thì khám phá được nhiều sức khỏe cũng sẽ đảm bảo hơn, đường biển xuất phát từ Vũng Tàu đến Lăng Cô. Mình sẽ chia từng chặng cho các bạn tiện việc chọn cung phù hợp với sức khỏe và túi tiền của mình.",
  },
];
const BlogsPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const [dataBlog, setDataBlog] = useState(data);
  return (
    <Layout className='layout'>
      <HeaderUser />
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: "cover",
            width: "100%",
            height: "600px",
            padding: "10px",
          }}
        >
          <source
            src='../../../public/Video/video.mp4'
            type='video/mp4'
          ></source>
        </video>
      </div>
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
          <div
            style={{
              display: "grid",
              gap: 30,
              gridTemplateColumns: " repeat(3, minmax(0, 1fr))",
            }}
          >
            {dataBlog &&
              dataBlog.length > 0 &&
              dataBlog.map((item, index) => {
                return <BlogItem data={item}></BlogItem>;
              })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 90,
            }}
          >
            <Button type='primary' size={"large"} disabled>
              Load More Blogs
            </Button>
          </div>
        </div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default BlogsPage;

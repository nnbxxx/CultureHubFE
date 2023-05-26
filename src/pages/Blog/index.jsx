import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Image, Layout, Row, Typography, theme } from "antd";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
} from "@ant-design/icons";
const { Text, Link, Title, Paragraph } = Typography;

const BlogPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='layout'>
      <HeaderUser />
      <Content
        style={
          {
            // padding: "0 50px",
            // overflow: "initial",
            // marginTop: "20px",
          }
        }
      >
        <div
          className='site-layout-content'
          style={{
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              minHeight: "425px",
              backgroundColor: "#46178F",
              color: "white",
              display: "block",
              padding: "30px 350px 30px 450px",
              borderRadius: "10px 10px 0 0",
              position: "relative",
            }}
          >
            <h1 style={{ fontSize: 44, textAlign: "left" }}>
              Hồ Gươm Hà Nội – Vẻ đẹp cổ kính giữa lòng thủ đô
            </h1>
            <span style={{ fontWeight: 400, fontSize: 22, textAlign: "left" }}>
              Hồ Hoàn Kiếm (Hồ Gươm) nằm ngay trung tâm quận Hoàn Kiếm nên rất
              thuận tiện cho du khách tìm đến ngắm cảnh và khám phá nhiều trải
              nghiệm thú vị vào bất cứ thời điểm nào trong ngày.
            </span>
            <Meta
              avatar={
                <Avatar
                  src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
                  size={70}
                  style={{ border: "5px solid #fff" }}
                />
              }
              title={
                <>
                  <Text underline style={{ color: "white", cursor: "pointer" }}>
                    Admin
                  </Text>
                </>
              }
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 5,
                position: "absolute",
                top: "50%",
                left: "20%",
              }}
              description={
                <>
                  <Text style={{ color: "white" }}>24 Mar 2023</Text>
                </>
              }
            ></Meta>
          </div>
          <div style={{ margin: "0 160px", padding: "50px 0" }}>
            <Row gutter={[10, 10]}>
              <Col
                span={4}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <Text strong style={{ fontSize: 18, fontWeight: 700 }}>
                  SHARE
                </Text>

                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                    width: "fit-content",
                    blockSize: "fit-content",
                    color: "#3C5A99",
                  }}
                  className='hover-underline'
                >
                  <FacebookFilled style={{ marginRight: 5 }} /> SHARE
                </Text>

                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                    width: "fit-content",
                    blockSize: "fit-content",
                    color: "#1DA1F2",
                  }}
                  className='hover-underline'
                >
                  <TwitterSquareFilled style={{ marginRight: 5 }} /> SHARE
                </Text>
                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                    width: "fit-content",
                    blockSize: "fit-content",
                    color: "#0077B5",
                  }}
                  className='hover-underline'
                >
                  <LinkedinFilled style={{ marginRight: 5 }} />
                  SHARE
                </Text>
              </Col>
              <Col span={20}>
                <Title level={3} style={{ marginTop: -10, fontWeight: 700 }}>
                  Hồ Hoàn Kiếm
                </Title>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Hồ Hoàn Kiếm hay còn gọi là Hồ Gươm tọa lạc ngay trung tâm thủ
                  đô Hà Nội và được bao quanh bởi 3 con phố Hàng Khay – Lê Thái
                  Tổ – Đinh Tiên Hoàng.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Do nằm ở vị trí đắc địa, là nơi kết nối giữa khu phố cổ như
                  Hàng Ngang, Hàng Đào, Cầu Gỗ, Lương Văn Can... với khu phố Tây
                  là Nhà Thờ, Tràng Thi, Hàng Bài, Tràng Tiền, Hàng Khay... nên
                  Hồ Hoàn Kiếm thu hút nhiều du khách trong và ngoài nước đến
                  tham quan, khám phá trong chuyến du lịch Hà Nội.
                </Paragraph>
                <Image
                  width={1028}
                  height={580}
                  src='../../../public/Blog/BlogMain/1.jpg'
                  preview={false}
                  style={{ padding: "10px 0" }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#333333",
                    marginBottom: "20px",
                    textAlign: "center",
                    display: "block",
                  }}
                  italic
                >
                  Hồ Hoàn Kiếm nằm ngay trung tâm thủ đô nên rất thuận tiện cho
                  du khách tham quan, khám phá.
                </Text>

                <Title level={4} style={{ marginTop: -10, fontWeight: 700 }}>
                  Lịch sử hồ Hoàn Kiếm
                </Title>

                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Hồ đã có từ rất lâu, khoảng vài nghìn năm trước, song trước
                  khi mang tên chính thức là Hoàn Kiếm, hồ có rất nhiều tên gọi
                  gắn liền với những câu chuyện khác nhau chẳng hạn như tên hồ
                  Lục Thủy vì nước hồ có màu xanh biếc quanh năm, hồ Thủy Quân
                  vì đây là nơi triều đình dùng để duyệt thủy binh…
                </Paragraph>
                <Image
                  width={1028}
                  height={580}
                  src='../../../public/Blog/BlogMain/1.jpg'
                  preview={false}
                  style={{ padding: "10px 0" }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#333333",
                    marginBottom: "20px",
                    textAlign: "center",
                    display: "block",
                  }}
                  italic
                >
                  Hồ Gươm luôn đi cùng lịch sử phát triển của dân tộc Việt Nam
                  từ xưa đến nay.
                </Text>

                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Tên gọi Hoàn Kiếm chính thức xuất hiện vào đầu thế kỷ 15 gắn
                  với truyền thuyết vua Lê Thái Tổ trả gươm báu cho Rùa thần sau
                  khi mượn gươm chiến đấu, đánh tan giặc Minh, chính thức lên
                  làm vua và gây dựng triều đại nhà Lê thịnh vượng.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Truyền thuyết kể lại rằng, khi Lê Lợi đứng lên lãnh đạo cuộc
                  khởi nghĩa Lam Sơn ở Thanh Hóa chống lại quân Minh, ông tình
                  cờ bắt được thanh gươm Thuận Thiên. Nhờ có thanh gươm báu này
                  mà ông thắng trận liên tiếp, lên ngôi vua đầu năm 1428.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Trong một lần cùng quần thần dạo thuyền trên hồ Lục Thủy, chợt
                  rùa vàng nổi lên. Khi vua tuốt gươm chỉ vào, rùa liền ngậm
                  gươm lặn xuống đáy hồ và không nổi lên nữa. Nghĩ rằng đó là ý
                  trời cho mượn gươm đánh giặc mà nay thiên hạ thái bình nên sai
                  rùa đến đòi gươm. Từ đó, hồ được đổi tên thành hồ Hoàn Kiếm.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Tuy nhiên khoảng cuối thế kỉ 16, chúa Trịnh cho ngăn hồ thành
                  hai phần tả - hữu, lấy tên là Vọng. Sau đó đến năm 1884, hồ
                  Hữu Vọng bị thực dân Pháp lấp đầy để mở mang thủ đô, còn hồ Tả
                  Vọng được giữ lại chính là hồ Hoàn Kiếm (hồ Gươm) ngày nay.
                </Paragraph>
                <Title level={4} style={{ marginTop: -10, fontWeight: 700 }}>
                  Phương tiện di chuyển đến hồ Hoàn Kiếm
                </Title>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Nếu du khách dừng chân nghỉ ngơi tại các nhà nghỉ, khách sạn
                  quanh khu vực phố cổ thì chỉ cần vài bước đi bộ là có thể tha
                  hồ khám phá những địa điểm du lịch đẹp Hà Nội như hồ Hoàn
                  Kiếm, đền Ngọc Sơn, phố đi bộ hồ Gươm…
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Trường hợp, du khách ở xa trung tâm có thể di chuyển bằng các
                  phương tiện công cộng khác như taxi hoặc xe bus. Những tuyến
                  xe bus đi qua hồ Hoàn Kiếm mà du khách có thể tham khảo là số
                  09, số 14 và số 16 với tần suất 15 – 20 phút/chuyến và thời
                  gian hoạt động từ 5h05 đến 21h05.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Riêng với taxi ở Hà Nội, để tránh tình trạng bị chặt chém, du
                  khách nên hỏi giá cước trước và đừng quên chọn những hãng taxi
                  uy tín như Mai Linh, Thành Công…
                </Paragraph>
                <Image
                  width={1028}
                  height={580}
                  src='../../../public/Blog/BlogMain/3.jpg'
                  preview={false}
                  style={{ padding: "10px 0" }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#333333",
                    marginBottom: "20px",
                    textAlign: "center",
                    display: "block",
                  }}
                  italic
                >
                  Có rất nhiều phương tiện cho du khách lựa chọn di chuyển đến
                  hồ Gươm.
                </Text>
                <Title level={4} style={{ marginTop: -10, fontWeight: 700 }}>
                  Những điểm đến không thể bỏ qua ở hồ Hoàn Kiếm
                </Title>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Đền Ngọc Sơn: Đền Ngọc Sơn là một trong những điểm đến không
                  thể bỏ qua khi đến du lịch Hà Nội. Nằm trên một hòn đảo ở phía
                  bắc của Hồ Hoàn Kiếm, đền Ngọc Sơn được nối với phần bờ bằng
                  cây cầu Thê Húc sơn màu đỏ tươi nổi bật. Đến đền Ngọc Sơn, du
                  khách không chỉ được chiêm ngưỡng công trình kiến trúc tuyệt
                  tác in hằn dấu vết thời gian đầy hoài cổ, ngắm nhìn toàn cảnh
                  Hồ Gươm đẹp lung linh mà còn có cơ hội tìm hiểu về văn hóa
                  cũng như các câu chuyện ít người biết gắn liền với lịch sử của
                  đền.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Tất cả kiến trúc, hệ thống câu đối, hoành phi, vật bài trí ở
                  đền Ngọc Sơn đều là tổng thể dung hợp hài hòa ung hòa của Đạo
                  giáo, Phật giáo và Nho giáo.
                </Paragraph>
                <Image
                  width={1028}
                  height={580}
                  src='../../../public/Blog/BlogMain/4.jpg'
                  preview={false}
                  style={{ padding: "10px 0" }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#333333",
                    marginBottom: "20px",
                    textAlign: "center",
                    display: "block",
                  }}
                  italic
                >
                  Đền Ngọc Sơn - Tuyệt tác kiến trúc giữa đất kinh kỳ.
                </Text>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Cầu Thê Húc: Cùng với đền Ngọc Sơn, cầu Thê Húc là biểu tượng
                  cho nét đẹp quyến rũ của hồ Hoàn Kiếm nói chung và thủ đô Hà
                  Nội nói riêng. Với kiến trúc xây dựng độc đáo cùng nhiều giá
                  trị văn hóa, lịch sử lâu đời, cầu Thê Húc đã trở thành điểm
                  đến không thể bỏ qua của mỗi du khách khi đến du lịch Hà Nội.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Khi mới khởi công, cầu Thê Húc có thiết kế uốn cong hình con
                  tôm, được làm bằng gỗ rất thô sơ và sơn màu đỏ - màu của sự
                  sống, phồn vinh, thịnh vượng. Tương truyền cuối thế kỷ 19 cầu
                  bị gãy và được xây mới với chân làm bằng xi măng cốt thép,
                  sàn, lan can bằng gỗ và vẫn giữ lại màu đỏ đặc trưng.
                </Paragraph>
                <Image
                  width={1028}
                  height={580}
                  src='../../../public/Blog/BlogMain/5.jpg'
                  preview={false}
                  style={{ padding: "10px 0" }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#333333",
                    marginBottom: "20px",
                    textAlign: "center",
                    display: "block",
                  }}
                  italic
                >
                  Tên cầu Thê Húc có ý nghĩa là “nơi đậu ánh sáng Mặt Trời buổi
                  sáng sớm”.
                </Text>

                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Vườn hoa, tượng đài Lý Thái Tổ: Tượng đài Vua Lý Thái Tổ được
                  đặt tại vườn hoa Lý Thái Tổ, đường Đinh Tiên Hoàng, quận Hoàn
                  Kiếm, trung tâm thủ đô Hà Nội. Công trình này được xây dựng
                  nhằm tưởng nhớ, tôn vinh nhằm tôn vua Lý Thái Tổ - người đặt
                  nền móng xây dựng kinh thành Thăng Long.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Không chỉ là công trình kiến trúc mang giá trị lịch sử, vườn
                  hoa và tượng đài Lý Thái Tổ còn là điểm đến yêu thích của
                  người dân địa phương cũng như khách du lịch vào mỗi buổi chiều
                  muộn.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Sau khi tham quan các điểm đến trong di tích đền Ngọc Sơn, du
                  khách có thể dạo bộ đến đây để ngắm nhìn cuộc sống bình yên
                  của người dân thủ đô, để cảm nhận một Hà Nội rất khác so với
                  hình ảnh đông đúc, xô bồ thường gặp.
                </Paragraph>
                <Image
                  width={1028}
                  height={580}
                  src='../../../public/Blog/BlogMain/6.jpg'
                  preview={false}
                  style={{ padding: "10px 0" }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#333333",
                    marginBottom: "20px",
                    textAlign: "center",
                    display: "block",
                  }}
                  italic
                >
                  Vườn hoa, tượng đài Lý Thái Tổ - Điểm đến yêu thích của người
                  dân địa phương và du khách.
                </Text>

                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Nhà hát Múa Rối Nước Thăng Long: Đây là một trong những nhà
                  hát múa rối truyền thống vẫn còn hoạt động cho đến ngày nay và
                  luôn mang đến cho khán giả những màn trình diễn đầy màu sắc
                  nghệ thuật truyền thống ấn tượng.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Những màn trình diễn rối nước đặc sắc không chỉ được du khách
                  và người dân địa phương yêu thích mà còn trở nên nổi tiếng
                  khắp năm châu và tham dự nhiều liên hoan nghệ thuật trên toàn
                  thế giới.
                </Paragraph>
                <Image
                  width={1028}
                  height={580}
                  src='../../../public/Blog/BlogMain/7.jpg'
                  preview={false}
                  style={{ padding: "10px 0" }}
                />
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Phố đi bộ hồ Gươm: Mặc dù chỉ mới chính thức hoạt động hơn 1
                  năm, song phố đi bộ quanh hồ Gươm đã trở thành điểm đến lý
                  tưởng cho nhiều người dân thủ đô cũng như khách thập phương
                  đến du lịch Hà Nội vào mỗi dịp cuối tuần.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Theo kinh nghiệm du lịch Hà Nội, phố đi bộ Hồ Gươm đông vui
                  nhất là sau khoảng 7 giờ tối vào 2 ngày thứ 7 và chủ Nhật. Lúc
                  thành phố vừa lên đèn, bỗng nhiên phố đi bộ đông đúc người qua
                  lại với đủ trò chơi, hoạt động văn hóa nghệ thuật sôi động,
                  hấp dẫn.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Tiêu biểu nhất phải kể đến những tiết mục âm nhạc đường phố
                  với đủ thể loại như kèn saxophone, sáo, violon, chèo, cải
                  lương, nhạc EDM, rock… Cảm giác được dạo những bước chân lững
                  thững giữa không gian thoáng đãng không khói bụi, còi xe, thả
                  hồn theo những bài hát, giai điệu yêu thích đúng là không còn
                  gì tuyệt vời hơn.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Ngoài ra những trò chơi dân gian, hiện đại vô cùng thú vị như
                  ô ăn quan, nhảy dây, đánh chuyền… không chỉ khiến các em nhỏ
                  mà cả thanh niên, người lớn tuổi đều vô cùng thích thú.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Bên cạnh nhiều hoạt động vui chơi náo nhiệt, ở một góc nào đó
                  của phố đi bộ vẫn có những không gian mang nhiều nét hoài niệm
                  Hà Nội cổ với quầy bán tò he, đèn ông sao, gánh hàng rong đầy
                  quà bánh xưa.
                </Paragraph>
                <Title style={{ color: "#333", fontSize: 44 }}>
                  Related articles
                </Title>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Card
                    style={{
                      width: 330,
                      height: 550,
                      backgroundColor: "#46178F",
                      borderColor: "#46178F",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                      position: "relative",
                    }}
                    cover={
                      <Image
                        alt='example'
                        src='../../../public/Blog/2.png'
                        preview={false}
                        height={185}
                      />
                    }
                  >
                    <Meta
                      style={{ marginBottom: 20 }}
                      title={
                        <div
                          style={{ color: "white" }}
                          className='hover-underline'
                        >
                          Admin
                        </div>
                      }
                      description={
                        <div style={{ color: "white", marginTop: -10 }}>
                          March 24, 2023
                        </div>
                      }
                      avatar={
                        <Avatar
                          src={
                            "https://xsgames.co/randomusers/avatar.php?g=pixel"
                          }
                          size={50}
                          style={{ border: "5px solid #fff" }}
                        />
                      }
                    />
                    <Paragraph
                      style={{ fontSize: 18, color: "white" }}
                      ellipsis={{ rows: 2 }}
                      className='hover-underline'
                      strong
                    >
                      Lịch Sử Hồ Hoàn Kiếm
                    </Paragraph>
                    <Paragraph
                      style={{ color: "white", fontSize: 14 }}
                      ellipsis={{ rows: 4 }}
                    >
                      Hồ Hoàn Kiếm không chỉ đơn thuần là địa điểm du lịch hút
                      khách, mà nơi đây còn là di tích đã trải qua biết bao
                      thăng trầm lịch sử của mảnh đất Hà Thành. Hồ Hoàn Kiếm là
                      một trong những biểu tượng của thủ đô, chỉ cần nhắc đến là
                      nghĩ ngay đến Hà Nội.
                    </Paragraph>
                    <Text
                      strong
                      underline
                      style={{
                        color: "white",
                        fontSize: 16,
                        cursor: "pointer",
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
                        right: 70,
                        cursor: "pointer",
                      }}
                    >
                      <Text
                        style={{
                          color: "#46178F",
                          fontWeight: 700,
                        }}
                      >
                        events
                      </Text>
                    </div>
                  </Card>
                  <Card
                    style={{
                      width: 330,
                      height: 550,
                      backgroundColor: "#26890C",
                      borderColor: "#26890C",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                      position: "relative",
                    }}
                    cover={
                      <Image
                        alt='example'
                        src='../../../public/Blog/3.png'
                        preview={false}
                        height={185}
                      />
                    }
                  >
                    <Meta
                      style={{ marginBottom: 20 }}
                      title={
                        <div
                          style={{ color: "white" }}
                          className='hover-underline'
                        >
                          Admin
                        </div>
                      }
                      description={
                        <div style={{ color: "white", marginTop: -10 }}>
                          March 24, 2023
                        </div>
                      }
                      avatar={
                        <Avatar
                          src={
                            "https://xsgames.co/randomusers/avatar.php?g=pixel"
                          }
                          size={50}
                          style={{ border: "5px solid #fff" }}
                        />
                      }
                    />
                    <Paragraph
                      style={{ fontSize: 18, color: "white" }}
                      ellipsis={{ rows: 2 }}
                      className='hover-underline'
                      strong
                    >
                      Đôi Điều Về Rùa Hồ Hoàn Kiếm
                    </Paragraph>
                    <Paragraph
                      style={{ color: "white", fontSize: 14 }}
                      ellipsis={{ rows: 4 }}
                    >
                      Rùa hồ Hoàn Kiếm có tên gọi khoa học là Rafetus Leloii hay
                      Rafetus Vietnamensis thuộc họ ba ba, có kích thước khá
                      lớn. Trước đây rùa hồ Hoàn Kiếm có 4 cá thể nhưng đến hiện
                      tại tất cả đều đã chết. Cũng có thông tin cho rằng vẫn còn
                      khoảng 5 cá thể trong hồ nhưng điều này chưa được chứng
                      minh.
                    </Paragraph>
                    <Text
                      strong
                      underline
                      style={{
                        color: "white",
                        fontSize: 16,
                        cursor: "pointer",
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
                        right: 70,
                        cursor: "pointer",
                      }}
                    >
                      <Text
                        style={{
                          color: "#26890C",
                          fontWeight: 700,
                        }}
                      >
                        events
                      </Text>
                    </div>
                  </Card>
                  <Card
                    style={{
                      width: 330,
                      height: 550,
                      backgroundColor: "#E21B3C",
                      borderColor: "#E21B3C",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                      position: "relative",
                    }}
                    cover={
                      <Image
                        alt='example'
                        src='../../../public/Blog/4.png'
                        preview={false}
                        height={185}
                      />
                    }
                  >
                    <Meta
                      style={{ marginBottom: 20 }}
                      title={
                        <div
                          style={{ color: "white" }}
                          className='hover-underline'
                        >
                          Admin
                        </div>
                      }
                      description={
                        <div style={{ color: "white", marginTop: -10 }}>
                          March 24, 2023
                        </div>
                      }
                      avatar={
                        <Avatar
                          src={
                            "https://xsgames.co/randomusers/avatar.php?g=pixel"
                          }
                          size={50}
                          style={{ border: "5px solid #fff" }}
                        />
                      }
                    />
                    <Paragraph
                      style={{ fontSize: 18, color: "white" }}
                      ellipsis={{ rows: 2 }}
                      className='hover-underline'
                      strong
                    >
                      Hồ Hoàn Kiếm Có Gì Chơi?
                    </Paragraph>
                    <Paragraph
                      style={{ color: "white", fontSize: 14 }}
                      ellipsis={{ rows: 4 }}
                    >
                      Hồ Hoàn Kiếm Hà Nội có gì chơi? Đây luôn là địa điểm thu
                      hút không chỉ du khách thập phương mà còn cả những cư dân
                      địa phương. Thật là thiếu sót nếu bạn bỏ qua những địa
                      danh nổi tiếng sau:
                    </Paragraph>
                    <Text
                      strong
                      underline
                      style={{
                        color: "white",
                        fontSize: 16,
                        cursor: "pointer",
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
                        right: 70,
                        cursor: "pointer",
                      }}
                    >
                      <Text
                        style={{
                          color: "#E21B3C",
                          fontWeight: 700,
                        }}
                      >
                        events
                      </Text>
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default BlogPage;

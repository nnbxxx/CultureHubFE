import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {
  Layout,
  theme,
  Button,
  Rate,
  InputNumber,
  Col,
  Row,
  Divider,
} from "antd";
const { Header, Content, Footer } = Layout;
import { BsCartPlus } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { callGetBookDetailById } from "../../service/api";
import "./index.scss";
import ImageGallery from "react-image-gallery";
import ModalViewImg from "./ModalViewImg";
import BookLoad from "./BookLoad";
import { doAddBookAction } from "../../redux/order/orderSlice";
import HeaderUser from "../../components/Header/HeaderUser";
import FooterUser from "../../components/Footer/FooterUser";
const baseURL = import.meta.env.VITE_BACK_END_URL;
const BookPage = (props) => {
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  const id = params.get("id");
  const [quantityBook, setQuantityBook] = useState(1);
  const onChangeQuality = (value) => {
    setQuantityBook(value);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowModalViewImg, setIsShowModalViewImg] = useState(false);
  const refGallery = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataBook, setDataBook] = useState(null);
  const [images, setImages] = useState([]);
  const handleCreateImg = (listItems) => {
    let tmpList = [];
    listItems.forEach((item) => {
      tmpList.push({
        original: `${baseURL}/images/book/${item}`,
        thumbnail: `${baseURL}/images/book/${item}`,
      });
    });
    setImages(tmpList);
  };
  const fetchBookById = async () => {
    const res = await callGetBookDetailById(id);
    if (res && res.data) {
      setDataBook(res.data);
      let listItems = res.data.slider;
      listItems.unshift(res.data.thumbnail);
      handleCreateImg(listItems);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchBookById();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);
  const handleFormmater = (value) => {
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleAddToCart = (quanlity, dataBook) => {
    dispatch(
      doAddBookAction({ quanlity, detail: dataBook, _id: dataBook._id })
    );
  };
  return (
    <>
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
            {isLoading && !dataBook ? (
              <BookLoad />
            ) : (
              <div style={{ minHeight: "100vh" }}>
                <div className='container'>
                  <div className='left-side' style={{ cursor: "pointer" }}>
                    <ImageGallery
                      ref={refGallery}
                      items={images}
                      showFullscreenButton={false}
                      showPlayButton={false}
                      slideOnThumbnailOver={true}
                      onClick={() => {
                        setIsShowModalViewImg(true);
                        setCurrentIndex(
                          refGallery?.current?.getCurrentIndex() ?? 0
                        );
                      }}
                    />
                  </div>
                  <div
                    className='right-side'
                    style={{ display: "flex", gap: 10 }}
                  >
                    <div className='brand'>
                      Author <a>{dataBook?.author}</a>
                    </div>
                    <h1 className='title '>{dataBook?.mainText}</h1>
                    <div className='below-title'>
                      <Rate
                        disabled
                        defaultValue={5}
                        style={{ fontSize: "14px" }}
                      />
                      <div className='sold-book'>Sold {dataBook?.sold}</div>
                    </div>
                    <div className='price'>
                      <span>{handleFormmater(dataBook?.price)} ₫</span>
                    </div>
                    <div className='ship'>
                      <label>Ship Price: </label>
                      <div> Free Ship</div>
                    </div>
                    <div className='quantity'>
                      <label>Quantity: </label>
                      <div className='input-number'>
                        {" "}
                        <InputNumber
                          min={1}
                          max={dataBook?.quantity}
                          defaultValue={1}
                          onChange={onChangeQuality}
                        />
                      </div>
                    </div>
                    <div className='add-to-cart'>
                      <Button
                        size='large'
                        type='primary'
                        icon={<BsCartPlus />}
                        onClick={() => handleAddToCart(quantityBook, dataBook)}
                      >
                        Add to cart
                      </Button>
                      <Button size='large'>Get Voucher</Button>
                    </div>
                  </div>
                </div>
                <Divider orientation='left'>Detail Product</Divider>
                <div
                  className='container'
                  style={{
                    margin: "20px 0 20px 0",
                    padding: 20,
                  }}
                >
                  <div className='description-product'>
                    <div className='description-left'>
                      <h4>Dám Bị Ghét</h4>
                      <p>Các mối quan hệ xã hội thật mệt mỏi.</p>
                      <p>Cuộc sống sao mà nhạt nhẽo và vô nghĩa.</p>
                      <p>Bản thân mình xấu xí và kém cỏi.</p>
                      <p>Quá khứ đầy buồn đau còn tương lai thì mờ mịt.</p>
                      <p>Yêu cầu của người khác thật khắc nghiệt và phi lý.</p>
                      <p>
                        TẠI SAO BẠN CỨ PHẢI SỐNG THEO KHUÔN MẪU NGƯỜI KHÁC ĐẶT
                        RA?
                      </p>
                      <p>
                        Dưới hình thức một cuộc đối thoại giữa Chàng thanh niên
                        và Triết gia, cuốn sách trình bày một cách sinh động và
                        hấp dẫn những nét chính trong tư tưởng của nhà tâm lý
                        học Alfred Adler, người được mệnh danh là một trong “ba
                        người khổng lồ của tâm lý học hiện đại”, sánh ngang với
                        Freud và Jung. Khác với Freud cho rằng quá khứ và hoàn
                        cảnh là động lực làm nên con người ta của hiện tại,
                        Adler chủ trương “cuộc đời ta là do ta lựa chọn”, và tâm
                        lý học Adler được gọi là “tâm lý học của lòng can đảm”.
                      </p>
                      <p>
                        Bạn bất hạnh không phải do quá khứ và hoàn cảnh, càng
                        không phải do thiếu năng lực. Bạn chỉ thiếu “can đảm” mà
                        thôi. Nói một cách khác, bạn không đủ “can đảm để dám
                        hạnh phúc”. [] Bởi can đảm để dám hạnh phúc bao gồm cả
                        “can đảm để dám bị ghét” nữa. [] Chỉ khi dám bị người
                        khác ghét bỏ, chúng ta mới có được tự do, có được hạnh
                        phúc.
                      </p>
                      <p>
                        Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện
                        hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và
                        địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác
                        như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập
                        khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
                        trên 1 triệu đồng).....
                      </p>
                    </div>
                    <div className='description-right'>
                      {" "}
                      <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2442759202117!2d106.80138097469855!3d10.86901618928545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175273f63e36af5%3A0x37f0eeb81585394c!2zVUlULSBD4buVbmcgQw!5e0!3m2!1svi!2s!4v1684249392067!5m2!1svi!2s'
                        style={{ border: "0", width: "100%", height: "100%" }}
                        allowfullscreen=''
                        loading='lazy'
                        referrerpolicy='no-referrer-when-downgrade'
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Content>

        <FooterUser />
      </Layout>
      <ModalViewImg
        open={isShowModalViewImg}
        setOpen={setIsShowModalViewImg}
        images={images}
        title={dataBook?.mainText}
        currentIndex={currentIndex}
      ></ModalViewImg>
    </>
  );
};
export default BookPage;

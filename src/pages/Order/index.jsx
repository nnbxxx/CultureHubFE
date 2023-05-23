import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {
  Layout,
  theme,
  Input,
  Badge,
  Button,
  Image,
  Empty,
  Divider,
  InputNumber,
  Steps,
  Form,
  Result,
} from "antd";
const { Header, Content, Footer } = Layout;
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { callPostCreateOrder } from "../../service/api";
import "./index.scss";
import {
  doAddBookAction,
  doDeleteBookAction,
  doPlaceOrderAction,
  doUpdateBookAction,
} from "../../redux/order/orderSlice";
import TextArea from "antd/es/input/TextArea";
import HeaderUser from "../../components/Header/HeaderUser";
import FooterUser from "../../components/Footer/FooterUser";
import { convertSlug } from "../../components/ConvertSlug";
const baseURL = import.meta.env.VITE_BACK_END_URL;

const OrderPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const user = useSelector((state) => state.account.user);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let carts = useSelector((state) => state.order.carts);
  const handleDirectDetailBook = (book) => {
    const slug = convertSlug(book.mainText);
    navigate(`/book/${slug}?id=${book._id}`);
  };
  const [total, setTotal] = useState(0);
  const handleOnChangeQuanlity = (value, book) => {
    if (!isNaN(value) || value < 1) {
      dispatch(
        doUpdateBookAction({ quanlity: value, detail: book, _id: book._id })
      );
    }
  };
  const handleDeleteBook = (book) => {
    dispatch(doDeleteBookAction({ _id: book._id }));
  };
  useEffect(() => {
    let tmpTotal = 0;
    if (carts && carts.length > 0) {
      carts.map((item) => {
        tmpTotal += item.quanlity * item.detail.price;
      });
    }
    setTotal(tmpTotal);
  }, [carts]);
  const [showListCart, setShowListCart] = useState(true);
  const [stepCurrent, setStepCurrent] = useState(0);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showEmpty, setShowEmpty] = useState(true);
  const onFinishForm = async (values) => {
    // console.log("Success:", values);
    const data = {
      name: values.username,
      address: values.address,
      phone: values.phone,
      totalPrice: total,
      detail: [],
    };
    let tmpListBook = [];
    carts.forEach((item) => {
      tmpListBook.push({
        bookName: item.detail.mainText,
        quantity: item.quanlity,
        _id: item._id,
      });
    });

    data.detail = [...tmpListBook];
    setLoading(true);
    const res = await callPostCreateOrder(data);
    if (res && res.data) {
      setShowListCart(false);
      dispatch(doPlaceOrderAction());
      setLoading(false);
      setStepCurrent(2);
      setShowEmpty(false);
    }
  };
  return (
    <>
      <Layout className='layout'>
        <HeaderUser></HeaderUser>
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
              minHeight: "80vh",
            }}
          >
            {(carts && carts.length > 0 && isAuthenticated === true) ||
            !showEmpty ? (
              <>
                <Steps
                  size='large'
                  style={{ marginBottom: 15 }}
                  current={stepCurrent}
                  items={[
                    {
                      title: "Order",
                    },
                    {
                      title: "Place an order.",
                    },
                    {
                      title: "Payment",
                    },
                  ]}
                />
                {
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div
                      style={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        gap: 20,
                        margin: "10px 20px",
                      }}
                      className='listbook'
                    >
                      {carts &&
                        showListCart &&
                        carts?.length > 0 &&
                        carts?.map((item) => {
                          return (
                            <div
                              key={item._id}
                              className='book'
                              style={{
                                borderRadius: 5,
                                padding: 15,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 10,

                                background: colorBgContainer,
                              }}
                            >
                              <Image
                                preview={false}
                                width={100}
                                height={100}
                                src={`${baseURL}/images/book/${item.detail.thumbnail}`}
                              ></Image>
                              <span
                                style={{
                                  fontSize: "16px",
                                  lineHeight: 1.2,
                                  width: 250,
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  handleDirectDetailBook(item.detail);
                                }}
                              >
                                {item.detail.mainText}
                              </span>
                              <div
                                className='price-prpduct'
                                style={{ display: "flex", gap: 10 }}
                              >
                                <label>Price:</label>
                                <div>
                                  {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  }).format(item.detail.price)}
                                </div>
                              </div>
                              <InputNumber
                                min={1}
                                max={item.detail.quantity}
                                value={item.quanlity}
                                onChange={(value) => {
                                  handleOnChangeQuanlity(value, item.detail);
                                }}
                              ></InputNumber>
                              <div
                                className='price-product'
                                style={{ display: "flex", gap: 10 }}
                              >
                                <label>Sum: </label>
                                <div>
                                  {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  }).format(item.quanlity * item.detail.price)}
                                </div>
                              </div>
                              <DeleteOutlined
                                style={{ cursor: "pointer", fontSize: 15 }}
                                onClick={() => {
                                  handleDeleteBook(item.detail);
                                }}
                              />
                            </div>
                          );
                        })}
                    </div>
                    {stepCurrent === 0 && (
                      <>
                        <div
                          style={{
                            background: colorBgContainer,
                            padding: 20,
                            borderRadius: "5px",
                            width: "30%",
                            maxHeight: 250,
                            padding: "10px",
                            margin: "10px 0px",
                          }}
                        >
                          <div
                            className='subtotal'
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              fontSize: 18,
                            }}
                          >
                            <label>Subtotal:</label>
                            <div>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(total)}
                            </div>
                          </div>
                          <Divider></Divider>
                          <div
                            className='total'
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              fontSize: 18,
                            }}
                          >
                            <label>Total:</label>
                            <div
                              style={{
                                color: "#ff424e",
                                fontSize: "24px",
                                fontWeight: 500,
                                lineHeight: 1.5,
                              }}
                            >
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(total)}
                            </div>
                          </div>
                          <Divider></Divider>
                          <Button
                            type='primary'
                            size='large'
                            style={{ float: "right" }}
                            onClick={() => {
                              setStepCurrent(1);
                              form.setFieldsValue({
                                username: user.fullName,
                                phone: user.phone,
                              });
                            }}
                          >
                            Purchase ({carts.length})
                          </Button>
                        </div>
                      </>
                    )}
                    {stepCurrent === 1 && (
                      <>
                        <div
                          style={{
                            background: colorBgContainer,
                            padding: 20,
                            borderRadius: "5px",
                            width: "30%",
                            minHeight: "60vh",
                            padding: "10px",
                            margin: "10px 0px",
                          }}
                        >
                          <Form
                            onFinish={onFinishForm}
                            form={form}
                            name='information-custumer'
                            layout='vertical'
                          >
                            <Form.Item
                              label={`Recipient's name`}
                              name='username'
                              required
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              label='Phone Number'
                              name='phone'
                              rules={[
                                {
                                  required: true,
                                  message: "Please fill your Phone Number !",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item label='Payment methods' name='methods'>
                              <span style={{ display: "block" }}>
                                <Badge
                                  status='processing'
                                  text={`Cash on delivery (COD) payment`}
                                />
                              </span>
                            </Form.Item>
                            <Form.Item
                              label='Address'
                              name='address'
                              rules={[
                                {
                                  required: true,
                                  message: "Please fill your address !",
                                },
                              ]}
                            >
                              <TextArea rows={2} />
                            </Form.Item>
                            <Divider></Divider>
                            <div
                              className='total'
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                fontSize: 18,
                              }}
                            >
                              <label>Total:</label>
                              <div
                                style={{
                                  color: "#ff424e",
                                  fontSize: "24px",
                                  fontWeight: 500,
                                  lineHeight: 1.5,
                                }}
                              >
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(total)}
                              </div>
                            </div>
                            <Divider></Divider>
                            <Button
                              type='primary'
                              size='large'
                              style={{ float: "right" }}
                              onClick={() => {
                                form.submit();
                              }}
                              loading={loading}
                            >
                              Payment ({carts.length})
                            </Button>
                          </Form>
                        </div>
                      </>
                    )}
                  </div>
                }
                {stepCurrent === 2 && (
                  <Result
                    icon={<CheckCircleOutlined />}
                    title='Your order has been placed successfully.'
                    extra={
                      <Button
                        type='primary'
                        onClick={() => {
                          navigate("/history");
                        }}
                      >
                        View History
                      </Button>
                    }
                  />
                )}
              </>
            ) : (
              <>
                {
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Empty
                      image='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png'
                      imageStyle={{
                        height: 300,
                        width: 300,
                        marginTop: 30,
                      }}
                      description={
                        <span style={{ fontSize: "20px" }}>
                          Your shopping cart is still empty.
                        </span>
                      }
                    >
                      <Button
                        type='primary'
                        size='large'
                        onClick={() => {
                          return navigate("/");
                        }}
                      >
                        Buy Now
                      </Button>
                    </Empty>
                  </div>
                }
              </>
            )}
          </div>
        </Content>
        <Divider></Divider>
        <FooterUser />
      </Layout>
    </>
  );
};
export default OrderPage;

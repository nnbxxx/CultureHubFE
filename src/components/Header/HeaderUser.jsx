import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {
  Layout,
  Menu,
  theme,
  Input,
  Dropdown,
  message,
  Badge,
  Button,
  Avatar,
  Popover,
  Image,
  Form,
} from "antd";
const { Header } = Layout;
import { HistoryOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { FaBars, FaReact } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { GrAchievement } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { callLogoutAccount } from "../../service/api";
import { doLogoutAction } from "../../redux/account/accountSlice";
import { ModalManageAccount } from "./ModalManageAccount";
import FloatButtonMenu from "../FloatButton/FloatButton";
import { convertSlug } from "../ConvertSlug";
import IconHomePage from "./IconHomePage/IconHomePage";
const baseURL = import.meta.env.VITE_BACK_END_URL;
const HeaderUser = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const user = useSelector((state) => state.account.user);
  const [isShowModalManageUser, setIsShowModalManageUser] = useState(false);
  const { searchBook, setSearchBook } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleLogout = async () => {
    const res = await callLogoutAccount();
    if (res && res.data) {
      message.success("Logout Successful");
      navigate("/");
      dispatch(doLogoutAction());
      // dispatch(doPlaceOrderAction());
    }
  };
  const handleMenuClick = (e) => {
    // console.log("click", e);
    if (e.key === "2") {
      handleLogout();
    }
    if (e.key === "4") {
      navigate("/history");
    }
    if (e.key === "3") {
      navigate("/admin");
    }
    if (e.key === "1") {
      setIsShowModalManageUser(true);
    }
    if (e.key === "5") {
      navigate(`/achievement/id=${user.id}`);
    }
  };
  const items = [
    {
      label: <span> Manage Account</span>,
      key: "1",
      icon: <MdOutlineManageAccounts />,
    },

    {
      label: "Purchase history ",
      key: "4",
      icon: <HistoryOutlined />,
    },
    {
      label: "My Achievement",
      key: "5",
      icon: <GrAchievement />,
    },
    {
      label: "Log Out",
      key: "2",
      icon: <FiLogOut />,
      danger: true,
    },
  ];
  if (user.role !== "USER") {
    items.unshift({
      label: "Admin Page",
      key: "3",
      icon: <FcManager />,
    });
  }
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const urlAvatar = `${import.meta.env.VITE_BACK_END_URL}/images/avatar/${
    user.avatar
  }`;
  let carts = useSelector((state) => state.order.carts);
  const handleDirectDetailBook = (book) => {
    const slug = convertSlug(book.mainText);
    navigate(`/product/${slug}?id=${book._id}`);
  };

  const contentPopover = (
    <>
      <div className='list-books'>
        {carts &&
          carts?.length > 0 &&
          carts?.map((item) => {
            return (
              <>
                <div
                  className='book'
                  key={item._id}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleDirectDetailBook(item.detail);
                  }}
                >
                  <Image
                    preview={false}
                    className='book-image'
                    src={`${baseURL}/images/book/${item.detail.thumbnail}`}
                    width={60}
                    height={60}
                  ></Image>
                  <div className='book-name'>{item.detail.mainText}</div>
                  <div className='book-price'>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.detail.price)}
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <Button
        type='primary'
        className='button-see-cart'
        onClick={() => {
          return navigate("/order");
        }}
      >
        See Cart
      </Button>
    </>
  );
  return (
    <>
      <FloatButtonMenu />
      <Header>
        <IconHomePage />

        <div className='navbar-search'>
          <Input.Search
            placeholder='What are you looking for today?'
            allowClear
            onSearch={(value) => {
              const query = `&mainText=/${value}/i`;
              setSearchBook(query);
            }}
            enterButton
            className='search-bar'
          />

          {isAuthenticated === true ? (
            <>
              <Popover
                content={contentPopover}
                title='Newly added product'
                rootClassName='popover-cart'
                placement='bottomRight'
              >
                <div className='cart-icon'>
                  <Badge
                    count={carts?.length > 0 ? carts?.length : 0}
                    offset={[-2, 5]}
                    showZero
                  >
                    <ShoppingCartOutlined />
                  </Badge>
                </div>
              </Popover>
            </>
          ) : null}
          <ModalManageAccount
            open={isShowModalManageUser}
            setOpen={setIsShowModalManageUser}
            urlAvatar={urlAvatar}
          />
          {isAuthenticated === true ? (
            <div className='account'>
              <Dropdown.Button
                menu={menuProps}
                size='large'
                placement='bottom'
                icon={<Avatar shape='circle' src={urlAvatar}></Avatar>}
              >
                {user.fullName}
              </Dropdown.Button>
            </div>
          ) : (
            <div
              className='account'
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <Button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            </div>
          )}
        </div>
      </Header>
    </>
  );
};
export default HeaderUser;

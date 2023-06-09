import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LoginPage from "./pages/login";
import Contact from "./pages/Contact";
import BookPage from "./pages/Book";
import Home from "./components/Home";
import RegisterPage from "./pages/register";
import { callFetchAccount } from "./service/api";
import { useDispatch, useSelector } from "react-redux";
import { doGetAccountAction } from "./redux/account/accountSlice";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/Admin/admin";
import ProtectedRoute from "./components/ProtectedRoute";
import LayoutUser from "./components/LayoutUser/LayoutUser";
import LayoutAdmin from "./components/LayoutAdmin/LayoutAdmin";
import ManageUser from "./pages/Admin/User/ManageUser";
import { ManageBook } from "./pages/Admin/Books/ManageBook";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./styles/global.scss";
import OrderPage from "./pages/Order";
import HistoryPage from "./pages/History";
import { ManageOrders } from "./pages/Admin/Orders/ManageOrders";
import Quiz from "./pages/Quiz/Quiz";
import { FloatButton } from "antd";
import AchievementPage from "./pages/Achievement/AchievementPage";
import BlogPage from "./pages/Blog";
import ManageBlog from "./pages/Admin/Blog/ManageBlog";
import BlogsPage from "./pages/Blogs";
import ListQuiz from "./pages/Quizs/ListQuiz";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutUser />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "contacts",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/product/:id",
    element: <BookPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <AdminPage />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "user",
        element: <ManageUser />,
      },
      {
        path: "product",
        element: <ManageBook />,
      },
      {
        path: "order",
        element: <ManageOrders />,
      },
      {
        path: "blog",
        element: <ManageBlog />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/quiz/:id",
    element: <Quiz />,
  },
  {
    path: "/achievement/:id",
    element: <AchievementPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogPage />,
  },
  {
    path: "/blog",
    element: <BlogsPage />,
  },
  {
    path: "/quiz",
    element: <ListQuiz />,
  },
]);
export default function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const isLoading = useSelector((state) => state.account.isLoading);
  const getAccount = async () => {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/register"
    ) {
      return;
    }
    const res = await callFetchAccount();
    if (res.data) dispatch(doGetAccountAction(res.data.user));
  };
  useEffect(() => {
    getAccount();
  }, []);
  return (
    <>
      {" "}
      {!isLoading ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/register" ||
      window.location.pathname === "/" ? (
        <>
          <RouterProvider router={router} />
        </>
      ) : (
        <Loading />
      )}
      {/*  */}
    </>
  );
}

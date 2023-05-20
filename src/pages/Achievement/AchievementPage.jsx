import React, { useEffect, useState } from "react";
import { Avatar, Button, Image, Layout, Progress, theme } from "antd";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AchievementItem from "./AchievementItem";
import Ranking from "./Ranking";
import "./index.scss";
const listAchievementDay = [
  {
    src: "../../../public/Achievenment/badge-Day.svg",
    count: "03",
    name: "Chuỗi 3 ngày",
    timer: "22 Tháng 5, 2023",
    description: "Tặng thưởng vì đã tham gia nền tảng 3 ngày",
  },
  {
    src: "../../../public/Achievenment/badge-Day.svg",
    count: "05",
    name: "Chuỗi 5 ngày",
    timer: "24 Tháng 5, 2023",
    description: "Tặng thưởng vì đã tham gia nền tảng 5 ngày",
  },
  {
    src: "../../../public/Achievenment/badge-Day.svg",
    count: "07",
    name: "Chuỗi 7 ngày",
    timer: "26 Tháng 5, 2023",
    description: "Tặng thưởng vì đã tham gia nền tảng 7 ngày",
  },
  {
    src: "../../../public/Achievenment/badge-Day.svg",
    count: "10",
    name: "Chuỗi 10 ngày",
    timer: "29 Tháng 5, 2023",
    description: "Tặng thưởng vì đã tham gia nền tảng 10 ngày",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Day.svg",
    count: "20",
    name: "Chuỗi 20 ngày",
    description: "Tặng thưởng vì đã tham gia nền tảng 20 ngày",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Day.svg",
    count: "30",
    name: "Chuỗi 30 ngày",
    description: "Tặng thưởng vì đã tham gia nền tảng 30 ngày",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Day.svg",
    count: "45",
    name: "Chuỗi 45 ngày",
    description: "Tặng thưởng vì đã tham gia nền tảng 45 ngày",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Day.svg",
    count: "60",
    name: "Chuỗi 60 ngày",
    description: "Tặng thưởng vì đã tham gia nền tảng 60 ngày",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Day.svg",
    count: "70",
    name: "Chuỗi 70 ngày",
    description: "Tặng thưởng vì đã tham gia nền tảng 70 ngày",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Day.svg",
    count: "80",
    name: "Chuỗi 80 ngày",
    description: "Tặng thưởng vì đã tham gia nền tảng 80 ngày",
  },
];
const listAchievementContest = [
  {
    src: "../../../public/Achievenment/badge-RoundsStudied.svg",
    count: "01",
    timer: "26 Tháng 5, 2023",
    name: "Tham Gia 1 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 1 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "03",
    name: "Tham Gia 3 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 3 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "05",
    name: "Tham Gia 5 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 5 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "10",
    name: "Tham Gia 10 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 10 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "25",
    name: "Tham Gia 25 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 25 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "50",
    name: "Tham Gia 50 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 50 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "75",
    name: "Tham Gia 75 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 75 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "100",
    name: "Tham Gia 100 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 100 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "150",
    name: "Tham Gia 150 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 150 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "200",
    name: "Tham Gia 200 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 200 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "250",
    name: "Tham Gia 250 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 250 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "300",
    name: "Tham Gia 300 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 300 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "350",
    name: "Tham Gia 350 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 350 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "400",
    name: "Tham Gia 400 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 400 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "450",
    name: "Tham Gia 450 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 450 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "500",
    name: "Tham Gia 500 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 500 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "600",
    name: "Tham Gia 600 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 600 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "700",
    name: "Tham Gia 700 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 700 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "800",
    name: "Tham Gia 800 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 800 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "900",
    name: "Tham Gia 900 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 900 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "1k",
    name: "Tham Gia 1k Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 1k Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "1k5",
    name: "Tham Gia 1k5 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 1k5 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "2k",
    name: "Tham Gia 2k Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 2k Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "2k5",
    name: "Tham Gia 2k5 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 2k5 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "3k",
    name: "Tham Gia 3k Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 3k Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "3k5",
    name: "Tham Gia 3k5 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 3k5 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "4k",
    name: "Tham Gia 4k Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 4k Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "4k5",
    name: "Tham Gia 4k5 Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 4k5 Cuộc Thi",
  },
  {
    src: "../../../public/Achievenment/locked-badge-RoundsStudied.svg",
    count: "5k",
    name: "Tham Gia 5k Cuộc Thi",
    description: "Tặng thưởng vì đã tham gia nền tảng 5k Cuộc Thi",
  },
];
const listAchievementWeek = [
  {
    src: "../../../public/Achievenment/badge-Week.svg",
    count: "01",
    timer: "26 Tháng 5, 2023",
    name: "Chuỗi 1 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 1 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "03",
    name: "Chuỗi 3 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 3 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "05",
    name: "Chuỗi 5 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 5 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "10",
    name: "Chuỗi 10 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 10 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "20",
    name: "Chuỗi 20 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 20 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "30",
    name: "Chuỗi 30 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 30 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "40",
    name: "Chuỗi 40 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 40 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "50",
    name: "Chuỗi 50 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 50 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "60",
    name: "Chuỗi 60 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 60 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "70",
    name: "Chuỗi 70 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 70 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "80",
    name: "Chuỗi 80 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 80 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "90",
    name: "Chuỗi 90 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 90 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "100",
    name: "Chuỗi 100 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 100 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "125",
    name: "Chuỗi 125 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 125 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "150",
    name: "Chuỗi 150 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 150 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "175",
    name: "Chuỗi 175 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 175 tuần",
  },
  {
    src: "../../../public/Achievenment/locked-badge-Week.svg",
    count: "200",
    name: "Chuỗi 200 Tuần",
    description: "Tặng thưởng vì đã tham gia nền tảng 200 tuần",
  },
];
const listAchievementLike = [
  {
    src: "../../../public/Achievenment/badge-SetsStudied.svg",
    count: "01",
    timer: "26 Tháng 5, 2023",
    name: "Đạt 1 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 1 Lượt Thích  trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "03",
    name: "Đạt 3 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 3 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "05",
    name: "Đạt 5 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 5 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "10",
    name: "Đạt 10 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 10 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "25",
    name: "Đạt 25 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 25 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "50",
    name: "Đạt 50 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 50 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "75",
    name: "Đạt 75 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 75 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "100",
    name: "Đạt 100 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 100 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "150",
    name: "Đạt 150 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 150 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "200",
    name: "Đạt 200 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 200 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "250",
    name: "Đạt 250 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 250 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "300",
    name: "Đạt 300 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 300 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "350",
    name: "Đạt 350 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 350 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "400",
    name: "Đạt 400 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 400 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "450",
    name: "Đạt 450 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 450 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "500",
    name: "Đạt 500 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 500 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "600",
    name: "Đạt 600 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 600 Lượt Thích  trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "700",
    name: "Đạt 700 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 700 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "800",
    name: "Đạt 800 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 800 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "900",
    name: "Đạt 900 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 900 Lượt Thích trên nền tảng ",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "1k",
    name: "Đạt 1k Lượt Thích",
    description: "Tặng thưởng vì đã đạt 1k Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "1k5",
    name: "Đạt 1k5 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 1k5 Lượt Thích trên nền tảng ",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "2k",
    name: "Đạt 2k Lượt Thích",
    description: "Tặng thưởng vì đã đạt 2k Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "2k5",
    name: "Đạt 2k5 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 2k5 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "3k",
    name: "Đạt 3k Lượt Thích",
    description: "Tặng thưởng vì đã đạt 3k Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "3k5",
    name: "Đạt 3k5 Lượt Thích",
    description: "Tặng thưởng vì đã đạt 3k5 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "4k",
    name: "Đạt 4k Lượt Thích",
    description: "Tặng thưởng vì đã đạt 4k Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "4k5",
    name: "Đạt 4k5 Lượt Thích",
    description:
      "Tặng thưởng vì đã tham gia nền tảng 4k5 Lượt Thích trên nền tảng",
  },
  {
    src: "../../../public/Achievenment/locked-badge-SetsStudied.svg",
    count: "5k",
    name: "Đạt 5k Lượt Thích",
    description:
      "Tặng thưởng vì đã tham gia nền tảng 5k Lượt Thích trên nền tảng",
  },
];
const columnsPoint = [
  {
    title: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        #
      </div>
    ),
    dataIndex: "id",
    width: "8%",
    render(text, record) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {text}
        </div>
      );
    },
  },
  {
    title: <div>Username</div>,
    dataIndex: "username",
    width: "72.5%",
    render(text, record) {
      return (
        <div style={{ color: "red" }} className='highlight-first-letter'>
          {text}
        </div>
      );
    },
  },
  {
    title: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Point
      </div>
    ),
    dataIndex: "point",
    render(text, record) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {text}
        </div>
      );
    },
  },
];
const dataPoint = [
  {
    id: "1",
    username: "admin",
    point: "1500",
  },
  {
    id: "2",
    username: "dquynh_2811",
    point: "759",
  },
  {
    id: "3",
    username: "Mike4235",
    point: "452",
  },
  {
    id: "4",
    username: "darkkcyan",
    point: "209",
  },
  {
    id: "5",
    username: "Mondeus",
    point: "173",
  },
];
const columnsContribute = [
  {
    title: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        #
      </div>
    ),
    dataIndex: "id",
    width: "8%",
    render(text, record) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {text}
        </div>
      );
    },
  },
  {
    title: <div>Username</div>,
    dataIndex: "username",
    width: "72.5%",
    render(text, record) {
      return (
        <div style={{ color: "red" }} className='highlight-first-letter'>
          {text}
        </div>
      );
    },
  },
  {
    title: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Contrib.
      </div>
    ),
    dataIndex: "contrib",
    render(text, record) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {text}
        </div>
      );
    },
  },
];
const dataContribute = [
  {
    id: "1",
    username: "admin",
    contrib: "150",
  },
  {
    id: "2",
    username: "dquynh_2811",
    contrib: "79",
  },
  {
    id: "3",
    username: "Mike4235",
    contrib: "42",
  },
  {
    id: "4",
    username: "darkkcyan",
    contrib: "29",
  },
  {
    id: "5",
    username: "Mondeus",
    contrib: "13",
  },
];
const AchievementPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const user = useSelector((state) => state.account.user);
  const urlAvatar = `${import.meta.env.VITE_BACK_END_URL}/images/avatar/${
    user.avatar
  }`;
  const navigate = useNavigate();

  return (
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
          style={
            {
              // background: colorBgContainer,
            }
          }
        >
          <Row gutter={[20, 20]} style={{ marginBottom: 20 }}>
            <Col span={8}>
              <Card>
                <Meta
                  avatar={<Avatar src={urlAvatar} size={70} />}
                  title={
                    <>
                      <div
                        style={{ color: "red" }}
                        className='highlight-first-letter'
                      >
                        {user.fullName}
                      </div>
                    </>
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  description={
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Total Point: 1500</span>
                        <Button
                          type='default'
                          size='small'
                          style={{ margin: 5 }}
                          onClick={() => {
                            navigate(`/quiz`);
                          }}
                        >
                          More Point
                        </Button>
                      </div>
                      <div>
                        <MailOutlined style={{ marginRight: 10 }} />
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                      </div>
                      <div>
                        <PhoneOutlined style={{ marginRight: 10 }} />
                        <span>{user.phone} </span>
                      </div>
                    </div>
                  }
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col span={16}>
              <Card title='Chuỗi Ngày'>
                <AchievementItem
                  listItem={listAchievementDay}
                  colorBadge={"#ffcd1f"}
                  position={[-50, 50]}
                />
              </Card>
            </Col>
            <Ranking
              data={dataPoint}
              columns={columnsPoint}
              type={`Top users `}
            />
            <Col span={16}>
              <Card title='Chuỗi Tuần'>
                {" "}
                <AchievementItem
                  listItem={listAchievementWeek}
                  colorBadge={"#ffe8d8"}
                  position={[-50, 50]}
                />
              </Card>
            </Col>
            <Ranking
              data={dataContribute}
              columns={columnsContribute}
              type={`Top contributors`}
            />
            <Col span={16}>
              <Card title='Số cuộc thi tham gia '>
                <AchievementItem
                  listItem={listAchievementContest}
                  colorBadge={"#cbf1ff"}
                  position={[-50, 50]}
                />
              </Card>
            </Col>
            <Col span={16}>
              <Card title='Số lượt Like bài viết'>
                <AchievementItem
                  listItem={listAchievementLike}
                  colorBadge={"#eeaaff"}
                  position={[-50, 39]}
                />
              </Card>
            </Col>
            <Col span={16}>
              <Card title='Thành tựu đặc biệt'>Achievement Content</Card>
            </Col>
          </Row>
        </div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default AchievementPage;

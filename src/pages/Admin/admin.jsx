import { Card, Col, Row, Statistic } from "antd";
import { useEffect } from "react";
import CountUp from "react-countup";
import { callGetDashBoard } from "../../service/api";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  {
    name: "Monday",
    User: 40,
    Order: 24,
  },
  {
    name: "Tuesday",
    User: 30,
    Order: 18,
  },
  {
    name: "Wednesday",
    User: 20,
    Order: 18,
  },
  {
    name: "Thursday",
    User: 20,
    Order: 18,
  },
  {
    name: "Friday",
    User: 27,
    Order: 39,
  },
  {
    name: "Saturday",
    User: 18,
    Order: 48,
  },
  {
    name: "Sunday",
    User: 23,
    Order: 38,
  },
];
const AdminPage = () => {
  const formatter = (value) => <CountUp end={value} separator=',' />;
  const [dashBoard, setDashBoard] = useState({});
  useEffect(() => {
    const fetchDataDashBoard = async () => {
      const res = await callGetDashBoard();
      if (res && res.data) {
        setDashBoard(res.data);
      }
    };
    fetchDataDashBoard();
  }, []);
  return (
    <>
      <Row gutter={[40, 40]}>
        <Col span={10}>
          <Card title='' bordered={false}>
            <Statistic
              title='Totals Users'
              value={dashBoard.countUser}
              formatter={formatter}
            />
          </Card>
        </Col>
        <Col span={10}>
          <Card title='' bordered={false}>
            <Statistic
              title='Totals Orders'
              value={dashBoard.countOrder}
              formatter={formatter}
            />
          </Card>
        </Col>
        <span style={{ fontSize: "24px", marginLeft: "28px" }}>
          New users and orders in the week{" "}
        </span>
        <Col
          span={24}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LineChart width={800} height={400} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='Order'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='User' stroke='#82ca9d' />
          </LineChart>
        </Col>
      </Row>
    </>
  );
};
export default AdminPage;

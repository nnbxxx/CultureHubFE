import React from "react";
import { Col, Card, Table } from "antd";
import { v4 as uuidv4 } from "uuid";
import { BsTrophyFill } from "react-icons/bs";

const Ranking = (props) => {
  const { data, columns, type } = props;
  return (
    <>
      <Col span={8}>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          size='middle'
          title={() => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 12.5,
                margin: "0 10px",
              }}
            >
              <span style={{ fontSize: 20, color: "#231f20" }}>{type}</span>
              <BsTrophyFill size={20} color='black' />
            </div>
          )}
          footer={() => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#0645ad",
                fontSize: 12.5,
              }}
            >
              {`View All >>>`}
            </div>
          )}
          rowKey={uuidv4()}
          pagination={false}
        />
      </Col>
    </>
  );
};

export default Ranking;

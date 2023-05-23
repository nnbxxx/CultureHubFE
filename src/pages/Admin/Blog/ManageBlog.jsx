import moment from "moment/moment";
import { Button, Popconfirm, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import {
  EditTwoTone,
  DeleteTwoTone,
  ExportOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import * as XLSX from "xlsx";
import { DetailBlog } from "./DetailBlog";
import ModalAddBlog from "./ModalAddBlog";

const { Text, Link, Title, Paragraph } = Typography;
const data = [
  {
    _id: uuidv4(),
    author: "admin",
    title:
      "Higher education faculty discover new ways to create engaging review sessions at the Kahoot! EDU Meetup!",
    description:
      "At our first higher education meetup last week we heard from hundreds of higher ed faculty around the world using Kahoot! in their courses for engaging review and exam prep.",
    createdAt: new Date(),
  },
  {
    _id: uuidv4(),
    author: "admin",
    title:
      "Gamified learning experiences were the main character at this year’s Kahoot! EDU Meetup!",
    description:
      "Yesterday, we learned why teachers around the world are gaming and learning with their students to boost engagement and learning retention!",
    createdAt: new Date(),
  },
  {
    _id: uuidv4(),
    author: "admin",
    title:
      "Bring a new level of powerful pedagogy to classrooms with Kahoot!’s game modes",
    description:
      "Disguise content learning in a game-oriented, student-centered dynamic with all new game modes on Kahoot!",
    createdAt: new Date(),
  },
  {
    _id: uuidv4(),
    author: "admin",
    title: "Celebrating World Teachers’ Day with Kahoot!",
    description:
      "Thanks for an awesome year of milestones and memories! We appreciate you, teachers!",
    createdAt: new Date(),
  },
  {
    _id: uuidv4(),
    author: "admin",
    title:
      "Student-centered learning was front and center at the Kahoot! EDU Fall Meetup 2022",
    description:
      "Teachers from around the world gathered yesterday to learn about new approaches to student-centered learning from shared teacher stories, Kahoot! ambassadors, and new Kahoot! feature demos!",
    createdAt: new Date(),
  },
];
const ManageBlog = () => {
  const [isShowDetailBlog, setIsShowDetailBlog] = useState(false);
  const [isShowModalAddBlog, setIsShowModalAddBlog] = useState(false);
  const [dataBlogDetail, setDataBlogDetail] = useState(null);
  const [dataBlog, setDataBlog] = useState(data);
  const renderHeader = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <>Table List Blog</>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            type='primary'
            icon={<ExportOutlined />}
            onClick={handleExportData}
          >
            Export
          </Button>
          <Button
            type='primary'
            icon={<PlusCircleOutlined />}
            onClick={() => {
              setIsShowModalAddBlog(true);
            }}
          >
            Add new blog
          </Button>
          <Button icon={<AiOutlineReload />} onClick={null} />
        </div>
      </div>
    );
  };
  const handleDeleteBlog = (id) => {
    setDataBlog(
      dataBlog.filter((item) => {
        return item._id !== id;
      })
    );
  };
  const columnsTable = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (text, record, index) => {
        return (
          <>
            <a
              onClick={() => {
                setDataBlogDetail(record);
                setIsShowDetailBlog(true);
              }}
            >
              {record._id}
            </a>
          </>
        );
      },
    },
    {
      title: "Author",
      className: "author",
      dataIndex: "author",

      sorter: (a, b) => a.author.localeCompare(b.author),
    },
    {
      title: "Title",
      className: "Title",
      dataIndex: "title",

      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (text, record, index) => {
        return <Text ellipsis={{ rows: 2 }}>{record.title}</Text>;
      },
    },
    {
      title: "Description",
      className: "Description",
      dataIndex: "description",

      sorter: (a, b) => a.description.localeCompare(b.description),
      render: (text, record, index) => {
        return <Text ellipsis={{ rows: 2 }}>{record.description}</Text>;
      },
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      defaultSortOrder: "descend",
      sorter: (a, b) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),
      render: (text, record, index) => {
        return <>{moment(record.createdAt).format("HH:mm:ss DD-MM-YYYY")}</>;
      },
    },
    {
      title: "Action",
      render: (text, record, index) => {
        return (
          <Space
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              fontSize: "20px",
            }}
          >
            <EditTwoTone
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                setIsOpenEditUser(true);
                setDataUser(record);
              }}
            />
            <Popconfirm
              title='Delete the User'
              description='Are you sure to delete this user?'
              onConfirm={() => {
                handleDeleteBlog(record._id);
              }}
              onCancel={() => {}}
              okText='Yes'
              cancelText='No'
              placement='bottomLeft'
            >
              <DeleteTwoTone
                twoToneColor='#dc3545'
                style={{ cursor: "pointer" }}
              />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const handleExportData = () => {
    const worksheet = XLSX.utils.json_to_sheet(dataBlog);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "DataSheet.csv");
  };

  return (
    <>
      <Table
        style={{ width: "100%" }}
        scroll={{
          y: 500,
        }}
        columns={columnsTable}
        rowKey={"_id"}
        dataSource={dataBlog}
        bordered
        title={renderHeader}
        // onChange={onChange}
        // loading={isLoading}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: "2",
          pageSizeOptions: ["2", "10", "20"],
          responsive: true,
          showTotal: (total, range) => {
            return `${range[0]}-${range[1]} of ${total} items`;
          },
        }}
      />
      <DetailBlog
        open={isShowDetailBlog}
        setOpen={setIsShowDetailBlog}
        data={dataBlogDetail}
      ></DetailBlog>
      <ModalAddBlog
        open={isShowModalAddBlog}
        setOpen={setIsShowModalAddBlog}
        dataBlog={dataBlog}
        setDataBlog={setDataBlog}
      ></ModalAddBlog>
    </>
  );
};

export default ManageBlog;

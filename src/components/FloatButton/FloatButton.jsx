import React from "react";
import { FloatButton } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { MdOutlineGrade } from "react-icons/md";
const FloatButtonMenu = () => {
  const navigate = useNavigate();
  return (
    <FloatButton.Group
      shape='circle'
      trigger='click'
      type='primary'
      icon={<MenuOutlined />}
    >
      <FloatButton
        icon={<HomeOutlined />}
        tooltip={<div> Go Home</div>}
        onClick={() => {
          navigate("/");
        }}
      />
      <FloatButton
        icon={<MdOutlineGrade />}
        tooltip={<div> More Point</div>}
        onClick={() => {
          navigate("/quiz");
        }}
      />
      <FloatButton icon={<BsPencil />} tooltip={<div> Write new Blog </div>} />
      <FloatButton.BackTop
        visibilityHeight={0}
        tooltip={<div> Back Top</div>}
      />
    </FloatButton.Group>
  );
};

export default FloatButtonMenu;

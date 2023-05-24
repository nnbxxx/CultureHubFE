import React from "react";
import { Typography, Radio } from "antd";
import { useState } from "react";
import { useEffect } from "react";
const { Text, Link, Title, Paragraph } = Typography;
const QuizContentAnswer = (props) => {
  const { data, handleCheckBox } = props;

  const onChange = (e) => {
    setValue(e.target.value);
    handleCheckBox(data.id, e.target.value);
  };
  const [value, setValue] = useState(0);
  useEffect(() => {
    data.answer.forEach((item, index) => {
      if (item.selected) {
        setValue(item.id);
      }
    });
  }, [data]);

  return (
    <div>
      <Radio.Group
        onChange={onChange}
        value={value}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          marginTop: 30,
        }}
      >
        <Radio value={data.answer[0].id}>{data.answer[0].content}</Radio>
        <Radio value={data.answer[1].id}>{data.answer[1].content}</Radio>
        <Radio value={data.answer[2].id}>{data.answer[2].content}</Radio>
        <Radio value={data.answer[3].id}>{data.answer[3].content}</Radio>
      </Radio.Group>
    </div>
  );
};

export default QuizContentAnswer;

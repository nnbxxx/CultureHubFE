import React from "react";
import { Typography, Radio } from "antd";
import { useState } from "react";
import QuizContentAnswer from "./QuizContentAnswer";
const { Text, Link, Title, Paragraph } = Typography;
const QuizContent = (props) => {
  const { question, data, handleCheckBox } = props;

  return (
    <>
      <Text style={{ fontSize: 20 }}>
        Question {question}: {data.question}
      </Text>
      <QuizContentAnswer data={data} handleCheckBox={handleCheckBox} />
    </>
  );
};

export default QuizContent;

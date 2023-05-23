import React, { useState } from "react";
import { Badge, Descriptions, Divider, Drawer } from "antd";
import moment from "moment/moment";
export const DetailBlog = (props) => {
  const { open, setOpen, data } = props;
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Drawer width={`50%`} placement='right' onClose={onClose} open={open}>
      <Descriptions
        title='Detail Blog'
        bordered
        column={2}
        size='middle'
        style={{ marginBottom: 10 }}
      >
        <Descriptions.Item label='Id'>{data?._id}</Descriptions.Item>
        <Descriptions.Item label='Author'>{data?.author}</Descriptions.Item>
        <Descriptions.Item label='Create At'>
          {moment(data?.createdAt).format("HH:mm:ss DD-MM-YYYY")}
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered column={1} size='middle'>
        <Descriptions.Item label='Title'>{data?.title}</Descriptions.Item>
        <Descriptions.Item label='Description'>
          {data?.description}
        </Descriptions.Item>
      </Descriptions>
    </Drawer>
  );
};

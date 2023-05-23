import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal, Form, Input, message, notification } from "antd";
import { useState } from "react";
const ModalAddBlog = (props) => {
  const [loading, setLoading] = useState(false);
  const { open, setOpen, dataBlog, setDataBlog } = props;
  const [form] = Form.useForm();
  const onCreate = (values) => {
    const { author, description, title } = values;
    const newData = [
      ...dataBlog,
      {
        _id: uuidv4(),
        author,
        title,
        description,
        createdAt: new Date(),
      },
    ];
    setLoading(true);
    setDataBlog(newData);
    setOpen(false);
  };
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        title='Create New Blog'
        okText='Create'
        cancelText='Cancel'
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              // console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout='vertical'
          name='form_in_modal'
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name='author'
            label='Author'
            rules={[
              {
                required: true,
                message: "Please input the Author of Blog!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='title'
            label='Title'
            rules={[
              {
                required: true,
                message: "Please input the Title of Blog!",
              },
            ]}
          >
            <Input.TextArea placeholder='Title of Blog' rows={3} />
          </Form.Item>
          <Form.Item
            name='description'
            label='Description'
            rules={[
              {
                required: true,
                message: "Please input the Description of Blog",
              },
            ]}
          >
            <Input.TextArea placeholder='Description of Blog' rows={5} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalAddBlog;

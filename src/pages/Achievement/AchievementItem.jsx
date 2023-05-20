import React from "react";
import "./index.scss";
import { Avatar, Badge, Button, Image, Modal } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AchievementItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listLength, setListLength] = useState(4);
  const [isShowAll, setIsShowAll] = useState(false);
  const [dataModal, setDataModal] = useState();
  const { listItem, colorBadge, position } = props;

  return (
    <>
      <div className='achievement-list'>
        {listItem &&
          listItem.length > 0 &&
          listItem.map((item, index) => {
            if (index <= listLength - 1)
              return (
                <div
                  className='achievement-item'
                  style={{ cursor: "pointer" }}
                  id={uuidv4()}
                  onClick={() => {
                    setIsModalOpen(true);
                    setDataModal(item);
                  }}
                >
                  <Badge
                    count={item.count}
                    size={10}
                    offset={position}
                    color={item.timer ? colorBadge : "#edeff4"}
                    overflowCount={999}
                  >
                    <Avatar size={100} src={item.src} />
                  </Badge>
                  <div className='achievement-name'>{item.name}</div>
                  <div className='achievement-timer'>
                    {item.timer ? item.timer : "Chưa đạt được"}
                  </div>
                </div>
              );
          })}
      </div>
      <div className='achievement-btn'>
        <Button
          size='large'
          type='primary'
          onClick={() => {
            setIsShowAll(!isShowAll);
            {
              {
                isShowAll ? setListLength(4) : setListLength(listItem.length);
              }
            }
          }}
        >
          {!isShowAll ? "Xem tất cả" : "Ẩn bớt"}
        </Button>
      </div>
      <Modal
        title={
          <div
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: 32,
              fontWeight: 500,
            }}
          >
            {dataModal?.name}
          </div>
        }
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        width={"40vw"}
        footer={null}
        style={{ padding: 15 }}
      >
        <div className='achievement-item-modal'>
          <Badge
            count={dataModal?.count}
            size={10}
            offset={position}
            color={dataModal?.timer ? colorBadge : "#edeff4"}
            overflowCount={999}
          >
            <Avatar size={100} src={dataModal?.src} />
          </Badge>
          <div className='achievement-name-modal'>{dataModal?.name}</div>
          <div className='achievement-timer-modal'>
            {dataModal?.timer ? dataModal?.timer : "Chưa đạt được"}
          </div>
          <div> {dataModal?.description}</div>
        </div>
      </Modal>
    </>
  );
};

export default AchievementItem;

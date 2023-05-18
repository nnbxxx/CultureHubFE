import { Footer } from "antd/es/layout/layout";
import React from "react";

const FooterUser = () => {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div style={{ opacity: 0.4 }}>
          Made with <span style={{ color: "red" }}>❤</span> by
        </div>
        CultureHub ©2023 Created by The Blue Star Team
      </Footer>
    </>
  );
};

export default FooterUser;

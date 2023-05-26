import React from "react";
import { FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const IconHomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className='logo'
        onClick={() => {
          navigate("/");
        }}
        style={{ padding: 10 }}
      >
        <button class='btn' type='button'>
          <strong className='strong'>CultureHub</strong>
          <div id='container-stars'>
            <div id='stars'></div>
          </div>

          <div id='glow'>
            <div class='circle'></div>
            <div class='circle'></div>
          </div>
        </button>
      </div>
    </>
  );
};

export default IconHomePage;

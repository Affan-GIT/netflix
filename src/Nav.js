import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [show, handleShow] = useState(true);
  const navigate = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(false);
    } else {
      handleShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          alt="Netflix Logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          onClick={() => navigate("/")}
        />
        <img
          className="nav__avatar"
          alt="Avatar logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
};

export default Nav;

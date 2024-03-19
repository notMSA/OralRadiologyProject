import React, { useEffect, useState } from "react";
import "./AdminNav.css";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const links = [
    {
      Text: "Dashboard",
      To: "/",
      logoClass: "bx bx-grid-alt",
    },
    {
      Text: "Product",
      To: "/",
      logoClass: "bx bx-box",
    },
    {
      Text: "Order list",
      To: "/",
      logoClass: "bx bx-list-ul",
    },
  ];
  const content = links.map(function (ele, index) {
    return (
      <li key={index}>
        <Link to={ele.To}>
          <i className={ele.logoClass}></i>
          <span className="links_name">{ele.Text}</span>
        </Link>
      </li>
    );
  });

  const [scroll, setScroll] = useState(window.scrollY);
  const [style, setStyle] = useState({ top: 0 });
  const HeaderHeight = 90;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > HeaderHeight) {
        setScroll(window.scrollY - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setStyle({ top: `${scroll}px` });
  }, [scroll]);

  return (
    <div className="sidebar" style={style}>
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="logo_name">Admin</span>
      </div>
      <ul className="nav-links">
        {content}
        {/* <li className="log_out">
          <Link to="/">
            <i className="bx bx-log-out"></i>
            <span className="links_name">Log out</span>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default AdminNav;

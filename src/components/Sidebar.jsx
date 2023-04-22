import React, { useState } from "react";
import "./Sidebar.css";
// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
import { FaHome, FaCompass, FaDiscord, FaBars } from "react-icons/fa";
import { ImBooks, ImProfile } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";
import { SiSpringCreators } from "react-icons/si";
import { MdFeedback, MdTour } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const routes = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/courses",
      name: "Courses",
      icon: <ImBooks />,
    },
    {
      path: "/trending",
      name: "Trending",
      icon: <FaCompass />,
    },
    {
      path: "/following",
      name: "Following",
      icon: <ImProfile />,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/discord",
      name: "Discord",
      icon: <FaDiscord />,
    },
    {
      path: "/restoration-form",
      name: "Restoration Form",
      icon: <AiOutlineDatabase />,
    },
    {
      path: "/creator-access",
      name: "Creator Access",
      icon: <SiSpringCreators />,
    },
    {
      path: "/feedback",
      name: "Feedback",
      icon: <MdFeedback />,
    },
    {
      path: "/tour",
      name: "Tour",
      icon: <MdTour />,
    },
  ];

  return (
    <div className="main-container">
      {/* <motion.div animate={{ width: "200px" }} className="sidebar"></motion.div>
      <section className="routes">
        {routes.map((route) => (
          <NavLink to={route.path} key={route.name}>
            <div className="icon">{route.icon}</div>
            <div className="link_text"> {route.name}</div>
          </NavLink>
        ))}
      </section>
      <main>{children}</main> */}
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            logo
          </h1>
          <div
            style={{ margin_left: isOpen ? "300px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {routes.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main> {children}</main>
    </div>
  );
}

export default Sidebar;

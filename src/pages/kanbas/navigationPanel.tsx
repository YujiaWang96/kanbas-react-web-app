import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsInboxes } from "react-icons/bs";
import { TbSolarPanel } from "react-icons/tb";
import { SlPeople } from "react-icons/sl";
import { GoGear } from "react-icons/go";
import { MdAccessAlarm } from "react-icons/md";
const NavigationPanel = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Groups", path: "/Kanbas/Groups", icon: SlPeople },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: `Inbox`, path: "/Kanbas/Inbox", icon: BsInboxes },
    { label: "History", path: "/Kanbas/History", icon: MdAccessAlarm },
    { label: "Studio", path: "/Kanbas/Studio", icon: TbSolarPanel },
    { label: "Labs", path: "/labs", icon: GoGear },
  ];

  const handleLinkClick = (label: string) => {
    setActiveLink(label);
  };

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110, paddingTop: 10 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
        rel="noreferrer"
      >
        <img src="images/NEU.png" width="60px" alt="NEU" />
      </a>

      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-2 text-white" />
        Account
      </Link>

      {links.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          className={`list-group-item text-center border-0 ${
            activeLink === link.label
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
          onClick={() => handleLinkClick(link.label)}
        >
          <link.icon className="fs-2 text-danger" />
          {link.label === "Index" || "Labs" || "Studio" ? <br /> : ""}
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavigationPanel;

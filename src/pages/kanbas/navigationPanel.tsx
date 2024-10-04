import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsInboxes } from "react-icons/bs";
import { CiAlarmOn } from "react-icons/ci";
import { TbSolarPanel } from "react-icons/tb";
import { SlPeople } from "react-icons/sl";
import { GoGear } from "react-icons/go";

const NavigationPanel = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState("Dashboard");

  // Function to handle link click
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
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

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${
          activeLink === "Dashboard"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
        onClick={() => handleLinkClick("Dashboard")}
      >
        <AiOutlineDashboard className="fs-2 text-danger" />
        Dashboard
      </Link>

      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-white ${
          activeLink === "Courses" ? "bg-white text-danger" : "bg-black"
        } text-center border-0`}
        onClick={() => handleLinkClick("Courses")}
      >
        <LiaBookSolid className="fs-2 text-danger" />
        Courses
      </Link>

      <Link
        to="/Kanbas/Groups"
        id="wd-group-link"
        className={`list-group-item text-white ${
          activeLink === "Groups" ? "bg-white text-danger" : "bg-black"
        } text-center border-0`}
        onClick={() => handleLinkClick("Groups")}
      >
        <SlPeople className="fs-2 text-danger" />
        Groups
      </Link>

      <Link
        to="/kanbas/calendar"
        id="wd-calendar-link"
        className={`list-group-item text-white ${
          activeLink === "Calendar" ? "bg-white text-danger" : "bg-black"
        } text-center border-0`}
        onClick={() => handleLinkClick("Calendar")}
      >
        <IoCalendarOutline className="fs-2 text-danger" />
        Calendar
      </Link>

      <Link
        to="/kanbas/inbox"
        id="wd-inbox-link"
        className={`list-group-item text-white ${
          activeLink === "Inbox" ? "bg-white text-danger" : "bg-black"
        } text-center border-0`}
        onClick={() => handleLinkClick("Inbox")}
      >
        <BsInboxes className="fs-2 text-danger" />
        <br />
        Inbox
      </Link>

      <Link
        to="/kanbas/history"
        id="wd-history-link"
        className={`list-group-item text-white ${
          activeLink === "History" ? "bg-white text-danger" : "bg-black"
        } text-center border-0`}
        onClick={() => handleLinkClick("History")}
      >
        <CiAlarmOn className="fs-1 text-danger" />
        History
      </Link>

      <Link
        to="/kanbas/studio"
        id="wd-studio-link"
        className={`list-group-item text-white ${
          activeLink === "Studio" ? "bg-white text-danger" : "bg-black"
        } text-center border-0`}
        onClick={() => handleLinkClick("Studio")}
      >
        <TbSolarPanel className="fs-1 text-danger" />
        <br />
        Studio
      </Link>

      <Link
        to="/labs"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <GoGear className="fs-2 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
};

export default NavigationPanel;

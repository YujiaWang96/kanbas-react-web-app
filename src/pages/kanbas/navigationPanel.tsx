import React from "react";
import { Link } from "react-router-dom";

const NavigationPanel = () => {
  return (
    <div>
      <a href="https://www.northeastern.edu/" target="_self">
        Northeastern
      </a>
      <br />
      <Link to="/kanbas/account" id="wd-account-link">
        Account
      </Link>
      <br />
      <Link to="/kanbas/dashboard" id="wd-dashboard-link">
        Dashboard
      </Link>
      <br />
      <Link to="/kanbas/course" id="wd-course-link">
        Course
      </Link>
      <br />
      <Link to="/kanbas/calendar" id="wd-calendar-link">
        Calendar
      </Link>
      <br />
      <Link to="/kanbas/inbox" id="wd-inbox-link">
        Inbox
      </Link>
      <br />
      <Link to="/labs">Labs</Link>
      <br />
    </div>
  );
};
export default NavigationPanel;

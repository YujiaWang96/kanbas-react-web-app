import React from "react";
import { Link } from "react-router-dom";
export default function LabNavigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/labs" id="wd-labs-link">
            Lab
          </Link>
        </li>
        <li>
          <Link to="/labs/labs1" id="wd-labs1-link">
            Lab1
          </Link>
        </li>
        <li>
          <Link to="/labs/labs2" id="wd-labs2-link">
            Lab2
          </Link>
        </li>
        <li>
          <Link to="/labs/labs3" id="wd-labs3-link">
            Lab3
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/YujiaWang96/kanbas-react-web-app"
            id="wd-github"
          >
            My Github
          </Link>
        </li>
        <li>
          <Link to="/kanbas">Kanvas</Link>
        </li>
      </ul>
    </div>
  );
}

import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a id="wd-labs-link" href="#/labs" className="nav-link">
          Lab
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-labs1-link"
          href="#/labs/labs1"
          className={`nav-link ${pathname.includes("labs1") ? "active" : ""}`}
        >
          Lab1
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-labs2-link"
          href="#/labs/labs2"
          className={`nav-link ${pathname.includes("labs2") ? "active" : ""}`}
        >
          Lab2
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-labs3-link"
          href="#/labs/labs3"
          className={`nav-link ${pathname.includes("labs3") ? "active" : ""}`}
        >
          Lab3
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-labs4-link"
          href="#/labs/labs4"
          className={`nav-link ${pathname.includes("labs4") ? "active" : ""}`}
        >
          Lab4
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-labs5-link"
          href="#/labs/labs5"
          className={`nav-link ${pathname.includes("labs5") ? "active" : ""}`}
        >
          Lab5
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-kanbas-link" href="#/kanbas" className="nav-link">
          Kanvas
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-github"
          href="https://github.com/YujiaWang96/kanbas-react-web-app"
          className="nav-link"
        >
          My GitHub
        </a>
      </li>
    </ul>
  );
}

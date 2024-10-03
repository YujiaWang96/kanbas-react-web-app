import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is imported

const Profile: React.FC = () => {
  return (
    <div className="container mt-5 ">
      <h3 className="mb-4">Profile</h3>
      <form>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Alice"
              style={{ width: "300px" }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="123"
              style={{ width: "300px" }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Alice"
              style={{ width: "300px" }}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              defaultValue="2014-12-21"
              style={{ width: "300px" }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              defaultValue="alice@123.com"
              style={{ width: "300px" }}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              max="50"
              min="15"
              style={{ width: "300px" }}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              style={{ width: "300px" }}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-10">
            <select className="form-select" style={{ width: "300px" }}>
              <option>Michigan</option>
              <option selected>California</option>
              <option>New York</option>
              <option>Texas</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <Link
            to="/kanbas/account/SignOut"
            className="btn btn-danger"
            style={{ width: "300px" }}
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Profile;

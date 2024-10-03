import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS

const SignOut = () => {
  return (
    <div className="container mt-5">
      <h3 className="mb-4">Sign Up</h3>

      <div className="mb-3">
        <input
          type="text"
          id="name"
          className="form-control "
          placeholder="Username"
          style={{ width: "300px" }}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          id="pwd"
          className="form-control"
          placeholder="Password"
          style={{ width: "300px" }}
        />
      </div>

      <div className="d-grid gap-2">
        <Link
          to="/kanbas/dashboard"
          className="btn btn-primary"
          style={{ width: "300px" }}
        >
          Sign Up
        </Link>

        <Link to="/kanbas/account/signOut">Sign In</Link>
      </div>
    </div>
  );
};

export default SignOut;

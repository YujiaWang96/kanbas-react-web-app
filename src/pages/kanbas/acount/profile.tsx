import React from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <h3>Profile</h3>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" placeholder="enter your name" />
            </td>
          </tr>
          <tr>
            <td>Birthday:</td>
            <td>
              <input type="date" value="2014-12-21" />
            </td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>
              <input type="radio" name="gender" />
              male
              <input type="radio" name="gender" />
              female
            </td>
          </tr>
          <tr>
            <td>Range:</td>
            <td>
              <input type="range" min="0" max="20" />
            </td>
          </tr>
          <tr>
            <td>Class Capacity:</td>
            <td>
              <input type="number" max="50" min="15" />
            </td>
          </tr>
          <tr>
            <td>E-mail:</td>
            <td>
              <input type="email" placeholder="enter your email" />
            </td>
          </tr>
          <tr>
            <td>States:</td>
            <td>
              <select>
                <option>Michigan</option>
                <option selected>California</option>
                <option>New York</option>
                <option>Taxes</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/kanbas/account/SignOut">Sign Out</Link>
    </div>
  );
};
export default Profile;

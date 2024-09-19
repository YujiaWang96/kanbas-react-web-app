import React from "react";
import Cs1234Module from "./module";
import Cs1234Status from "./status";

export default function Cs1234Home() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Cs1234Module />
            </td>
            <td>
              <Cs1234Status />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

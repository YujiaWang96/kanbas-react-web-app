import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentsEditor({
  addingAssignments,
  titles,
  setTitles,
  description,
  setDescription,
  points,
  setPoints,
}: {
  addingAssignments: () => void;
  titles: string;
  setTitles: (titles: string) => void;
  description: string;
  setDescription: (description: string) => void;
  points: number;
  setPoints: (points: number) => void;
}) {
  return (
    <div className="d-flex justify-content-between mb-2">
      <input
        type="text"
        className="form-control w-25" // 使用 Bootstrap 的宽度类
        style={{ maxWidth: "300px", minWidth: "100px" }} // 最大宽度为 200px
        placeholder="Search for Assignment"
      />
      <div className="d-flex gap-2">
        {" "}
        {/* 使用 Bootstrap 的 gap 类来设置按钮之间的间距 */}
        <button
          type="button"
          className="btn btn-light btn-outline-secondary text-black"
        >
          + Group
        </button>
        <button
          type="button"
          className="btn btn-danger btn-outline-danger text-white"
          onClick={addingAssignments}
        >
          + Assignment
        </button>
        <button
          type="button"
          className="btn btn-light btn-outline-secondary text-black"
        >
          <IoEllipsisVertical />
        </button>
      </div>
    </div>
  );
}

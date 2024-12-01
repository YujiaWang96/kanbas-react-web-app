import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithModule() {
  const [name, setName] = useState("module");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  return (
    <div>
      <h2>module test</h2>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue="haha"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue="0"
        onChange={(e) => setScore(parseInt(e.target.value))}
      ></input>
      <input
        type="checkbox"
        id="complete"
        checked={completed}
        defaultChecked={false}
        onClick={() => setCompleted(!completed)}
      />
      <label htmlFor="complete">Complete</label>
      <br />
      <a href={`${REMOTE_SERVER}/lab5/module/${name}/${score}/${completed}`}>
        get module
      </a>
      &nbsp; &nbsp;
      <a href={`${REMOTE_SERVER}/lab5/module/${name}`}>get {name}</a>
      &nbsp; &nbsp;
      <a href={`${REMOTE_SERVER}/lab5/module/${score}`}>set score {score}</a>
      &nbsp; &nbsp;
      <a href={`${REMOTE_SERVER}/lab5/module/${completed}`}>set completed</a>
    </div>
  );
}

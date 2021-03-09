import React from "react";
import "./styles/TaskToggle.css";

export function TasksToggle({ handleShow, checked, isShow }) {
  return (
    <div className="toggle">
      <label>
        <span>{isShow}</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleShow()}
        />
      </label>
    </div>
  );
}

import React from "react";

export function TasksToggle({ handleShow, checked, isShow }) {
  return (
    <>
      <span>{isShow}</span>
      <input type="checkbox" checked={checked} onChange={() => handleShow()} />
    </>
  );
}

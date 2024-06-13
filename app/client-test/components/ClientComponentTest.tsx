"use client";
import { getTodoAction } from "@/actions/todo/todo.action";
import React from "react";

const ClientComponentTest = () => {
  const handleClick = async () => {
    const reulst = await getTodoAction();
    console.log("client action test", reulst);
  };
  return (
    <div>
      <button onClick={handleClick}>test serverAction</button>
    </div>
  );
};

export default ClientComponentTest;

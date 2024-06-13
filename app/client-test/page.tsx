import React from "react";
import ClientComponentTest from "./components/ClientComponentTest";
import { getTodoAction } from "@/actions/todo/todo.action";

const page = async () => {
  console.log("ssr start");
  const result = await getTodoAction();
  console.log("ssr end");
  return (
    <div>
      test page {JSON.stringify(result)}
      <ClientComponentTest />
    </div>
  );
};

export default page;

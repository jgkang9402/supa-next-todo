import { sleep } from "@/lib/utils";
import React from "react";
import ToddoContainer from "./components/ToddoContainer";

const page = async () => {
  await sleep(1500);
  // throw new Error("error");
  return (
    <div>
      <ToddoContainer />
    </div>
  );
};

export default page;

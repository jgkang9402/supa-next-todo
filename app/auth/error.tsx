"use client";

import { BounceLoader } from "react-spinners";

const error = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <BounceLoader />
      </div>
      <div className="font-bold my-2">There is someting wrong...</div>
    </div>
  );
};
export default error;

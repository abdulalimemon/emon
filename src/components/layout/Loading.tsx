"use client";

import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-slate-100 dark:bg-black">
      <Bars
        height="80"
        width="80"
        color="#FFCD38"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;

"use client"

import { Bars } from 'react-loader-spinner'

const Loading = () => {
 return (
 <div className="h-[100vh] flex items-center justify-center">
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
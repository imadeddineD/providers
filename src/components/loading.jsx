import React from "react";
import image from '../assets/loading.svg'

const LoadingScreen = () => {
  return <div className=" flex justify-center items-center h-screen">
    <img src={image} alt="loading" className=" w-[100px] " />
  </div>;
};

export default LoadingScreen;

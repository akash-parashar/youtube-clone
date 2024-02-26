import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import Sidebar from "./Sidebar";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div>
      <ButtonList/>
       <VideoContainer/>
    
    </div>
  );
};

export default MainContainer;

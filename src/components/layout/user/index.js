import { useState } from "react";
import "./User.css";
import User_Header from "./User_Header";
import User_Sidebar from "./User_Sidebar";
import User_Home from "./User_Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
    <>
      <User_Header OpenSidebar={OpenSidebar} />
      <User_Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <User_Home />
    </>
   </div> 
  );
}

export default App;

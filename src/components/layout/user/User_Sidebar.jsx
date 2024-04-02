import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { useState } from "react";
import WebLogo from "../../../assests/Navbar/WebLogo1.png";
function User_Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle isActive state on click
  };
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <div>
            <a href="/" className=" ">
              <img src={WebLogo} alt=""></img>
            </a>
          </div>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/user" style={{ display: "flex", alignItems: "center" }}>
            <BsGrid1X2Fill className="icon" />
            <span style={{ marginLeft: 10 }}>Dashboard</span>
          </a>
        </li>{" "}
        <li className="sidebar-list-item">
          <a href="/report" style={{ display: "flex", alignItems: "center" }}>
            <BsMenuButtonWideFill className="icon" />
            <span style={{ marginLeft: 10 }}> Reports</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          {" "}
          <a href="quiz" style={{ display: "flex", alignItems: "center" }}>
            <BsListCheck className="icon" />
            <span style={{ marginLeft: 10 }}>Quizes</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="/leaderboard"
            style={{ display: "flex", alignItems: "center" }}
          >
            <BsPeopleFill className="icon" />
            <span style={{ marginLeft: 10 }}>Leadership Board</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="https://www.youtube.com/@DearSister"
            style={{ display: "flex", alignItems: "center" }}
            target="_blank"
          >
            <BsFillArchiveFill className="icon" />
            <span style={{ marginLeft: 10 }}>Videos</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default User_Sidebar;

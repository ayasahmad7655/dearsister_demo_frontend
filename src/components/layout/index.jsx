import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// <--------------------Importing Components---------------->
import Navbar from "../layout/navbar/index";
import Home from "./home/index";
import About from "../layout/about_us/index";
import Number from "../layout/numbersay/index";
import Course from "../layout/courses/index.js";
import Faqs from "../layout/faqs/index";
import Footer from "../layout/footer/index";
import Login from "../pages/login/index";
import SignUp from "../pages/signup/Signup";
import User from "../layout/user/index.js";

// USer DashBoard
import User_Header from "./user/User_Header.jsx";
import User_Sidebar from "./user/User_Sidebar.jsx";
import User_Home from "./user/User_Home.jsx";
import User_leader from "./user/Leadershipboard/index.js";
import User_Report from "./user/Reports/index.js";
import User_Quiz from "./user/Quizes/index.js";
//<--------------------------------------------------------->

// Live Quiz
import LiveQUiz from "./user/LiveQuiz/QuizUI/index.js";

export default function Layout() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home /> <About />
              <Number />
              <Course />
              <Faqs />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <SignUp />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <>
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
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/leaderboard"
          element={
            <>
              <div className="grid-container">
                <>
                  <User_Header OpenSidebar={OpenSidebar} />
                  <User_Sidebar
                    openSidebarToggle={openSidebarToggle}
                    OpenSidebar={OpenSidebar}
                  />
                  <User_leader />
                  {/* <User_Home /> */}
                </>
              </div>
              <Footer />
            </>
          }
        ></Route>{" "}
        <Route
          path="/report"
          element={
            <>
              <div className="grid-container">
                <>
                  <User_Header OpenSidebar={OpenSidebar} />
                  <User_Sidebar
                    openSidebarToggle={openSidebarToggle}
                    OpenSidebar={OpenSidebar}
                  />
                  <User_Report />
                  {/* <User_Home /> */}
                </>
              </div>
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/quiz"
          element={
            <>
              <div className="grid-container">
                <>
                  <User_Header OpenSidebar={OpenSidebar} />
                  <User_Sidebar
                    openSidebarToggle={openSidebarToggle}
                    OpenSidebar={OpenSidebar}
                  />
                  <User_Quiz />
                  {/* <User_Home /> */}
                </>{" "}
              </div>
              <Footer />
              {/* <Footer /> */}
            </>
          }
        ></Route>
        <Route
          path="/livequiz/:index"
          element={
            <>
              <User_Header OpenSidebar={OpenSidebar} />
              <LiveQUiz />
              <></>
              <div className="grid-container"></div>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

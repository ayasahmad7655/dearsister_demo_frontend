import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Typography, makeStyles, AppBar } from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";
import WebLogo from "../../../assests/Navbar/WebLogo1.png";
import { useNavigate } from "react-router-dom";
const UseStyles = makeStyles({
  underline: {
    postion: "fixed",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.3rem",
    position: "relative",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  mobunderline: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "0.8rem",
    position: "relative",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  fullsize: {
    width: "100vw",
  },
});

export default function Navbar() {
  const navigate = useNavigate();
  const classes = UseStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  // Fetch and set login status from JWT cookie on component mount
  useEffect(() => {
    const checkLogin = async () => {
      try {
        // console.log(document.cookie);
        const cookieString = document.cookie;
        if (cookieString === "" || !cookieString) {
          // console.log("No cookies found!");
          setIsLoggedIn(false);
          // Perform actions for no cookies (e.g., show login prompt)
        } else {
          // console.log("Cookies exist:", cookieString);
          setIsLoggedIn(true);
          //  navigate(".//")
          // Proce ss the cookie data (if necessary)
        }
        // Implement logic to retrieve JWT token from cookie (replace with your logic)
        // const jwtToken = await getJwtTokenFromCookie();
        // if (jwtToken) {
        //   setIsLoggedIn(true);
        // }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
    checkLogin();
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="fixed">
      <div>
        <div
          className="bg-gray-100 sticky-nav"
          style={{ backgroundColor: "#04042C" }}
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-6">
                {/* logo */}
                <div>
                  <a href="/" className="flex items-center   text-gray-700 ">
                    <img
                      src={WebLogo}
                      style={{
                        width: "100%",
                      }}
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href=""
                  to="home_section"
                  smooth={true}
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  <Typography className={classes.underline}>Home</Typography>
                </Link>
                <a
                  href="https://www.youtube.com/@DearSister/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  <Typography className={classes.underline}>Videos</Typography>
                </a>
                <Link
                  href=""
                  to="about_section"
                  smooth={true}
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  <Typography className={classes.underline}>
                    About Us
                  </Typography>
                </Link>
                <Link
                  href=""
                  to="course_section"
                  smooth={true}
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  <Typography className={classes.underline}>Courses</Typography>
                </Link>
              </div>

              {/* secondary nav */}
              {!isLoggedIn ? (
                <div className="hidden md:flex items-center space-x-1">
                  <LinkRouter to="/login" className="py-5 px-3">
                    <Typography className={classes.underline}>Login</Typography>
                  </LinkRouter>
                  <LinkRouter
                    to="/signup"
                    className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                  >
                    Signup
                  </LinkRouter>
                </div>
              ) : (
                <LinkRouter
                  to="/user"
                  className="hidden md:flex items-center space-x-1 py-5 px-3"
                >
                  <Typography
                    // onClick={navigate("/user", { replace: true })}
                    className={classes.underline}
                  >
                    Profile
                  </Typography>
                </LinkRouter>
              )}

              {/* mobile button goes here */}
              <div className="md:hidden flex items-center">
                <button
                  className="mobile-menu-button"
                  onClick={handleMenuToggle}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <div
            className={`mobile-menu text-center bg-gray-300 ${
              isMenuOpen ? "" : "hidden"
            } md:hidden`}
            style={{ backgroundColor: "#04042C" }}
          >
            <Link
              href=""
              to="home_section"
              smooth={true}
              className="block py-2 px-4 font-bold  text-sm "
            >
              <Typography
                className={classes.mobunderline}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Home
              </Typography>
            </Link>
            <a
              href="https://www.youtube.com/@DearSister/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-4 font-bold  text-sm "
            >
              <Typography
                className={classes.mobunderline}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Videos
              </Typography>
            </a>
            <Link
              href=""
              to="about_section"
              smooth={true}
              className="block py-2 px-4 font-bold  text-sm "
            >
              <Typography
                className={classes.mobunderline}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                About Us
              </Typography>
            </Link>{" "}
            <Link
              href=""
              to="course_section"
              smooth={true}
              className="block py-2 px-4 font-bold  text-sm "
            >
              <Typography
                className={classes.mobunderline}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Courses
              </Typography>
            </Link>
            {/* <div className="hidden md:flex items-center space-x-1"> */}
            <LinkRouter
              to="/login"
              rel="noopener noreferrer"
              className="py-0 px-3 m-1 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 "
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              Login
            </LinkRouter>
            <LinkRouter
              to="/signup"
              className="py-0 px-3 m-1 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              Signup
            </LinkRouter>
          </div>
        </div>
      </div>
    </AppBar>
  );
}

import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import Avatar from "@mui/material/Avatar";
import FlagIcon from "@mui/icons-material/Flag";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import FluorescentIcon from "@mui/icons-material/Fluorescent";
import InventoryIcon from "@mui/icons-material/Inventory";
// import Invent_Card from "./Invent_Card";
// import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
// import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
// import { Award } from "react-award";
import "react-award/dist/react-award.css";

import img1 from "../../../assests/User_dashboard/digital-marketing.png";
import img2 from "../../../assests/User_dashboard/elearning.png";
import img3 from "../../../assests/User_dashboard/student.png";
/* Inventory Card  */

function User_Home() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  /*      Routes      */
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  async function checkCookie() {
    const cookies = document.cookie
      .split(";")
      .find((c) => c.startsWith("jwt="));
    if (cookies) {
      try {
        // console.log("Cookie", document.cookies);
        const cookie = JSON.stringify(cookies);
        // Replace with your actual server address
        const url = "https://dearsister-demo-backend.onrender.com/user ";
        const jsonData = JSON.stringify({
          cookie,
        });
        // console.log("JSONDATA", jsonData);
      
        const headers = { "Content-Type": "application/json" };

    
        // console.log("Dashboard");
        const response = await axios.post(
          "https://dearsister-demo-backend.onrender.com/user",
          jsonData,
          { headers }
        );
        setUserData(response.data);
        // console.log(response);
      
        // ... your logic here
      } catch (error) {
        console.error("Error verifying cookie:", error);
        // Redirect to login on error
        navigate("/login", { replace: true });
      }
    } else {
      // console.log("Cookie not there");
      navigate("/login", { replace: true });
    }
  }

  // Call checkCookie on component mount
  useEffect(() => {
    checkCookie();
  }, []);


  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div style={{ display: "flex", alignItems: "center" }}>
            <PersonPinIcon
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            ></PersonPinIcon>

            <h1
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              {userData.fullName}
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // backgroundColor: "#f2f2f2",
              padding: "25px 15px",
              borderRadius: "5px",
              cursor: "pointer", // Make it appear clickable
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                borderRadius: 10, // Add border radius for shadow effect
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
                transition: "transform 0.3s ease-in-out", // Animate card appearance
                animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
                "&:hover": {
                  transform: "scale(1.02)", // Slight scale on hover for visual feedback
                },
              }}
            >
              <CrisisAlertIcon
                style={{ fontSize: "2.5em", fontWeight: "bold" }}
                className="icon"
              />
              <span
                style={{ marginLeft: 5, fontSize: "2em", fontWeight: "bold" }}
              >
                Quiz Points
              </span>
              <span
                style={{ marginLeft: 10, fontSize: "2em", fontWeight: "bold" }}
              >
                {userData.quizPoints}
              </span>
            </div>{" "}
            <div
              style={{
                display: "flex",
                marginBottom: "5px",
                alignItems: "center",
                borderRadius: 10, // Add border radius for shadow effect
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
                transition: "transform 0.3s ease-in-out", // Animate card appearance
                animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
                "&:hover": {
                  transform: "scale(1.02)", // Slight scale on hover for visual feedback
                },
              }}
            >
              <FlagIcon
                style={{ fontSize: "2.5em", fontWeight: "bold" }}
                className="icon_score"
              />
              <span
                style={{ marginLeft: 5, fontSize: "2em", fontWeight: "bold" }}
              >
                Highest Score
              </span>
              <span
                style={{ marginLeft: 10, fontSize: "2em", fontWeight: "bold" }}
              >
                {userData.highestScore}
              </span>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: 10, // Add border radius for shadow effect
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
                transition: "transform 0.3s ease-in-out", // Animate card appearance
                animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
                "&:hover": {
                  transform: "scale(1.02)", // Slight scale on hover for visual feedback
                },
              }}
            >
              <FluorescentIcon
                style={{ fontSize: "2.5em", fontWeight: "bold" }}
                className="icon"
              />
              <span
                style={{ marginLeft: 5, fontSize: "2em", fontWeight: "bold" }}
              >
                Correct Answer
              </span>
              <span
                style={{ marginLeft: 10, fontSize: "2em", fontWeight: "bold" }}
              >
                {userData.correctAnswers}
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="card">
          <div style={{ display: "flex", alignItems: "center" }}>
            <InventoryIcon
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              R
            </InventoryIcon>
            <h1
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              Inventory
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "5px",
              marginTop: "20px",
              flexWrap: "wrap",
              "@media (max-width: 768px)": {
                cardContainer: {
                  flexDirection:
                    "no-wrap" /* Stack cards vertically on mobile */,
                  // width: "100px",
                },
              },
            }}
            className="card-container"
          >
            <Card
              size="lg"
              variant="plain"
              orientation="horizontal"
              sx={{
                textAlign: "center",
                maxWidth: "30%",
                marginTop: "20px",
                // backgroundColor: "#211F1E",
                marginBottom: "20px",
                borderRadius: 10, // Add border radius for shadow effect
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
                transition: "transform 0.3s ease-in-out", // Animate card appearance
                animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
                "&:hover": {
                  transform: "scale(1.02)", // Slight scale on hover for visual feedback
                },

                "@keyframes cardAppear": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)", // Slide up from bottom on appearance
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)", // Reset transform after animation
                  },
                },
                "@media (max-width: 768px)": {
                  // Target screens below 768px (adjust as needed)
                  maxWidth: "90%", // Set full width for mobile
                  marginTop: "20px", // Adjust margin for mobile
                  marginBottom: "20px", // Adjust margin for mobile
                },
              }}
              style={{
                marginLeft: 10,
                flex: "1 1",
                // backgroundColor: "#060d1c",
              }}
            >
              <CardContent sx={{ gap: 1.5 }}>
                <AspectRatio rratio="10/8" objectFit="contain" variant="plain">
                  <img
                    src={img1}
                    alt="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
                  />
                </AspectRatio>
                <CardContent style={{ marginTop: 20 }}>
                  <Typography level="title-lg">
                    Total Quizes Happened
                  </Typography>
                  <Typography fontSize="lg" fontWeight="bold" sx={{ mt: 0.5 }}>
                    {userData.totalquiz}
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>{" "}
            <Card
              size="lg"
              variant="plain"
              orientation="horizontal"
              sx={{
                textAlign: "center",
                maxWidth: "30%",
                marginTop: "20px",
                // backgroundColor: "#211F1E",
                marginBottom: "20px",
                borderRadius: 10, // Add border radius for shadow effect
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
                transition: "transform 0.3s ease-in-out", // Animate card appearance
                animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
                "&:hover": {
                  transform: "scale(1.02)", // Slight scale on hover for visual feedback
                },

                "@keyframes cardAppear": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)", // Slide up from bottom on appearance
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)", // Reset transform after animation
                  },
                },
                "@media (max-width: 768px)": {
                  // Target screens below 768px (adjust as needed)
                  maxWidth: "90%", // Set full width for mobile
                  marginTop: "20px", // Adjust margin for mobile
                  marginBottom: "20px", // Adjust margin for mobile
                },
              }}
              style={{
                marginLeft: 10,
                flex: "1 1",
                // backgroundColor: "#060d1c",
              }}
            >
              <CardContent sx={{ gap: 1.5 }}>
                <AspectRatio ratio="10/8" objectFit="contain" variant="plain">
                  <img
                    src={img2}
                    alt="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
                  />
                </AspectRatio>
                <CardContent style={{ marginTop: 20 }}>
                  <Typography level="title-lg">Completed Quiz</Typography>
                  <Typography fontSize="lg" fontWeight="bold" sx={{ mt: 0.5 }}>
                    {userData.attemptquiz}
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>{" "}
            <Card
              size="lg"
              variant="plain"
              orientation="horizontal"
              sx={{
                textAlign: "center",
                maxWidth: "30%",
                marginTop: "20px",
                // backgroundColor: "#211F1E",
                marginBottom: "20px",
                borderRadius: 10, // Add border radius for shadow effect
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
                transition: "transform 0.3s ease-in-out", // Animate card appearance
                animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
                "&:hover": {
                  transform: "scale(1.02)", // Slight scale on hover for visual feedback
                },

                "@keyframes cardAppear": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)", // Slide up from bottom on appearance
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)", // Reset transform after animation
                  },
                },
                "@media (max-width: 768px)": {
                  // Target screens below 768px (adjust as needed)
                  maxWidth: "90%", // Set full width for mobile
                  marginTop: "20px", // Adjust margin for mobile
                  marginBottom: "20px", // Adjust margin for mobile
                },
              }}
              style={{
                marginLeft: 10,
                flex: "1 1",
                // backgroundColor: "#060d1c",
              }}
            >
              <CardContent sx={{ gap: 1.5 }}>
                <AspectRatio ratio="13/8" objectFit="contain" variant="plain">
                  <img
                    src={img3}
                    alt="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
                  />
                </AspectRatio>
                <CardContent>
                  <Typography level="title-lg">Incomplete Quiz</Typography>
                  <Typography fontSize="lg" fontWeight="bold" sx={{ mt: 0.5 }}>
                    {userData.totalquiz - userData.attemptquiz}
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    "--variant-borderWidth": "2px",
                    borderRadius: 40,
                    borderColor: "primary.500",
                    mx: "auto",
                  }}
                >
                  Attempt Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="card">
          <div style={{ display: "flex", alignItems: "center" }}>
            <EmojiEventsIcon
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            ></EmojiEventsIcon>
            <h1
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              Achievements
            </h1>
          </div>
          <Card
            size="lg"
            variant="plain"
            orientation="horizontal"
            sx={{
              textAlign: "center",
              maxWidth: "30%",
              marginTop: "20px",
              // backgroundColor: "#211F1E",
              marginBottom: "20px",
              borderRadius: 10, // Add border radius for shadow effect
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
              transition: "transform 0.3s ease-in-out", // Animate card appearance
              animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
              "&:hover": {
                transform: "scale(1.02)", // Slight scale on hover for visual feedback
              },

              "@keyframes cardAppear": {
                from: {
                  opacity: 0,
                  transform: "translateY(20px)", // Slide up from bottom on appearance
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)", // Reset transform after animation
                },
              },
              "@media (max-width: 768px)": {
                // Target screens below 768px (adjust as needed)
                maxWidth: "90%", // Set full width for mobile
                marginTop: "20px", // Adjust margin for mobile
                marginBottom: "20px", // Adjust margin for mobile
              },
            }}
            style={{
              marginLeft: 10,
              flex: "1 1",
              // backgroundColor: "#060d1c",
            }}
          >
            <CardContent sx={{ gap: 1.5 }}>
              <AspectRatio ratio="10/8" objectFit="contain" variant="plain">
                <img
                  alt=""
                  src="https://raw.githubusercontent.com/fedemartinm/react-award/main/example/images/award.svg"
                />
              </AspectRatio>
              <CardContent style={{ marginTop: 20 }}>
                <Typography
                  level="title-lg"
                  fontSize="2em"
                  fontWeight="bold"
                  sx={{ mt: 0.5 }}
                >
                  {" "}
                  Beginner
                </Typography>
                <Typography
                  fontSize="lg"
                  fontWeight="bold"
                  sx={{ mt: 0.5 }}
                ></Typography>
              </CardContent>
            </CardContent>
          </Card>{" "}
        </div>
      </div>

      <div className="charts"></div>
    </main>
  );
}

export default User_Home;

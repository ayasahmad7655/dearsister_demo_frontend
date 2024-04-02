import { React, useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function FolderList() {
  // const [attempted, setAttempted] = useState(Array(20).fill(false)); // Track attempted quizzes

  const [attempted, setAttempted] = useState([]); // Track attempted quizzes
  const [notAttemptedQuizzes, setNotAttemptedQuizzes] = useState([]); // Track not attempted quizzes
  const [notAttemptQuiz, setNotAttemptQuiz] = useState(0);
  // const attempted = ["1", "2", "3", "4", "5", "67"];
  const navigate = useNavigate();
  const handleAttemptClick = (index) => {
    // console.log("QuizId", index);
    // setAttempted((prevAttempted) => {
    //   const newAttempted = [...prevAttempted];
    //   newAttempted[index] = true;
    //   return newAttempted;
    // });
    navigate(`/livequiz/${index}`, { replace: true });
    // Navigate with replace=true
  };

  async function QuizData() {
    const cookies = document.cookie
      .split(";")
      .find((c) => c.startsWith("jwt="));
    if (cookies) {
      try {
        // console.log("Cookie in Quiz", cookies);
        const cookie = JSON.stringify(cookies);
        // Replace with your actual server address
        // const cookie = JSON.stringify(cookies);
        // Replace with your actual server address
        const url = "https://dearsister-demo-backend.onrender.com/quiz ";
        const jsonData = JSON.stringify({
          cookie,
        });
        // console.log("JSONDATA", jsonData);

        const headers = { "Content-Type": "application/json" };

        // console.log("Quiz");
        const response = await axios.post(
          "https://dearsister-demo-backend.onrender.com/quiz",
          jsonData,
          { headers }
        );
        // console.log("Response in Quiz", response.data);
        // setAttempted(response.attemptedQuizzes);
        setNotAttemptedQuizzes(response.data.notAttemptedQuizzes);
        setAttempted(response.data.attemptedQuizzes);
        // Number for header to show
        setNotAttemptQuiz(response.data.notAttemptedQuizzes.length);
        // console.log("Response data:", userData);
        // console.log("Attempt", attempted);
        // console.log("NotAttempt", notAttemptedQuizzes);
        // Handle successful authentication (e.g., set state or redirect)
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
  //

  // Call checkCookie on component mount
  useEffect(() => {
    QuizData();
  }, []);

  return (
    <List
      sx={{
        width: "80vw", // Default width for computer
        "@media (max-width: 600px)": {
          width: "90%", // Adjust width for mobile devices
          marginLeft: 2,
        },
        alignItem: "center",
        marginLeft: 5,
        marginTop: 5,
      }}
    >
      <>
        <ListItem
          sx={{
            borderRadius: 10, // Add border radius for shadow effect
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
            transition: "transform 0.3s ease-in-out", // Animate card appearance
            animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
            marginTop: 1,
            "&:hover": {
              transform: "scale(1.02)", // Slight scale on hover for visual feedback
            },
            backgroundColor: "263043;", // Set background color based on attempted state
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <ListItemText>
            <span
              style={{
                color: "white",
                fontWeight: "bold", // Makes the text bold
                fontSize: "1.2rem", // Base font size
                "@media (max-width: 768px)": {
                  fontSize: "1rem", // Adjust for smaller screens
                },
              }}
            >
              Don't miss out! You have {notAttemptQuiz} quizzes to try.
            </span>
          </ListItemText>
        </ListItem>
      </>
      <div style={{ height: "90vh", overflowY: "scroll" }}>
        {/* Render Not Attempted quizzes */}
        {notAttemptedQuizzes.map((quizId, index) => (
          // {console.log("Index ",index);}
          <ListItem
            key={quizId}
            sx={{
              borderRadius: 10, // Add border radius for shadow effect
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
              transition: "transform 0.3s ease-in-out", // Animate card appearance
              animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
              marginTop: 1,
              "&:hover": {
                transform: "scale(1.02)", // Slight scale on hover for visual feedback
              },
              backgroundColor: "white", // Set background color based on attempted state
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ContentPasteGoIcon />
              </Avatar>
            </ListItemAvatar>{" "}
            <ListItemText
              primary={`Quiz ${quizId}`}
              // secondary={attempted[index] ? "Attempted" : "Not attempted"}
            >
              {/* "Not attempted" */}
              {/* {attempted[index] ? "Not attempted" : " "} */}
            </ListItemText>
            {/* ... your ListItem content */}
            <Button
              variant="contained"
              onClick={() => handleAttemptClick(quizId)} // Pass quizId to handleAttemptClick
            >
              Attempt
            </Button>
          </ListItem>
        ))}

        {attempted.map((quizId, index) => (
          // {console.log("Index ",index);}
          <ListItem
            key={quizId}
            sx={{
              borderRadius: 10, // Add border radius for shadow effect
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
              transition: "transform 0.3s ease-in-out", // Animate card appearance
              animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
              marginTop: 1,
              "&:hover": {
                transform: "scale(1.02)", // Slight scale on hover for visual feedback
              },
              backgroundColor: "blue", // Set background color based on attempted state
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ContentPasteGoIcon />
              </Avatar>
            </ListItemAvatar>{" "}
            <ListItemText
              primary={`Quiz ${quizId}`}
              // secondary={attempted[index] ? "Attempted" : "Not attempted"}
            >
              {/* "Not attempted" */}
              {/* {attempted[index] ? "Not attempted" : " "} */}
            </ListItemText>
            {/* ... your ListItem content */}
            {/* <Button
              variant="contained"
              // Pass quizId to handleAttemptClick
            >
              Attempted
            </Button> */}
          </ListItem>
        ))}
        {/* {Array.from({ length: 17 }, (_, index) => (
          <ListItem
            key={index}
            sx={{
              borderRadius: 10, // Add border radius for shadow effect
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
              transition: "transform 0.3s ease-in-out", // Animate card appearance
              animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
              marginTop: 1,
              "&:hover": {
                transform: "scale(1.02)", // Slight scale on hover for visual feedback
              },
              backgroundColor: attempted[index] ? "blue" : "white", // Set background color based on attempted state
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ContentPasteGoIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Quiz ${index + 1}`}
              secondary={attempted[index] ? "Attempted" : "Not attempted"}
            > */}
        {/* "Not attempted" */}
        {/* {attempted[index] ? "Not attempted" : " "} */}
        {/* </ListItemText>
            <Button
              variant="contained"
              disabled={attempted[index]} // Disable button if attempted
              onClick={() => handleAttemptClick(index)}
            >
              {attempted[index] ? "Attempted" : "Attempt"}
            </Button>
          </ListItem>
        ))} */}
      </div>
    </List>
  );
}

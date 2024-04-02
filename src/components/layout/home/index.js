import { React } from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import LadyPhoto from "../../../assests/Home/LadyPhoto11.png";

const UseStyles = makeStyles((theme) => ({
  // <--------------Main Grid Container-------------------->
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  // <-----------------------Image Grid2 CSS ------------------>
  img: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "-15%",
      maxWidth: "0%",
      maxHeight: "0%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
  // <---------------------Apply on Typography---------------->
  root: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "15px",
      fontSize: "2.0rem",
      fontWeight: "800",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
  },
  // <----------------Paragraph---------------------->
  para: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
      fontWeight: "500",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
  },
}));

export default function index() {
  const classes = UseStyles();
  return (
    <section id="home_section">
      <div style={{ paddingTop: "64px" }}>
        <Grid
          style={{
            backgroundColor: "#01011F",
            height: "80vh",
            align: "center",
          }}
          container
          className={classes.container}
        >
          <Grid sm={8} item xs={12}>
            <div>
              <Typography
                className={classes.root}
                variant="h1"
                align="center"
                justify="center"
                color="primary"
                style={{ color: "#fff" }}
              >
                English proficiency,
              </Typography>
              <Typography
                className={classes.root}
                variant="h1"
                align="center"
                justify="center"
                color="primary"
                style={{ color: "#fff" }}
              >
                <span style={{ color: "red" }}> Confident</span> English
                communication
              </Typography>
              <Typography
                className={classes.para}
                align="center"
                justify="center"
                variant="body1"
                fontSize="1rem"
                style={{ color: "#fff" }}
              >
                A good way to learn English is to read and listen to{" "}
                <span style={{ color: "red" }}> English content </span>
                regularly, and to practice{" "}
                <span style={{ color: "red" }}>
                  speaking and writing in English {"  "}
                </span>
                whenever possible.
              </Typography>
              <div
                className="flex justify-center "
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <div
                  className="youtube_icon"
                  style={{
                    opacity: 0.9, // set opacity to 70%
                    backgroundColor: "#F3F7F5", // set background color to yellow
                    boxShadow: "0px 0px 10px #0A34F3", // add a yellow shadow effect
                    borderRadius: "25px", // add rounded corners
                    padding: "10px", // add padding
                    margin: "10px",
                    transition: "all 0.2s ease-in-out", // add transition effect
                    cursor: "pointer", // add cursor on hover
                  }}
                >
                  <YouTubeIcon
                    align="center"
                    justify="center"
                    color="secondary"
                    fontSize="large"
                  />
                  <Link
                    href="https://www.youtube.com/@DearSister"
                    target="_blank"
                    color="secondary"
                  >
                    Youtube
                  </Link>
                </div>
                <div
                  style={{
                    opacity: 0.9, // set opacity to 70%
                    backgroundColor: "#F3F7F5", // set background color to yellow
                    boxShadow: "0px 0px 10px #fff", // add a yellow shadow effect
                    borderRadius: "25px", // add rounded corners
                    padding: "10px", // add padding
                    margin: "10px",
                    transition: "all 0.2s ease-in-out", // add transition effect
                    cursor: "pointer", // add cursor on hover
                  }}
                >
                  <TelegramIcon
                    align="center"
                    justify="center"
                    color="primary"
                    fontSize="large"
                  />
                  <Link
                    href="https://t.me/+f40joA149YRmNDI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    Telegram
                  </Link>
                </div>
                <div
                  style={{
                    opacity: 0.9, // set opacity to 70%
                    backgroundColor: "#F3F7F5", // set background color to yellow
                    boxShadow: "0px 0px 10px #0A34F3", // add a yellow shadow effect
                    borderRadius: "25px", // add rounded corners
                    padding: "10px", // add padding
                    margin: "10px",
                    transition: "all 0.2s ease-in-out", // add transition effect
                    cursor: "pointer", // add cursor on hover
                  }}
                >
                  <InstagramIcon
                    align="center"
                    justify="center"
                    color="secondary"
                    fontSize="large"
                  />
                  <Link
                    href="https://www.instagram.com/dearsister_officialy/"
                    target="_blank"
                    rel="noopener"
                    color="secondary"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            style={{
              align: "center",
            }}
            sm={4}
            xs={12}
            justifyContent="center"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={LadyPhoto} alt=" " className={classes.img} />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

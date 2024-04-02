import { React } from "react";
import { Link } from "react-scroll";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const UseStyles = makeStyles((theme) => ({
  // <--------------Main Grid Container-------------------->
  container: {
    paddingTop: "3vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    paddingBottom: "3vh",
  },
  container1: {
    paddingTop: "1vh",
    paddingBottom: "1vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "70%",
    paddingLeft: "2vw",
    marginLeft: "10vw",
  },

  // <----------------------Apply Size on hr ------------------>
  divisize: {
    backgroundColor: "#FC6736",
    marginBottom: "20px",
    borderRadius: "10vw",
    [theme.breakpoints.down("xs")]: {
      height: "5px",
    },
  },

  // <---------------------Apply on Typography---------------->
  root: {
    color: "#fff",
    paddingBottom: "1vh",
    textDecoration: "underline",
    textDecorationColor: "#fff",
    textDecorationThickness: "2px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5vh",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
  contai: {
    height: "30vh",
    backgroundColor: "black",
    margin: "1vw",
  },
  linkcss: {
    textDecoration: "none",
    color: "#fff",
    weight: "10%",
    transition: "all 0.3s ease",
    "&:hover": {
      cursor: "pointer",
    },
  },
  diviline: {
    backgroundColor: "whitesmoke",
    width: "70%",
    paddingLeft: "2vw",
    marginLeft: "10vw",
  },
  divline1: { height: "2vh", width: "70%" },
}));

export default function index() {
  const classes = UseStyles();
  return (
    <div style={{ backgroundColor: "black", paddingBottom: "3vh" }}>
      <Grid
        style={{
          backgroundColor: "black",
          align: "center",
        }}
        container
        className={classes.container}
      >
        <Grid item xs={4} md={4} lg={2} className={classes.contai}>
          <Typography underline="always" className={classes.root}>
            Organisation
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link
              // href=""
              to="about_section"
              smooth={true}
              className={classes.linkcss}
            >
              About
            </Link>
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link
              // href=""
              to="faqs_section"
              smooth={true}
              className={classes.linkcss}
            >
              FAQS
            </Link>
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <a
              href="https://www.youtube.com/@DearSister/videos"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkcss}
            >
              Videos
            </a>
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} lg={2} className={classes.contai}>
          {" "}
          <Typography underline="always" className={classes.root}>
            Community
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link
              href=""
              to="course_section"
              smooth={true}
              className={classes.linkcss}
            >
              Courses
            </Link>
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link
              href=""
              to="home_section"
              smooth={true}
              className={classes.linkcss}
            >
              Events
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} lg={2} className={classes.contai}>
          {" "}
          <Typography underline="always" className={classes.root}>
            Socials
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <a
              href="https://www.youtube.com/@DearSister"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkcss}
            >
              Youtube
            </a>
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <a
              href="https://www.instagram.com/dearsister_officialy/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkcss}
            >
              Instagram
            </a>
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <a
              href="https://t.me/+f40joA149YRmNDI1"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkcss}
            >
              Telegram
            </a>
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <a
              href="https://github.com/DearSister"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkcss}
            >
              Github
            </a>
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} lg={2} className={classes.contai}>
          {" "}
          <Typography underline="always" className={classes.root}>
            Contact
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <a
              href="https://discord.gg/mkzWcUM5"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkcss}
            >
              Discord
            </a>
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <a href="/" className={classes.linkcss}>
              Email
            </a>
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <a
              href="https://twitter.com/DearSisterYT"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkcss}
            >
              Twitter
            </a>
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.diviline}>
        <Divider />
      </div>
      <Grid className={classes.container1} container>
        <Grid item md={12} lg={6} sm={12}>
          <Link className={classes.linkcss}>
            <Typography style={{ fontSize: "1rem", fontWeight: "1000" }}>
              Dear Sister
            </Typography>
          </Link>
        </Grid>
        <Grid item md={12} lg={6} sm={12} style={{ color: "white" }}>
          <a
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <YouTubeIcon align="center" justify="center" fontSize="large" />
          </a>{" "}
          <a
            href="https://github.com/DearSister"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <GitHubIcon align="center" justify="center" />
          </a>{" "}
          <a
            href="https://t.me/+f40joA149YRmNDI1"
            target="_blank"
            rel="noopener noreferrer"
            // color="secondary"
            style={{ color: "#fff" }}
          >
            <TelegramIcon align="center" justify="center" fontSize="large" />
          </a>{" "}
          <a
            href="https://twitter.com/DearSisterYT"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <TwitterIcon align="center" justify="center" fontSize="large" />
          </a>{" "}
          <a
            href="https://www.instagram.com/dearsister_officialy/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <InstagramIcon align="center" justify="center" fontSize="large" />
          </a>{" "}
          <a
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <EmailIcon align="center" justify="center" fontSize="large" />
          </a>{" "}
          <a
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <LinkedInIcon align="center" justify="center" fontSize="large" />
          </a>
        </Grid>
      </Grid>
      <div className={classes.diviline}>
        <Divider />
      </div>
      <div style={{ margin: "1vh" }}>
        <Typography
          style={{ color: "#fff", display: "flex", justifyContent: "center" }}
          variant="body1"
        >
          &copy; 2023 Copyrights Dear Sister.All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

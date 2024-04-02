import { React } from "react";
import { Grid, Typography, makeStyles, Divider, Link } from "@material-ui/core";
import LadyPhoto from "../../../assests/Courses/Webinar-amico (1).svg";
import StarIcon from "@material-ui/icons/Star";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
const UseStyles = makeStyles((theme) => ({
  // <--------------Main Grid Container-------------------->
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },

  // <----------------------Apply Size on hr ------------------>
  divisize: {
    backgroundColor: "#F50834",
    marginBottom: "20px",
    borderRadius: "10vw",
    [theme.breakpoints.down("xs")]: {
      width: "30%",
      height: "5px",
    },
    [theme.breakpoints.up("sm")]: { width: "10vw", height: "5px" },
    [theme.breakpoints.up("md")]: { width: "20vw", height: "6px" },
    [theme.breakpoints.up("lg")]: { width: "10vw", height: "8px" },
  },

  // <---------------------Apply on Typography---------------->
  root: {
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5vh",
      marginLeft: "4vw",
      fontSize: "1.7rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "10vh",
      fontSize: "2rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "10vh",
      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "10vh",
      fontSize: "3rem",
    },
  },
  // <----------------Paragraph---------------------->
  para: {
    color: "#fff",
    fontWeight: "900",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
  },
  sizegrid: {
    height: "100%",
    weight: "100%",
  },
  aboutpara: {
    width: "95%",
    paddingLeft: "2vw",
    [theme.breakpoints.up("md")]: {
      width: "75%",
      paddingLeft: "0vw",
    },
    [theme.breakpoints.up("large")]: {
      width: "70%",
      paddingLeft: "0vw",
    },
  },
  staricon: {
    color: "#F50834",
    marginRight: "1vw",
    marginTop: "5px",
    fontSize: "x-large",

    [theme.breakpoints.down("md")]: {
      marginTop: "6px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "large",
      marginTop: "1.5px",
    },
  },
  img: {
    [theme.breakpoints.up("lg")]: {
      height: "55vh",
      weight: "100%",
    },
    [theme.breakpoints.down("md")]: {
      weight: "90vw",
    },
  },
  fulldata: {
    paddingLeft: "1vw",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "15vw",
    },
  },
  coursebelow: {
    color: "#fff",
    fontWeight: "1000",
    paddingTop: "1vh",
    paddingLeft: "1vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
  },
  explorecourse: {
    color: "#fff",
    fontWeight: "1000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
  explorecou: {
    color: "#fff",
    opacity: 0.9, // set opacity to 70%
    backgroundColor: "#F50834", // set background color to yellow
    boxShadow: "0px 0px 10px #D21337", // add a yellow shadow effect
    borderRadius: "25px", // add rounded corners
    // add padding
    padding: "10px",
    margin: "10px",
    marginBottom: "60px",
    transition: "all 0.2s ease-in-out", // add transition effect
    cursor: "pointer", // add cursor on hover
    width: "100%",
  },
}));

export default function index() {
  const classes = UseStyles();
  return (
    <section id="course_section">
      <Grid
        style={{
          backgroundColor: "#01011F",
          align: "center",
          paddingBottom: "2vh",
        }}
        container
        className={classes.container}
      >
        <Grid
          sm={6}
          item
          xs={12}
          className={classes.sizegrid}
          alignSelf="flex-end"
        >
          <div className={classes.fulldata}>
            <div>
              <Typography className={classes.root}>
                Courses
                <Divider className={classes.divisize} />
              </Typography>

              <div className={classes.aboutpara}>
                <ul>
                  <li>
                    <div
                      alignSelf="flex-end"
                      style={{ marginTop: "20px", display: "flex" }}
                    >
                      <StarIcon className={classes.staricon} />
                      <Typography className={classes.para}>
                        This course is perfect for those who are new to the
                        English language.
                      </Typography>
                    </div>
                  </li>
                  <li style={{ marginTop: "20px", display: "flex" }}>
                    <StarIcon className={classes.staricon} />
                    <Typography className={classes.para}>
                      We start with the basics, covering fundamental grammar
                      rules, essential vocabulary, and simple conversational
                      phrases.
                    </Typography>
                  </li>
                  <li style={{ marginTop: "20px", display: "flex" }}>
                    <StarIcon className={classes.staricon} />
                    <Typography className={classes.para}>
                      Each lesson includes interactive exercises and quizzes to
                      reinforce your learning
                    </Typography>
                  </li>
                  <li style={{ marginTop: "20px", display: "flex" }}>
                    <StarIcon className={classes.staricon} />
                    <Typography className={classes.para}>
                      By the end of this course, you will have a solid
                      foundation in English and be ready to progress to more
                      advanced topics.
                    </Typography>
                  </li>
                </ul>
                <Typography className={classes.coursebelow}>
                  $0/month
                </Typography>
                <div className={classes.explorecourse}>
                  <Link
                    href="https://www.youtube.com/@DearSister"
                    target="_blank"
                    rel="noopener"
                    // color="secondary"
                    className={classes.explorecou}
                  >
                    {`   Explore Course  `}
                    <VideoLibraryIcon />
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          style={{
            align: "center",
          }}
          sm={6}
          xs={12}
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
    </section>
  );
}

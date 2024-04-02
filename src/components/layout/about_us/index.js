import { React } from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";
import LadyPhoto from "../../../assests/About_US/Girls.png";
import StarIcon from "@material-ui/icons/Star";

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
}));

export default function index() {
  const classes = UseStyles();
  return (
    <section id="about_section">
      <Grid
        style={{
          backgroundColor: "#0d0d29",
          align: "center",
        }}
        container
        className={classes.container}
      >
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
        <Grid sm={6} item xs={12} className={classes.sizegrid}>
          <div>
            <div>
              <Typography className={classes.root}>
                About US
                <Divider className={classes.divisize} />
              </Typography>

              <div className={classes.aboutpara}>
                <ul>
                  <li>
                    <div style={{ marginTop: "20px", display: "flex" }}>
                      <StarIcon className={classes.staricon} />
                      <Typography className={classes.para}>
                        We are offering resources to help improve your English
                        language learning and speaking skills.
                      </Typography>
                    </div>
                  </li>{" "}
                  <li style={{ marginTop: "20px", display: "flex" }}>
                    <StarIcon className={classes.staricon} />
                    <Typography className={classes.para}>
                      Our channel provides conversation practice sessions where
                      you can listen to and participate in dialogues,
                      role-plays, and discussions on different topics.
                    </Typography>
                  </li>
                  <li style={{ marginTop: "20px", display: "flex" }}>
                    <StarIcon className={classes.staricon} />
                    <Typography className={classes.para}>
                      We are dedicated to helping learners of all levels improve
                      their English language skills in an engaging and enjoyable
                      Way.
                    </Typography>
                  </li>
                  <li style={{ marginTop: "20px", display: "flex" }}>
                    <StarIcon className={classes.staricon} />
                    <Typography className={classes.para}>
                      Our English learning channel was founded with a passion
                      for language education and a desire to make learning
                      English accessible to learners worldwide.
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

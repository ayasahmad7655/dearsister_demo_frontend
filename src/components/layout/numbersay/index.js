import { React, useState, useEffect, useRef } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Divider,
  Avatar,
} from "@material-ui/core";

import YoutubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import VisibilityIcon from "@material-ui/icons/Visibility";
const UseStyles = makeStyles((theme) => ({
  // <--------------Main Grid Container-------------------->
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    color: "#01011F",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "3vw",
      paddingRight: "3vw",
    },
  },

  // <----------------------Apply Size on hr ------------------>
  divisize: {
    backgroundColor: "#FC6736",
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
      paddingTop: "2vh",
      marginLeft: "4vw",
      fontSize: "1.7rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "2vh",
      fontSize: "2rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2vh",
      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
  },
  // <----------------Paragraph---------------------->
  para: {
    color: "#01011F",
    width: "900px",
  },
  header: {
    paddingLeft: "1vw",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "15vw",
    },
  },
  numbercard: {
    paddingTop: "3%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardicon: { color: "white", width: "50vw", height: "5vw" },
  avataricon: {
    backgroundColor: "#F50834", // set background color to yellow
    marginTop: "2vh",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      height: "55%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35%",
      height: "55%",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
      height: "55%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25%",
      height: "65%",
    },
  },
  Iconsize: {
    color: "#fff",
  },
  test: {
    background: "#fff",
    margin: "1px",
  },
  gridsize: {
    backgroundColor: "#01011F",
    alignItems: "center",
    justifyContent: "center",
    margin: "1vh",
  },
  gridtext: {
    backgroundColor: "#01011F",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "2vh",
      marginLeft: "4vw",
      fontSize: "1.7rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "2vh",
      fontSize: "2rem",

      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2vh",

      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "0vh",

      fontSize: "2rem",
    },
  },
  gridtext1: {
    backgroundColor: "#01011F",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-10px",
    marginBottom: "40px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "4vw",
      fontSize: "1.7rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
  },
}));

const Counter = ({ end }) => {
  const classes = UseStyles();
  const [count, setCount] = useState(0);
  const [views, setViews] = useState(0);
  const [follower, setFollower] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const targetRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsCounting(true);
          setCount(0); // Reset the count when the element is in view
          setViews(0);
          setFollower(0);
        }
      },
      { threshold: 1 }
    );

    observer.observe(targetRef.current);

    return () => {
      // observer.unobserve(targetRef.current);
    };
  }, []);

  useEffect(() => {
    if (isCounting) {
      let interval = setInterval(() => {
        setCount((prevCount) => prevCount + 11);
        setViews((prevCount) => prevCount + 2);
        setFollower((prevcount) => prevcount + 2);
      }, 1);
      if (views === end) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [isCounting, views, end]);

  return (
    <div
      style={{
        backgroundColor: "#0d0d29",
        align: "center",
      }}
      ref={targetRef}
    >
      <div className={classes.header}>
        <div>
          <Typography className={classes.root}>
            Numbers say it all
            <Divider className={classes.divisize} />
          </Typography>
        </div>
      </div>
      <div>
        <Grid
          style={{
            align: "center",
          }}
          container
          className={classes.container}
        >
          <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridsize}>
            <div className={classes.numbercard}>
              <Avatar className={classes.avataricon}>
                <YoutubeIcon
                  style={{ fontSize: "70" }}
                  className={classes.Iconsize}
                />
              </Avatar>
            </div>
            <div>
              <Typography className={classes.gridtext}>{count} K+</Typography>{" "}
              <Typography className={classes.gridtext1}>Subscribers</Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridsize}>
            <div className={classes.numbercard}>
              <Avatar className={classes.avataricon}>
                <VisibilityIcon
                  style={{ fontSize: "70" }}
                  className={classes.Iconsize}
                />
              </Avatar>
            </div>
            <div>
              <Typography className={classes.gridtext}>{views} M+</Typography>{" "}
              <Typography className={classes.gridtext1}>Views</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridsize}>
            <div className={classes.numbercard}>
              <Avatar className={classes.avataricon}>
                <InstagramIcon
                  style={{ fontSize: "70" }}
                  className={classes.Iconsize}
                />
              </Avatar>
            </div>
            <div>
              <Typography className={classes.gridtext}>
                {follower} K+
              </Typography>{" "}
              <Typography className={classes.gridtext1}>Followers</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
const GridCounter = () => {
  return (
    <div>
      <Counter key={1} end={100 * 1} />
    </div>
  );
};

export default GridCounter;

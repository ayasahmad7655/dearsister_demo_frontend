import { React } from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const UseStyles = makeStyles((theme) => ({
  // <--------------Main Grid Container-------------------->
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    color: "#01011F",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "18vw",
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
    backgroundColor: "#F50834",
    marginBottom: "20px",
    borderRadius: "10vw",
    [theme.breakpoints.down("xs")]: {
      width: "15%",
      height: "5px",
    },
    [theme.breakpoints.up("sm")]: { width: "7vw", height: "5px" },
    [theme.breakpoints.up("md")]: { width: "10vw", height: "6px" },
    [theme.breakpoints.up("lg")]: { width: "6vw", height: "8px" },
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
  accordionsize: {
    backgroundColor: "#01011F",
  },
  typosize: {
    color: "#fff",
    padding: "1px",
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2vh",
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
}));

export default function Index() {
  const classes = UseStyles();

  return (
    <section id="faqs_section">
      <div
        style={{
          backgroundColor: "#0d0d29",
          align: "center",
          paddingBottom: "1vh",
          // width: "100vw",
        }}
      >
        <div className={classes.header}>
          <div>
            <Typography className={classes.root}>
              FAQS
              <Divider className={classes.divisize} />
            </Typography>
          </div>
        </div>
        <div>
          <Grid container className={classes.container} spacing={0}>
            {/* Use two columns on screens larger than md */}
            <Grid item xs={12} md={6}>
              <Accordion className={classes.accordionsize}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.typosize}>
                    How can I improve my English speaking skills?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.typosize}>
                    Improving your English speaking skills requires consistent
                    practice and exposure to the language.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion className={classes.accordionsize}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.typosize}>
                    How can I make the most out of joining an English-speaking
                    community?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.typosize}>
                    To make the most out of joining an English-speaking
                    community, actively participate in conversations and
                    discussions.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion className={classes.accordionsize}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.typosize}>
                    How can I prepare for English language proficiency to fully
                    benefit from YouTube channel?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.typosize}>
                    To prepare for English language proficiency and fully
                    benefit from our YouTube channel, we recommend a systematic
                    approach.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion className={classes.accordionsize}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.typosize}>
                    How can I improve my English speaking skills through your
                    YouTube channel?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.typosize}>
                    Our YouTube channel offers various resources to enhance your
                    English speaking skills.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion className={classes.accordionsize}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.typosize}>
                    How do I join your community?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.typosize}>
                    Make sure to join our Youtube and Instagram. You can find us
                    on all socials media platforms as @dearsister
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion className={classes.accordionsize}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.typosize}>
                    What are some effective techniques or videos on your channel
                    for expanding my English vocabulary?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.typosize}>
                    On our channel, you can find vocabulary-building videos that
                    cover a wide range of topics and themes.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

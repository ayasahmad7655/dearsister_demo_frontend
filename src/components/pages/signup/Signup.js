import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import SocialAuth from "../signup/SocialAuth";
import SignupForm from "../signup/SignUp";
import Logo from "../login/Logo";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import googleIcon from "@iconify-icons/logos/google-icon";

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Signup = ({ setAuth }) => {
  return (
    <RootStyle
      style={{
        backgroundColor: "#01011F",
      }}
    >
      <Container maxWidth="sm">
        <ContentStyle
          style={{
            backgroundColor: "#0B0B4A",
          }}
        >
          <HeadingStyle component={motion.div} {...fadeInUp}>
            {/* <Logo /> */}

            <Typography
              sx={{ color: "text.secondary", mb: 5 }}
              style={{
                color: "#fff",
              }}
            >
              Enter your details below.
            </Typography>
          </HeadingStyle>

          <Box component={motion.div} {...fadeInUp}>
            <SocialAuth />
          </Box>

          <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
            {/* <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
            ></Typography> */}
          </Divider>

          {/* <SignupForm setAuth={setAuth} /> */}
          {/* <Button
            variant="contained"
            color="primary"
            startIcon={<Icon icon={googleIcon} />}
          >
            Continue with Google
          </Button> */}
          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ color: "white", mt: 2 }}
          >
            By registering, I agree to{" "}
            <Link
              underline="always"
              style={{ color: "white", textDecorationColor: "white" }}
              color="text.primary"
              href="#"
            >
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link
              underline="always"
              style={{ color: "white", textDecorationColor: "white" }}
              color="text.primary"
              href="#"
            >
              Privacy Policy
            </Link>
            .
          </Typography>

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
            style={{ color: "white", textDecorationColor: "white" }}
          >
            Have an account?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Signup;

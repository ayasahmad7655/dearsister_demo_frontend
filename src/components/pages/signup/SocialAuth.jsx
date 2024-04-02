import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import axios from "axios";
import Cookies from "js-cookie";
/////////////////////////////////////////////////////////////
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const SignupForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useState(false);
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    // validationSchema: SignupSchema,
    onSubmit: async () => {
      // console.log(firstName);
      try {
        const { firstName, lastName, email, password } = formik.values;
        // Serialize data to JSON (ensure it's an object)
        // Create the JSON body:
        const jsonData = JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        });
        const url = "https://dearsister-demo-backend.onrender.com/signup";
        // console.log(jsonData);
        //
        const headers = { "Content-Type": "application/json" };
        const response = await axios.post(
          "https://dearsister-demo-backend.onrender.com/signup",
          jsonData,
          { headers }
        );

        // await fetch(url, fetchOptions)
        //   .then((response) => {
        //     if (!response.ok) {
        //       throw new Error(`HTTP error! status: ${response}`);
        //     }
        //     // return response.json(); // Assuming the response is also JSON
        //   })
        //   .then((responseData) => {
        //     // console.log("Response data:", responseData);
        // console.log("Response", response);
        Cookies.set("jwt", response.data.token);
        // console.log(Cookies.get("jwt"));
        // if successful, consider redirecting:
        // window.location.href = "/"; // Or use a navigation library
        // })
        // .catch((error) => {
        //   console.error("Error sending data:", error);
        // });
        // Set appropriate content type header
      } catch (e) {
        // console.log("jjj");
      }

      setTimeout(() => {
        setAuth(true);
        // console.log("Ayas");
        // console.log(jwtToken);
        navigate("/user", { replace: true });
      }, 3000);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <TextField
              fullWidth
              label="First name"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: {
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add your desired shadow styles here
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                },
              }}
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: {
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add your desired shadow styles here
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                },
              }}
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: {
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add your desired shadow styles here
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                },
              }}
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: {
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add your desired shadow styles here
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      style={{ color: "white" }}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Sign up
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SignupForm;

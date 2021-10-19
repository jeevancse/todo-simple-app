import React from "react";
import { TabPanel } from "@mui/lab";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUpError from "../formError/signup.error";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SignupApiImp from "../Apis/signup.api";
import LoginError from "../formError/login.error";
import LoginApiImplementation from "../Apis/login.api";
function CommonFormSignupNLogin({ type }) {
  const [formValue, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState({});
  const [focus, setErrorFocus] = useState({
    name: false,
    email: false,
    password: false,
  });

  const onchangeHandler = (e) => {
    setSuccess("");
    setFormValues({ ...formValue, [e.target.name]: e.target.value });
    if (e.target.name === "name") {
      setErrorFocus((prev) => ({ ...prev, name: false }));
    }
    if (e.target.name === "email") {
      setErrorFocus((prev) => ({ ...prev, email: false }));
    }
    if (e.target.name === "password") {
      setErrorFocus((prev) => ({ ...prev, password: false }));
    }
  };
  useEffect(() => {
    setSuccess("");
    setFormValues({
      name: "",
      email: "",
      password: "",
    });
    setError({ message: "" });
    setErrorFocus({
      name: false,
      email: false,
      password: false,
    });
  }, [type]);
  /**
   * @param {string} name parameter for register
   * @param {string} email paramter for register
   * @param {string} password parameter for register
   */
  const signupOnSumbitHandler = async (e) => {
    e.preventDefault();
    const errors = SignUpError(formValue);
    setError(errors);
    setSuccess("");
    if (errors?.key === "name" || !formValue.name) {
      setErrorFocus((prev) => ({ ...prev, name: true }));
    }
    if (errors?.key === "email" || !formValue.email) {
      setErrorFocus((prev) => ({ ...prev, email: true }));
    }
    if (errors?.key === "password" || !formValue.password) {
      setErrorFocus((prev) => ({ ...prev, password: true }));
    }
    if (!errors?.message) {
      const response = await SignupApiImp(formValue);

      if (response.data.code === 200) {
        setSuccess(response?.data?.message);
        setFormValues({ ...formValue, name: "", email: "", password: "" });
      } else if (response.data.code === 401) {
        let error = { message: response?.data?.message };
        setErrorFocus((prev) => ({ ...prev, email: true }));
        setError(error);
      } else {
        let error = { message: response?.data?.message };
        setError(error);
      }
    }
  };

  /**
   * @param {string} email paramter for login
   * @param {string} password parameter for login
   */

  const loginOnsubmitHandler = async (e) => {
    e.preventDefault();
    const errors = LoginError(formValue);
    setError(errors);
    setSuccess("");
    if (errors?.key === "email" || !formValue.email) {
      setErrorFocus((prev) => ({ ...prev, email: true }));
    }
    if (errors?.key === "password" || !formValue.password) {
      setErrorFocus((prev) => ({ ...prev, password: true }));
    }
    if (!errors?.message) {
      const response = await LoginApiImplementation(formValue);
      if (response?.data?.code === 200) {
        setSuccess(response?.data?.message);
        setFormValues({ ...formValue, name: "", email: "", password: "" });
        localStorage.setItem("user", response?.data?.data?.user);
        localStorage.setItem("authToken", response?.data?.data?.loginToken);
        setTimeout(() => {
          history.push("/home");
        }, 1000);
      } else if (response.data.code === 401) {
        let error = { message: response?.data?.message };
        if (error.message === "Please Enter a valid email.") {
          setErrorFocus((prev) => ({ ...prev, email: true }));
          setError(error);
        } else {
          setErrorFocus((prev) => ({ ...prev, password: true }));
          setError(error);
        }
      } else {
        let error = { message: response?.data?.message };
        setError(error);
      }
    }
  };

  return (
    <>
      <TabPanel value={type} style={{ marginLeft: "70px", marginTop: "20px" }}>
        <form autoComplete="off">
          {type === "2" ? (
            <TextField
              id="outlined-disabled"
              name="name"
              error={focus?.name}
              onChange={onchangeHandler}
              style={{ marginTop: "6px" }}
              value={formValue?.name}
              placeholder="Full Name"
              InputProps={{
                classes: {
                  notchedOutline: {
                    borderWidth: "1px",
                    borderColor: "yellow !important",
                  },
                },
              }}
            />
          ) : (
            <Box>
              <Typography variant="h5">To Continue</Typography>
              <span style={{ fontSize: "14px", color: "#113a59" }}>
                {"We need your Email & Password"}
              </span>
            </Box>
          )}
          <TextField
            style={{ marginTop: "20px" }}
            error={focus?.email}
            id="outlined-disabled"
            onChange={onchangeHandler}
            name="email"
            value={formValue?.email}
            placeholder="Email"
          />
          <TextField
            style={{ marginTop: "20px" }}
            error={focus?.password}
            id="outlined-disabled"
            onChange={onchangeHandler}
            value={formValue?.password}
            name="password"
            placeholder="Password"
          />

          {type === "2" ? (
            <Button
              type="submit"
              variant="contained"
              onClick={signupOnSumbitHandler}
              fullWidth
              style={{
                width: "78%",
                backgroundColor: "#00a18c",
                marginTop: "30px",
                marginLeft: "2px",
              }}
            >
              Sign up
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={loginOnsubmitHandler}
              style={{
                width: "78%",
                backgroundColor: "#00a18c",
                marginTop: "30px",
                marginLeft: "2px",
              }}
            >
              Login
            </Button>
          )}
          <p
            className={`${error?.message ? "show" : "hide"}`}
            style={{ color: "red", alignItems: "center", fontSize: "13px" }}
          >
            {error?.message ? <ErrorOutlineIcon /> : ""}{" "}
            <span
              style={{ position: "relative", bottom: "7px", marginLeft: "5px" }}
            >
              {error.message ? error?.message : ""}
            </span>
          </p>
          <p style={{ color: "green", marginLeft: "40px", fontSize: "13px" }}>
            {success ? <CheckCircleIcon color="success" style={{}} /> : ""}{" "}
            <span style={{ position: "relative", bottom: "6px" }}>
              {success ? success : ""}
            </span>
          </p>
        </form>
      </TabPanel>
    </>
  );
}

export default CommonFormSignupNLogin;

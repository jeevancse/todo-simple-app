import { TabPanel } from "@mui/lab";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {  useState } from "react";
import SignUpError from "../formError/signup.error";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function CommonFormSignupNLogin({ type }) {
  const [formValue, setFormValues] = useState({});
  const [success, setSuccess] = useState("");
  const [error, setError] = useState({});
  const [focus, setErrorFocus] = useState({
    name: false,
    email: false,
    password: false,
  });
  // const [resp, setResp] = useState({});
  const onchangeHandler = (e) => {
    setSuccess("");
    setFormValues({ ...formValue, [e.target.name]: e.target.value });
    if (formValue?.name) {
      setErrorFocus((prev) => ({ ...prev, name: false }));
    }
    if (formValue?.email) {
      setErrorFocus((prev) => ({ ...prev, email: false }));
    }
    if (formValue?.password) {
      setErrorFocus((prev) => ({ ...prev, password: false }));
    }
  };

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    setSuccess("");

    if (!formValue?.name) {
      setErrorFocus((prev) => ({ ...prev, name: true }));
    }
    if (!formValue?.email) {
      setErrorFocus((prev) => ({ ...prev, email: true }));
    }
    if (!formValue?.password) {
      setErrorFocus((prev) => ({ ...prev, password: true }));
    }
    const error = SignUpError(formValue);
    setError(error);

    try {
      const { name, email, password } = formValue;
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}pub/register`,
        { name, email, password }
      );
      if (response.data.code === 200) {
        setSuccess(response?.data?.message);
        setFormValues({name:"", email:"", password:""})
      } else if (response.data.code === 401) {
        setSuccess(response?.data?.message);
      }
      // setResp(response);
    } catch (err) {}
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
              style={{ marginTop: "10px" }}
              placeholder="Full Name"
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
            placeholder="Email"
          />
          <TextField
            style={{ marginTop: "20px" }}
            error={focus?.password}
            id="outlined-disabled"
            onChange={onchangeHandler}
            name="password"
            placeholder="Password"
          />

          {type === "2" ? (
            <Button
              type="submit"
              variant="contained"
              onClick={onSumbitHandler}
              fullWidth
              style={{
                width: "78%",
                backgroundColor: "#00a18c",
                marginTop: "30px",
              }}
            >
              Sign up
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{
                width: "78%",
                backgroundColor: "#00a18c",
                marginTop: "30px",
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
          <p style={{ color: "green", alignItems: "center", fontSize: "13px" }}>
            {success && type === "2" ? (
              <CheckCircleIcon color="success" style={{}} />
            ) : (
              ""
            )}{" "}
            <span style={{ position: "relative", bottom: "6px" }}>
              {success && type === "2" ? success : ""}
            </span>
          </p>
        </form>
      </TabPanel>
    </>
  );
}

export default CommonFormSignupNLogin;

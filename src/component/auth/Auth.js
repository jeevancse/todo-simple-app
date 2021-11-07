import React from "react";
import "./auth.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import CommonFormSignupNLogin from "../../common/CommonFormSignupNLogin";

function Auth() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="grid-contailer">
      <div className="grid-item"></div>
      <div className="grid-item signup">
        <div>
          <img src="http://localhost:3000/signup.jpg" alt="signup" />
        </div>
        <div
          className="from-design"
          style={{ marginTop: "10px", marginLeft: "50px" }}
        >
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{ marginLeft: "20px", marginTop: "10px" }}
              >
                <Tab label="Login" value="1" style={{ fontWeight: "bold"}} />
                <Tab label="Sign up" value="2" style={{ fontWeight: "bold" }} />
              </TabList>
            </Box>
            <hr className="saprater"/>
            <CommonFormSignupNLogin type = {value} />
          </TabContext>
        </div>
      </div>
      <div className="grid-item"></div>
    </div>
  );
}

export default Auth;

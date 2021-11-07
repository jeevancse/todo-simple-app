import React, { useEffect, useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import {
  Home,
  EqualizerOutlined,
  FolderOpen,
  SmsOutlined,
  DateRangeRounded,
} from "@mui/icons-material";
import "./homepage.css";
import { Header } from "../../common/Header";
import { CommingSoon } from "../../common/CommingSoon";
import ProjectPage from "../project/ProjectPage";
import { GetUserProfile } from "../../Apis/auth.api";

function Homepage() {
  const [currentState, setCurrentState] = useState(1);
  const [user, setUserData] = useState({});
  useEffect(() => {
    (async () => {
      const user = await GetUserProfile();
      if (user?.data?.code === 200) {
        setUserData(user.data?.data);
      } else {
        alert("Something went wrong")
      }
    })();
  },[])
  return (
    <>
      <Grid container>
        <Grid item md={2} xs={2}>
          <Box style={{ position: "fixed" }}>
            <div style={{ display: "flex" }}>
              <List style={{ marginTop: "30px", paddingLeft: "24px" }}>
                <Typography
                  variant="h4"
                  style={{ paddingBottom: "25px", paddingLeft: "25px" }}
                  align="left"
                >
                  {".taskez"}
                </Typography>
                <ListItem button onClick={() => setCurrentState(1)}>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText>Overview </ListItemText>
                </ListItem>
                <ListItem button onClick={() => setCurrentState(2)}>
                  <ListItemIcon>
                    <EqualizerOutlined />
                  </ListItemIcon>
                  <ListItemText>Stats </ListItemText>
                </ListItem>
                <ListItem button onClick={() => setCurrentState(3)}>
                  <ListItemIcon>
                    <FolderOpen />
                  </ListItemIcon>
                  <ListItemText>Projects </ListItemText>
                </ListItem>
                <ListItem button onClick={() => setCurrentState(4)}>
                  <ListItemIcon>
                    <SmsOutlined />
                  </ListItemIcon>
                  <ListItemText>Chat </ListItemText>
                </ListItem>
                <ListItem button onClick={() => setCurrentState(5)}>
                  <ListItemIcon>
                    <DateRangeRounded />
                  </ListItemIcon>
                  <ListItemText>Calender </ListItemText>
                </ListItem>
              </List>
              <div
                style={{
                  borderLeft: "1px solid #000",
                  height: "100vh",
                  marginLeft: "90px",
                }}
              ></div>
            </div>
          </Box>
        </Grid>
        <Grid item md={9} xs={9}>
          <Grid container flexGrow={1}>
            <Grid item md={2} xs={2}></Grid>
            <Grid item md={10} xs={10}>
              <Header user = {user}/>
              <Box marginTop="40px">
                {currentState === 3 ? <ProjectPage /> : <CommingSoon />}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Homepage;

import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
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
function Homepage() {
  const ListItmes = [
    { icon: <Home />, title: "Overview" },
    { icon: <EqualizerOutlined />, title: "Stats" },
    { icon: <FolderOpen />, title: "Projects" },
    { icon: <SmsOutlined />, title: "Chat" },
    { icon: <DateRangeRounded />, title: "Calender" },
  ];
  return (
    <>
      <Grid container spacing={1}>
        <Grid item md={2} xs={2}>
          <Typography
            style={{
              marginLeft: "35px",
              marginBottom: "60px",
              marginTop: "12px",
            }}
            variant="h4"
          >
            {".taskez"}
          </Typography>
          <Box>
            <List style={{ marginLeft: "15px" }}>
              {ListItmes.map((item, index) => (
                <ListItem button key={index} style={{marginTop:"10px"}}>
                  <ListItemIcon >{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item md={9} xs={9}>
          <Grid container spacing={2}>
            <Grid item md={1} xs={1}></Grid>
            <Grid item md={10} xs={10}>
              <Header />
              <CommingSoon/>
            </Grid>
            <Grid item md={1} xs={1}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Homepage;

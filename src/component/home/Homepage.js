
import React from "react"
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography
            style={{
              marginLeft: "35px",
              marginBottom: "30px",
              marginTop: "20px",
            }}
            variant="h5"
          >
            {".taskez"}
          </Typography>
          <Box>
            <List style={{ marginLeft: "15px" }}>
              {ListItmes.map((item, index) => (
                <ListItem button key={index}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </>
  );
}

export default Homepage;

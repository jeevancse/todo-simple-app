import { Toolbar, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";

export const Header = () => {
  return (
    <>
      <Toolbar>
        <Typography
          variant="h6"
          color="black"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          .taskez
        </Typography>
        <Person />
        <Typography color="black">Hello, {"jeevan"} </Typography>
      </Toolbar>
    </>
  );
};

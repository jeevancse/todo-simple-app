import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "space-between",
          paddingTop: "25px",
        }}
      >
        <Typography variant="h6" color="black" style={{ fontWeight: "bold" }}>
          .taskez
        </Typography>
        <Typography color="black">Hello, {"jeevan"} </Typography>
      </div>
    </>
  );
};

import { Typography } from "@mui/material";

export const Header = ({user}) => {

  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "space-between",
          paddingTop: "25px",
          paddingRight:"35px"
        }}
      >
        <Typography variant="h6" color="black" style={{ fontWeight: "bold" }}>
          .taskez
        </Typography>
        <p dir="rtl">Hello, {" "+user?.name}</p>
        {/* <Typography color="black" >Hi, {user?.name} </Typography> */}
      </div>
    </>
  );
};

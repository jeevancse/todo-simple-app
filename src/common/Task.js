import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

const Task = ({  title, description }) => {

  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: "black",
            fontWeight: "bold",
            padding: "5px",
          }}
        >
          {title || ""}
        </div>
        <div style={{ fontSize: "12px", color: "gray", padding: "5px" }}>
          {description || ""}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          {/* <PersonIcon style={{ fontSize: "17px" }} /> */}
          <img src="http://localhost:3000/user.png" alt="user" width="35px" height="25px"/>
          <ChatBubbleOutlineIcon style={{ fontSize: "17px" }} />
        </div>
      </div>
    </>
  );



};

export default Task;

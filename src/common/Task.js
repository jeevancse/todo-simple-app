const Task = ({  title, description }) => {

const ASSET_URL = process.env.REACT_APP_ASSET_URL || "http://localhost:3000/"

  console.log("====here", ASSET_URL)

  return (
    <>
    <a href="/" style={{textDecoration:"none"}}>
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
          <img src={ASSET_URL+"user.png"} alt="user" width="35px" height="25px"/>
          <img src={ASSET_URL+"sms.png"} alt="user" width="25px" height="25px"/>
        </div>
      </div>
      </a>
    </>
  );



};

export default Task;

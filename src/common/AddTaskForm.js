import { Button } from "@mui/material";
const AddTaskForm = ({ value, setValue, submit }) => {
  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "15px",
        borderRadius: "7px",
        padding: "3px",
      }}
    >
      <form>
        <input
          placeholder="Task title"
          onChange={onChangeHandler}
          name="title"
          style={{ border: "none", outline: "none", padding: "5px" }}
        ></input>
        <textarea
          name="description"
          onChange={onChangeHandler}
          placeholder="Discription of task"
          rows="4"
          style={{ padding: "5px", border: "none", outline: "none" }}
        ></textarea>
        <Button
          onClick={submit}
          style={{
            color: "#00a18c",
            display: "block",
            border: "none",
            outline: "none",
            borderRadius: "2px",
            padding: "10px 15px",
            fontSize: "17px",
            backgroundColor: "#f4f9f9",
            marginLeft: "5px",
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddTaskForm;

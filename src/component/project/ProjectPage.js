import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AddTask, GetTask, UpdateTask } from "../../Apis/task.api";
import AddTaskForm from "../../common/AddTaskForm";
import ShowTask from "../../common/ShowTask";
import Task from "../../common/Task";
const ProjectPage = () => {
  const [flag, setFlag] = useState(true);
  const [taskCount, setTaskCount] = useState({
    todo: 0,
    inProgress: 0,
    completed: 0,
  });
  const history = useHistory()
  // const [showTask, setShowTask ] = useState(false)

  const [form, setForm] = useState({
    todo: false,
    inProgress: false,
    completed: false,
  });
  const [values, setValues] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [task, setTask] = useState([]);
  const onSubmitHandlerTodo = async () => {
    values.status = "todo";
    const resp = await AddTask(values);
    if (resp?.data?.code === 201) {
      setFlag(!flag);
      setForm({
        todo: false,
        inProgress: form.inProgress,
        completed: form.completed,
      });
    } else {
      alert("something went wrong");
    }
  };
  useEffect(() => {
    (async () => {
      const resp = await GetTask();
      if (resp.data?.code === 200) {
        setTask(resp?.data?.data);
        let todo = resp?.data?.data.filter((el) => el.status === "todo");
        let inprogress = resp?.data?.data.filter(
          (el) => el.status === "inprogress"
        );
        let completed = resp?.data?.data.filter(
          (el) => el.status === "completed"
        );
        setTaskCount({
          todo: todo.length,
          inProgress: inprogress.length,
          completed: completed.length,
        });
      }
    })();
  }, [flag]);

  useEffect(() => {
    console.log("=====>>>task", taskCount);
  }, [taskCount]);
  const onSubmitHandlerInProgress = async () => {
    values.status = "inprogress";
    const resp = await AddTask(values);
    if (resp?.data?.code === 201) {
      setFlag(!flag);
      setForm({
        todo: form.todo,
        inProgress: false,
        completed: form.completed,
      });
    } else {
      alert("something went wrong");
    }
  };
  const onSubmitHandlerCompleted = async () => {
    values.status = "completed";
    const resp = await AddTask(values);
    if (resp?.data?.code === 201) {
      setFlag(!flag);
      setForm({
        todo: form.todo,
        inProgress: form.inProgress,
        completed: false,
      });
    } else {
      alert("something went wrong");
    }
  };

  return (
    <>
      <Box style={{ marginBottom: "40px" }}>
        <Typography align="left" variant="h6" style={{ fontWeight: "bold" }}>
          Projects
        </Typography>
      </Box>
      <Grid container spacing={1} marginBottom="20px">
        <Grid item md={4} xs={4}>
          <Paper
            style={{
              backgroundColor: "#f4f9f9",
              minHeight: "50vh",
              width: "90%",
              paddingTop: "15px",
              paddingBottom: "25px",
            }}
          >
            <Box style={{ marginLeft: "10px", marginRight: "10px" }}>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" style={{fontSize:"18px"}}>To do</Typography>
                <Button
                  style={{
                    fontSize: "17px",
                    color: "#00a18c",
                  }}
                >
                  {taskCount?.todo}
                </Button>
              </Box>

              <Button
                fullWidth
                value="todo"
                onClick={() => {
                  setForm({
                    todo: !form?.todo,
                    inProgress: form?.inProgress,
                    completed: form?.completed,
                  });
                }}
                style={{
                  marginTop: "15px",
                  backgroundColor: "#eaf3f3",
                  fontSize: "17px",
                }}
              >
                +
              </Button>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={async (ev) => {
                  const data = {};
                  data.taskId = ev.dataTransfer.getData("text");
                  data.status = "todo";
                  const update = await UpdateTask(data);
                  if (update) {
                    setFlag(!flag);
                  }
                }}
              >
                {form?.todo ? (
                  <AddTaskForm
                    value={values}
                    setValue={setValues}
                    submit={onSubmitHandlerTodo}
                  />
                ) : (
                  ""
                )}

                {task.map((data, i) => {
                  return (
                    <div
                      key={i}
                      style={{ marginLeft: "10px", marginRight: "10px" }}
                      draggable
                      onDragStart={(ev) => {
                        ev.dataTransfer.setData("text", data._id);
                      }}
                    >
                      {data.status === "todo" ? (
                        <Task
                          title={data.title}
                          description={data.description}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} xs={4}>
          <div
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDrop={async (ev) => {
              const data = {};
              data.taskId = ev.dataTransfer.getData("text");
              data.status = "inprogress";
              const update = await UpdateTask(data);
              if (update) {
                setFlag(!flag);
              }
            }}
          >
            <Paper
              style={{
                backgroundColor: "#f4f9f9",
                minHeight: "50vh",
                width: "90%",
                paddingTop: "15px",
                paddingBottom: "25px",
              }}
            >
              <Box style={{ marginLeft: "10px", marginRight: "10px" }}>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6" style={{fontSize:"18spx"}}>In progress</Typography>
                  <Button
                    style={{
                      fontSize: "17px",
                      color: "#00a18c",
                    }}
                  >
                    {taskCount.inProgress}
                  </Button>
                </Box>

                <Button
                  fullWidth
                  onClick={() => {
                    setForm({
                      inProgress: !form.inProgress,
                      todo: form?.todo,
                      completed: form?.completed,
                    });
                  }}
                  style={{
                    marginTop: "15px",
                    backgroundColor: "#eaf3f3",
                    fontSize: "17px",
                  }}
                >
                  +
                </Button>
                {form?.inProgress ? (
                  <AddTaskForm
                    value={values}
                    setValue={setValues}
                    submit={onSubmitHandlerInProgress}
                  />
                ) : (
                  ""
                )}
                {task.map((data, i) => {
                  return (
                    <div
                      key={i}
                      onClick={(el) => {
                        console.log("====data", el, data)
                      

                      }}
                      style={{ marginLeft: "10px", marginRight: "10px" }}
                      draggable
                      id="second"
                      onDragStart={(ev) => {
                        ev.dataTransfer.setData("text", data._id);
                      }}
                    >
                      {" "}
                      {data.status === "inprogress" ? (
                        <Link to="/home/task"  style={{textDecoration:"none" }}>
                        <Task
                          title={data.title}
                          description={data.description}
                        />
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </Box>{" "}
            </Paper>
          </div>
        </Grid>
        <Grid item md={4} xs={4}>
          <div
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDrop={async (ev) => {
              const data = {};
              data.taskId = ev.dataTransfer.getData("text");
              data.status = "completed";
              const update = await UpdateTask(data);
              if (update) {
                setFlag(!flag);
              }
            }}
          >
            <Paper
              style={{
                backgroundColor: "#f4f9f9",
                minHeight: "50vh",
                width: "90%",
                paddingTop: "15px",
                paddingBottom: "25px",
              }}
            >
              <Box style={{ marginLeft: "10px", marginRight: "10px" }}>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6" style={{fontSize:"18px"}}>Completed</Typography>
                  <Button
                    style={{
                      fontSize: "17px",
                      color: "#00a18c",
                    }}
                  >
                    {taskCount.completed}
                  </Button>
                </Box>
                <Button
                  fullWidth
                  onClick={() => {
                    setForm({
                      completed: !form.completed,
                      todo: form.todo,
                      inProgress: form.inProgress,
                    });
                  }}
                  style={{
                    marginTop: "15px",
                    backgroundColor: "#eaf3f3",
                    fontSize: "17px",
                  }}
                >
                  +
                </Button>
                {form?.completed ? (
                  <AddTaskForm
                    value={values}
                    setValue={setValues}
                    submit={onSubmitHandlerCompleted}
                  />
                ) : (
                  ""
                )}
                {task.map((data, i) => {
                  return (
                    <div
                      key={i}
                      style={{ marginLeft: "10px", marginRight: "10px" }}
                      draggable
                      onDragStart={(ev) => {
                        ev.dataTransfer.setData("text", data._id);
                      }}
                    >
                      {" "}
                      {data.status === "completed" ? (
                        <Task
                          title={data.title}
                          description={data.description}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </Box>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectPage;

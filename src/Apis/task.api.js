import { axiosPrivateInstance } from "./axios/axiosInstance";
const ADD_TASK = "api/task/create-task";
const GET_TASK = "api/task/get-all-task";
const UPDATE_TASK = "api/task/update-task";

export const AddTask = async (value) => {
  console.log("=====here 1");
  try {
    const { title, description, status } = value;
    const response = await axiosPrivateInstance.post(ADD_TASK, {
      title,
      description,
      status,
    });
    return response;
  } catch (err) {}
};

export const GetTask = async () => {
  console.log("=====here 1");
  try {
    const response = await axiosPrivateInstance.get(GET_TASK);
    return response;
  } catch (err) {}
};

export const UpdateTask = async (values) => {
  const { taskId, status } = values;
  try {
    const response = await axiosPrivateInstance.put(UPDATE_TASK, {
      taskId,
      status,
    });
    return response;
  } catch (err) {}
};

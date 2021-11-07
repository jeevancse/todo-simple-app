import { axiosInstance } from "./axios/axiosInstance";
const LOGIN_END_PONIT = "pub/login";

const LoginApiImplementation = async (formValue) => {
  try {
    const { email, password } = formValue;
    const response = await axiosInstance.post(LOGIN_END_PONIT, {
      email,
      password,
    });
    return response;
  } catch (err) {}
};

export default LoginApiImplementation;

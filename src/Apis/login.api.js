import { axiosInstance } from "./axios/axiosInstance";

const LoginApiImplementation = async (formValue) => {
  try {
    const {email, password } = formValue;
    const response = await axiosInstance.post(
      `pub/login`,
      {email, password }
    );
    return response;
    // setResp(response);
  } catch (err) {

  }
};

export default LoginApiImplementation;

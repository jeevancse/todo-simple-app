import { useState } from "react";
// import axios from "axios";
import { axiosInstance } from "./axios/axiosInstance";

const SignupApiImp = async (formValue) => {
  try {
    const { name, email, password } = formValue;
    const response = await axiosInstance.post(
      `pub/register`,
      { name, email, password }
    );
    return response;
    // setResp(response);
  } catch (err) {

  }
};

export default SignupApiImp;

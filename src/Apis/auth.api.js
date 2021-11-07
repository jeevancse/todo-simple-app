import { axiosPrivateInstance } from "./axios/axiosInstance";
const GET_USER_PROFILE = "api/user/get-profile";

export const GetUserProfile = async () => {
  try {
    const resp = await axiosPrivateInstance.get(GET_USER_PROFILE);
    return resp;
  } catch (err) {}
};

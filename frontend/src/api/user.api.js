import axios from "axios";

export const createNewUserRequest = async (User) => {
  axios.post("http://localhost:3000/api/users/", User);
};

export const getUserRequest = async (User) => {
  axios.get("http://localhost:3000/api/users/", User);
};
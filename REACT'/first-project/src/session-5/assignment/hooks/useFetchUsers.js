import { useEffect, useState } from "react";
import axios from "../Axios/axios";
import { toast } from "react-toastify";

export default function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(null);

  const addNewUser = async (data) => {
    try {
      const response = await axios.post("/users", data);
      setUsers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const validateUsers = async (user) => {
    try {
      const response = await axios.get(
        `/users?email=${user.email}&password=${user.password}`
      );
      setLoginSuccess(response.data.length);
      if (response.data.length > 0) {
        toast.success("You are Successfully Logged In");
      } else {
        toast.error("Incorrect Email and Password");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return { addNewUser, users, validateUsers, loginSuccess };
}

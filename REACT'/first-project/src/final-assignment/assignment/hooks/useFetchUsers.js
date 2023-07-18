import { useEffect, useState, useContext } from "react";
import axios from "../Axios/axios";
import { LoggedInContext } from "../../../App";
import { toast } from "react-toastify";

export default function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loggedInInfo, setLoggedInInfo] = useContext(LoggedInContext);

  const addNewUser = async (data) => {
    try {
      const response = await axios.post("/users", data);
      setUsers(response.data);
      showToastMessage();
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
      if (response.data.length) {
        setLoggedInInfo({
          status: true,
          username: response.data[0].fullName,
        });
        toast.success("You are Successfully Logged In");
      } else {
        setLoggedInInfo({
          status: false,
          username: "",
        });
        toast.error("Incorrect Email and Password");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return { addNewUser, users, validateUsers };
}

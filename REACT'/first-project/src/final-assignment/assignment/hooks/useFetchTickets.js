import { useEffect, useState } from "react";
import axios from "../Axios/axios";

const useFetchTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isError, setIsError] = useState("");
  const [isAddTicketError, setIsAddTicketError] = useState("");

  const getApiData = async () => {
    try {
      const response = await axios.get("/tickets");
      setTickets(response.data.sort((a, b) => b.id - a.id));
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return {
    tickets,
    setTickets,
    isAddTicketError,
    isError,
  };
};

export default useFetchTickets;

import { useEffect, useState } from "react";
import axios from "../Axios/axios";

const useFetchTickets = () => {
  const [tickets, setTickets] = useState([]);
  // const [ticketsLoading, setTicketsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [isAddTicketError, setIsAddTicketError] = useState("");

  const getApiData = async () => {
    try {
      const response = await axios.get("/tickets");
      setTickets(response.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  const addNewTicket = async (newTicket) => {
    try {
      const response = await axios.post("/tickets", newTicket);
      setTickets([response.data, ...tickets]);
    } catch (error) {
      setIsAddTicketError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return { tickets, setTickets, addNewTicket, isAddTicketError, isError };
};

export default useFetchTickets;

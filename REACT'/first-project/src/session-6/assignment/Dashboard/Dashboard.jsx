import { useState, createContext } from "react";
import NavBar from "../Header/NavBar";
import SideBar from "../Sidebar/SideBar";
import TicketsList from "../TicketsList/TicketsList";
import useFetchTickets from "../hooks/useFetchTickets";
import "./Dashboard.scss";

export const SearchKeyContext = createContext(null);
export const SearchKeyUpdateContext = createContext(null);

const Dashboard = () => {
  const { tickets, setTickets } = useFetchTickets();
  const [searchTicket, setSearchTicket] = useState("");
  const [filterByPriority, setFilterByPriority] = useState("all");
  const handleDeleteTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };
  const handleFilterByPriority = (e) => {
    setFilterByPriority(e.target.value);
  };
  return (
    <div className="dashboard">
      <SideBar />
      <div className="right-container">
        <SearchKeyContext.Provider value={searchTicket}>
          <SearchKeyUpdateContext.Provider value={setSearchTicket}>
            <NavBar />
            <TicketsList
              tickets={tickets}
              handleDeleteTicket={handleDeleteTicket}
              filterByPriority={filterByPriority}
              handleFilterByPriority={handleFilterByPriority}
            />
          </SearchKeyUpdateContext.Provider>
        </SearchKeyContext.Provider>
      </div>
    </div>
  );
};

export default Dashboard;

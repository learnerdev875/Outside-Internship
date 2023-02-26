import { useState, createContext } from "react";
import NavBar from "../Header/NavBar";
import SideBar from "../Sidebar/SideBar";
import TicketsList from "../TicketsList/TicketsList";
import useFetchTickets from "../hooks/useFetchTickets";
import "./Dashboard.scss";

export const SearchKeyContext = createContext(null);
export const SearchKeyUpdateContext = createContext(null);

const Dashboard = () => {
  const { tickets, setTickets, addNewTicket } = useFetchTickets();
  const [searchTicket, setSearchTicket] = useState("");
  const [filterByPriority, setFilterByPriority] = useState("all");
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
              filterByPriority={filterByPriority}
              handleFilterByPriority={handleFilterByPriority}
              addNewTicket={addNewTicket}
              setTickets={setTickets}
            />
          </SearchKeyUpdateContext.Provider>
        </SearchKeyContext.Provider>
      </div>
    </div>
  );
};

export default Dashboard;

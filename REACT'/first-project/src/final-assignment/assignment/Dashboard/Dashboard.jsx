import { useState, createContext } from "react";
import SideBar from "../Sidebar/SideBar";
import useFetchTickets from "../hooks/useFetchTickets";
import "./Dashboard.scss";
import { Outlet } from "react-router-dom";

export const SearchKeyContext = createContext(null);
export const SearchKeyUpdateContext = createContext(null);
export const TicketsContext = createContext(null);

const Dashboard = () => {
  const [searchTicket, setSearchTicket] = useState("");
  const { tickets, setTickets } = useFetchTickets();
  return (
    <div className="dashboard">
      <SideBar />
      <div className="right-container">
        <TicketsContext.Provider value={[tickets, setTickets]}>
          <SearchKeyContext.Provider value={searchTicket}>
            <SearchKeyUpdateContext.Provider value={setSearchTicket}>
              <Outlet />
            </SearchKeyUpdateContext.Provider>
          </SearchKeyContext.Provider>
        </TicketsContext.Provider>
      </div>
    </div>
  );
};

export default Dashboard;

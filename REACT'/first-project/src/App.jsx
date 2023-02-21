import { useState, createContext } from "react";
import NavBar from "./session-5/assignment/Header/NavBar";
import SideBar from "./session-5/assignment/Sidebar/SideBar";
import "./session-5/assignment/styles/main.css";
import TicketsList from "./session-5/assignment/TicketsList/TicketsList";
import Tickets from "./session-5/assignment/Data/Tickets";
import LoginForm from "./session-5/assignment/Form/LoginForm/LoginForm";
import SignUpForm from "./session-5/assignment/Form/SignUpForm/SignUpForm";
import MouseEvent from "./session-5/assignment/MouseMove/MouseEvent";

export const SearchKeyContext = createContext(null);
export const SearchKeyUpdateContext = createContext(null);

function App() {
  const [users, setUsers] = useState(Tickets);
  const [searchTicket, setSearchTicket] = useState("");
  const [filterByPriority, setFilterByPriority] = useState("all");
  const handleDeleteTicket = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const handleFilterByPriority = (e) => {
    setFilterByPriority(e.target.value);
  };
  return (
    //dashboard UI
    <div className="App1">
      {/* <SideBar />
      <div className="right-container">
        <SearchKeyContext.Provider value={searchTicket}>
          <SearchKeyUpdateContext.Provider value={setSearchTicket}>
            <NavBar />
            <TicketsList
              users={users}
              handleDeleteTicket={handleDeleteTicket}
              filterByPriority={filterByPriority}
              handleFilterByPriority={handleFilterByPriority}
            />
          </SearchKeyUpdateContext.Provider>
        </SearchKeyContext.Provider>
      </div> */}
      <MouseEvent />
    </div>
    //Signup and Login Form UI. Have not done routing so manually have to comment and uncomment
    // <div className="App">
    //   <LoginForm />
    //   <SignUpForm />
    // </div>
  );
}

export default App;

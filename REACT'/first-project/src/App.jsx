import { useState } from "react";
import NavBar from "./session-1/assignment/Header/NavBar";
import SideBar from "./session-1/assignment/Sidebar/SideBar";
import "./session-1/assignment/styles/main.css";
import TicketsList from "./session-1/assignment/TicketsList/TicketsList";
import Tickets from "./session-1/assignment/Data/Tickets";
import LoginForm from "./session-1/assignment/Form/LoginForm/LoginForm";
import SignUpForm from "./session-1/assignment/Form/SignUpForm/SignUpForm";

function App() {
  const [users, setUsers] = useState(Tickets);
  const [searchTicket, setSearchTicket] = useState("");
  const [filterByPriority, setFilterByPriority] = useState("all");
  const handleDeleteTicket = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const handleSearchTicket = (e) => {
    setSearchTicket(e.target.value);
  };
  const handleFilterByPriority = (e) => {
    setFilterByPriority(e.target.value);
  };
  return (
    //dashboard UI
    <div className="App1">
      <SideBar />
      <div className="right-container">
        <NavBar
          searchTicket={searchTicket}
          handleSearchTicket={handleSearchTicket}
        />
        <TicketsList
          users={users}
          handleDeleteTicket={handleDeleteTicket}
          searchTicket={searchTicket}
          filterByPriority={filterByPriority}
          handleFilterByPriority={handleFilterByPriority}
        />
      </div>
    </div>
    //Signup and Login Form UI. Have not done routing so manually have to comment and uncomment
    // <div className="App">
    //   <LoginForm />
    //   <SignUpForm />
    // </div>
  );
}

export default App;

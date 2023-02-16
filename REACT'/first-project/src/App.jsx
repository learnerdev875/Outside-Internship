import NavBar from "./session-1/assignment/Header/NavBar";
import SideBar from "./session-1/assignment/Sidebar/SideBar";
import "./session-1/assignment/styles/main.css";
import TicketsList from "./session-1/assignment/TicketsList/TicketsList";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="right-container">
        <NavBar />
        <TicketsList />
      </div>
    </div>
  );
}

export default App;

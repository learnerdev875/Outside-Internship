import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./final-assignment/assignment/Dashboard/Dashboard";
import LoginForm from "./final-assignment/assignment/Form/LoginForm/LoginForm";
import SignUpForm from "./final-assignment/assignment/Form/SignUpForm/SignUpForm";
import "./final-assignment/assignment/styles/main.css";
import NoMatch from "./final-assignment/assignment/NoMatch/NoMatch";
import Overview from "./final-assignment/assignment/Overview/Overview";
import TicketsList from "./final-assignment/assignment/TicketsList/TicketsList";
import SingleTicket from "./final-assignment/assignment/TicketsList/SingleTicket";
import ProtectedRoute from "./final-assignment/assignment/ProtectedRoute/ProtectedRoute";

export const LoggedInContext = createContext(null);
function App() {
  const [loggedInInfo, setLoggedInInfo] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("Logged_In_Info")) || {
        status: "false",
        username: "",
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("Logged_In_Info", JSON.stringify(loggedInInfo));
  }, [loggedInInfo]);
  return (
    <LoggedInContext.Provider value={[loggedInInfo, setLoggedInInfo]}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <LoginForm />
              </div>
            }
          />
          <Route
            path="signup"
            element={
              <div className="App">
                <SignUpForm />
              </div>
            }
          />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute isLoggedIn={loggedInInfo.status}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="tickets" element={<TicketsList />} />
            <Route path="tickets/:ticketId" element={<SingleTicket />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </LoggedInContext.Provider>
  );
}

export default App;

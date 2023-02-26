import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./session-6/assignment/Form/LoginForm/LoginForm";
import SignUpForm from "./session-6/assignment/Form/SignUpForm/SignUpForm";
import Dashboard from "./session-6/assignment/Dashboard/Dashboard";
import NoMatch from "./session-6/assignment/NoMatch/NoMatch";
import "./session-6/assignment/styles/main.css";

function App() {
  return (
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
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./session-6/assignment/Dashboard/Dashboard";
import LoginForm from "./session-6/assignment/Form/LoginForm/LoginForm";
import SignUpForm from "./session-6/assignment/Form/SignUpForm/SignUpForm";
import "./session-6/assignment/styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/login"
          element={
            <div className="App">
              <LoginForm />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="App">
              <SignUpForm  />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

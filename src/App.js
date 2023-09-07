import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Report from "./components/Report";
import Donors from "./components/Donors";
import Workorder from "./components/Workorder";
import Calender from "./components/Calender";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="main-sidebar ps-2 pt-3">
        <i className="bi bi-house toggle-button" onClick={toggleSidebar}></i>
        <i
          class="bi bi-question-circle toggle-button"
          onClick={toggleSidebar}
        ></i>
        <i class="bi bi-gear-fill toggle-button" onClick={toggleSidebar}></i>
        <i class="bi bi-power toggle-button" onClick={toggleSidebar}></i>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li
              className="p-2"
              style={
                path.includes("/report")
                  ? {
                      backgroundColor: "rgb(206, 204, 204)",
                      borderRadius: "20px",
                    }
                  : null
              }
            >
              <Link to="/report" className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-briefcase"></i>&nbsp;Reports{" "}
                </div>
                <i class="bi bi-chevron-right"></i>
              </Link>
            </li>
            <li
              className="p-2"
              style={
                path.includes("/donors")
                  ? {
                      backgroundColor: "rgb(206, 204, 204)",
                      borderRadius: "20px",
                    }
                  : null
              }
            >
              <Link to="/donors" className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-gift"></i>&nbsp;Donors
                </div>
                <i class="bi bi-chevron-right "></i>
              </Link>
            </li>
            <li
              className="p-2"
              style={
                path.includes("/workorder")
                  ? {
                      backgroundColor: "rgb(206, 204, 204)",
                      borderRadius: "20px",
                    }
                  : null
              }
            >
              <Link to="/workorder" className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-file-earmark-bar-graph"></i>&nbsp;Workorder
                </div>
                <i class="bi bi-chevron-right ms-3"></i>
              </Link>
            </li>
            <li
              className="p-2"
              style={
                path.includes("/calender")
                  ? {
                      backgroundColor: "rgb(206, 204, 204)",
                      borderRadius: "20px",
                    }
                  : null
              }
            >
              <Link to="/calender" className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-calendar"></i>&nbsp;Calender
                </div>
                <i class="bi bi-chevron-right ms-3"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/report" element={<Report />} />
              <Route path="/donors" element={<Donors />} />
              <Route path="/workorder" element={<Workorder />} />
              <Route path="/calender" element={<Calender />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;

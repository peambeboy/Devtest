import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/๊UserDetails";
import UserPosts from "./components/UserPosts";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <Sidebar open={sidebarOpen} onToggleSidebar={toggleSidebar} />
        <div className="content">
          <Routes>
            <Route path="/users" element={<Dashboard />} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/users/:userId/posts" element={<UserPosts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

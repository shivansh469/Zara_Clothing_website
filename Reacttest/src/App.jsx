import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Beauty from "./components/Beauty/Beauty";
import Man from "./components/Man/Man";
import Woman from "./components/Woman/Woman";
import Kids from "./components/Kids/Kids";
import Login from "./components/Home/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

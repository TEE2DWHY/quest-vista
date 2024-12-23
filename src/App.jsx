import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountWrapper from "./hooks/useAccount";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AccountWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AccountWrapper>
      </BrowserRouter>
    </>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountWrapper from "./hooks/useAccount";
import Animate from "./utils/Animate";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AccountWrapper>
          <Animate>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Animate>
        </AccountWrapper>
      </BrowserRouter>
    </>
  );
};

export default App;

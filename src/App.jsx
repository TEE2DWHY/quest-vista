import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountWrapper from "./hooks/useAccountDetails";
import Animate from "./utils/Animate";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./config/WagmiConfig";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default App;

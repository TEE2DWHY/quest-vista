import React, { createContext, useContext, useEffect, useState } from "react";

const accountContext = createContext();

const AccountWrapper = ({ children }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Ensure the Telegram WebApp is available
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      // Initialize the Web App
      tg.ready();

      // Retrieve user information
      const user = tg.initDataUnsafe.user;

      if (user && user.username) {
        setUserName(user.username); // Set the username
      } else {
        console.error("Username not available or user not logged in.");
      }
    } else {
      console.error("Telegram WebApp not loaded.");
    }
  }, []);

  return (
    <accountContext.Provider value={{ userName, setUserName }}>
      {children}
    </accountContext.Provider>
  );
};

export default AccountWrapper;

export const useAccount = () => {
  return useContext(accountContext);
};

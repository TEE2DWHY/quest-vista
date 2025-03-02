import React, { createContext, useContext, useEffect, useState } from "react";

const accountContext = createContext();

const AccountWrapper = ({ children }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      tg.ready();

      const user = tg.initDataUnsafe.user;

      if (user && user.username) {
        setUserName(user.username);
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

export const useAccountDetails = () => {
  return useContext(accountContext);
};

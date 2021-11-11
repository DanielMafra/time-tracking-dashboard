import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("daily");
  const [type, setType] = useState("daily");
  const [animation, setAnimation] = useState(false);

  //this consts is just for alternate URL to fetch in localhost (development mode)
  const url = ["http://192.168.15.120:3000/api/data.json", "http://localhost:3000/api/data.json"];
  const screen = window.innerWidth;
  //---

  useEffect(async () => {
    const response = await fetch(screen <= 375 ? url[0] : url[1]);
    const json = await response.json();
    setData(json);
  }, []);

  useEffect(() => {
    switch (filter) {
      case "daily":
        setType("Day");
        break;
      case "weekly":
        setType("Week");
        break;
      case "monthly":
        setType("Month");
        break;
    }
  }, [filter]);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 300);
  }, [type]);

  return (
    <GlobalContext.Provider value={{ data, filter, setFilter, type, animation }}>
      {children}
    </GlobalContext.Provider>
  );
};
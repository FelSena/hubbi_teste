import { createContext, useState } from "react";

export const InformationsContext = createContext();

export const InformationsProvider = ({ children }) => {
  const [currentItem, setCurrentItem] = useState({});
  return (
    <InformationsContext.Provider value={{ currentItem, setCurrentItem }}>
      {children}
    </InformationsContext.Provider>
  );
};

import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [city, setCity] = useState('Helsinki');
    const [country, setCountry] = useState('Finland');
    const [adults, setAdults] = useState(0);
    const [numberChildren, setNumberChildren] = useState(0);
    const [isLocationSelected, setIsLocationSelected] = useState(true);
    const [isGuestsSelected, setIsGuestsSelected] = useState(false);
    const [showSearchSection, setShowSearchSection] = useState(false);

    return <AppContext.Provider
      value={{
          city,
          setCity,
          country,
          setCountry,
          adults,
          setAdults,
          numberChildren,
          setNumberChildren,
          isLocationSelected,
          setIsLocationSelected,
          isGuestsSelected,
          setIsGuestsSelected,
          showSearchSection,
          setShowSearchSection
      }}>
          {children}
      </AppContext.Provider>
}

// make sure export the use global context
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [city, setCity] = useState('Helsinki');
    const [country, setCountry] = useState('Finland');
    const [numberAdults, setNumberAdults] = useState(0);
    const [numberChildren, setNumberChildren] = useState(0);
    const [isLocationSelected, setIsLocationSelected] = useState(true);
    const [isGuestsSelected, setIsGuestsSelected] = useState(false);
    const [showSearchSection, setShowSearchSection] = useState(false);

    const selectLocation = () => {
        setIsLocationSelected(true);
        setIsGuestsSelected(false);
    };

    const selectGuests = () => {
        setIsLocationSelected(false);
        setIsGuestsSelected(true);
    };

    const incrementNumberAdults = () => {
        setNumberAdults(numberAdults + 1);
    };

    const decrementNumberAdults = () => {
        numberAdults > 0 && setNumberAdults(numberAdults - 1);
    };

    const incrementNumberChildren = () => {
        setNumberChildren(numberChildren + 1);
    };

    const decrementNumberChildren = () => {
        numberChildren > 0 && setNumberChildren(numberChildren - 1);
    };

    return <AppContext.Provider
      value={{
          city,
          setCity,
          country,
          setCountry,
          numberAdults,
          setNumberAdults,
          numberChildren,
          setNumberChildren,
          isLocationSelected,
          isGuestsSelected,
          selectLocation,
          selectGuests,
          incrementNumberAdults,
          decrementNumberAdults,
          incrementNumberChildren,
          decrementNumberChildren,
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
import { createContext, useState } from 'react';
const NavContext = createContext({});

const NavProvider = ({ children }) => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const [search, setSearch] = useState(false);

  const handleCloseSearch = () => {
    setSearch(false);
  };
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  const navValue = {
    showNavLinks,
    setShowNavLinks,
    search,
    setSearch,
    handleCloseSearch,
    toggleNavLinks,
  };

  return <NavContext.Provider value={navValue}>{children}</NavContext.Provider>;
};
export { NavContext, NavProvider };

import { useContext } from 'react';
import { NavContext } from '../context/NavContext';
export const useNav = () => {
  return useContext(NavContext);
};

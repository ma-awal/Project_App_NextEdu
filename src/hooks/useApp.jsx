import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
export const useAppContext = () => {
  return useContext(AppContext);
};

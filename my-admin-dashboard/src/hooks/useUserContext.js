// src/hooks/useUserContext.js
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';  // استيراد الـ Context

// تعريف الـ useUserContext hook
export const useUserContext = () => {
  return useContext(UserContext);
};

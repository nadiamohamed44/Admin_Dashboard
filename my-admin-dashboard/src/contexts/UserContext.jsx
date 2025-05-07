// src/contexts/UserContext.js
import React, { createContext, useState } from "react";

// إنشاء الـ Context
const UserContext = createContext();

// الـ Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // هنا الـ user في البداية null

  const login = (userData) => {
    setUser(userData); // عند تسجيل الدخول، هنحدد بيانات المستخدم
  };

  const logout = () => {
    setUser(null); // عند تسجيل الخروج، بنصفى بيانات المستخدم
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

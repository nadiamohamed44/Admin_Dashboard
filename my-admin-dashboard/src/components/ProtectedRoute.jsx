// src/components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";  // استيراد الـ Context بشكل صحيح

const ProtectedRoute = ({ children, adminOnly }) => {
  const { user } = useContext(UserContext);

  // تحقق من وجود مستخدم وإذا كان يجب أن يكون المستخدم إداريًا
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/403" />;
  }

  return children;
};

export default ProtectedRoute;

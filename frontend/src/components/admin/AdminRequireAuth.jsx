import { useContext } from "react";
import { AdminAuthContext } from "../context/AdminAuth";
import { Navigate } from "react-router-dom";

export const AdminRequireAuth = ({ children }) => {
  try {
    
    const { user } = useContext(AdminAuthContext);

    
    if (!user) {
      return <Navigate to="/admin/login" />;
    }
    return children;
  } catch (error) {
    console.error("Error in AdminRequireAuth:", error);
    return null; 
  }
};

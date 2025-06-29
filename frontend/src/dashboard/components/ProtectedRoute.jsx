// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get("https://zerodha-mern-stack.onrender.com/verification", { withCredentials: true })
      .then(res => setAuth(res.data.status))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return null; // or a loading spinner
  if (!auth) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
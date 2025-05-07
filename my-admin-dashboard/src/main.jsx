import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { UserContext } from "./contexts/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext.Provider value={{ isAdmin: true }}>
      <App />
    </UserContext.Provider>
  </StrictMode>
);

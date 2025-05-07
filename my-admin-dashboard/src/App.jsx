
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<DashboardHome />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

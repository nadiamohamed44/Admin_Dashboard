import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useUserContext } from '../hooks/useUserContext';
import { Navigate } from 'react-router-dom';
import { ADMIN_ROLE } from "../config/constants";

const AdminDashboard = () => {
  const { user } = useUserContext();

  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);

  const toggleMaintenance = () => {
    setIsMaintenanceMode(prev => !prev);
    // لو فيه API تقدر تبعته هنا بدل setIsMaintenanceMode مباشرة
  };

  if (!user || user.role !== ADMIN_ROLE) {
    return <Navigate to="/403" />;
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '2rem', paddingTop: '80px' }}>
        <h1>Welcome to the Admin Dashboard</h1>

        <div style={{ marginTop: '2rem' }}>
          <h2>Maintenance Mode</h2>
          <button
            onClick={toggleMaintenance}
            style={{
              padding: '10px 20px',
              backgroundColor: isMaintenanceMode ? 'red' : 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            {isMaintenanceMode ? 'Turn OFF Maintenance' : 'Turn ON Maintenance'}
          </button>
          <p>
            Status:{" "}
            <span style={{ color: isMaintenanceMode ? 'red' : 'green', fontWeight: 'bold' }}>
              {isMaintenanceMode ? 'Maintenance is ON' : 'Maintenance is OFF'}
            </span>
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p><strong>Total Users:</strong> 150</p>
          <p><strong>Total Bookings:</strong> 340</p>
          <p><strong>Total Packages:</strong> 25</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

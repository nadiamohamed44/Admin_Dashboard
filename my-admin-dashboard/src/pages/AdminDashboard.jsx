import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '2rem', paddingTop: '80px' }}>
      </div>
    </div>
  );
};

export default AdminDashboard;

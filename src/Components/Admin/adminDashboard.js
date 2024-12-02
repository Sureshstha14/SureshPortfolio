import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (!isAuthenticated) {
    return <div>You are not authenticated! Please login first.</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div>
        <h3>Manage your Portfolio</h3>
        <ul>
          <li><Link to="/admin/manage-projects">Manage Projects</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;

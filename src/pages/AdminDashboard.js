import React from 'react';
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => (
  <div style={{ display: 'flex' }}>
    <Sidebar links={[
      { to: '/students', label: 'Manage Students' },
      { to: '/teachers', label: 'Manage Teachers' },
      { to: '/attendance', label: 'Attendance' },
    ]} />
    <div style={{ padding: '1rem' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Choose a module from the sidebar.</p>
    </div>
  </div>
);

export default AdminDashboard;

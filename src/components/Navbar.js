import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ role }) => (
  <nav style={{ padding: '1rem', backgroundColor: '#004080', color: 'white' }}>
    <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
    {role === 'Admin' && <Link to="/admin" style={{ marginRight: '1rem', color: 'white' }}>Admin</Link>}
    {role === 'Teacher' && <Link to="/teacher" style={{ marginRight: '1rem', color: 'white' }}>Teacher</Link>}
    {role === 'Parent' && <Link to="/parent" style={{ marginRight: '1rem', color: 'white' }}>Parent</Link>}
    {role === 'Student' && <Link to="/student" style={{ marginRight: '1rem', color: 'white' }}>Student</Link>}
  </nav>
);

export default Navbar;

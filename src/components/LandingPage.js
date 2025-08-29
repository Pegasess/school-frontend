// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingHeader from './LandingHeader';



const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* 🔹 Top Menu with Login Options */}
      <LandingHeader
        onLoginSelect={(role) => {
          navigate(`/login/${role.toLowerCase()}`);
        }}
      />

      <div style={styles.overlay}>
        {/* 🔹 Main Hero Section */}
        <header style={styles.header}>
          <h1>Welcome to School Management System</h1>
          <p>Your all-in-one platform to manage schools, students, teachers, and more.</p>
        </header>

        {/* 🔹 Feature Highlights */}
        <section style={styles.features}>
          <Feature
            title="Manage Students & Parents"
            description="Add, edit, and track student information."
            icon="👩‍🎓"
          />
          <Feature
            title="Teachers & Classes"
            description="Assign teachers, subjects, and manage workloads."
            icon="🧑‍🏫"
          />
          <Feature
            title="Exams & Grades"
            description="Record grades and generate report cards."
            icon="📝"
          />
        </section>

        {/* 🔹 Footer */}
        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} School Management System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

// 🔸 Feature Box Component
const Feature = ({ title, description, icon }) => (
  <div style={styles.feature}>
    <div style={styles.icon}>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// 🎨 Inline Styles
const styles = {
  container: {
    backgroundImage: "url('/image-1.jpg')", // Image in public/image-1.jpg
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#fff',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    minHeight: '100vh',
    padding: '3rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    padding: '2rem 0',
  },
  feature: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: '1.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  footer: {
    marginTop: '3rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#ccc',
  },
};

export default LandingPage;

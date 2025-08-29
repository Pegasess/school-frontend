// src/contexts/StudentContext.js
import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export const useStudents = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, first_name: 'John', last_name: 'Doe', admission_no: 'A001' },
    { id: 2, first_name: 'Jane', last_name: 'Smith', admission_no: 'A002' },
  ]);

  const addStudent = (student) => {
    setStudents((prev) => [
      ...prev,
      { ...student, id: prev.length + 1 },
    ]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch all employees from the API and update the state
    employeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        // Handle error, display an error message, or take necessary actions.
        console.error('Error fetching employees:', error);
      });
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <div>No employees found.</div>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.empNo}>
              <p>Employee Number: {employee.empNo}</p>
              <p>Employee Name: {employee.empName}</p>
              <p>Department Code: {employee.departmentCode}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;

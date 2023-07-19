import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
  
    employeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
    
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleEditEmployee = (empNo) => {
  
    console.log('Edit employee:', empNo);
  };

  const handleDeleteEmployee = (empNo) => {

    if (window.confirm('Are you sure you want to delete this employee?')) {
      employeeService.deleteEmployee(empNo)
        .then((response) => {
   
          setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.empNo !== empNo));
          console.log('Employee deleted successfully:', response.data);
        })
        .catch((error) => {
         
          console.error('Error deleting employee:', error);
        });
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <div>No employees found.</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Employee Number</th>
              <th>Employee Name</th>
              <th>Department Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.empNo}>
                <td>{employee.empNo}</td>
                <td>{employee.empName}</td>
                <td>{employee.departmentCode}</td>
                <td>
                  <button onClick={() => handleEditEmployee(employee.empNo)}>Edit</button>
                  <button onClick={() => handleDeleteEmployee(employee.empNo)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;

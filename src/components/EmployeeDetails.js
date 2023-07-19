import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';

const EmployeeDetails = ({ empNo }) => {
  const [employeeData, setEmployeeData] = useState({
    empNo: '',
    empName: '',
    empAddressLine1: '',
    empAddressLine2: '',
    empAddressLine3: '',
    departmentCode: '',
    dateOfJoin: '',
    dateOfBirth: '',
    basicSalary: 0,
    isActive: true,
  });

  useEffect(() => {

    employeeService.getEmployeeById(empNo)
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee details:', error);
      });
  }, [empNo]);

  if (!employeeData.empNo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Employee Number: {employeeData.empNo}</p>
      <p>Employee Name: {employeeData.empName}</p>
      <p>Address Line 1: {employeeData.empAddressLine1}</p>
      <p>Address Line 2: {employeeData.empAddressLine2}</p>
      <p>Address Line 3: {employeeData.empAddressLine3}</p>
      <p>Department Code: {employeeData.departmentCode}</p>
      <p>Date of Join: {employeeData.dateOfJoin}</p>
      <p>Date of Birth: {employeeData.dateOfBirth}</p>
      <p>Basic Salary: {employeeData.basicSalary}</p>
      <p>Active: {employeeData.isActive ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default EmployeeDetails;

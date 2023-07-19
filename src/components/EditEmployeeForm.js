import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';

const EditEmployeeForm = ({ empNo }) => {
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
    // Fetch the employee data using empNo from the API and update the state
    employeeService.getEmployeeById(empNo)
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        // Handle error, display an error message, or take necessary actions.
        console.error('Error fetching employee details:', error);
      });
  }, [empNo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic data validation
    if (!employeeData.empNo || !employeeData.empName || !employeeData.departmentCode) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(employeeData.empNo)) {
      alert('Invalid email format.');
      return;
    }

    employeeService.updateEmployee(empNo, employeeData)
      .then((response) => {
        // Handle success, display a message, or redirect to the employee details page.
        console.log('Employee updated successfully:', response.data);
      })
      .catch((error) => {
        // Handle error, display an error message, or take necessary actions.
        console.error('Error updating employee:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee Number:
        <input type="text" name="empNo" value={employeeData.empNo} onChange={handleChange} required />
      </label>
      <label>
        Employee Name:
        <input type="text" name="empName" value={employeeData.empName} onChange={handleChange} required />
      </label>
      <label>
        Address Line 1:
        <input type="text" name="empAddressLine1" value={employeeData.empAddressLine1} onChange={handleChange} />
      </label>
      <label>
        Address Line 2:
        <input type="text" name="empAddressLine2" value={employeeData.empAddressLine2} onChange={handleChange} />
      </label>
      <label>
        Address Line 3:
        <input type="text" name="empAddressLine3" value={employeeData.empAddressLine3} onChange={handleChange} />
      </label>
      <label>
        Department Code:
        <input type="text" name="departmentCode" value={employeeData.departmentCode} onChange={handleChange} required />
      </label>
      <label>
        Date of Join:
        <input type="date" name="dateOfJoin" value={employeeData.dateOfJoin} onChange={handleChange} />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dateOfBirth" value={employeeData.dateOfBirth} onChange={handleChange} />
      </label>
      <label>
        Basic Salary:
        <input type="number" name="basicSalary" value={employeeData.basicSalary} onChange={handleChange} required />
      </label>
      <label>
        Active:
        <input type="checkbox" name="isActive" checked={employeeData.isActive} onChange={handleChange} />
      </label>
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmployeeForm;

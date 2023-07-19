import axiosInstance from "../axiosConfig";

const employeeService = {
  getAllEmployees: () => {
    return axiosInstance.get('/Employees');
  },
  addEmployee: (employeeData) => {
    return axiosInstance.post('/Employee', employeeData);
  },
  updateEmployee: (empNo, employeeData) => {
    return axiosInstance.put(`/Employee/${empNo}`, employeeData);
  },
  deleteEmployee: (empNo) => {
    return axiosInstance.delete(`/Employee/${empNo}`);
  },
  getEmployeeById: (empNo) => {
    return axiosInstance.get(`/Employee/${empNo}`);
  },
};

export default employeeService;

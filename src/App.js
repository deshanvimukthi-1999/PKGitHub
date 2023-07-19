import './App.css';
import AddEmployeeForm from './components/AddEmployeeForm';
import EditEmployeeForm from './components/EditEmployeeForm';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <div className="container">
        <div className="component">
          <h2>Add New Employee</h2>
          <AddEmployeeForm />
        </div>

        <div className="component">
          <h2>Edit Employee</h2>
          <EditEmployeeForm />
        </div>

        <div className="component">
          <h2>Employee Details</h2>
          <EmployeeDetails />
        </div>

        <div className="component">
          <h2>List of Employees</h2>
          <EmployeeList />
        </div>
      </div>
    </div>
  );
}

export default App;

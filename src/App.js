import React, {useState} from 'react';
import './App.css';
import Form from './Component/Form';
// import Form from './Components/Form';


function App() {

const [employees, setEmployees] = useState([]);

const addEmployeeHandler = (employee) => {
  setEmployees([...employees, employee]);
}

  return (
    <div className="App">
      
   

    <Form addEmployeeHandler={addEmployeeHandler} employees={employees}/>
    </div>
  );
}

export default App;
import { useState } from 'react';
import './App.css';
import StudentTable from './components/StudentTable';
import NewStudentForm from './components/NewStudentForm'

function App() {
  const [students, setStudents] = useState(
    [
      {mssv: "1",dem: "vu",ten: "minh"},
      {mssv: "2",dem: "bao",ten: "vu"},
      {mssv: "3",dem: "minh",ten: "bao"},
      {mssv: "4",dem: "vu",ten: "minh"},
      {mssv: "5",dem: "bao",ten: "vu"}
    ]
  );

  const [showForm, setShowForm] = useState(false);

  const deleteStudent = (studentId) =>{
    const updateStudent = students.filter(student=>student.mssv!==studentId);
    setStudents(updateStudent);
  };


  const addStudent = (lastName, firstName)=>{
    const student = {
      mssv: students.length+1,
      dem: lastName,
      ten: firstName
    }
    setStudents([...students, student])
  }
  return (
    <div className="App">
        <StudentTable students = {students} deleteStudent = {deleteStudent}/>
        <button className='btn btn-primary'
          onClick={()=>{setShowForm(!showForm)}}
        >
          {showForm?'close':'open'}
        </button>
        {showForm && <NewStudentForm add = {addStudent}/>}
    </div>
  );
}

export default App;

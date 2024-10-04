import React from 'react'
import StudentItem from './StudentItem'

function StudentTable(props){
  const deleteStudent = (studentId) =>{
    props.deleteStudent(studentId); 
  }
    return(
        <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th scope='col'>MSSV</th>
            <th scope='col'>Họ đệm</th>
            <th scope='col'>Tên SV</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((student) => (
            <StudentItem
              key = {student.mssv}
              mssv = {student.mssv}
              dem = {student.dem}
              ten = {student.ten}
              deleteStudent = {deleteStudent}
            />
          ))}
        </tbody>
      </table>
    )
}

export default StudentTable

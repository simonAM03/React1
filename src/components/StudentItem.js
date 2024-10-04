import React from 'react'

function StudentItem(props) {
    const deleteItem = ()=>{
        props.deleteStudent(props.mssv);
    }
    return (
        <tr>
            <td>{props.mssv}</td>
            <td>{props.dem}</td>
            <td>{props.ten}</td>
            <td>
                <button className='btn btn-danger' onClick={deleteItem}>Delete</button>
            </td>
        </tr>
    )
}
export default StudentItem;

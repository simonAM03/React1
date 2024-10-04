import React, { useState } from 'react'

function NewStudentForm(props){
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const saveStudent = () =>{
        if(lastName && firstName){
            props.add(lastName, firstName);
            setFirstName('');
            setLastName('');
        }
    }
    return(
        <div>
            <h2>Them sinh vien</h2>
            <div className='form-group'>
                <label>Ho dem</label>
                <input
                    type='text'
                    className='form-control'
                    value={lastName}
                    onChange={e=>setLastName(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Ten</label>
                <input
                    type='text'
                    className='form-control'
                    value={firstName}
                    onChange={e=>setFirstName(e.target.value)}
                />
            </div>
            <button className='btn btn-success' onClick={saveStudent}>Lưu Sinh Viên</button>
        </div>
    )
}

export default NewStudentForm

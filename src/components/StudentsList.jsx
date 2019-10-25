import React from 'react';
// import { NavLink } from 'react-router-dom';

const StudentsList = (props) => {
  return (
    <ul>
      {props.students.map((elem, idx) => {
         return <li className={props.isChecked ? 'component-student-green' : 'component-student-red'} key={idx}>{elem.name}</li>
        // return <li><NavLink key={idx} to={`/${elem.id}`}> {elem.name}</NavLink></li>
      })}
    </ul>
  )
}

export default StudentsList;
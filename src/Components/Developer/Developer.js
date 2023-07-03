import React from 'react';
import './Developer.css'

const Developer = (props) => {
    console.log(props);
    const {country , email, img, fullName, income, role} = props.employe;
    return (
        <div className='develop-detail'>
            <div>
                <img src={img} alt="" />
            </div>
                <div className='develop-name'>
                <h2>Name: {fullName} </h2>
                <h4>Job Position: {role} </h4>
                <h4>Email: {email} </h4>
                <h4> Country: {country} </h4>
                <h4> Salary: {income} </h4>
                <button onClick={() =>props.buttonClick(props.employe)} className='devo-btn "fa-solid fa-phone"'>HIRE ME</button>
                </div>
        </div>
    );
};

export default Developer;
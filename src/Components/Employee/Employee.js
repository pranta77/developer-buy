import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import TotalCart from '../TotalCart/TotalCart';
import './Employee.css'

const Employee = () => {
    const [employees , setEmployees] = useState([]);
    const [totalCart ,setTotalCart] = useState([])

    // All data lode
    useEffect(() => {
        fetch('allData.JSON')
        .then(res => res.json())
        .then(data => setEmployees(data))
    },[])

    const buttonClick = (dp) => {
        // console.log(dp.fullName);
        const addDeveloper = [...totalCart , dp];
        setTotalCart(addDeveloper);
    }
    return (
        <div>
            {/* A progarmar budget detiles */}
            <div className='site-Details'>
                <h3>Welcome to Programmer Hub! There is lots of engineer from various countries & various field of expertise. If you have any problem then feel free you can contact with us according to your problem & You want to hire someone then you can hire from Programmer Hub.</h3>
                <h3>Total : &100K</h3>
            </div>
            <div className='main-container'>
                <div className='employe-container'>
                    {
                    employees.map(employe => <Developer 
                        key = {employe.id}
                        employe={employe}
                        buttonClick ={buttonClick}
                    
                        ></Developer>)
                     }
                </div>
                <div className='cart-container'>
                    <TotalCart totalCart={totalCart}></TotalCart>
                </div>
            </div>
        </div>
    );
};

export default Employee;
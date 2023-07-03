import React from 'react';
import './TotalCart.css'

const TotalCart = (props) => {
    const {totalCart} = props;
    let total = 0 ;
    for(const cart of totalCart)
    total = total + parseFloat(cart.income) 
    return (
        <div className='select-developer'>
            <h3>Select Developer</h3>
            <h4>Select no of Developer:{props.totalCart.length}</h4>
            {
                totalCart.map(name => <h5>Developer Name : {name.fullName}</h5>)
            }
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default TotalCart;
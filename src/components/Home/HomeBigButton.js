import React from 'react';
import { NavLink } from 'react-router-dom';

export default props =>
    <div  className='homeBigButton-wrapper'>
        <NavLink className='homeBigButton' to="/logowanie">
            {props.children}
        </NavLink>
    </div>
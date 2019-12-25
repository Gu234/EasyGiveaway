import React from 'react';
import { NavLink } from 'react-router-dom';

export default props =>
    <NavLink className='homeBigButton-wrapper' to="/logowanie">
        <div className='homeBigButton'>
            {props.children}
        </div>
    </NavLink>
import React from 'react';
import { NavLink } from 'react-router-dom';

export default props =>
    <NavLink className='homeBigButton-wrapper' to="/oddaj-rzeczy">
        <div className='homeBigButton'>
            {props.children}
        </div>
    </NavLink>
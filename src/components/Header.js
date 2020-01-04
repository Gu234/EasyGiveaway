import React, { Component } from 'react';
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom';


export default class Navigation extends Component {

    render() {
        return <>
            <div className='headerBox'>
                <ul className='headerBox-upperButtons'>
                    <li><NavLink className='headerBox-upperButton' to="/logowanie">Zaloguj</NavLink></li>
                    <li><NavLink className='headerBox-upperButton' to="/rejstracja">Załóż konto</NavLink></li>
                </ul>
                <ul className='headerBox-navbar'>
                    <li><NavLink className='navbar' to='/'>Start</NavLink></li>
                    <li><Link className='navbar' smooth={true} to='HomeEasySteps'>O co chodzi?</Link></li>
                    <li><Link className='navbar' smooth={true} to='HomeAboutUs'>O nas</Link></li>
                    <li><Link onClick={this.routeToHome} className='navbar' smooth={true} to='HomeWhomWeHelp'>Fundacja i organizacje</Link></li>
                    <li><Link className='navbar' smooth={true} to='HomeContactForm'>Kontakt</Link></li>
                </ul>
            </div>
        </>
    }
}
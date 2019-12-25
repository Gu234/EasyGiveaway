import React, { Component } from 'react';
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom';
export default class Navigation extends Component {

    state = {
        isUrlHome: true
    }

    routeToHome = () => {
        if (!this.state.isUrlHome) {
            window.location.href = "/";
        }
    }
    render() {
        return <>
            <div name='offset' className='offsetTop'></div>
            <div className='headerBox'>
                <ul className='headerBox-upperButtons'>
                    <li><NavLink className='headerBox-upperButton' to="/logowanie">Zaloguj</NavLink></li>
                    <li><NavLink className='headerBox-upperButton' to="/rejstracja">Załóż konto</NavLink></li>
                </ul>
                <ul className='headerBox-navbar'>
                    <li><NavLink spy={true} activeClass="active" className='navbar' smooth={true} to='/'>Start</NavLink></li>
                    <li><Link offset={-120} spy={true} activeClass="active" className='navbar' smooth={true} to='HomeEasySteps'>O co chodzi?</Link></li>
                    <li><Link offset={-120} spy={true} activeClass="active" className='navbar' smooth={true} to='HomeAboutUs'>O nas</Link></li>
                    <li><Link offset={-120} spy={true} onClick={this.routeToHome} activeClass="active" className='navbar' smooth={true} to='HomeWhomWeHelp'>Fundacja i organizacje</Link></li>
                    <li><Link offset={-120} spy={true} activeClass="active" className='navbar' smooth={true} to='HomeContactForm'>Kontakt</Link></li>
                </ul>
            </div>
        </>
    }
}
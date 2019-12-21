import React, { Component } from 'react';
import SectionTitle from './SectionTitle';


export default class Login extends Component {

   state = {
      email: '',
      password: '',
      isEmailOk: true,
      isPasswordOk: true
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleLogIn = () => {
      this.validate()
   }

   validate = () => {
      const isPasswordOk = this.validatePassword(this.state.password);
      const isEmailOk = this.validateEmail(this.state.email);

      this.setState({ isPasswordOk: isPasswordOk });
      this.setState({ isEmailOk: isEmailOk });

      return isPasswordOk && isEmailOk
   }


   validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
   }

   validatePassword = (text) => {
      if (!text) return false
      if (text.length < 6) return false
      return true
   }

   goTo = () => window.location.href = "/#/rejstracja"; 


   render() {
      return <>
         <div name='offset' className='offsetTop'></div>

         <div className='LogIn'>
            <SectionTitle>Zaloguj się</SectionTitle>
            <div className='LogIn-background'>
               <div>
                  <div>Email</div>
                  <input onChange={this.handleChange} name='email' value={this.state.email} type="text" />
                  <div  className={this.state.isEmailOk ? '' : 'invalidInput'}>Podany email jest nieprawidłowy!</div>
               </div>
               <div>
                  <div>Hasło</div>
                  <input onChange={this.handleChange} name='password' value={this.state.password} type="password" />
                  <div className={this.state.isPasswordOk ? '' : 'invalidInput'}>Podane hasło jest za krótkie!</div>
               </div>
            </div>
            <div className='LogIn-bottomRow'>
               <div onClick={this.goTo}>Załóż konto</div>
               <div onClick={this.handleLogIn} type="submit">Zaloguj się</div>
            </div>
         </div>
      </>

   }

}
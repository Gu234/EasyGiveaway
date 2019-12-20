import React, { Component } from 'react';
import SectionTitle from './SectionTitle';


export default class SignUp extends Component {

   state = {
      email: '',
      password: '',
      repeadedPassword:'',
      isEmailOk: true,
      isPasswordOk: true,
      isPasswordRepeatOk:true
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSignUp = () => {
      this.validate()
   }

   validate = () => {
      const isPasswordOk = this.validatePassword(this.state.password);
      const isEmailOk = this.validateEmail(this.state.email);
      const isPasswordRepeatOk = this.state.password === this.state.repeadedPassword;

      this.setState({ isPasswordOk: isPasswordOk });
      this.setState({ isPasswordRepeatOk: isPasswordRepeatOk });
      this.setState({ isEmailOk: isEmailOk });

      return isPasswordOk && isEmailOk && isPasswordRepeatOk
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

   render() {
      return <>
         <div name='offset' className='offsetTop'></div>

         <div className='LogIn'>
            <SectionTitle>Załóż konto</SectionTitle>
            <div className='LogIn-background'>
               <div>
                  <div>Email</div>
                  <input onChange={this.handleChange} name='email' value={this.state.email} type="text" />
                  <div className={this.state.isEmailOk ? '' : 'invalidInput'}>Podany email jest nieprawidłowy!</div>
               </div>
               <div>
                  <div>Hasło</div>
                  <input onChange={this.handleChange} name='password' value={this.state.password} type="password" />
                  <div className={this.state.isPasswordOk ? '' : 'invalidInput'}>Podane hasło jest za krótkie!</div>
               </div>
               <div>
                  <div>Powtórz hasło</div>
                  <input onChange={this.handleChange} name='repeadedPassword' value={this.state.repeadedPassword} type="password" />
                  <div className={this.state.isPasswordRepeatOk ? '' : 'invalidInput'}>Powtórzone hasło jest inne!</div>
               </div>
            </div>
            <div className='LogIn-bottomRow'>
               <div>Zaloguj się</div>
               <div onClick={this.handleSignUp} type="submit">Załóż konto</div>
            </div>
         </div>
      </>

   }
}




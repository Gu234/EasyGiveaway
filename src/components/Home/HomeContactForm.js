import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import HomeFooter from './HomeFooter';


export default class HomeContactForm extends Component {
   state = {
      name: '',
      email: '',
      textarea: '',
      error:false,
      succes:false
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit = (e) => {
      e.preventDefault();
      if(this.validate())
         this.sendMsg() 
      else 
      this.setState({
         error:true
      })
   }

   validate = () => {
      return this.validateName() && this.validateEmail() && this.validateTextarea() 
   }

   validateName = (name) => {
      if (!name) return false
      if (/\s/.test(name)) return false
      return true
   }

   validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

   validateTextarea = (text) => {
      if (!text) return false
      if (text.length<120) return false
      return true
   }
   sendMsg = (payload) => {
      
      const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
      const data = {
         'method': 'POST',
         'Content-Type': "application/json",
         'payload':payload
      }
      
      fetch(url,data).then()

   }

   render() {
      return <>
         <div name='HomeContactForm' className='HomeContactForm-backgroundImage'>
            <div className='HomeContactForm'>
               <div className='HomeContactForm-baner'></div>
               <div className='HomeContactForm-secondHalf'>
                  <SectionTitle>Skontaktuj się z nami</SectionTitle>
                  <form className='HomeContactForm-inputs' onSubmit={this.handleSubmit}>
                     <div className='HomeContactForm-inputs-upper'>
                        <div className='HomeContactForm-inputs-name'>
                           <div>Wpisz swoje imię</div>
                           <input placeholder='Krzysztof' onChange={this.handleChange} name='name' value={this.state.name} type='text' className="form-control"></input>
                        </div>
                        <div className='HomeContactForm-inputs-email'>
                           <div>Wpisz swój email</div>
                           <input placeholder='abc@xyz.pl' onChange={this.handleChange} name='email' value={this.state.email} className="form-control" type='email'></input>
                        </div>
                     </div>
                     <div className='HomeContactForm-inputs-text'>
                        <div>Wpisz swoją wiadomość</div>
                        <textarea placeholder='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et accusantium sunt nihil reiciendis at fugiat neque harum pariatur similique fugit voluptatem, unde sit incidunt. Reiciendis nesciunt perferendis id aliquam alias.' onChange={this.handleChange} name='textarea' value={this.state.textarea} type='text' ></textarea>
                     </div>
                     <div className="HomeContactForm-inputs-send" onClick={this.handleSubmit} type="submit">Wyślij</div>
                  </form>
               </div>
            </div>
            <HomeFooter />
         </div>
      </>
   }
} 
import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import HomeFooter from './HomeFooter';


export default class HomeContactForm extends Component {
   state = {
      name: '',
      email: '',
      textarea: '',
      isNameOk: true,
      isEmailOk: true,
      isTextareaOk: true,
      succes: false
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit = (e) => {
      this.setState({succes:false})
      e.preventDefault();
      if (this.validate())
         this.sendMsg(this.state)
     
   }

   validate = () => {
      const isNameOk = this.validateName(this.state.name);
      const isEmailOk = this.validateEmail(this.state.email);
      const isTextareaOk = this.validateTextarea(this.state.textarea);

      this.setState({isNameOk:isNameOk});
      this.setState({isEmailOk:isEmailOk});
      this.setState({isTextareaOk:isTextareaOk});

      return isNameOk && isEmailOk && isTextareaOk
   }

   validateName = (name) => {
      if (!name) return false
      if (/\s/.test(name)) return false
      return true
   }

   validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
   }

   validateTextarea = (text) => {
      if (!text) return false
      if (text.length < 120) return false
      return true
   }
   sendMsg = (payload) => {

      const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
      const data = {
         'method': 'POST',
         'headers': {
            'Content-Type': 'application/json'
         },
         'body':JSON.stringify({
            'name': payload.name,
            'email': payload.email,
            'message': payload.textarea
         })
      }

      fetch(url, data).then(r => {
         if (r.ok) this.setState({succes:true})
      })

   }

   render() {
      return <>
         <div name='HomeContactForm' className='HomeContactForm-backgroundImage'>
            <div className='HomeContactForm'>
               <div className='HomeContactForm-baner'></div>
               <div className='HomeContactForm-secondHalf'>
                  <SectionTitle>Skontaktuj się z nami</SectionTitle>
                  <div className={this.state.succes ? 'succes':''}>Wiadomość została wysłana!<br/> Wkrótce się skontaktujemy.</div>
                  <form className='HomeContactForm-inputs' onSubmit={this.handleSubmit}>
                     <div className='HomeContactForm-inputs-upper'>
                        <div className='HomeContactForm-inputs-name'>
                           <div>Wpisz swoje imię</div>
                           <input placeholder='Krzysztof' onChange={this.handleChange} name='name' value={this.state.name} type='text' className="form-control"></input>
                           <div className={this.state.isNameOk ? '':'invalidInput'}>Podane imię jest nieprawidłowe!</div>
                        </div>
                        <div className='HomeContactForm-inputs-email'>
                           <div>Wpisz swój email</div>
                           <input placeholder='abc@xyz.pl' onChange={this.handleChange} name='email' value={this.state.email} className="form-control" type='email'></input>
                           <div className={this.state.isEmailOk ? '':'invalidInput'}>Podany email jest nieprawidłowy!</div>
                        </div>
                     </div>
                     <div className='HomeContactForm-inputs-text'>
                        <div>Wpisz swoją wiadomość</div>
                        <textarea placeholder='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et accusantium sunt nihil reiciendis at fugiat neque harum pariatur similique fugit voluptatem, unde sit incidunt. Reiciendis nesciunt perferendis id aliquam alias.' onChange={this.handleChange} name='textarea' value={this.state.textarea} type='text' ></textarea>
                        <div className={this.state.isTextareaOk ? '':'invalidInput'}>Wiadomość musi mieć conajmniej 120 znaków!</div>
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
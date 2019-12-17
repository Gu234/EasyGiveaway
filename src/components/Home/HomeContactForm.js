import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';


export default class HomeContactForm extends Component {
   state = {
      name: '',
      email: '',
      textarea: '',
      errorMsg: []
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   render() {
      return <div name='HomeContactForm' className='HomeContactForm'>
         <div className='HomeContactForm-baner'></div>
         <div className='HomeContactForm-secondHalf'>
            <SectionTitle>Skontaktuj się z nami</SectionTitle>
            <form className='HomeContactForm-inputs' onSubmit={this.handleSubmit}>
               <div>
                  <div>Wpisz swoje imię</div>
                  <input placeholder='Krzysztof' onChange={this.handleChange} name='name' value={this.state.name} type='text' className="form-control"></input>

               </div>
               <div>
                  <div>Wpisz swój email</div>
                  <input placeholder='abc@xyz.pl' onChange={this.handleChange} name='email' value={this.state.email} className="form-control" type='email'></input>

               </div>
               <div>
                  <div>Wpisz swoją wiadomość</div>
                  <textarea placeholder='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et accusantium sunt nihil reiciendis at fugiat neque harum pariatur similique fugit voluptatem, unde sit incidunt. Reiciendis nesciunt perferendis id aliquam alias.' onChange={this.handleChange} name='textarea' value={this.state.textarea} type='text' className="form-control"></textarea>

               </div>
               <div className="" type="submit">Wyślij</div>
            </form>
         </div>
      </div>
   }
} 
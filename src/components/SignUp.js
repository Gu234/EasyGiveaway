import React from 'react';
import SectionTitle from './SectionTitle';


export default () =>
   <>
      <div name='offset' className='offsetTop'></div>

      <div className='SignUp'>
         <SectionTitle>Załóż konto</SectionTitle>
         <div className='LogIn-background'>
            <div>
               <div>Email</div>
               <input type="text" />
               <div className={this.state.isEmailOk ? '':'invalidInput'}>Podany email jest nieprawidłowy!</div>
               
            </div>
            <div>
               <div>Hasło</div>
               <input type="password" />
            </div>
            <div>
               <div>Powtórz hasło</div>
               <input type="password" />
            </div>
         </div>
         <div className='LogIn-bottomRow'>
            <div>Zaloguj się</div>
            <div>Załóż konto</div>
         </div>
      </div>
   </>
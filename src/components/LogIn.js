import React from 'react';
import SectionTitle from './SectionTitle';


export default () =>
   <>
      <div name='offset' className='offsetTop'></div>

      <div className='LogIn'>
         <SectionTitle>Zaloguj się</SectionTitle>
         <div className='LogIn-background'>
            <div>
               <div>Email</div>
               <input type="text" />
            </div>
            <div>
               <div>Hasło</div>
               <input type="password" />
            </div>
         </div>
         <div className='LogIn-bottomRow'>
            <div>Załóż konto</div>
            <div>Zaloguj się</div>
         </div>
      </div>
   </>
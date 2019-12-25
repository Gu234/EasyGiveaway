import React from 'react';
import HomeBigButton from './HomeBigButton';
import SectionTitle from '../SectionTitle';


export default () => <div name='HomeAboutUs'>
   <div  className='homeSectionButton'>
      <HomeBigButton>ODDAJ <br /> RZECZY</HomeBigButton>
   </div>
   <div  className='homeAboutUs' >
      <div className="aboutUs-firstHalf">
         <SectionTitle>O nas</SectionTitle>
         <div className='aboutUs-paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, molestias! Officia voluptatibus assumenda, alias quam tempora labore non soluta necessitatibus distinctio. Ducimus, optio veniam.</div>
         <div className="homeAboutus-signature"></div>
      </div>
      <div className="aboutUs-secondHalf"></div>
   </div>
</div>
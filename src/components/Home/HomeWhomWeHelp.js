import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import WhomWeHelpOrganisation from './WhomWeHelpOrganisation';
import json from '../../data/organizations';



export default class WhomWeHelp extends Component {
   state = {
      activeView: 0,
      activePage: 0,
   }

   changeView = (viewNumber, viewPage) =>
      this.setState({ activeView: viewNumber, activePage: viewPage })


   render() {

      const length = json.organizations[this.state.activeView].foundations.length;
      const numberOfSubpages = Math.floor(length / 3);
      let subpagesArr = []
      if (numberOfSubpages > 1)
         subpagesArr = Array.from({ length: numberOfSubpages }, (v, k) => k + 1);

      // const topButtonBorderStyle = 
      return (
         <div name='HomeWhomWeHelp' className='HomeWhomWeHelp'>
            <SectionTitle>Komu pomagamy?</SectionTitle>

            <div className='HomeWhomWeHelp-topButtons'>
               <div style={{border: this.state.activeView===0 ? '.75px solid #3C3C3C':'.75px solid transparent'}} className='HomeWhomWeHelp-topButton' onClick={() => this.changeView(0, 0)}>Fundacjom</div>
               <div style={{border: this.state.activeView===1 ? '.75px solid #3C3C3C':'.75px solid transparent'}} className='HomeWhomWeHelp-topButton' onClick={() => this.changeView(1, 0)}>Organizacjom <br />pozarządowym</div>
               <div style={{border: this.state.activeView===2 ? '.75px solid #3C3C3C':'.75px solid transparent'}} className='HomeWhomWeHelp-topButton' onClick={() => this.changeView(2, 0)} >Lokalnym  <br />zbiórkom</div>
            </div >
            <p className='HomeWhomWeHelp-paragraph'>
               {json.organizations[this.state.activeView].description}
            </p>
            {
               json.organizations[this.state.activeView].foundations.map((fundation, i) => {
                  if (i >= this.state.activePage * 3 && i < this.state.activePage * 3 + 3)
                     return <WhomWeHelpOrganisation key={i} activeView={this.state.activeView} index={i} />
                  return null
               })
            }
            <div className='HomeWhomWeHelp-subpages'>
               {subpagesArr.map((item, index) =>{
                  if(this.state.activePage===index)
                     return <div className='HomeWhomWeHelp-subpage active-subpage' key={index} onClick={() => this.changeView(this.state.activeView, index)}>{item}</div >
                 return <div className='HomeWhomWeHelp-subpage' key={index} onClick={() => this.changeView(this.state.activeView, index)}>{item}</div >})}
            </div>


         </div >

      )

   }
} 
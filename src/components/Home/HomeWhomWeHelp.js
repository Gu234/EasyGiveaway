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

      return (
         <>
            <SectionTitle>Komu pomagamy?</SectionTitle>

            <div >
               <div><button onClick={() => this.changeView(0, 0)}>Fundacjom</button></div>
               <div><button onClick={() => this.changeView(1, 0)}>Organizacjom pozarządowym</button></div>
               <div><button onClick={() => this.changeView(2, 0)} >Lokalnym zbiórkom</button></div>
            </div>
            <p>
               {json.organizations[this.state.activeView].description}
            </p>
            {json.organizations[this.state.activeView].foundations.map((fundation, i) => {
               if (i >= this.state.activePage * 3 && i < this.state.activePage * 3 + 3)
                  return <WhomWeHelpOrganisation activeView={this.state.activeView} index={i} />
               return null
            })}
            <div className='subpages'>
               {subpagesArr.map((item, index) =>
                  <div key={index} onClick={() => this.changeView(this.state.activeView, index)}>{item}</div >)}
            </div>


         </>
      )

   }
} 
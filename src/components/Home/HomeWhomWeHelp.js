import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import WhomWeHelpOrganisation from './WhomWeHelpOrganisation';
import organisations from '../../data/organizations';



export default class WhomWeHelp extends Component {
   state = {
      activeView: 0,
      activePage: 0,
   }

   changeView = (viewNumber, viewPage) =>
      this.setState({ activeView: viewNumber, activePage: viewPage })


   render() {
      return (
         <>
            <SectionTitle>Komu pomagamy?</SectionTitle>

            <div >
               <div><button onClick={() => this.changeView(0, 0)}>Fundacjom</button></div>
               <div><button onClick={() => this.changeView(1, 0)}>Organizacjom pozarządowym</button></div>
               <div><button onClick={() => this.changeView(2, 0)} >Lokalnym zbiórkom</button></div>
            </div>
            <p>
               {JSON.parse(organisations).organisations[this.activeView].description}
            </p>
            <WhomWeHelpOrganisation index={0} activeView={this.state.activeView} activePage={this.state.activePage} />
            <WhomWeHelpOrganisation index={1} activeView={this.state.activeView} activePage={this.state.activePage} />
            <WhomWeHelpOrganisation index={2} activeView={this.state.activeView} activePage={this.state.activePage} />
            <div className='subpages'>
               {organisations.map((item, index) =>
                  <li onClick={() => this.changeView(this.activeView, index)}>{index + 1}</li>)}
            </div>
            }

         </>
      )

   }
} 
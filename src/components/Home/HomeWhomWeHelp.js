import React, { Component } from 'react';
// import SectionTitle from '../SectionTitle'

export default class WhomWeHelp extends Component {
   state = {
      activeView: 0,
      activePage: 0,
   }

   changeView = (viewNumber, viewPage) => {
      this.setState({ activeView: viewNumber, activePage: viewPage })
   }

   render() {
      return (
         <>
            {/* <SectionTitle title='Komu pomagamy?' />
            <div>podkreslenie</div>
            <div>
               <div><button onClick={() => this.changeView(1)}>fundacjom</button></div>
               <div><button onClick={() => this.changeView(2)}>Organizacjom pozarządowym</button></div>
               <div><button onClick={this.changeView} >Lokalnym zbiórkom</button></div>
            </div>
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolores est quam inventore velit, recusandae quis quod aliquid similique ullam eligendi expedita voluptatem nam sit exercitationem. A eligendi magni facere.
            </p>

            <Wpis activeView={this.state.activeView} activePage={this.state.activePage} />
            <Wpis />
            <Wpis />
            <ListaPrzyciskówPodstron>
               {JSON.map((item, index) => <li onClick={() => this.changeView(this.activeView, index)}>{index + 1}</li>)}
            </ListaPrzyciskówPodstron>
            } */}

         </>
      )

   }
} 
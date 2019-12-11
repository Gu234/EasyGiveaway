import React, { Component } from 'react';


export default class WhomWeHelp extends Component{
   state ={
      activeView = 1 ,

   }

   changeView = (viewNumber)=>{
this.setState({activeView:viewNumber})
   }

   render(){
      return(
         <>
            <SectionTitle title='Komu pomagamy?'/>
            <div>podkreslenie</div>
            <div>
               <div><button onClick={()=> this.changeView(1)}>fundacjom</button></div>
               <div><button onClick={()=> this.changeView(2)}>Organizacjom pozarządowym</button></div>
               <div><button onClick={this.changeView} >Lokalnym zbiórkom</button></div>
            </div>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolores est quam inventore velit, recusandae quis quod aliquid similique ullam eligendi expedita voluptatem nam sit exercitationem. A eligendi magni facere.
            </p>
            

         </>
      )

   }
} 
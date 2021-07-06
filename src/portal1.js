import { Component } from "react";

import Portal2 from './portal2'




class Portal1 extends Component{ render(){ 
  return(<> 
    <h1>🌀PORTAL1🌀</h1> 
    <Portal2 actorAlltoPortal2={this.props.actorAlltoPortal1}/>

    </>);}    

} 
export default Portal1
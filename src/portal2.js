import { Component } from "react";


import ReActorList from './ReActorList'




class Portal2 extends Component{ render(){ 
    return(<>
    
        <h1>🌀PORTAL2🌀</h1>
        <ReActorList actorAlltoReActorList={this.props.actorAlltoPortal2}/>
    
    </>);}    

} 
export default Portal2
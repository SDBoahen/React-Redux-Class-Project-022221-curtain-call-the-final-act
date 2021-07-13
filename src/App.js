import './App.css';
import logo from './logo.svg';


import { Component } from 'react';


import ReActorList from './ReActorList';
  import Portal1 from './portal1'

import ReActorNEWForm from './ReActorNEWForm';
import BlastFromThePastActLikeYouKnowww from './BlastFromThePast';





class App extends Component{ 
  constructor(props){ super(props);

    this.state={
  
      actorAllFrontendInsts: [
  
        { id: 99, name: "Sam", skill: "Instructor", prefernce: "Frontend - Core React" }
            
      ]
  
    } //  🏬[ :) ]🌀

  }
  

  

  ////////


  render(){

  return (<>
    <h1>Curtain Call!</h1>

      <BlastFromThePastActLikeYouKnowww/>

      <ReActorNEWForm/>
      <ReActorList/>
      <ReActorNEWForm />
     
      {/* <Portal1 actorAlltoPortal1={this.state.actorAllFrontendInsts} />  */}

  </>)};

} 
export default App;








////////  MAP  ////////
//
//  🏬[ :) ]🌀
//                                     <App/>
//          <ReActorNEWForm />🌀   🌀< ReActorList />  <ReActorNEWForm />🌀   🌀<BlastFromThePastActLikeYouKnowww/>
//
//
//   ...
//
//                 🌀<Company/>                        <Company/>
//                  🌀<Label/>                          <Label/>
//
// 🌀< ReActorList />    🌀< PropList/>         < ReActorList />    < PropList/>    
//    <C-A><F-A>       <C-P><F-P>                 <C-A><F-A>       <C-P><F-P>
//
//
//
//
//                 <Desert />
//                 <Tundra />
//
//   < ReActorList />         < PropList/>
//   <Card-A><Form-A>       <Card-P><Form-P>
//
//




// Functional  >  Class
// Class       >  Functional


// Functional Form

// function App(){
//   return (<>

//   </>);
// } 
// export default App;





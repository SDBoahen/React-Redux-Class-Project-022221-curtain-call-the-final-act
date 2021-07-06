import './App.css';
import logo from './logo.svg';


import { Component } from 'react';


import ReActorList from './ReActorList';
  import Portal1 from './portal1'





class App extends Component{ 
  

  state={

    actorAllFrontendInsts: [

      // { id: 1, name: "Sam", skill: "Instructor", prefernce: "Frontend - Core React" },
      // { id: 2, name: "Corinna", skill: "Instructor", prefernce: "CSS" },
      // { id: 3, name: "Juan", skill: "Instructor", prefernce: "Functional Programming" },

      // { id: 4, name: "Amelia", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 5, name: "Andrés", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 6, name: "Angelo", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 7, name: "Bhavani V", skill: "Junior Full-Stack Web Developer", prefernce: "" }, 
      // { id: 8, name: "Carson", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 9, name: "Chris", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 10, name: "Cel", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 11, name: "Christian", skill: "Junior Full-Stack Web Developer", prefernce: "" }, 
      // { id: 12, name: "Elena", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 13, name: "Ekaynuh", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 14, name: "G", skill: "Junior Full-Stack Web Developer", prefernce: "JavaScript" },
      // { id: 15, name: "Jess", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 16, name: "Julian", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 17, name: "Kelvin", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 18, name: "Kevin J", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 19, name: "Kyle", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 20, name: "Leonetti", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 21, name: "Mac", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 22, name: "Matt", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 23, name: "Mcrea", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 24, name: "Mike", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 25, name: "Nana Ama", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 26, name: "Owen", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 27, name: "Ryan", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 28, name: "Scott", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 29, name: "Vic", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 30, name: "Vincent", skill: "Junior Full-Stack Web Developer", prefernce: "" },
      // { id: 31, name: "Wonjin", skill: "Junior Full-Stack Web Developer", prefernce: "" }
          
    ]  //  Fetched

  }
  

  ////////


  render(){

  return (<>
    <h1>Curtain Call!</h1>
      <ReActorList/>
     
      {/* <Portal1 actorAlltoPortal1={this.state.actorAllFrontendInsts} /> */} 

  </>)};

} 
export default App;








////////  MAP  ////////
//
//  🏬
//                                    <App/>
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
//                 <Portal1/>
//                 <Label/>
//
// < ReActorList />    < PropList/>
//     <C-A><F-A>       <C-P><F-P>
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





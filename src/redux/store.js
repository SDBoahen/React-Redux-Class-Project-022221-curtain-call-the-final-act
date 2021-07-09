import { createStore } from 'redux'


    const reActorAll = [ 
            
        { id: 1, name: "Sam", skill: "Instructor", prefernce: "Frontend - Core React" },
        { id: 2, name: "Corinna", skill: "Instructor", prefernce: "CSS" },
        { id: 3, name: "Juan", skill: "Instructor", prefernce: "Functional Programming" },
  
        { id: 4, name: "Amelia", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 5, name: "Andrés", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 6, name: "Angelo", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 7, name: "Bhavani V", skill: "Junior Full-Stack Web Developer", prefernce: "" }, 
        { id: 8, name: "Carson", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 9, name: "Chris", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 10, name: "Cel", skill: "Junior Full-Stack Web Developer", prefernce: "JS" }, 
        { id: 11, name: "Elena", skill: "Junior Full-Stack Web Developer", prefernce: "Everything Frontend" },
        { id: 12, name: "Ekaynuh", skill: "Junior Full-Stack Web Developer", prefernce: "Backend" },
        { id: 13, name: "G", skill: "Junior Full-Stack Web Developer", prefernce: "javas Script" },
        { id: 14, name: "Jess", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 15, name: "Julian", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 16, name: "Kelvin", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 17, name: "Kevin J", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 18, name: "Kyle", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 19, name: "Leonetti", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 20, name: "Mac", skill: "Junior Full-Stack Web Developer", prefernce: "Frontend - JS/CSS" },
        { id: 21, name: "Matt", skill: "Junior Full-Stack Web Developer", prefernce: "Railz" },
        { id: 22, name: "Mcrea", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 23, name: "Mike", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 24, name: "Nana Ama", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 25, name: "Owen", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 26, name: "Ryan", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 27, name: "Scott", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 28, name: "Vic", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 29, name: "Vincent", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 30, name: "Wonjin", skill: "Junior Full-Stack Web Developer", prefernce: "" }
            
      ]




function reActorReducer(state = reActorAll, action){


        const addNEWReActor =()=>{ 

            return{
                ...action.payload
            }

        } 


        switch(action.type){

            case "ADD_REACTOR":
                return [...state, addNEWReActor()]
                // return [NEWReActor(), ...state]
            
            case "FREE_REACTOR":
                let whosStillHereOfOurReActors = state.filter( (reActor)=> reActor !== action.payload )
                return [...whosStillHereOfOurReActors]

            

            default: 
                return state
        }
    
    
    }

let store = createStore(reActorReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store







































// case "FREE_REACTOR":
//     let currentReActors = state.filter(reActor => reActor !== action.payload)
//     return [...currentReActors]


// case "EDIT_REACTOR":
//     let editedList = state.map(reActor => reActor.id ===  action.payload.id ? action.payload : state)
//     return [...editedList]
//      //  ***  SHOW DIRECT SWAP WAY AS WELL ***  //


// case "RING_THE_BELL":
//     return "🌳🔔diiing🎶✨"


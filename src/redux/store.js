import { createStore } from 'redux'

    const reActorAll = [ 
            
        { id: 1, name: "Sam", skill: "Instructor", prefernce: "Frontend - Core React" },
        { id: 2, name: "Corinna", skill: "Instructor", prefernce: "Functional Programming" },
        { id: 3, name: "Juan", skill: "Instructor", prefernce: "CSS" },
  
        { id: 4, name: "Amelia", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 5, name: "Andrés", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 6, name: "Angelo", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 7, name: "Bhavani V", skill: "Junior Full-Stack Web Developer", prefernce: "" }, 
        { id: 8, name: "Carson", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 9, name: "Chris", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 10, name: "Cel", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 11, name: "Christian", skill: "Junior Full-Stack Web Developer", prefernce: "" }, 
        { id: 12, name: "Elena", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 13, name: "Ekaynuh", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 14, name: "G", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 15, name: "Jess", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 16, name: "Julian", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 17, name: "Kelvin", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 18, name: "Kevin J", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 19, name: "Kyle", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 20, name: "Leonetti", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 21, name: "Mac", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 22, name: "Matt", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 23, name: "Mcrea", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 24, name: "Mike", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 25, name: "Nana Ama", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 26, name: "Owen", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 27, name: "Ryan", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 28, name: "Scott", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 29, name: "Vic", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 30, name: "Vincent", skill: "Junior Full-Stack Web Developer", prefernce: "" },
        { id: 31, name: "Wonjin", skill: "Junior Full-Stack Web Developer", prefernce: "" }
            
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
                // return [NEWReActor, ...state]

            default: 
                return state
        }
    
    
    }

let store = createStore(reActorReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
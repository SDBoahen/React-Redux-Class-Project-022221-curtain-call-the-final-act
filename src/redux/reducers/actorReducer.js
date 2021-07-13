// actorReducer
export default (state = [], action)=> {


        switch(action.type){

            case "FETCH_US":
                return [...action.payload]
                //return [...state, blastFromThePastActLikeYouKnow()]
            
            default: 
                return state

        }
    
    
}
export const blastFromThePastActLikeYouKnow =()=>{

    return (dispatch)=>{

        fetch('http://localhost:3000/actors')
        .then(resp => resp.json())
        .then(actors => {  console.log("🌀👤💫  ", actors)  //
    
            dispatch({ type: "FETCH_US", payload: actors })
    
        })

    }


        // return fetch('http://localhost:3000/actors')
        // .then(resp => resp.json())
        // .then(actors => {

        //     return({ type: "FETCH_US", payload: actors })

        // })


}




export const addNEWReActor =(reActorToMake)=>{

    return{

        type: "ADD_REACTOR", payload: reActorToMake

    }

}


export const freeReActor =(reActorToFree)=>{

    return{

        type: "FREE_REACTOR", payload: reActorToFree

    }

}





















































// export const editReActor =(reActorToEdit)=>{

//     return{
 
//         type: "EDIT_REACTOR", payload: reActorToEdit

//     }

// }




// export const theBell =()=>{

//     return{  // ***
 
//         type: "RING_THE_BELL"

//     }

// }

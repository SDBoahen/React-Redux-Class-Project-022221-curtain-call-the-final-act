import React from "react";
    import { connect } from "react-redux"


import ReActor from "./ReActor"




function ReActorList(props){  console.log(props) //


    const allOurActors = props.portalForReActors.map(  (actor)=>{  return <ReActor key={actor.id} a={actor} /> }  )
        

        // Chillin w/ Shadow-Clone Sam👥
        // const allOurActors = props.actorAlltoReActorList.map(  (actor)=>{  return <ReActor key={actor.id} a={actor} /> }  )
    

    return(<>
            {allOurActors}
    </>);


        // return(<><h1>YAY! OUR REACTORS</h1>
        
        //   <ReActor/>
        
        // </>);   


} 

    const mapStateToProps =(state)=>{  // 🌀

        return{ portalForReActors: state 
                //portalForReActors={state}
        }

    }

export default connect(mapStateToProps)(ReActorList);
// export default ReActorList
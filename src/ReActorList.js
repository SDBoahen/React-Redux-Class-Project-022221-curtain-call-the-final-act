import React from "react";
    import { connect } from "react-redux"


import ReActor from "./ReActor"




function ReActorList(props){  console.log(props) //


    const allOurActors = props.reduxReActors.map(  (actor)=>{  return <ReActor key={actor.id} a={actor} /> }  )
    // const allOurActors = props.actorAlltoReActorList.map(  (actor)=>{  return <ReActor key={actor.id} a={actor} /> }  )
    

    return(<>
            {allOurActors}
    </>);


        // return(<><h1>YAY! OUR REACTORS</h1>
        
        //   <ReActor/>
        
        // </>);   


} 

    const mapStateToProps =(state)=>{

        return{ reduxReActors: state }

    }

export default connect(mapStateToProps)(ReActorList);
// export default ReActorList
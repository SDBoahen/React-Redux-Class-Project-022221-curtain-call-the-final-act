import React from "react";




function ReActor(props){ 

    const clickHandler=(c)=>{  console.log(c)  }
    
    return(<div> 
        <br></br>
        --------------------------------
        <h2 onClick={clickHandler}>

            🌿{props.a.name}🌿

        </h2>

        <h5> Skill: {props.a.skill} </h5>
        <h4> Preference: { props.a.preference } </h4>
        
        <h6> IS ALSO A REALLY AWESOME PERSON❣️✨</h6>
        --------------------------------
        <br></br>
    </div>);   

} 
export default ReActor
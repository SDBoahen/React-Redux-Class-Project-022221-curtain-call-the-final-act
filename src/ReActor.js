import React from "react";


import { connect } from 'react-redux'
import { freeReActor } from './redux/actions/index.js'




function ReActor(props){  console.log(props)  //


    const clickHandler=(e)=>{  //console.log(e);  //
      // console.log(e.target.innerText)


        if(e.target.matches("h2")){ console.log(e.target.innerText) }
        
        if(e.target.matches("button")){ console.log(e.target.innerText) 
        
            props.freeReActor(props.a)

        } 
        
    
    } 
    

    return(<div> 
        <br></br>
        --------------------------------
        {/* PLAY WITH A DIVV : INNER HTMLT NONO  */}
        <h2 onClick={clickHandler}>
            🌿{props.a.name}🌿
        </h2>

        <h5> Skill: {props.a.skill} </h5>
        <h4> Preference: { props.a.prefernce } </h4>
        
        <h6> IS ALSO A REALLY AWESOME PERSON❣️✨</h6>

        <button onClick={clickHandler}>🌌Free ReActor🌌</button><br/>
        --------------------------------
        <br></br>
    </div>);   

} 
export default connect(null, { freeReActor })(ReActor);
// export default ReActor















{/* <button onClick={()=>{ console.log(props.a.name) }}>🌌Free ReActor🌌</button><br/> */}

{/* <button onClick={clickHandler}>🌌Free ReActor🌌</button><br/> */}
        







// export default connect(null, { freeReActor })(ReActor);








// const clickHandler=(e)=>{  console.log(e)  }


// const clickHandler=(e)=>{  //console.log(e.target)  //  
    

//     if(e.target.matches("h2")){ console.log(e.target.innerText) }  //
    

//     if(e.target.matches("button")){ console.log(e.target.innerText) }  //
//     // if(e.target.matches("button")){ console.log(e.target.innerText)  // 
    
//     //     props.freeReActor(props.a)  

//     // }
    
// }























import { Component } from "react";

import { connect } from 'react-redux'

import { blastFromThePastActLikeYouKnow } from './redux/actions/index.js'



class BlastFromThePastActLikeYouKnowww extends Component{ 


    constructor(props){ super(props);
 
        this.state={ rememberUS: [] }

    }
    componentDidMount(){

        
        this.props.blastFromThePastActLikeYouKnow()
        
            //this.setState({ rememberUS: this.props.fetchUS() })
            //console.log(this.props.fetchUS())
    
    
    }
    render(){ console.log(this.props)
        
        const us = this.props.portalForActors.map(  (actor)=>{  return(<>

        <h2 id="lesseeee" data-id={actor.id}>{actor.name}</h2>
        <img src={actor.image} alt="" class="actor-icon" />
        π<p>{actor.likes} Cheers </p>π 
        <button data-id={actor.id} class="like-btn">β¨ππCHEER!ππβ¨</button>
        <button data-id={actor.id} class="edit-btn"> π­EDIT THIS ACTORπ© </button>
        <button data-id={actor.id} class="delete-btn"> DELETE?ππ«π </button>


        </>)  }  )
        // const us = this.props.portalForActors.map(  (actor)=>{  return(<><h2>πβ¨</h2></>)  }  )
        // const us = <h2>πβ¨</h2>

        return(<>

        <h1>βοΈπβ¨</h1>
        {us}


        </>);

    }
    
}


const mapStateToProps =(state)=>{ // π

    return{
        portalForActors: state.actors
        //X// portalForActors: state
    }

}
const mapDispatchToProps =(dispatch)=>{

    // return{

    //     fetchUS: ()=>{

    //         fetch('http://localhost:3000/actors')
    //         .then(resp => resp.json())
    //         .then( (actors) =>{ 
    //             dispatch({ type: "FETCH_US", payload: actors})  
    //         })

    //     }

    // }
}
export default connect(mapStateToProps, { blastFromThePastActLikeYouKnow })(BlastFromThePastActLikeYouKnowww)
    // export default connect(null, { blastFromThePastActLikeYouKnow })(BlastFromThePastActLikeYouKnowww)
        // export default connect(null, mapDispatchToProps)(BlastFromThePastActLikeYouKnowww)
















// const us = this.props.portalForActors.map(  (actor)=>{  return(<>

//     <h2 id="lesseeee" data-id={actor.id}>${actor.name}</h2>
//     <img src={actor.image} alt="" class="actor-icon" />
//     π<p>{actor.likes} Cheers </p>π 
//     <button data-id={actor.id} class="like-btn">β¨ππCHEER!ππβ¨</button>
//     <button data-id={actor.id} class="edit-btn"> π­EDIT THIS ACTORπ© </button>
//     <button data-id={actor.id} class="delete-btn"> DELETE?ππ«π </button>


// </>)  }  )
// const us = this.props.portalForActors.map(  (actor)=>{  return(<><h2>{actor.name}</h2></>)  }  )
// const us = this.props.portalForActors.map(  (actor)=>{  return(<><h2>πβ¨</h2></>)  }  )


// const mapStateToProps =(state)=>{  // π

//     return{ 
//             //portalForActors: state
//             portalForActors: state.actors  

//     }

// }


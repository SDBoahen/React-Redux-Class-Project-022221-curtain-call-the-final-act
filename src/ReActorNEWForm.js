// import React from "react"
import { Component } from "react"

import { addNEWReActor } from './redux/actions/index.js'
// src/redux/actions/index.js
// copy path relative  {{ smok }}

import { connect } from 'react-redux'



class ReActorNEWForm extends Component{


    constructor(props){ super(props);
        
        this.state={ name: "" }

    }
    

    submitHandler=(e)=>{ e.preventDefault() 
    
    
        console.log("IN THE FORM - Name:  ", this.state.name)

        
        this.props.addNEWReActor( this.state )
            //X// this.props.reActorNameSUBMIT(this.state.name)
        
    
    }
    onChangeHandler=(e)=>{ //console.log("typing...") 

        console.log(e.target.name, "  ::  ", e.target.value) 

        this.setState({ [e.target.name]: e.target.value })


        //  *  //  How Would We Clear the Form??👀 //
        

    }
    //  local --
    ringTheBell=()=>{

        
        if(this.props.theBell){  

            this.props.theBell()  

        }


    }  


    ////////


    render(){  //console.log(this.props);  //console.log("(ding!)") 


        return(<>
        
        <div>

            <form onSubmit={this.submitHandler}>

                <input type="text" placeholder="name" value={this.state.name} onChange={this.onChangeHandler}
                    name="name"
                />
                <input type="submit" value="🌳🍃VVVWEHLCUHM TO THE JUNGLE!🌳🍃"/>
            </form>

                <h1 onClick={this.ringTheBell}>🔔🎋</h1>
                <h1                           >🍃🎋</h1>
                <h1 onClick={this.ringTheBell}>🔔🎋</h1>
                <h1                           >🍃🎋</h1>
                <h1 onClick={this.ringTheBell}>🔔🎋</h1>
                <h1                           >🍃🎋</h1>
                <h1 onClick={this.ringTheBell}>🔔🎋</h1>
                <h1                           >🍃🎋</h1>
            
        </div>

    </>);}

}

const mapDispatchToProps =(dispatch)=>{

    return{

        addNEWReActor: newReActor=> dispatch(addNEWReActor(newReActor))

    }

}
//  *** THEN SHOW THE FANCY SINTAX SUGAR WAY ***

export default connect(null, mapDispatchToProps)(ReActorNEWForm);  //  < ReActorNEWForm />
    // export default connect(null, { addNEWReActor })(ReActorNEWForm);
// export default ReActorNEWForm
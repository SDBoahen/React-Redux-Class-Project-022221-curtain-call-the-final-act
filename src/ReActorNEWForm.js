import { Component } from "react"


import { connect } from 'react-redux'  //  💫🌀💫

import { addNEWReActor } from './redux/actions/index.js'
    // src/redux/actions/index.js
    // copy path relative✨👌🏾 
// import { addNEWReActor, theBell } from './redux/actions/index.js'





class ReActorNEWForm extends Component{


    constructor(){ super();
        
        this.state={ name: "", skill: "", prefernce: "" }

    }
    

    submitHandler=(e)=>{ e.preventDefault() 
    
    
        console.log("IN THE FORM - Name:  ", this.state.name)
        console.log("IN THE FORM - Skill:  ", this.state.skill)
        console.log("IN THE FORM - Preference:  ", this.state.prefernce)

        
        this.props.addNEWReActor( this.state )
            //X// this.props.reActorNameSUBMIT(this.state.name)
        
    
    }
    onChangeHandler=(e)=>{ //console.log("typing...") 

        console.log(e.target.name, "  ::  ", e.target.value)  //

            this.alertMe(e.target.value)  // For Contrlled Fucntionaliyy 

        this.setState({ [e.target.name]: e.target.value })


        //  *  //  How Would We Clear the Form??👀 //
        

    }
    //  local --
    ringTheBell=()=>{

        
        if(this.props.theBell){  

            this.props.theBell()  

        }


    }  
    alertMe=(typingInput)=>{  if(typingInput.toLowerCase() === "sam" || typingInput.toLowerCase() === "mac"){ console.log("Hey-AWESOME PERSON!😉👉✨🖱") }  }
        // ( T && T )
        // ( T/F || T/F )
        // ( T/F || T/F || T/F || T/F || T/F || T/F || T/F || T/F ) = GO!

    ////////


    render(){  //console.log(this.props);  //console.log("(ding!)") 


        return(<>
        
        <div>

            <form onSubmit={this.submitHandler}>

                <input type="text" placeholder="Name" value={this.state.name} onChange={this.onChangeHandler}
                    name="name"
                />
                <input type="text" placeholder="Skill" value={this.state.skill} onChange={this.onChangeHandler}
                    name="skill"
                />
                <input type="text" placeholder="Prefernce" value={this.state.prefernce} onChange={this.onChangeHandler}
                    name="prefernce"
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
export default connect(null, { addNEWReActor })(ReActorNEWForm);  
//  Syntax Sugar😋✨




    // const mapDispatchToProps =(dispatch)=>{

    //     console.log("========    ", dispatch.action)  // 

    //     return{ 
    //         // if(dispatch)
    //         addNEWReActor: (newReActor)=> dispatch(addNEWReActor(newReActor))

    //     }

    // }


// export default connect(null, mapDispatchToProps)(ReActorNEWForm);  
//  < ReActorNEWForm />
// export default ReActorNEWForm
import React,{useState} from "react";


const Drag = ()=>{
    const [Mani, Setmani] = useState();

    const Access = (event)=>{
        Setmani(event.target.value)
        
    }
   
   
    return(
        <div className ="base bg-dark">
        <div className ="ground bg-Secondary p-2 "> 
        <h1 className ="text-info text-center">
            {Mani === "Signin" ? "Sign in": "Log in" }</h1>  
        <input onChange={Access} className ="mt-3" type="text" placeholder="first name"/>
        <input onChange={Access} className ="mt-3" type=
        "text"placeholder="Last name" />
        <input onChange={Access} className ="mt-3" type="email" placeholder="Email" />
        <input onChange={Access} className ="mt-3" type="password" placeholder="Password" />
        <input onChange={Access} className ="mt-3" type="password" placeholder="Confirm password" />
       <span className="button">
        <button onClick={()=>{Setmani("Signin")}} class = "btn btn-info mt-4 float-left manibtn">Sign in</button>
        <button onClick={()=>{Setmani("Login")}} class = "btn btn-info mt-4 float-right manibt">Log in</button>
        </span>
        </div>
        </div>
    )
}
export default Drag;
import { Component } from "react";
import User from "./user";
import UserClass from "./userClass";
import UserContext from "../utils/UserContext";
class About  extends Component
{
    constructor(props){
        super(props);

console.log("parent constructor"); 
   }
componentDidMount(){
    console.log("parent componenet did amount") 

}
    render(){
        console.log("parent render");
        return(
            <div className="app">
            <div>
            loggedInUser
                <UserContext.Consumer>
                    {({loggedInUser})=>
                    (
<h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
                </div>   
            <h1>About</h1>
            <UserClass name={"first"} />

        </div>
        )
    }
}

export default About; 
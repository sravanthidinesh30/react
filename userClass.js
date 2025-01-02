
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
          this.state={
          userInfo:{
            name:"dummy",
        location:"default",
        userid:"userid",
        avatar_url:"https//dumy-photo",
        
          },
        };
        
console.log(this.props.name + "child constructor");
    
    }
  
   async componentDidMount(){
       console.log(this.props.name +"child Component Did amount"); 
       const data =await fetch("https://api.github.com/users/sravanthidinesh30");
       const json = await data.json();
       console.log(json);
       this.setState({
        userInfo: json,
       });
    }
    componentDidUpdate(){
      console.log("console Did update");
    }
    componentWillUnmount(){
      console.log("component will unamount");
    }
    render(){
       console.log(this.props.name +"child render");
        //const {name}=this.props;
       // const {count,count1}=this.state;
const {name, location,login,avatar_url}=this.state.userInfo;
        return <div className="userClass-card">
          { /* <h2>Count:{count}</h2>
            <button onClick={()=>{
               //never update state variable directly
               this.setState({
         count:this.state.count+1,
               }) 
            }}>count increase</button>*/}
<img src={avatar_url}/>
<h3>Name:{name}</h3>
<h4>location:{location}</h4>
  <h5>contact:{login}</h5>
        </div>
    }
}
export default UserClass;
import React, { useEffect } from "react";
import { useState } from "react";
const User=({name})=>{
    const [count, setCount] = useState(0);


    useEffect(()=>{
//Api calls
    },[]);

  
 

    return (
        <div className="user-card">
            <h1>Count= {count  }</h1>
            <button
            onClick={()=>{setCount(1);
                
            }} ></button>
<h2>name:{name}</h2>
<h3>location:Miryalaguda</h3>
<h4>contact: sravanthidinesh30@gmail.com</h4>
        </div>
    )
}
export default User;
import { useEffect, useState } from "react";

const About = () => {
    const[value,setValue] = useState(0);
useEffect(() => {
    console.log("init....");
    return () => { console.log("unmount..");};
}, []);
return(
    <>
<div>
    <h3>About</h3>
    <p>Value :{value}</p>
    <button onClick={()=>setValue(value+1)}>Push</button>
</div>
    </>

    
);



};


export default About;





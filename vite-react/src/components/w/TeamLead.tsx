import { useState , createContext} from "react";
import Senior from "./Senior";

const TeamLead = () => {
    const[task,setTask] = useState("");
   
    const saveContext = () => {

       const MyContext = createContext(task);
        console.log(MyContext);
    }
    return ( <>
<Senior />
<p>{task}</p>
<input type="text" value={task} onChange={(ev)=>{
    setTask(ev.target.value)
}}/>
<button onClick={saveContext}>Push</button>
    </>
    );
};
export default TeamLead
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Message from "./components/Message";
import Film from "./components/myFilm";
import Bio from "./components/bio";
//import Service from "./components/Service";

function Test() {

return React.createElement("p",
  {
  id: "my-p",  
},
  
"Hello React ",
  
React.createElement("button", { disabled: "true" }, "OK")
  
);
  
  }

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      <div className="card">
       <p>{count}</p> 
        <button onClick={() => setCount((count) => count + 1)}>
        +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
        -
        </button>
    
      </div>
      
     <Film name="aaa" fio="bbb" year="ccc" studio="ddd" poster="eee"/>
     <Bio name = "aaaa" number ="bbb" mail="ccc" city="ddd" work="eee" skill="fff" img="img"/>
    
    
    
     




      


    </>
  );
}

export { App, Test };
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import Message from "./components/Message";
//import Service from "./components/Service";
import Car from "./components/Car";
import Menu from "./components/Menu";
import Clock from "./components/hw/Clock";
import Film from "./components/hw/myFilm";
import Bio from "./components/hw/bio";
import Pet from "./components/hw/Pet";

// import moment from 'moment';
// import timezone from 'moment-timezone'



// return React.createElement("p",
//   {
//   id: "my-p",  
// },
  
// "Hello React ",
  
// React.createElement("button", { disabled: "true" }, "OK")
  
// );
  
//   }

function App() {
  const [count, setCount] = useState(0);

  const pets = [
    {
      name: 'Fluffy',
      age: 2,
      breed: 'Persian',
      favoriteFood: 'Salmon',
      color: 'White'
    }
  ];

  return (
    <>
    <Menu />

    {/*HW*/}
    <Clock />
    <Film name="Marvel" fio="..." year="2020" studio="Marvel" poster="eee"/>
     <Bio name = "Oleksii" number ="066666666" mail="ghosty@icloud.com" city="Odessa" work="eee" skill="fff" img="img"/>

    <div>
      {pets.map((pet, index) => (
        <Pet key={index} pet={pet} />
      ))}
    </div>
  

    
      {/* <div>
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
      
      <About /> */}
     {/* <Film name="aaa" fio="bbb" year="ccc" studio="ddd" poster="eee"/>
     <Bio name = "aaaa" number ="bbb" mail="ccc" city="ddd" work="eee" skill="fff" img="img"/> */}
    
    
    
     
    </>
  );
}

export { App};
import React, { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./components/hw/Clock";
import ClubInfo from "./components/hw/Club/ClubInfo";
import ClubTeam from "./components/hw/Club/ClubTeam";
import ClubAchievements from "./components/hw/Club/ClubAchievements";
import FootballClub from "./components/hw/Club/Football";
import { footballClubs , magicEightBallResponses } from "../../../data/data";
import MagicEightBall from "./components/hw/MagicEightBall";
//import Message from "./components/Message";
//import Service from "./components/Service";
// import Car from "./components/Car";
// import Menu from "./components/Menu";
// import Clock from "./components/hw/Clock";
// import Film from "./components/hw/myFilm";
// import Bio from "./components/hw/bio";
// import Pet from "./components/hw/Pet";

// import ClubInfo from "./components/hw/ClubInfo";

// import FavBand from "./components/FavBand";
// import {
//   BandAlbumsCoversUrls,
//   BandAlbumsNames,
//   BandGenres,
//   BandMembers,
//   BandName,

// } from "./data/data";

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
return (

<>
{/* <ClubInfo clubName="Madrid" City="Madrid" Founded="1999"/> */}
{/* <FootballClub/> */}

{/* <MagicEightBall/> */}
<Clock/>
</>
);
}

export default App;
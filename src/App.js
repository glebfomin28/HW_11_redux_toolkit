import React from 'react';
import './App.css';
import {StarWars} from "./components/StarWars";
import {MyPhoto} from "./components/MyPhoto";

export const App = () => {


  return (
    <div style={{margin: "20px 100px"}}>
      <StarWars/>
      <hr/>
      <MyPhoto/>
    </div>
  );
}


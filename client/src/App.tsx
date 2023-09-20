//import React, {useState, useEffect} from 'react';
//import axios from "axios";

import TimeToBurnAPI from "./components/get_data"
//import {StarWarsCharacter} from './components/starwars_character'

import './App.css';

function App() { 
	
  return (
    <div className="App">
      <header >
        <h1><img src="pngegg.png" width={40} height={40} alt="Stop watch image"/>Time To Burn
		<img src="animated-fire-image-0005.gif" alt="fire image" width={40} height={40} /></h1>
        Learn how much exercise is needed to burn those calories
		</header>
	  <div>
		<TimeToBurnAPI /> 
	  </div>
	 <footer>
		The-4-Returners
	 </footer>
    </div>
  );
}

export default App;

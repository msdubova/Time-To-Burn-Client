//import React, {useState, useEffect} from 'react';
//import axios from "axios";

import StarWarsAPICall from "./components/get_data"
//import {StarWarsCharacter} from './components/starwars_character'

import './App.css';

function App() { 
	
  return (
    <div className="App">
      <header >
        <h1><img src="pngegg.png" width={40} height={40} />Time To Burn
		<img src="animated-fire-image-0005.gif" width={40} height={40} /></h1>
        learn how much exercise is needed to burn those calories
		</header>
	  <div>
		<StarWarsAPICall />
	  </div>
	 <footer>
		The-4-Returners
	 </footer>
    </div>
  );
}

export default App;

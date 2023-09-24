import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";




describe("<App>",  () => {
	
  test("Is title displayed",  () => {
     render(<App />);
	 
	 // note find by text does not get partial strings so just searching for luke fails
     expect( screen.getByText("Time To Burn")).toBeInTheDocument()
  });
  

  test("Is calculate button display?",  () => {
    render(<App />);
  
  // note find by text does not get partial strings so just searching for luke fails
    expect( screen.getByText("Calculate")).toBeInTheDocument()
 });
  
})
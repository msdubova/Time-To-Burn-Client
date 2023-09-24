import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import TimeToBurnAPI from "./get_data";


describe("<TimeToBurnAPI>",  () => {
	
  test("Is heading displayed ?",  () => {
     render(<TimeToBurnAPI />);

     expect( screen.getByText("Calculate")).toBeInTheDocument()
  });
  
})
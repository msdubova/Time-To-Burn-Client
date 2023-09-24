import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import TimeToBurnAPI from "./get_data";


describe("<TimeToBurnAPI>",  () => {
	
  test("Is button  ?",  () => {
     render(<TimeToBurnAPI />);

     expect( screen.getByText("Calculate")).toBeInTheDocument()
  });
  

  test("Is submit button disabled at start ?",  () => {
    render(<TimeToBurnAPI />);

    expect( screen.getByRole("button")).toHaveAttribute('disabled')
 });

})
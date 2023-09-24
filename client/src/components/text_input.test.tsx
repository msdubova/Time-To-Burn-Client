import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';

import "@testing-library/jest-dom";

import {TextInput} from "./text_input";
import { toBeVisible } from "@testing-library/jest-dom/matchers";


describe("<TextInput>",  () => {
	
    test("renders component",  () => {
	
	    const props ={
            onChangeText:jest.fn(),
            value:""
	   };
	
        render(<TextInput {...props} />);

	    const tb = screen.getByRole('textbox');
	    expect(tb).toBeInTheDocument()
    });


    
   test("onChange called ?", async  () => {

        const mockChange = jest.fn()
	
	    const props ={
            onChangeText:mockChange,
            value:""
	   };
	
        render(<TextInput {...props} />);

        await user.type(screen.getByRole('textbox'), 'egg');

	    const tb = screen.getByRole('textbox');
	    expect(mockChange).toHaveBeenCalledTimes(3)
    });
  
})
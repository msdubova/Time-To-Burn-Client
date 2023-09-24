import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';

import "@testing-library/jest-dom";

import {TextInput} from "./text_input";


describe("<TextInput>",  () => {
	
    test("renders component",  () => {
	
	    const props ={
            "numberOfBeings":"",
            onChangeText:jest.fn(),
            validate:jest.fn(),
            value:""
	   };
	
        render(<TextInput {...props} />);

	    const st = screen.getByRole('textbox');
	    expect(st).toBeInTheDocument()
    });


    
   test("onChange called ?", async  () => {

        const mockChange = jest.fn()
	
	    const props ={
            "numberOfBeings":"",
            onChangeText:mockChange,
            validate:jest.fn(),
            value:""
	   };
	
        render(<TextInput {...props} />);

        await user.type(screen.getByRole('textbox'), 'egg');

	    const st = screen.getByRole('textbox');
	    expect(mockChange).toHaveBeenCalledTimes(3)
    });
  
})
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


import URL from "../util/url"

import {DisplayResults} from "./display_results";


const server = setupServer(
  rest.get( URL , (req, res, ctx) => {
    return res(ctx.json({ name: "Luke Skywalker", height:"172", birth_year:"19BBY", eye_colour:"blue" }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe("<DisplayResults>",  () => {
	
    test("Is displayed ?",  () => {
        //render(<DisplayResults />);
  
        //expect( screen.getByText("Calculate")).toBeInTheDocument()
    });
  
  /*
  test("on server error 500,  correct error message", async () => {
    server.use(
      rest.get(URL , (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<App />);
    expect(await screen.findByText(ERROR_500)).toBeInTheDocument();
  });

  test("on server error 418,  correct error message", async () => {
    server.use(
      rest.get(URL, (req, res, ctx) => {
        return res(ctx.status(418));
      })
    );
    render(<App />);
    expect(await screen.findByText(ERROR_418)).toBeInTheDocument();
  });
  */
})
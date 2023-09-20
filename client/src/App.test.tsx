import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import {ERROR_500, ERROR_418} from "./util/error_codes"

import URL from "./util/url"

import App from "./App";


const server = setupServer(
  rest.get( URL , (req, res, ctx) => {
    return res(ctx.json({ name: "Luke Skywalker", height:"172", birth_year:"19BBY", eye_colour:"blue" }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe("<App>",  () => {
	
  test("if works stars wars api call works, should say Luke Skywalker", async () => {
     render(<App />);
	 
	 // note find by text does not get partial strings so just searching for luke fails
     expect(await screen.findByText("Name:Luke Skywalker")).toBeInTheDocument()
  });
  
  
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
  
})
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


import URL from "../util/url"

import {DisplayResults} from "./display_results";

const PARAM_TEXT = "2 apples 400g chicken"

const URL_WITH_PARAM = URL + encodeURIComponent(PARAM_TEXT)

const server = setupServer(
  rest.get( URL_WITH_PARAM , (req, res, ctx) => {
    return res(ctx.json({ 
      "items": [
        {
          "name": "apples",
          "calories": 194.5,
          "serving_size_g": 364,
          "fat_total_g": 0.6,
          "fat_saturated_g": 0.1,
          "protein_g": 0.9,
          "sodium_mg": 3,
          "potassium_mg": 40,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 50.1,
          "fiber_g": 8.6,
          "sugar_g": 37.7
        },
        {
          "name": "chicken",
          "calories": 445.3,
          "serving_size_g": 200,
          "fat_total_g": 25.8,
          "fat_saturated_g": 7.3,
          "protein_g": 47.5,
          "sodium_mg": 144,
          "potassium_mg": 358,
          "cholesterol_mg": 184,
          "carbohydrates_total_g": 0.1,
          "fiber_g": 0,
          "sugar_g": 0
        }
      ],
      "total_calories": 639.8,
      "exercises": [
        {
          "name": "Running",
          "calsPerHour": 1074,
          "time_to_burn_total_cals": {
            "seconds": 2144.58,
            "minutes": 35.74,
            "hours": 0.6
          }
        },
        {
          "name": "Jump Rope",
          "calsPerHour": 1070,
          "time_to_burn_total_cals": {
            "seconds": 2152.6,
            "minutes": 35.88,
            "hours": 0.6
          }
        },
        {
          "name": "Taekwondo",
          "calsPerHour": 937,
          "time_to_burn_total_cals": {
            "seconds": 2458.14,
            "minutes": 40.97,
            "hours": 0.68
          }
        },
        {
          "name": "Swimming",
          "calsPerHour": 892,
          "time_to_burn_total_cals": {
            "seconds": 2582.15,
            "minutes": 43.04,
            "hours": 0.72
          }
        },
        {
          "name": "Running up Stairs",
          "calsPerHour": 819,
          "time_to_burn_total_cals": {
            "seconds": 2812.31,
            "minutes": 46.87,
            "hours": 0.78
          }
        }
      ]
    }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe("<DisplayResults>",  () => {
	
  /*
    test("Is displaying at all ?",  async () => {
        render(<DisplayResults text={PARAM_TEXT}/>);
  
        expect( await screen.findByText("Food Details:")).toBeInTheDocument() 
    });
  */

    test("Is showing food ?",  async () => {
      render(<DisplayResults text={PARAM_TEXT}/>);

      expect( await screen.findByText("apples")).toBeInTheDocument() 
      expect( await screen.findByText("chicken")).toBeInTheDocument() 
  });

  test("Is showing exercise details?",  async () => {
    render(<DisplayResults text={PARAM_TEXT}/>);

    //expect( await screen.findByText("Exercise Details:")).toBeInTheDocument() 
    expect( await screen.findByText("Running")).toBeInTheDocument() 
    expect( await screen.findByText("Jump Rope")).toBeInTheDocument() 
    expect( await screen.findByText("Taekwondo")).toBeInTheDocument() 
    expect( await screen.findByText("Swimming")).toBeInTheDocument() 
    expect( await screen.findByText("Running up Stairs")).toBeInTheDocument() 
  });

 
  test('handles connection error', async () => {
    server.use(
      // override the initial "GET /greeting" request handler
      // to return a 500 Server Error
      rest.get(URL_WITH_PARAM, (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )

    render(<DisplayResults text={PARAM_TEXT}/>);

    expect( await screen.findByText("Error:") ).toBeInTheDocument()  
    // ...
  })

  test('handles server error(eg invalid params)', async () => {

    const WRONG_PARAM_TEXT = "2apples400gchicken" // user forgot the spaces
    const URL_WITH_WRONG_PARAM = URL+WRONG_PARAM_TEXT

    server.use(
      // override the initial "GET /greeting" request handler
      // to return a 500 Server Error
      rest.get(URL_WITH_WRONG_PARAM, (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )

    render(<DisplayResults text={WRONG_PARAM_TEXT}/>);

    expect( await screen.findByText("Error:") ).toBeInTheDocument()  
    // ...
  })



})
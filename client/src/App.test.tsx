import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import App from "./App";

describe("<App>", () => {
  test("Is heading displayed ?", () => {
    render(<App />);

    expect(screen.getByText("Time To Burn")).toBeInTheDocument();
  });
});

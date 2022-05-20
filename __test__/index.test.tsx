import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("should render 'Pokemon' in header", () => {
    render(<Home pokemons={[]} />);
    const headingElement = screen.getByText(/Bulbasaur/i);
    expect(headingElement).toBeInTheDocument();
  });
});

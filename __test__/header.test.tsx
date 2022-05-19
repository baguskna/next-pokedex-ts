import { render, screen } from "@testing-library/react";
import Header from "../components/header";

describe("Header", () => {
  it("should render 'Pokemon' in header", () => {
    render(<Header />);
    const headingElement = screen.getByText(/Pokemon/i);
    expect(headingElement).toBeInTheDocument();
  });
});

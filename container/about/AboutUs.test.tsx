import { render, screen } from "@testing-library/react";
import AboutUs from "@/container/about/AboutUs";

describe("AboutUs", () => {
  it("renders the about us section title", () => {
    render(<AboutUs />);
    expect(screen.getByText("Nosotros")).toBeInTheDocument();
  });
});

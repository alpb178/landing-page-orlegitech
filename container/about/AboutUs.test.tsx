import { render, screen } from "@testing-library/react";
import { AboutUs } from "@/container/about/AboutUs";

describe("AboutUs", () => {
  it("renders the about us section title", () => {
    render(<AboutUs />);
    expect(screen.getByText("Sobre nosotros")).toBeInTheDocument();
  });

  it("lets the text card grow below the lg breakpoint", () => {
    render(<AboutUs />);
    const textCard = screen
      .getByText("Expertos en tecnología aplicada al golf")
      .closest("div");
    expect(textCard).toHaveClass("h-auto", "lg:h-[500px]");
    expect(textCard).not.toHaveClass("h-[500px]");
  });
});

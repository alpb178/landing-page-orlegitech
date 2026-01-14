import { render, screen } from "@testing-library/react";
import IrrigationPlanningContainer from "./IrrigationPlanning";

describe("IrrigationPlanningContainer", () => {
  it("renders the main title", () => {
    render(<IrrigationPlanningContainer />);
    const headings = screen.getAllByText(/Riego Inteligente/);
    expect(headings.length).toBeGreaterThan(0);
    // Check that at least one is an h2
    const h2Heading = headings.find(
      (el) => el.tagName === "H2" && el.textContent?.includes("Riego Inteligente")
    );
    expect(h2Heading).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<IrrigationPlanningContainer />);
    expect(screen.getByText(/Humedad de green/)).toBeInTheDocument();
    expect(screen.getByText(/Clima/)).toBeInTheDocument();
    expect(screen.getByText(/Tarifas de luz/)).toBeInTheDocument();
    expect(screen.getByText(/Recomendación de riego/)).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<IrrigationPlanningContainer />);
    const image = screen.getByAltText("Riego inteligente");
    expect(image).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { IrrigationPlanningContainer } from "./IrrigationPlanning";

describe("IrrigationPlanningContainer", () => {
  it("renders the main title", () => {
    render(<IrrigationPlanningContainer />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Riego Inteligente/,
      })
    ).toBeInTheDocument();
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

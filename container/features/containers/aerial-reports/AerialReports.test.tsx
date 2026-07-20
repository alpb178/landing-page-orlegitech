import { render, screen } from "@testing-library/react";
import { AerialReportsContainer } from "./AerialReports";

describe("AerialReportsContainer", () => {
  it("renders the main title", () => {
    render(<AerialReportsContainer />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Dron y Análisis Multiespectral/,
      })
    ).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<AerialReportsContainer />);
    expect(screen.getByText(/Vuelos de dron de alta precisión/)).toBeInTheDocument();
    expect(screen.getByText(/Cámara multiespectral: salud real del césped/)).toBeInTheDocument();
    expect(screen.getByText(/Análisis con inteligencia artificial/)).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<AerialReportsContainer />);
    const image = screen.getByAltText("Análisis aéreo con dron");
    expect(image).toBeInTheDocument();
  });
});

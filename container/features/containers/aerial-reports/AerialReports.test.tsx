import { render, screen } from "@testing-library/react";
import AerialReportsContainer from "./AerialReports";

describe("AerialReportsContainer", () => {
  it("renders the main title", () => {
    render(<AerialReportsContainer />);
    const headings = screen.getAllByText(/Dron y Análisis Multiespectral/);
    expect(headings.length).toBeGreaterThan(0);
    // Check that at least one is an h2
    const h2Heading = headings.find(
      (el) => el.tagName === "H2" && el.textContent?.includes("Dron y Análisis Multiespectral")
    );
    expect(h2Heading).toBeInTheDocument();
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

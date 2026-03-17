import { render, screen } from "@testing-library/react";
import AerialReportsService from "@/container/services/AerialReportsService";

describe("AerialReportsService", () => {
  it("renders the page title", () => {
    render(<AerialReportsService />);
    expect(screen.getByText("Tu césped bajo control.")).toBeInTheDocument();
  });

  it("renders the badge label", () => {
    render(<AerialReportsService />);
    expect(screen.getByText("Informes aéreos")).toBeInTheDocument();
  });

  it("renders the CTA with highlighted text", () => {
    render(<AerialReportsService />);
    expect(screen.getByText("antes")).toBeInTheDocument();
    expect(screen.getByText("Ver planes")).toBeInTheDocument();
  });

  it("renders description paragraphs", () => {
    render(<AerialReportsService />);
    expect(screen.getByText(/Análisis aéreo para la salud del césped/)).toBeInTheDocument();
    expect(screen.getByText(/Medimos productividad en exteriores/)).toBeInTheDocument();
  });

  it("renders the aerial reports detail image", () => {
    render(<AerialReportsService />);
    const img = screen.getByAltText("Informes aéreos");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/services/aerial-reports-detail.png");
  });
});

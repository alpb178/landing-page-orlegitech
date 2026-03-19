import { render, screen } from "@testing-library/react";
import AppService from "@/container/services/AppService";

describe("AppService", () => {
  it("renders the page title", () => {
    render(<AppService />);
    expect(screen.getByText("Tu club, digitalizado al completo.")).toBeInTheDocument();
  });

  it("renders the badge label", () => {
    render(<AppService />);
    expect(screen.getByText("Aplicación móvil OrlegiTech")).toBeInTheDocument();
  });

  it("renders the CTA with highlighted text", () => {
    render(<AppService />);
    expect(screen.getByText("inteligente.")).toBeInTheDocument();
    expect(screen.getByText("Ver planes")).toBeInTheDocument();
  });

  it("renders description paragraphs", () => {
    render(<AppService />);
    expect(screen.getByText(/OrlegiTech centraliza toda la gestión/)).toBeInTheDocument();
    expect(screen.getByText(/equipo de mantenimiento trabaja/)).toBeInTheDocument();
    expect(screen.getByText(/Todo accesible desde el móvil/)).toBeInTheDocument();
  });

  it("renders the Ver planes link", () => {
    render(<AppService />);
    const link = screen.getByText("Ver planes").closest("a");
    expect(link).toHaveAttribute("href", "#pricing");
  });
});

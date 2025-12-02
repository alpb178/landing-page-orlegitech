import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders all main sections", () => {
    render(<Home />);

    // Check for main sections using getAllByText since text appears multiple times
    const orlegitechElements = screen.getAllByText("orlegitech");
    expect(orlegitechElements.length).toBeGreaterThan(0);

    const serviciosElements = screen.getAllByText("Servicios");
    expect(serviciosElements.length).toBeGreaterThan(0);

    expect(screen.getByText("Nosotros")).toBeDefined();
  });

  it("renders navigation", () => {
    render(<Home />);
    // Sobre nosotros appears in header and footer, so use getAllByText
    const navLinks = screen.getAllByText("Sobre nosotros");
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it("renders footer with copyright", () => {
    render(<Home />);
    expect(screen.getByText(/Copyright/i)).toBeDefined();
  });
});

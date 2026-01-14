import { render, screen } from "@testing-library/react";
import ProjectManagementContainer from "./ProjectManagement";

describe("ProjectManagementContainer", () => {
  it("renders the main title", () => {
    render(<ProjectManagementContainer />);
    const headings = screen.getAllByText(/Gestión de Proyectos/);
    expect(headings.length).toBeGreaterThan(0);
    // Check that at least one is an h2
    const h2Heading = headings.find(
      (el) => el.tagName === "H2" && el.textContent?.includes("Gestión de Proyectos")
    );
    expect(h2Heading).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<ProjectManagementContainer />);
    // Get all h3 headings
    const allHeadings = screen.getAllByRole("heading");
    const h3Headings = allHeadings.filter((h) => h.tagName === "H3");
    
    // Find h3 that contains "Proyectos" but not "Gestión de Proyectos"
    const proyectosH3 = h3Headings.find((h) => {
      const text = h.textContent || "";
      return text.includes("Proyectos") && !text.includes("Gestión de Proyectos");
    });
    expect(proyectosH3).toBeDefined();
    expect(proyectosH3?.textContent).toContain("Proyectos");
    
    expect(screen.getByText(/Tareas/)).toBeInTheDocument();
    expect(screen.getByText(/Checklist/)).toBeInTheDocument();
    expect(screen.getByText(/Chrono/)).toBeInTheDocument();
    expect(screen.getByText(/Gastos/)).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<ProjectManagementContainer />);
    const image = screen.getByAltText("Gestión de proyectos");
    expect(image).toBeInTheDocument();
  });
});

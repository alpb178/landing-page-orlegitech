import { render, screen } from "@testing-library/react";
import { BudgetsContainer } from "./Budgets";

describe("BudgetsContainer", () => {
  it("renders the main title", () => {
    render(<BudgetsContainer />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Presupuestos y Productos/,
      })
    ).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<BudgetsContainer />);
    // Get all h3 headings
    const allHeadings = screen.getAllByRole("heading");
    const h3Headings = allHeadings.filter((h) => h.tagName === "H3");
    
    // Find h3 that contains "Presupuestos" but not "Presupuestos y Productos"
    const presupuestosH3 = h3Headings.find((h) => {
      const text = h.textContent || "";
      return text.includes("Presupuestos") && !text.includes("Presupuestos y Productos");
    });
    expect(presupuestosH3).toBeDefined();
    expect(presupuestosH3?.textContent).toContain("Presupuestos");
    
    // Find h3 that contains "Productos" but not "Presupuestos y Productos"
    const productosH3 = h3Headings.find((h) => {
      const text = h.textContent || "";
      return text.includes("Productos") && !text.includes("Presupuestos y Productos");
    });
    expect(productosH3).toBeDefined();
    expect(productosH3?.textContent).toContain("Productos");
  });

  it("renders the image", () => {
    render(<BudgetsContainer />);
    const image = screen.getByAltText("Presupuestos y productos");
    expect(image).toBeInTheDocument();
  });
});

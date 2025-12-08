import { render, screen } from "@testing-library/react";
import AboutUs from "@/container/about/AboutUs";

describe("AboutUs", () => {
  it("renders the about us section title", () => {
    render(<AboutUs />);
    expect(screen.getByText("Nosotros")).toBeInTheDocument();
  });

  it("renders all feature items", () => {
    render(<AboutUs />);
    expect(screen.getByText("Informes aéreos")).toBeInTheDocument();
    expect(screen.getByText("Gestión de tareas")).toBeInTheDocument();
    expect(screen.getByText("Flota de vehículos")).toBeInTheDocument();
    expect(screen.getByText("Planificación de riego")).toBeInTheDocument();
    expect(screen.getByText("Control de proyectos")).toBeInTheDocument();
    expect(screen.getByText("Gestión de operarios")).toBeInTheDocument();
    expect(screen.getByText("Presupuestos")).toBeInTheDocument();
    expect(screen.getByText("Fichaje de usuarios")).toBeInTheDocument();
  });
});

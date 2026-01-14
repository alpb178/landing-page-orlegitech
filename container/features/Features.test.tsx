import { render, screen, waitFor } from "@testing-library/react";
import Features from "@/container/features/features";

describe("Features", () => {
  it("renders all feature items", async () => {
    render(<Features />);
    await waitFor(() => {
      expect(screen.getByText("Informes aéreos")).toBeInTheDocument();
    });
    expect(screen.getByText("Asistente IA")).toBeInTheDocument();
    expect(screen.getByText("Flota de vehículos")).toBeInTheDocument();
    expect(screen.getByText("Planificación de riego")).toBeInTheDocument();
    expect(screen.getByText("Control de proyectos")).toBeInTheDocument();
    expect(screen.getByText("Gestión Organizacional y Empleados")).toBeInTheDocument();
    expect(screen.getByText("Presupuestos")).toBeInTheDocument();
    expect(screen.getByText("Fichaje de usuarios")).toBeInTheDocument();
    expect(screen.getByText("Planificación")).toBeInTheDocument();
    expect(screen.getByText("Campo")).toBeInTheDocument();
    expect(screen.getByText("Gestión de Proyectos")).toBeInTheDocument();
  });

  it("renders feature descriptions", async () => {
    render(<Features />);
    await waitFor(() => {
      expect(screen.getByText(/Mapas multiespectrales/)).toBeInTheDocument();
    });
    expect(screen.getByText(/Asistente Virtual del Greenkeeper/)).toBeInTheDocument();
  });

  it("renders feature links", async () => {
    render(<Features />);
    await waitFor(() => {
      const links = screen.getAllByRole("link");
      expect(links.length).toBeGreaterThan(0);
    });
  });
});

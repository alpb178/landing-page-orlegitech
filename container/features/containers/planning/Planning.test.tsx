import { render, screen } from "@testing-library/react";
import PlanningContainer from "./Planning";

describe("PlanningContainer", () => {
  it("renders the main title", () => {
    render(<PlanningContainer />);
    expect(
      screen.getByText(/Planificación: todo el equipo/)
    ).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<PlanningContainer />);
    expect(screen.getByText(/Calendario/)).toBeInTheDocument();
    expect(screen.getByText(/Agenda/)).toBeInTheDocument();
    expect(screen.getByText(/Vacaciones/)).toBeInTheDocument();
    expect(screen.getByText(/Turnos/)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import ProjectControlContainer from "./ProjectControl";

describe("ProjectControlContainer", () => {
  it("renders the main title", () => {
    render(<ProjectControlContainer />);
    expect(
      screen.getByText(/Control de Proyectos/)
    ).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<ProjectControlContainer />);
    expect(screen.getByText(/Un repositorio documental inteligente/)).toBeInTheDocument();
    expect(screen.getByText(/Documentos vinculados/)).toBeInTheDocument();
    expect(screen.getByText(/Historial y trazabilidad/)).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<ProjectControlContainer />);
    const image = screen.getByAltText("Control de proyectos");
    expect(image).toBeInTheDocument();
  });
});

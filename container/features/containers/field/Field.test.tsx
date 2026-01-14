import { render, screen } from "@testing-library/react";
import FieldContainer from "./Field";

describe("FieldContainer", () => {
  it("renders the main title", () => {
    render(<FieldContainer />);
    expect(
      screen.getByText(/Campo: el corazón operativo/)
    ).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<FieldContainer />);
    expect(screen.getByText(/Torneos/)).toBeInTheDocument();
    expect(screen.getByText(/Velocidad de juego/)).toBeInTheDocument();
    expect(screen.getByText(/Banderas/)).toBeInTheDocument();
    expect(screen.getByText(/Estado del campo/)).toBeInTheDocument();
    expect(screen.getByText(/Incidencias/)).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<FieldContainer />);
    const image = screen.getByAltText("Gestión del campo");
    expect(image).toBeInTheDocument();
  });
});

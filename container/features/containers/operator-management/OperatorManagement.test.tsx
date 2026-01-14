import { render, screen } from "@testing-library/react";
import OperatorManagementContainer from "./OperatorManagement";

describe("OperatorManagementContainer", () => {
  it("renders the main title", () => {
    render(<OperatorManagementContainer />);
    expect(
      screen.getByText(/Gestión Organizacional y Empleados/)
    ).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<OperatorManagementContainer />);
    expect(screen.getByText(/Empleados: la ficha completa/)).toBeInTheDocument();
    expect(screen.getByText(/Control real del trabajo/)).toBeInTheDocument();
    expect(screen.getByText(/Conexión directa con proyectos/)).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<OperatorManagementContainer />);
    const image = screen.getByAltText("Gestión de operadores y empleados");
    expect(image).toBeInTheDocument();
  });
});

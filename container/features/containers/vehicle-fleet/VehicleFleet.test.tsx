import { render, screen } from "@testing-library/react";
import VehiclesFleetContainer from "./VehicleFleet";

describe("VehiclesFleetContainer", () => {
  it("renders the main title", () => {
    render(<VehiclesFleetContainer />);
    expect(
      screen.getByText(/Movilidad: control total de vehículos/)
    ).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<VehiclesFleetContainer />);
    expect(screen.getByText(/Vehículos/)).toBeInTheDocument();
    expect(screen.getByText(/Mantenimiento/)).toBeInTheDocument();
    expect(screen.getByText(/Rastrear/)).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<VehiclesFleetContainer />);
    const image = screen.getByAltText("Control de flota de vehículos");
    expect(image).toBeInTheDocument();
  });
});

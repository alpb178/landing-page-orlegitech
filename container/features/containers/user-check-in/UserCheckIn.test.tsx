import { render, screen } from "@testing-library/react";
import UserCheckInContainer from "./UserCheckIn";

describe("UserCheckInContainer", () => {
  it("renders the main title", () => {
    render(<UserCheckInContainer />);
    expect(
      screen.getByText(/Control Horario y Fichajes/)
    ).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<UserCheckInContainer />);
    expect(screen.getByText(/Fichajes de entrada y salida/)).toBeInTheDocument();
    expect(screen.getByText(/Informes automáticos/)).toBeInTheDocument();
    expect(screen.getByText(/Cumplimiento de la normativa/)).toBeInTheDocument();
  });
});

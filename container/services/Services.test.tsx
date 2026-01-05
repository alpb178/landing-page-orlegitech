import { render, screen } from "@testing-library/react";
import Services from "@/container/services/Services";

describe("Services", () => {
  it("renders the services section title", () => {
    render(<Services />);
    expect(screen.getByText("Servicios")).toBeInTheDocument();
  });

  it("renders all three service cards", () => {
    render(<Services />);
    expect(screen.getByText("APP")).toBeInTheDocument();
    expect(screen.getByText("Drone")).toBeInTheDocument();
    expect(screen.getByText("Riego")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Services from "@/components/Services";

describe("Services", () => {
  it("renders the services section title", () => {
    render(<Services />);
    expect(screen.getByText("Servicios")).toBeDefined();
  });

  it("renders all three service cards", () => {
    render(<Services />);
    expect(screen.getByText("APP")).toBeDefined();
    expect(screen.getByText("Drone")).toBeDefined();
    expect(screen.getByText("Buggy")).toBeDefined();
  });
});

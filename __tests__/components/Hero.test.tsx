import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders the main title and subtitle", () => {
    render(<Hero />);
    expect(screen.getByText("orlegitech")).toBeDefined();
    expect(
      screen.getByText(/Tu campo de golf en perfectas condiciones/i)
    ).toBeDefined();
  });

  it("renders the CTA button", () => {
    render(<Hero />);
    expect(screen.getByText("Contáctanos")).toBeDefined();
  });

  it("displays statistics", () => {
    render(<Hero />);
    expect(screen.getByText(/198 campos/i)).toBeDefined();
    expect(screen.getByText(/\+1M usuarios/i)).toBeDefined();
  });
});

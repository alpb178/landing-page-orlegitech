import { render, screen } from "@testing-library/react";
import Hero from "@/container/hero/Hero";

describe("Hero", () => {
  it("renders the main title and subtitle", () => {
    render(<Hero />);
    expect(screen.getByText(/orlegitech/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Tu campo de golf en perfectas condiciones/i)
    ).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<Hero />);
    expect(screen.getByText("Contáctanos")).toBeInTheDocument();
  });

  it("displays statistics", () => {
    render(<Hero />);
    expect(screen.getByText(/198 campos/i)).toBeInTheDocument();
    expect(screen.getByText(/\+1M usuarios/i)).toBeInTheDocument();
  });
});

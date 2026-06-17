import { render, screen } from "@testing-library/react";
import Footer from "@/container/footer/Footer";

describe("Footer", () => {
  it("renders the company name", () => {
    render(<Footer />);
    const orlegitechElements = screen.getAllByText(/orlegitech/i);
    expect(orlegitechElements.length).toBeGreaterThan(0);
  });

  it("renders the legal text", () => {
    render(<Footer />);
    expect(screen.getByText(/Virtuopay/i)).toBeInTheDocument();
  });
});

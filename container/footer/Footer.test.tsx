import { render, screen } from "@testing-library/react";
import { Footer } from "@/container/footer/Footer";

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

describe("Footer standalone-page links", () => {
  it.each([
    ["Soporte", "/support"],
    ["Privacidad", "/privacy"],
    ["Términos", "/terms"],
  ])("links %s to %s", (label, href) => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: label })).toHaveAttribute(
      "href",
      href
    );
  });
});

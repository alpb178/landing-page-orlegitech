import { render, screen } from "@testing-library/react";
import Services from "@/container/services/Services";

describe("Services", () => {
  it("renders the services section title", () => {
    render(<Services />);
    expect(screen.getByText("Servicios")).toBeInTheDocument();
  });

  it("renders all three service cards with updated names", () => {
    render(<Services />);
    expect(screen.getByText("APP")).toBeInTheDocument();
    expect(screen.getByText("Informes aéreos")).toBeInTheDocument();
    expect(screen.getByText("Riego inteligente")).toBeInTheDocument();
  });

  it("renders links to service detail pages", () => {
    render(<Services />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/app-service");
    expect(hrefs).toContain("/aerial-reports-service");
    expect(hrefs).toContain("/intelligent-irrigation");
  });
});

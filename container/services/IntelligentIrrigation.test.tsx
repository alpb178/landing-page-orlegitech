import { render, screen } from "@testing-library/react";
import IntelligentIrrigation from "@/container/services/IntelligentIrrigation";

describe("IntelligentIrrigation", () => {
  it("renders the page title", () => {
    render(<IntelligentIrrigation />);
    expect(screen.getByText("Haz más con cada gota.")).toBeInTheDocument();
  });

  it("renders the badge label", () => {
    render(<IntelligentIrrigation />);
    expect(screen.getByText("Sistema inteligente de riego")).toBeInTheDocument();
  });

  it("renders the CTA with highlighted text", () => {
    render(<IntelligentIrrigation />);
    expect(screen.getByText("inteligente.")).toBeInTheDocument();
    expect(screen.getByText("Ver planes")).toBeInTheDocument();
  });

  it("renders description paragraphs", () => {
    render(<IntelligentIrrigation />);
    expect(screen.getByText(/Optimización inteligente del consumo eléctrico/)).toBeInTheDocument();
    expect(screen.getByText(/El sistema decide cuándo/)).toBeInTheDocument();
    expect(screen.getByText(/menos consumo eléctrico/)).toBeInTheDocument();
  });

  it("renders the irrigation detail image", () => {
    render(<IntelligentIrrigation />);
    const img = screen.getByAltText("Sistema inteligente de riego");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/services/irrigation-detail.png");
  });
});

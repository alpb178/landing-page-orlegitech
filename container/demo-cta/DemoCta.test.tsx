import { render, screen } from "@testing-library/react";
import { DemoCta } from "@/container/demo-cta/DemoCta";

describe("DemoCta", () => {
  it("renders the banner title and subtitle", () => {
    render(<DemoCta />);
    expect(screen.getByText(/tu campo\?/)).toBeInTheDocument();
    expect(
      screen.getByText("No tomará más de un minuto.")
    ).toBeInTheDocument();
  });

  it("links the CTA to the localized demo page", () => {
    render(<DemoCta />);
    const ctaLink = screen.getByRole("link", { name: "Agendar Demo gratis" });
    // The i18n Link (mocked as a plain anchor) prefixes the locale at runtime
    expect(ctaLink).toHaveAttribute("href", "/demo");
  });
});

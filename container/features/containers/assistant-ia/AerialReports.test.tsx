import { render, screen } from "@testing-library/react";
import AssistantIAContainer from "./AerialReports";

describe("AssistantIAContainer", () => {
  it("renders the main title", () => {
    render(<AssistantIAContainer />);
    const headings = screen.getAllByText(/Asistente Virtual del Greenkeeper/);
    expect(headings.length).toBeGreaterThan(0);
    // Check that at least one is an h2
    const h2Heading = headings.find(
      (el) => el.tagName === "H2" && el.textContent?.includes("Asistente Virtual del Greenkeeper")
    );
    expect(h2Heading).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<AssistantIAContainer />);
    expect(screen.getByText(/Un asistente que aprende con el tiempo/)).toBeInTheDocument();
    expect(screen.getByText(/Pregunta al campo, literalmente/)).toBeInTheDocument();
    expect(screen.getByText(/Recomendaciones basadas en la historia/)).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<AssistantIAContainer />);
    const image = screen.getByAltText("Asistente Virtual del Greenkeeper");
    expect(image).toBeInTheDocument();
  });
});

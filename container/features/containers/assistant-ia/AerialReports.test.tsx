import { render, screen } from "@testing-library/react";
import { AssistantIAContainer } from "./AerialReports";

describe("AssistantIAContainer", () => {
  it("renders the main title", () => {
    render(<AssistantIAContainer />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Asistente Virtual del Greenkeeper/,
      })
    ).toBeInTheDocument();
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

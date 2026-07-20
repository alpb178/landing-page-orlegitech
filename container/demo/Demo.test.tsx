import { render, screen, fireEvent } from "@testing-library/react";
import { DemoContainer } from "@/container/demo/Demo";
import { buildDemoMailtoHref } from "@/container/demo/demo-mailto";

jest.mock("@/container/demo/demo-mailto", () => ({
  buildDemoMailtoHref: jest.fn(() => "#mailto-demo-test"),
}));

const buildDemoMailtoHrefMock = buildDemoMailtoHref as jest.Mock;

describe("DemoContainer", () => {
  beforeEach(() => {
    buildDemoMailtoHrefMock.mockClear();
  });

  it("associates every form field with its label", () => {
    render(<DemoContainer />);

    expect(screen.getByLabelText("Nombre completo *")).toHaveAttribute(
      "id",
      "demo-fullname"
    );
    expect(screen.getByLabelText("Email profesional *")).toHaveAttribute(
      "id",
      "demo-email"
    );
    expect(screen.getByLabelText("Teléfono")).toHaveAttribute(
      "id",
      "demo-phone"
    );
    expect(
      screen.getByLabelText("Nombre del club o empresa *")
    ).toHaveAttribute("id", "demo-company");
    expect(screen.getByLabelText("Cargo")).toHaveAttribute("id", "demo-role");
    expect(screen.getByLabelText("Tipo de instalación *")).toHaveAttribute(
      "id",
      "demo-industry"
    );
    expect(
      screen.getByLabelText("Desafíos o necesidades actuales *")
    ).toHaveAttribute("id", "demo-challenges");
    expect(screen.getByLabelText("Información adicional")).toHaveAttribute(
      "id",
      "demo-additional"
    );
  });

  it("builds the mailto with the active locale translator and the form data", () => {
    render(<DemoContainer />);

    fireEvent.change(screen.getByLabelText("Nombre completo *"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email profesional *"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Nombre del club o empresa *"), {
      target: { value: "Club Ejemplo" },
    });
    fireEvent.change(screen.getByLabelText("Tipo de instalación *"), {
      target: { value: "Campo de golf" },
    });
    fireEvent.change(
      screen.getByLabelText("Desafíos o necesidades actuales *"),
      { target: { value: "Riego y flota" } }
    );
    fireEvent.click(
      screen.getByRole("button", { name: /programar mi demo/i })
    );

    expect(buildDemoMailtoHrefMock).toHaveBeenCalledTimes(1);
    const [translate, formData] = buildDemoMailtoHrefMock.mock.calls[0];
    expect(formData).toEqual({
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "",
      company: "Club Ejemplo",
      role: "",
      industry: "Campo de golf",
      challenges: "Riego y flota",
      additional: "",
    });
    // The translator handed over is scoped to the active locale (es in tests)
    expect(translate("mailto.subject")).toBe("OrlegiTech - Solicitud de demo");
    expect(translate("mailto.company")).toBe("Club/Empresa");

    // The composed href is what gets navigated to
    expect(window.location.hash).toBe("#mailto-demo-test");
    expect(
      screen.getByText(
        "Se abrirá tu cliente de correo. Completa el envío desde allí."
      )
    ).toBeInTheDocument();
  });
});

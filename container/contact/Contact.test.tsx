import { render, screen, fireEvent } from "@testing-library/react";
import { ContactUs } from "@/container/contact/Contact";
import { buildContactMailtoHref } from "@/container/contact/contact-mailto";

jest.mock("@/container/contact/contact-mailto", () => ({
  buildContactMailtoHref: jest.fn(() => "#mailto-test"),
}));

const buildContactMailtoHrefMock = buildContactMailtoHref as jest.Mock;

describe("ContactUs", () => {
  beforeEach(() => {
    buildContactMailtoHrefMock.mockClear();
  });

  it("associates every form field with its label", () => {
    render(<ContactUs />);

    expect(screen.getByLabelText("Nombre *")).toHaveAttribute(
      "id",
      "contact-name"
    );
    expect(screen.getByLabelText("Teléfono *")).toHaveAttribute(
      "id",
      "contact-phone"
    );
    expect(screen.getByLabelText("Nombre del club *")).toHaveAttribute(
      "id",
      "contact-club"
    );
    expect(screen.getByLabelText("Email *")).toHaveAttribute(
      "id",
      "contact-email"
    );
  });

  it("builds the mailto with the active locale translator and the form data", () => {
    render(<ContactUs />);

    fireEvent.change(screen.getByLabelText("Nombre *"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText("Teléfono *"), {
      target: { value: "600123456" },
    });
    fireEvent.change(screen.getByLabelText("Nombre del club *"), {
      target: { value: "Club Ejemplo" },
    });
    fireEvent.change(screen.getByLabelText("Email *"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    expect(buildContactMailtoHrefMock).toHaveBeenCalledTimes(1);
    const [translate, formData] = buildContactMailtoHrefMock.mock.calls[0];
    expect(formData).toEqual({
      name: "Jane Doe",
      phone: "600123456",
      club: "Club Ejemplo",
      email: "jane@example.com",
    });
    // The translator handed over is scoped to the active locale (es in tests)
    expect(translate("mailto.subject")).toBe("Contacto Orlegitech");
    expect(translate("mailto.name")).toBe("Nombre");

    // The composed href is what gets navigated to
    expect(window.location.hash).toBe("#mailto-test");
    expect(
      screen.getByText(
        "Se abrirá tu cliente de correo. Completa el envío desde allí."
      )
    ).toBeInTheDocument();
  });
});

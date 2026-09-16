import { render, screen, fireEvent } from "@testing-library/react";
import { SupportContainer } from "@/container/support/Support";
import { buildSupportMailtoHref } from "@/container/support/support-mailto";

jest.mock("@/container/support/support-mailto", () => ({
  SUPPORT_RECIPIENT_EMAIL: "info@orlegitech.com",
  buildSupportMailtoHref: jest.fn(() => "#mailto-support-test"),
}));

const buildSupportMailtoHrefMock = buildSupportMailtoHref as jest.Mock;

describe("SupportContainer", () => {
  beforeEach(() => {
    buildSupportMailtoHrefMock.mockClear();
  });

  it("renders the title and the intro copy", () => {
    render(<SupportContainer />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Soporte" })
    ).toBeInTheDocument();
    expect(screen.getByText(/sugerencia/i)).toBeInTheDocument();
  });

  it("offers the support address as a direct mailto link", () => {
    render(<SupportContainer />);

    const links = screen.getAllByRole("link", { name: "info@orlegitech.com" });
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) =>
      expect(link).toHaveAttribute("href", "mailto:info@orlegitech.com")
    );
  });

  it("associates every form field with its label", () => {
    render(<SupportContainer />);

    expect(screen.getByLabelText("Asunto")).toHaveAttribute(
      "id",
      "support-subject"
    );
    expect(screen.getByLabelText("Mensaje *")).toHaveAttribute(
      "id",
      "support-message"
    );
  });

  it("builds the mailto with the active locale translator and the form data", () => {
    render(<SupportContainer />);

    fireEvent.change(screen.getByLabelText("Asunto"), {
      target: { value: "No puedo acceder" },
    });
    fireEvent.change(screen.getByLabelText("Mensaje *"), {
      target: { value: "Me aparece un error 500." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Enviar mensaje" }));

    expect(buildSupportMailtoHrefMock).toHaveBeenCalledTimes(1);
    expect(buildSupportMailtoHrefMock).toHaveBeenCalledWith(
      expect.any(Function),
      { subject: "No puedo acceder", message: "Me aparece un error 500." }
    );
  });

  it("confirms to the visitor that the mail app is about to open", () => {
    render(<SupportContainer />);

    expect(screen.queryByRole("status")).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Mensaje *"), {
      target: { value: "Hola" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Enviar mensaje" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      /aplicación de correo/i
    );
  });
});

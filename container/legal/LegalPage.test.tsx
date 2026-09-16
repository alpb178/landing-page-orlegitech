import { render, screen } from "@testing-library/react";
import { LegalPage } from "@/container/legal/LegalPage";
import type { LegalDoc } from "@/container/legal/legal-doc";

const doc: LegalDoc = {
  title: "Política de Privacidad",
  updated: "Última actualización: 16 de septiembre de 2026",
  intro: "Cómo tratamos tus datos.",
  sections: [
    {
      title: "1. Información que recopilamos",
      blocks: [
        { kind: "paragraph", text: "Recopilamos lo siguiente:" },
        {
          kind: "list",
          items: [
            { term: "Contacto:", text: "nombre y email." },
            { text: "Datos del dispositivo." },
          ],
        },
      ],
    },
    {
      title: "2. Contacto",
      blocks: [
        {
          kind: "paragraph",
          text: "El tratamiento se rige por nuestra",
          link: { label: "Política de Privacidad", href: "/privacy", suffix: "." },
        },
        {
          kind: "list",
          items: [
            {
              term: "Correo electrónico:",
              text: "info@orlegitech.com",
              email: "info@orlegitech.com",
            },
          ],
        },
      ],
    },
  ],
};

describe("LegalPage", () => {
  it("renders the title, the updated label and the intro", () => {
    render(<LegalPage doc={doc} />);

    expect(
      screen.getByRole("heading", { level: 1, name: doc.title })
    ).toBeInTheDocument();
    expect(screen.getByText(doc.updated)).toBeInTheDocument();
    expect(screen.getByText(doc.intro)).toBeInTheDocument();
  });

  it("renders every section as a level 2 heading", () => {
    render(<LegalPage doc={doc} />);

    const headings = screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent);
    expect(headings).toEqual([
      "1. Información que recopilamos",
      "2. Contacto",
    ]);
  });

  it("renders list items with their bold term", () => {
    render(<LegalPage doc={doc} />);

    expect(screen.getByText("Contacto:").tagName).toBe("STRONG");
    expect(screen.getByText("nombre y email.")).toBeInTheDocument();
    expect(screen.getByText("Datos del dispositivo.")).toBeInTheDocument();
  });

  it("turns an item email into a mailto link", () => {
    render(<LegalPage doc={doc} />);

    expect(
      screen.getByRole("link", { name: "info@orlegitech.com" })
    ).toHaveAttribute("href", "mailto:info@orlegitech.com");
  });

  it("renders an inline paragraph link with its suffix", () => {
    render(<LegalPage doc={doc} />);

    expect(
      screen.getByRole("link", { name: "Política de Privacidad" })
    ).toHaveAttribute("href", "/privacy");
    expect(
      screen.getByText(/El tratamiento se rige por nuestra/)
    ).toHaveTextContent("El tratamiento se rige por nuestra Política de Privacidad.");
  });
});

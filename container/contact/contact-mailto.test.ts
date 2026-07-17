import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import { buildContactMailtoHref } from "./contact-mailto";

const createTranslator =
  (messages: Record<string, unknown>, namespace: string) =>
  (key: string): string => {
    const value = `${namespace}.${key}`
      .split(".")
      .reduce<unknown>(
        (acc, part) =>
          acc && typeof acc === "object"
            ? (acc as Record<string, unknown>)[part]
            : undefined,
        messages
      );
    if (typeof value !== "string") {
      throw new Error(`Missing translation: ${namespace}.${key}`);
    }
    return value;
  };

const formData = {
  name: "Jane Doe",
  phone: "600 123 456",
  club: "Club Ejemplo",
  email: "jane@example.com",
};

describe("buildContactMailtoHref", () => {
  it("builds the Spanish subject and body from the es translations", () => {
    const href = buildContactMailtoHref(
      createTranslator(esMessages, "contact"),
      formData
    );

    expect(href).toBe(
      "mailto:info@orlegitech.com?subject=" +
        encodeURIComponent("Contacto Orlegitech - Club Ejemplo") +
        "&body=" +
        encodeURIComponent(
          "Nombre: Jane Doe\n" +
            "Teléfono: 600 123 456\n" +
            "Club: Club Ejemplo\n" +
            "Email: jane@example.com"
        )
    );
  });

  it("builds the English subject and body from the en translations", () => {
    const href = buildContactMailtoHref(
      createTranslator(enMessages, "contact"),
      formData
    );

    expect(href).toBe(
      "mailto:info@orlegitech.com?subject=" +
        encodeURIComponent("Orlegitech contact - Club Ejemplo") +
        "&body=" +
        encodeURIComponent(
          "Name: Jane Doe\n" +
            "Phone: 600 123 456\n" +
            "Club: Club Ejemplo\n" +
            "Email: jane@example.com"
        )
    );
  });

  it("builds the French subject and body from the fr translations", () => {
    const href = buildContactMailtoHref(
      createTranslator(frMessages, "contact"),
      formData
    );

    expect(href).toBe(
      "mailto:info@orlegitech.com?subject=" +
        encodeURIComponent("Contact Orlegitech - Club Ejemplo") +
        "&body=" +
        encodeURIComponent(
          "Nom: Jane Doe\n" +
            "Téléphone: 600 123 456\n" +
            "Club: Club Ejemplo\n" +
            "E-mail: jane@example.com"
        )
    );
  });

  it("uses the translated fallback in the subject when the club is empty", () => {
    const href = buildContactMailtoHref(
      createTranslator(esMessages, "contact"),
      { ...formData, club: "" }
    );

    expect(href).toContain(
      "subject=" + encodeURIComponent("Contacto Orlegitech - General")
    );
  });
});

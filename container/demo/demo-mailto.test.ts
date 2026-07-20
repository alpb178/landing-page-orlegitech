import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import { buildDemoMailtoHref } from "./demo-mailto";

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

const fullFormData = {
  fullName: "Jane Doe",
  email: "jane@example.com",
  phone: "600 123 456",
  company: "Club Ejemplo",
  role: "Greenkeeper",
  industry: "Campo de golf",
  challenges: "Riego y flota",
  additional: "Nada más",
};

describe("buildDemoMailtoHref", () => {
  it("builds the Spanish subject and body from the es translations", () => {
    const href = buildDemoMailtoHref(
      createTranslator(esMessages, "demoPage"),
      fullFormData
    );

    expect(href).toBe(
      "mailto:info@orlegitech.com?subject=" +
        encodeURIComponent("OrlegiTech - Solicitud de demo") +
        "&body=" +
        encodeURIComponent(
          "Nombre: Jane Doe\n" +
            "Email: jane@example.com\n" +
            "Teléfono: 600 123 456\n" +
            "Club/Empresa: Club Ejemplo\n" +
            "Cargo: Greenkeeper\n" +
            "Tipo: Campo de golf\n" +
            "Necesidades: Riego y flota\n" +
            "Otros: Nada más\n"
        )
    );
  });

  it("builds the English subject and body from the en translations", () => {
    const href = buildDemoMailtoHref(
      createTranslator(enMessages, "demoPage"),
      fullFormData
    );

    expect(href).toBe(
      "mailto:info@orlegitech.com?subject=" +
        encodeURIComponent("OrlegiTech - Demo request") +
        "&body=" +
        encodeURIComponent(
          "Name: Jane Doe\n" +
            "Email: jane@example.com\n" +
            "Phone: 600 123 456\n" +
            "Club/Company: Club Ejemplo\n" +
            "Role: Greenkeeper\n" +
            "Facility type: Campo de golf\n" +
            "Needs: Riego y flota\n" +
            "Other: Nada más\n"
        )
    );
  });

  it("builds the French subject and body from the fr translations", () => {
    const href = buildDemoMailtoHref(
      createTranslator(frMessages, "demoPage"),
      fullFormData
    );

    expect(href).toBe(
      "mailto:info@orlegitech.com?subject=" +
        encodeURIComponent("OrlegiTech - Demande de démo") +
        "&body=" +
        encodeURIComponent(
          "Nom: Jane Doe\n" +
            "E-mail: jane@example.com\n" +
            "Téléphone: 600 123 456\n" +
            "Club/Entreprise: Club Ejemplo\n" +
            "Fonction: Greenkeeper\n" +
            "Type d'installation: Campo de golf\n" +
            "Besoins: Riego y flota\n" +
            "Autres: Nada más\n"
        )
    );
  });

  it("omits the optional fields when they are empty", () => {
    const href = buildDemoMailtoHref(createTranslator(esMessages, "demoPage"), {
      ...fullFormData,
      phone: "",
      role: "",
      industry: "",
      additional: "",
    });

    expect(href).toBe(
      "mailto:info@orlegitech.com?subject=" +
        encodeURIComponent("OrlegiTech - Solicitud de demo") +
        "&body=" +
        encodeURIComponent(
          "Nombre: Jane Doe\n" +
            "Email: jane@example.com\n" +
            "Club/Empresa: Club Ejemplo\n" +
            "Necesidades: Riego y flota\n"
        )
    );
  });
});

import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import { buildSupportMailtoHref } from "./support-mailto";

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
  subject: "No puedo acceder a la app",
  message: "Al iniciar sesión me aparece un error 500.",
};

describe("buildSupportMailtoHref", () => {
  it("builds the mailto with the subject and the message typed by the visitor", () => {
    const href = buildSupportMailtoHref(
      createTranslator(esMessages, "support"),
      formData
    );

    expect(href).toBe(
      "mailto:info@orlegitech.com?subject=" +
        encodeURIComponent("No puedo acceder a la app") +
        "&body=" +
        encodeURIComponent("Al iniciar sesión me aparece un error 500.")
    );
  });

  it("falls back to the Spanish default subject when the subject is empty", () => {
    const href = buildSupportMailtoHref(
      createTranslator(esMessages, "support"),
      { ...formData, subject: "   " }
    );

    expect(href).toBe(
      "mailto:info@orlegitech.com?subject=" +
        encodeURIComponent("Soporte OrlegiTech") +
        "&body=" +
        encodeURIComponent("Al iniciar sesión me aparece un error 500.")
    );
  });

  it("falls back to the English default subject when the subject is empty", () => {
    const href = buildSupportMailtoHref(
      createTranslator(enMessages, "support"),
      { ...formData, subject: "" }
    );

    expect(href).toContain(
      `subject=${encodeURIComponent("OrlegiTech support")}`
    );
  });

  it("falls back to the French default subject when the subject is empty", () => {
    const href = buildSupportMailtoHref(
      createTranslator(frMessages, "support"),
      { ...formData, subject: "" }
    );

    expect(href).toContain(
      `subject=${encodeURIComponent("Support OrlegiTech")}`
    );
  });
});

import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import type { LegalBlock, LegalDoc } from "./legal-doc";

const LOCALES = [
  ["es", esMessages],
  ["en", enMessages],
  ["fr", frMessages],
] as const;

const DOC_KEYS = ["privacy", "terms"] as const;

const assertBlock = (block: LegalBlock): void => {
  if (block.kind === "paragraph") {
    expect(typeof block.text).toBe("string");
    expect(block.text.length).toBeGreaterThan(0);
    return;
  }

  expect(block.kind).toBe("list");
  expect(block.items.length).toBeGreaterThan(0);
  block.items.forEach((item) => {
    expect(typeof item.text).toBe("string");
    expect(item.text.length).toBeGreaterThan(0);
  });
};

describe.each(LOCALES)("legal messages (%s)", (locale, messages) => {
  const legal = (messages as { legal: Record<string, LegalDoc> }).legal;

  it.each(DOC_KEYS)("exposes a well-formed %s document", (key) => {
    const doc = legal[key];

    expect(doc).toBeDefined();
    expect(doc.title.length).toBeGreaterThan(0);
    expect(doc.updated.length).toBeGreaterThan(0);
    expect(doc.intro.length).toBeGreaterThan(0);
    expect(doc.sections.length).toBeGreaterThan(0);

    doc.sections.forEach((section) => {
      expect(section.title.length).toBeGreaterThan(0);
      expect(section.blocks.length).toBeGreaterThan(0);
      section.blocks.forEach(assertBlock);
    });
  });
});

describe("legal documents across locales", () => {
  it.each(DOC_KEYS)(
    "keeps the same number of %s sections in every locale",
    (key) => {
      const counts = LOCALES.map(
        ([, messages]) =>
          (messages as { legal: Record<string, LegalDoc> }).legal[key].sections
            .length
      );

      expect(new Set(counts).size).toBe(1);
    }
  );

  it.each(DOC_KEYS)("points the %s contact block at the support inbox", (key) => {
    LOCALES.forEach(([locale, messages]) => {
      const doc = (messages as { legal: Record<string, LegalDoc> }).legal[key];
      const emails = doc.sections
        .flatMap((section) => section.blocks)
        .flatMap((block) => (block.kind === "list" ? block.items : []))
        .map((item) => item.email)
        .filter(Boolean);

      expect(emails).toContain("info@orlegitech.com");
      expect(locale).toBeTruthy();
    });
  });
});

/**
 * Shared content model for the standalone legal pages (privacy policy,
 * terms). Both documents live in `messages/{locale}.json` under the `legal`
 * namespace and are read with `t.raw()`, so the wording is translated like
 * any other copy while the structure stays typed here.
 */

export interface LegalLink {
  /** Visible text of the link, rendered right after the paragraph text. */
  label: string;
  href: string;
  /** Text appended after the link, e.g. the closing period. */
  suffix?: string;
}

export interface LegalItem {
  /** Optional leading label rendered in bold (e.g. "Datos de contacto:"). */
  term?: string;
  text: string;
  /** When set, `text` is rendered as a mailto link to this address. */
  email?: string;
}

export type LegalBlock =
  | { kind: "paragraph"; text: string; link?: LegalLink }
  | { kind: "list"; items: LegalItem[] };

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  /** Page <h1> and document <title>. */
  title: string;
  /** Short label under the title, e.g. "Última actualización: …". */
  updated: string;
  /** Lead paragraph shown above the numbered sections. */
  intro: string;
  sections: LegalSection[];
}

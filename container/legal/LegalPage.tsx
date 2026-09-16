import type { JSX } from "react";
import { Link } from "@/i18n/routing";
import type { LegalBlock, LegalDoc, LegalItem } from "./legal-doc";

const ItemText = ({ item }: { item: LegalItem }): JSX.Element => {
  if (item.email) {
    return (
      <a
        href={`mailto:${item.email}`}
        className="text-[#a1c353] underline underline-offset-2 hover:text-white transition-colors"
      >
        {item.text}
      </a>
    );
  }
  return <>{item.text}</>;
};

const Block = ({ block }: { block: LegalBlock }): JSX.Element => {
  if (block.kind === "paragraph") {
    return (
      <p className="text-base leading-relaxed text-[#e6ebe9]">
        {block.text}
        {block.link && (
          <>
            {" "}
            <Link
              href={block.link.href}
              className="text-[#a1c353] underline underline-offset-2 hover:text-white transition-colors"
            >
              {block.link.label}
            </Link>
            {block.link.suffix}
          </>
        )}
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {block.items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-base leading-relaxed text-[#e6ebe9]"
        >
          <span
            aria-hidden="true"
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a1c353]"
          />
          <span>
            {item.term && (
              <strong className="font-semibold text-white">{item.term}</strong>
            )}{" "}
            <ItemText item={item} />
          </span>
        </li>
      ))}
    </ul>
  );
};

/**
 * Standalone legal page (privacy policy, terms…) rendered from a LegalDoc.
 */
export const LegalPage = ({ doc }: { doc: LegalDoc }): JSX.Element => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium text-white font-[family-name:var(--font-plus-jakarta)]">
          {doc.title}
        </h1>
        <p className="mt-3 text-sm text-[#e6ebe9]/60">{doc.updated}</p>

        <p className="mt-8 text-base leading-relaxed text-[#e6ebe9]">
          {doc.intro}
        </p>

        {doc.sections.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="text-xl font-semibold text-[#a1c353]">
              {section.title}
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </section>
        ))}
      </article>
    </section>
  );
}

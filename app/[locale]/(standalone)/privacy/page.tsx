import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/container/legal/LegalPage";
import type { LegalDoc } from "@/container/legal/legal-doc";

const getDoc = async (locale: string): Promise<LegalDoc> => {
  const t = await getTranslations({ locale, namespace: "legal" });
  return t.raw("privacy") as LegalDoc;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const doc = await getDoc(locale);

  return {
    title: `${doc.title} | Orlegitech`,
    description: doc.intro,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <LegalPage doc={await getDoc(locale)} />;
}

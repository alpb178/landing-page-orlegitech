import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SupportContainer } from "@/container/support/Support";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "support" });

  return {
    title: `${t("title")} | Orlegitech`,
    description: t("description"),
  };
}

export default function SupportPage() {
  return <SupportContainer />;
}

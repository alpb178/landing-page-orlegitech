export const CONTACT_RECIPIENT_EMAIL = "info@orlegitech.com";

export interface ContactFormData {
  name: string;
  phone: string;
  club: string;
  email: string;
}

type TranslateFn = (key: string) => string;

export const buildContactMailtoHref = (
  t: TranslateFn,
  formData: ContactFormData
): string => {
  const subject = encodeURIComponent(
    `${t("mailto.subject")} - ${formData.club || t("mailto.subjectFallback")}`
  );

  const body = encodeURIComponent(
    `${t("mailto.name")}: ${formData.name}\n` +
      `${t("mailto.phone")}: ${formData.phone}\n` +
      `${t("mailto.club")}: ${formData.club}\n` +
      `${t("mailto.email")}: ${formData.email}`
  );

  return `mailto:${CONTACT_RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
};

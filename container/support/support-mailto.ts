export const SUPPORT_RECIPIENT_EMAIL = "info@orlegitech.com";

export interface SupportFormData {
  subject: string;
  message: string;
}

type TranslateFn = (key: string) => string;

export const buildSupportMailtoHref = (
  t: TranslateFn,
  formData: SupportFormData
): string => {
  const subject = encodeURIComponent(
    formData.subject.trim() || t("mailto.defaultSubject")
  );
  const body = encodeURIComponent(formData.message);

  return `mailto:${SUPPORT_RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
};

export const DEMO_RECIPIENT_EMAIL = "info@orlegitech.com";

export interface DemoFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  industry: string;
  challenges: string;
  additional: string;
}

type TranslateFn = (key: string) => string;

export const buildDemoMailtoHref = (
  t: TranslateFn,
  formData: DemoFormData
): string => {
  const subject = encodeURIComponent(t("mailto.subject"));

  const body = encodeURIComponent(
    `${t("mailto.name")}: ${formData.fullName}\n` +
      `${t("mailto.email")}: ${formData.email}\n` +
      (formData.phone ? `${t("mailto.phone")}: ${formData.phone}\n` : "") +
      `${t("mailto.company")}: ${formData.company}\n` +
      (formData.role ? `${t("mailto.role")}: ${formData.role}\n` : "") +
      (formData.industry
        ? `${t("mailto.industry")}: ${formData.industry}\n`
        : "") +
      `${t("mailto.challenges")}: ${formData.challenges}\n` +
      (formData.additional
        ? `${t("mailto.additional")}: ${formData.additional}\n`
        : "")
  );

  return `mailto:${DEMO_RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
};

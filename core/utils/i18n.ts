import i18next from "i18next";
import en_US from "../locales/en_US.json";
import { TranslationKeys } from "../../types/translations";

export async function initTranslations(language: string) {
  await i18next.init({
    lng: language,
    fallbackLng: "cs_CZ",
    resources: {
      en_US: { translation: en_US },
    },
    interpolation: { escapeValue: false },
  });

  return (key: TranslationKeys, options?: Record<string, any>) =>
    i18next.t(key, options);
}
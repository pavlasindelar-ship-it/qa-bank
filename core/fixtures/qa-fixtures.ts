import { test as base } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";
import { initTranslations } from "../utils/i18n";

export const test = base.extend<{
    t: (key: TranslationKeys, options?: Record<string, any>) => string;
}>({
    t: async ({ }, use) => {
        await use(await initTranslations("en_US"));
    }
});
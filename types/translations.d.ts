import en_US from "../core/locales/en_US.json";

export type TranslationKeys = NestedKeys<typeof en_US>;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      en_US: typeof en_US;
    };
  }
}

type Join<K, P> = K extends string
  ? P extends string
  ? `${K}.${P}`
  : never
  : never;

export type NestedKeys<T> = {
  [K in keyof T & string]:
  T[K] extends Record<string, any>
  ? Join<K, NestedKeys<T[K]>> | K
  : K
}[keyof T & string];
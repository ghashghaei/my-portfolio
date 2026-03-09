import { en } from "../locale/en";
import { de } from "../locale/de";

export function getLocale(locale: string) {
  if (locale === "de") return de;

  return en;
}

export const languages = ["en", "de"] as const;

export type Lang = (typeof languages)[number];

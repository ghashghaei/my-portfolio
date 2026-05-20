import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get("locale")?.value;

  let locale = defaultLocale;

  if (cookieLocale && locales.includes(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const browserLocale = request.headers
      .get("accept-language")
      ?.split(",")[0]
      .split("-")[0];

    if (browserLocale && locales.includes(browserLocale)) {
      locale = browserLocale;
    }
  }

  // redirect
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${locale}`;

  return NextResponse.redirect(newUrl);
}

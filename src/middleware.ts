import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const BASE_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN;

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");
  const subdomain = host?.split(".")[0];

  if (
    subdomain === "www" ||
    subdomain === BASE_DOMAIN ||
    url.pathname.endsWith("/not-found")
  ) {
    return NextResponse.next();
  }

  const isValid = isValidSlug(subdomain);

  if (!isValid) {
    return NextResponse.redirect(
      new URL(`${url.protocol}//${BASE_DOMAIN}/not-found`)
    );
  }

  return NextResponse.rewrite(
    new URL(
      `/pages/${subdomain}${url.pathname}${url.searchParams}${url.hash}`,
      request.url
    )
  );
}

function isValidSlug(slug: string | undefined): boolean {
  if (!slug) return false;
  if (slug === "client1" || slug === "client2") {
    return true;
  }
  return false;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

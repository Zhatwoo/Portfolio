import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Allow static files & API routes without redirect
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Allow /verification page without redirect loop
  if (url.pathname === "/verification") {
    return NextResponse.next();
  }

  // Check cookie
  const visitorType = req.cookies.get("visitorType")?.value;

  // If no cookie, redirect to /verification
  if (!visitorType) {
    url.pathname = "/verification";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

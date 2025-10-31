import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  if (!req.cookies.get("authjs.session-token")?.value) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }
}

export const config = {
  matcher: ["/"],
};

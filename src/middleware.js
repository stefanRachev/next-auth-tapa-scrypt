//src/middleware.js

import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);
import { PUBLIC_ROUTES, LOGIN, ROOT } from "./lib/routes";

export async function middleware(request) {
  const {nextUrl} = request
  const session = await auth();
  console.log(session);

  const isAuthenticated = !!session?.user
}

export const config = {
  matcher: "/api/:path*",
};

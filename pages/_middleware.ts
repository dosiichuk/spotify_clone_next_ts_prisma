import { NextResponse } from "next/server";

const signedInPages = ["/", "/playlist", "/library"];
// middleware to redirect to signin any users who do not have a valid token
export default function middleware(req) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}

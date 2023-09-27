import { NextRequest, NextResponse } from "next/server";
// import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("myTokenName");
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!jwt) return NextResponse.redirect(new URL("/", request.url));
  }
  // if (!jwt) return NextResponse.redirect(new URL("/", request.url));

  // this condition avoid to show the login page if the user is logged in
  // if (jwt) {
  //   if (request.nextUrl.pathname.includes("/login")) {
  //     try {
  //       await jwtVerify(jwt, new TextEncoder().encode("secret"));
  //       return NextResponse.redirect(new URL("/dashboard", request.url));
  //     } catch (error) {
  //       return NextResponse.next();
  //     }
  //   }
  // }

  try {
    // const { payload } = await jwtVerify(
      // jwt.value,
      // new TextEncoder().encode("secret")
    // );
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};

import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log(path, 'path');

  const token = request.cookies.get('token')?.value || '';
  const isPublicPath = ['/login', '/register'].includes(path);
  const isProtectedPath = ['/profile', '/dashboard'].includes(path)
  // Check if you are on a dynamic route with slug
  const isDynamicSlugRoute = path.startsWith('/tutor/');
  console.log(isProtectedPath);
  console.log(isDynamicSlugRoute);
  console.log(token, 'token');





  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl).toString());
  } else if (isProtectedPath  && !token) {
    console.log('protected');
    return NextResponse.redirect(new URL('/login', request.nextUrl).toString());
  }
  else if (isDynamicSlugRoute && !token) {
    console.log('dynamic');
    return NextResponse.redirect(new URL('/login', request.nextUrl).toString());
  }

}
// See "Matching Paths" below to learn more
export const config = {
  match: ['/', '/profile', '/login', '/register', '/dashboard', '/tutor/[slug]'],
};

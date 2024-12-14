import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Définir les routes protégées
const protectedRoutes = ['/home'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token') || req.cookies.get('__Secure-next-auth.session-token');
  const url = req.nextUrl.clone();

  // Vérifie si l'utilisateur est authentifié
  const isAuthenticated = !!token;

  // Redirige si un utilisateur non authentifié essaie d'accéder à une route protégée
  if (protectedRoutes.some(route => url.pathname.startsWith(route)) && !isAuthenticated) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Redirige un utilisateur non authentifié de la racine vers /login
  if (url.pathname === '/' && !isAuthenticated) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Redirige un utilisateur authentifié de /login vers /home
  if (url.pathname === '/login' && isAuthenticated) {
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  // Redirige un utilisateur authentifié de la racine vers /home
  if (url.pathname === '/' && isAuthenticated) {
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/home/:path*'],
};

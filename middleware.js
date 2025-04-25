import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'

const locales = ['en', 'ar']
const defaultLocale = 'en'

function getLocale(request) {
  const negotiator = new Negotiator({ headers: request.headers })
  const locale = negotiator.language(locales)
  return locale || defaultLocale
}

export function middleware(request) {
  const { pathname } = request.nextUrl

  // If the path already has a locale (like /ar or /en), don't redirect
  const hasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  )

  if (hasLocale) {
    return NextResponse.next()
  }

  const locale = getLocale(request)

  // If no locale is found in URL, redirect to preferred locale
  if (locale === 'ar') {
    return NextResponse.redirect(new URL(`/ar${pathname}`, request.url))
  }

  // Default to English
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'], // Match all paths except Next.js static files and assets
}

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "OIIA",
  description: "OIIA - Hold to spin",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  }
}; 
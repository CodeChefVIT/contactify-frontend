import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Contactify",
  description: "Excel to vCard converter",
  icons: [
    { rel: "icon", url: "/favicon.png" },
    { rel: "icon", sizes: "32x32", url: "/favicon.png" },
    { rel: "icon", sizes: "16x16", url: "/favicon.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  openGraph: {
    type: "website",
    url: "https://contactify.codechefvit.com",
    title: "Contactify",
    description: "Excel to vCard converter",
    siteName: "Contactify",
    images: [
      {
        url: "https://contactify.codechefvit.com/favicon.png",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://contactify.codechefvit.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

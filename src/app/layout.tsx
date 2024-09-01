import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <Head>
      <meta
          property="og:title"
          content="Contactify"
        />
        <meta
          property="og:description"
          content="Excel to vCard converter"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://contactify.codechefvit.com/" />
        <meta property="og:site_name" content="Contactify" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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

import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Contactify by CodeChef-VIT",
  description:
    "Contactify offers a seamless solution for users to upload contact information in various formats (CSV, XLSX, or XLS). Upon submission, the backend processes this data, extracting details such as names, phone numbers, emails, and genders. It compiles this information into a unified contact file (VCF file) compatible with Android and iOS devices, simplifying contact management.",
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
    title: "Contactify by CodeChef-VIT",
    description:
      "Contactify offers a seamless solution for users to upload contact information in various formats (CSV, XLSX, or XLS). Upon submission, the backend processes this data, extracting details such as names, phone numbers, emails, and genders. It compiles this information into a unified contact file (VCF file) compatible with Android and iOS devices, simplifying contact management.",
    siteName: "Contactify",
    images: [
      {
        url: "https://contactify.codechefvit.com/favicon-black.svg",
        type: "image/svg",
      },
    ],
  },
  keywords: [
    "contactify",
    "codechef",
    "vit",
    "contact",
    "contacts",
    "csv",
    "xlsx",
    "xls",
    "vcf",
    "excel",
    "json",
    "contact card",
    "vcf",
    "vcard",
  ],
  authors: [{ name: "Aaditya Mahanta" }],
  twitter: {
    card: "summary_large_image",
    site: "@contactify",
    title: "Contactify by CodeChef-VIT",
    creator: "Aaditya Mahanta (CodeChef-VIT)",
    images: "https://contactify.codechefvit.com/favicon-black.svg",
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

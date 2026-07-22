import type { Metadata } from "next";
import { Geist_Mono, Figtree, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NavProvider } from "@/components/layout/NavContext";
import { NavOverlay } from "@/components/layout/NavOverlay";

const outfitHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YenTech - Empowering the Next Generation of Innovators",
  description:
    "The official tech community of Yenepoya School of Engineering & Technology.",
  icons: {
    icon: "/yentech.ico",
    shortcut: "/yentech.ico",
    apple: "/yentech.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistMono.variable,
        "font-sans",
        figtree.variable,
        outfitHeading.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavProvider>
            <NavOverlay />
            <Header />
            <main className="flex-1">{children}</main>
          </NavProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

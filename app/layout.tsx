import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteNav } from "@/components/layout/site-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { property } from "@/data/property";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${property.name} — Guest Guide`,
  description: property.welcome,
  appleWebApp: {
    capable: true,
    title: property.name,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F3" },
    { media: "(prefers-color-scheme: dark)", color: "#1F3556" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SiteNav />
          <main>{children}</main>
          <footer className="border-t border-border bg-muted/30 py-10">
            <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
              <p className="font-serif text-lg tracking-[0.15em] text-navy dark:text-warm-white">
                {property.name.toUpperCase()}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {property.address.line1}, {property.address.town}{" "}
                {property.address.postcode}
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

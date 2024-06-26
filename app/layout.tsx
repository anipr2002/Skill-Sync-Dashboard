import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { roger } from "@/components/fonts/font";
import localFont from "next/font/local";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Sync",
  description: "Skill Sync is a platform for learning and sharing skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roger.variable}`}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            // enableSystem
            disableTransitionOnChange
            storageKey="theme"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}

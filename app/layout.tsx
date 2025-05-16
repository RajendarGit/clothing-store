import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/redux/provider"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elegance | Premium Clothing Store",
  description: "Discover the latest fashion trends for men, women, and kids",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Providers>
            <MainNav />
            <main>{children}</main>
          </Providers>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

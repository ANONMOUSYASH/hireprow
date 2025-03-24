import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata = {
  title: "Hireprow Health Care - Healthcare Services",
  description:
    "Book healthcare services online with Hireprow Health Care. We offer a wide range of healthcare services including general checkups, emergency care, specialist consultations, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>

        {/* Animation Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Initial check for elements in viewport
              const animatedElements = document.querySelectorAll('.animate-on-scroll');
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                  }
                });
              }, { threshold: 0.1 });
              
              animatedElements.forEach(el => {
                observer.observe(el);
              });
            });
          `,
          }}
        />
      </body>
    </html>
  )
}



import './globals.css'
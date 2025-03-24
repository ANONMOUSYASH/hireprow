"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Heart, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-primary text-white py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className={cn("h-8 w-8", scrolled ? "text-primary" : "text-white")} />
            <span className={cn("text-2xl font-bold transition-colors", scrolled ? "text-primary" : "text-white")}>
              Hireprow Health
            </span>
          </Link>

          {/* Quick Contact */}
          <div
            className={cn(
              "hidden md:flex items-center space-x-2 text-sm",
              scrolled ? "text-primary-700" : "text-white",
            )}
          >
            <Phone className="h-4 w-4" />
            <span>+91 8127658100</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "hover:text-accent transition-colors relative group",
                scrolled ? "text-gray-700" : "text-white",
              )}
            >
              <span>Services</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className={cn(
                "hover:text-accent transition-colors relative group",
                scrolled ? "text-gray-700" : "text-white",
              )}
            >
              <span>About Us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className={cn(
                "hover:text-accent transition-colors relative group",
                scrolled ? "text-gray-700" : "text-white",
              )}
            >
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Button asChild variant={scrolled ? "default" : "secondary"} className="animate-pulse hover:animate-none">
              <Link href="/booking">Book Appointment</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X size={24} className={scrolled ? "text-gray-700" : "text-white"} />
            ) : (
              <Menu size={24} className={scrolled ? "text-gray-700" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 bg-white shadow-lg rounded-b-lg">
          <Link
            href="/"
            className="py-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="py-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="py-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
            <Link href="/booking">Book Appointment</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}


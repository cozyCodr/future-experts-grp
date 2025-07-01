"use client"

import { ChevronDown, Globe, Search } from "lucide-react"

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-800 text-white text-center py-2 px-4 text-sm relative">
        Leading provider of commercial fleet safety management solutions
        <div className="absolute top-2 right-4 flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="text-sm">English</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Header */}
      <header className="bg-teal-700 text-white sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="Future Experts Limited" className="h-12 w-auto mr-3" />
              <div>
                <div className="text-2xl font-bold italic">Future Experts Limited</div>
                <div className="text-sm opacity-90 hidden sm:block">Driving Excellence Forward</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`hover:text-teal-200 transition-colors pb-1 ${activeSection === "home" ? "border-b-2 border-white" : ""
                  }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className={`hover:text-teal-200 transition-colors pb-1 ${activeSection === "products" ? "border-b-2 border-white" : ""
                  }`}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("solution")}
                className={`hover:text-teal-200 transition-colors pb-1 ${activeSection === "solution" ? "border-b-2 border-white" : ""
                  }`}
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`hover:text-teal-200 transition-colors pb-1 ${activeSection === "about" ? "border-b-2 border-white" : ""
                  }`}
              >
                About Us
              </button>
            </nav>

            {/* Search Icon */}
            <div className="flex items-center">
              <Search className="w-5 h-5 cursor-pointer hover:text-teal-200" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
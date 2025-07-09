"use client"

import { Phone, Mail, MapPin } from "lucide-react"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold italic mb-4">Future Experts Limited</div>
            <p className="text-gray-400 mb-6">
              An ISO 9001 Certified provider of Commercial fleet safety management solutions
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <div className="flex flex-col">
                  <span>+260 977 701 177</span>
                  <span>+260 969 547 917</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>info@futureexpertsgrp.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>10787 Puku Close, Off Sable Road, Kabulonga, Lusaka</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                  DMS Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                  Fleet Management
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                  Driver Training
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                  Analytics Platform
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("industry")} className="hover:text-white transition-colors">
                  Transportation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("industry")} className="hover:text-white transition-colors">
                  Logistics
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("industry")} className="hover:text-white transition-colors">
                  Construction
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("industry")} className="hover:text-white transition-colors">
                  Public Transit
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("corporate")} className="hover:text-white transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("support")} className="hover:text-white transition-colors">
                  News
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2024 Future Experts Limited. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
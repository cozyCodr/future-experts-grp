"use client"

import { MessageCircle, Mail, Phone, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function FloatingSocialLinks() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/260977701177"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Email */}
      <a
        href="mailto:info@futureexpertsgrp.com"
        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        title="Email"
      >
        <Mail className="w-6 h-6 text-white" />
      </a>

      {/* Phone */}
      <a
        href="tel:+260977701177"
        className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        title="Call Us"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          title="Back to Top"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  )
}
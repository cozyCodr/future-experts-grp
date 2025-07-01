"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import CaringAllWaysSafely from "@/components/CaringAllWaysSafely"
import FleetSafetyManagement from "@/components/FleetSafetyManagement"
import Products from "@/components/Products"
import Solutions from "@/components/Solutions"
import Industries from "@/components/Industries"
import Corporate from "@/components/Corporate"
import Support from "@/components/Support"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import CookieConsent from "@/components/CookieConsent"
import FloatingSocialLinks from "@/components/FloatingSocialLinks"
import AboutAlwayCare from "@/components/AboutAlwayCare"

export default function HomePage() {
  const [cookieConsent, setCookieConsent] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "products", "solution", "about"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <div className="py-16"></div>
      <CaringAllWaysSafely />
      <div className="py-16"></div>
      <FleetSafetyManagement />
      <div className="py-16"></div>
      {/* <Contact /> */}
      <AboutAlwayCare />
      <Footer scrollToSection={scrollToSection} />

      {cookieConsent && (
        <CookieConsent onClose={() => setCookieConsent(false)} />
      )}

      <FloatingSocialLinks />
    </div>
  )
}
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CookieConsentProps {
  onClose: () => void
}

export default function CookieConsent({ onClose }: CookieConsentProps) {
  const [selectedPreferences, setSelectedPreferences] = useState({
    necessary: true,
    analytics: false,
    preferences: false,
    marketing: false,
  })

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Cookie settings</h3>
            <p className="text-sm text-gray-300">
              We use cookies to provide you with the best possible experience. They also allow us to analyze user
              behavior in order to constantly improve the website for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900"
              onClick={onClose}
            >
              Reject All
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              Accept Selection
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={onClose}>
              Accept All
            </Button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={selectedPreferences.necessary} disabled className="rounded" />
            <span>Necessary</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedPreferences.analytics}
              onChange={(e) => setSelectedPreferences((prev) => ({ ...prev, analytics: e.target.checked }))}
              className="rounded"
            />
            <span>Analytics</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedPreferences.preferences}
              onChange={(e) => setSelectedPreferences((prev) => ({ ...prev, preferences: e.target.checked }))}
              className="rounded"
            />
            <span>Preferences</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedPreferences.marketing}
              onChange={(e) => setSelectedPreferences((prev) => ({ ...prev, marketing: e.target.checked }))}
              className="rounded"
            />
            <span>Marketing</span>
          </label>
        </div>
      </div>
    </div>
  )
}
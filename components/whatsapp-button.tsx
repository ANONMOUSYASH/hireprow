"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WhatsappButtonProps {
  phoneNumber: string
}

export function WhatsappButton({ phoneNumber }: WhatsappButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)

  // Show tooltip after 3 seconds, only once
  useState(() => {
    if (!hasBeenShown) {
      const timeout = setTimeout(() => {
        setIsTooltipVisible(true)
        setHasBeenShown(true)

        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setIsTooltipVisible(false)
        }, 5000)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  })

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\+/g, "")}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isTooltipVisible && (
        <div className="absolute bottom-full right-0 mb-2 p-3 bg-white rounded-lg shadow-lg max-w-xs animate-slideUp">
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close tooltip"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm pr-6">Need help? Chat with us on WhatsApp for quick assistance!</p>
        </div>
      )}

      <Button
        onClick={handleClick}
        className={cn(
          "rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg p-0 flex items-center justify-center transition-all duration-300",
          isTooltipVisible ? "animate-bounce" : "hover:scale-110",
        )}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  )
}


"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface StatCounterProps {
  start?: number
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  title: string
  icon?: React.ReactNode
}

export function StatCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  title,
  icon,
}: StatCounterProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrameId: number

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * (end - start) + start)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(startAnimation)
      }
    }

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(startAnimation)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible, start, end, duration, delay])

  return (
    <div
      ref={counterRef}
      className={cn(
        "text-center p-6 transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-4xl font-bold mb-2 gradient-text">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-gray-600">{title}</div>
    </div>
  )
}


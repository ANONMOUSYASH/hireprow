"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  id: string
  icon?: React.ReactNode
}

export function ServiceCard({ title, description, id, icon }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      id={id}
      className="service-card h-full flex flex-col overflow-hidden border-none shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100",
        )}
      />

      <CardHeader className="relative">
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow relative">
        <CardDescription className="text-base text-center">{description}</CardDescription>
      </CardContent>

      <CardFooter className="relative flex justify-center pb-6">
        <Button
          asChild
          variant="outline"
          className={cn("transition-all duration-300 group", isHovered && "bg-primary text-white hover:bg-primary-600")}
        >
          <Link href="/booking">
            Book Now
            <ArrowRight
              className={cn("ml-2 h-4 w-4 transition-transform duration-300", isHovered && "group-hover:translate-x-1")}
            />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


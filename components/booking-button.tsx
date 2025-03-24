"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "lucide-react"

interface BookingButtonProps {
  variant?: "default" | "accent" | "secondary"
}

export function BookingButton({ variant = "default" }: BookingButtonProps) {
  const [open, setOpen] = useState(false)

  const getButtonClass = () => {
    switch (variant) {
      case "accent":
        return "bg-accent hover:bg-accent-600 text-white"
      case "secondary":
        return "bg-secondary hover:bg-secondary-600 text-white"
      default:
        return "bg-primary hover:bg-primary-600 text-white"
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className={`${getButtonClass()} group`}>
          <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Book an Appointment</DialogTitle>
          <DialogDescription>
            Fill out the form below to schedule an appointment with our healthcare professionals.
          </DialogDescription>
        </DialogHeader>
        <BookingForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}


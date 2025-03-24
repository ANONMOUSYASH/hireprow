"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CalendarIcon, Loader2, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  service: z.string().min(1, { message: "Please select a service" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface BookingFormProps {
  onSuccess?: () => void
}

export function BookingForm({ onSuccess }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  const selectedDate = watch("date")

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your server
      console.log("Form data:", data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Format the data for email
      const formattedDate = data.date ? format(data.date, "PPP") : ""
      const emailBody = `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Service: ${data.service}
        Date: ${formattedDate}
        Time: ${data.time}
        Message: ${data.message || "N/A"}
      `

      // Send the data to the API route
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      setIsSuccess(true)

      toast({
        title: "Appointment Booked Successfully!",
        description: "We've received your booking request. We'll contact you shortly to confirm.",
        variant: "default",
      })

      // Reset form after 2 seconds to show success state
      setTimeout(() => {
        reset()
        setIsSuccess(false)
        if (onSuccess) onSuccess()
      }, 2000)
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Booking Successful!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for booking with Hireprow Health Care. We'll contact you shortly to confirm your appointment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          {...register("name")}
          className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          {...register("phone")}
          className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service</Label>
        <Select onValueChange={(value) => setValue("service", value)}>
          <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general-checkup">General Checkup</SelectItem>
            <SelectItem value="emergency-care">Emergency Care</SelectItem>
            <SelectItem value="specialist-consultation">Specialist Consultation</SelectItem>
            <SelectItem value="patient-care">Patient Care Taker</SelectItem>
            <SelectItem value="baby-care">Baby Care Taker</SelectItem>
            <SelectItem value="elderly-care">Elderly Care Taker</SelectItem>
            <SelectItem value="physiotherapy">Physiotherapy Service</SelectItem>
            <SelectItem value="maid-service">Maid Service</SelectItem>
            <SelectItem value="cooking-service">Cooking Service</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && <p className="text-sm text-red-500">{errors.service.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary",
                  !selectedDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setValue("date", date)}
                initialFocus
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
          {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <Select onValueChange={(value) => setValue("time", value)}>
            <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">09:00 AM</SelectItem>
              <SelectItem value="10:00">10:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="12:00">12:00 PM</SelectItem>
              <SelectItem value="13:00">01:00 PM</SelectItem>
              <SelectItem value="14:00">02:00 PM</SelectItem>
              <SelectItem value="15:00">03:00 PM</SelectItem>
              <SelectItem value="16:00">04:00 PM</SelectItem>
              <SelectItem value="17:00">05:00 PM</SelectItem>
            </SelectContent>
          </Select>
          {errors.time && <p className="text-sm text-red-500">{errors.time.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information (Optional)</Label>
        <Textarea
          id="message"
          {...register("message")}
          className="min-h-[100px] transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-primary-700 hover:from-primary-600 hover:to-primary-800 transition-all duration-300 group"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Book Appointment
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </>
        )}
      </Button>
    </form>
  )
}


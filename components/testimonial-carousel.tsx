"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Mother of two",
    content:
      "The baby care service from Hireprow Health Care has been a lifesaver for our family. The caregiver is professional, loving, and our children adore her. I can finally focus on work knowing my kids are in good hands.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Patel",
    role: "Son of elderly patient",
    content:
      "Finding reliable elderly care for my father was challenging until we discovered Hireprow Health Care. Their caregivers are compassionate, well-trained, and truly care about their patients. My father's health has improved significantly under their care.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Patient",
    content:
      "After my surgery, I needed assistance with daily activities. The patient care service from Hireprow exceeded my expectations. The caretaker was attentive, professional, and helped me recover faster than expected.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Busy professional",
    content:
      "The maid service has transformed our home. Coming back to a clean and organized space after a long day at work is exactly what we needed. The staff is thorough, reliable, and respectful of our privacy.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 8000)

    return () => clearInterval(interval)
  }, [activeIndex, isAnimating])

  return (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={goToPrev}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
      </div>

      <div className="overflow-hidden py-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-10">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative">
                <div className="absolute -top-6 left-10 bg-accent rounded-full p-3 shadow-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary-100">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={cn("w-5 h-5", i < testimonial.rating ? "text-yellow-400" : "text-gray-300")}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>

                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeIndex === index ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400",
            )}
            onClick={() => {
              setIsAnimating(true)
              setActiveIndex(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


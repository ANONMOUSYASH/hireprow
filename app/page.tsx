"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookingButton } from "@/components/booking-button"
import { ServiceCard } from "@/components/service-card"
import { WhatsappButton } from "@/components/whatsapp-button"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { StatCounter } from "@/components/stat-counter"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Activity,
  Clock,
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Stethoscope,
  BadgeCheck,
  Sparkles,
  Phone,
} from "lucide-react"

export default function Home() {
  const animatedElementsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => {
      observer.observe(el)
      animatedElementsRef.current.push(el as HTMLElement)
    })

    return () => {
      animatedElementsRef.current.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  const services = [
    {
      title: "General Checkup",
      description: "Regular health check-ups to ensure your well-being and early detection of potential health issues.",
      icon: <Activity className="h-10 w-10 text-primary" />,
      id: "general-checkup",
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency services with experienced professionals ready to respond to urgent medical needs.",
      icon: <Clock className="h-10 w-10 text-primary" />,
      id: "emergency-care",
    },
    {
      title: "Specialist Consultation",
      description: "Consult with expert doctors across various specialties for personalized medical advice.",
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      id: "specialist-consultation",
    },
    {
      title: "Patient Care Taker",
      description: "Professional care takers for patient assistance and support during recovery and daily activities.",
      icon: <Heart className="h-10 w-10 text-primary" />,
      id: "patient-care",
    },
    {
      title: "Baby Care Taker",
      description: "Experienced babysitters and nannies to care for your little ones with attention and compassion.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      id: "baby-care",
    },
    {
      title: "Elderly Care Taker",
      description:
        "Compassionate caregivers for senior citizens providing assistance with daily activities and companionship.",
      icon: <Users className="h-10 w-10 text-primary" />,
      id: "elderly-care",
    },
    {
      title: "Physiotherapy Service",
      description:
        "Our experienced physiotherapists provide personalized treatment plans designed to reduce pain and improve mobility.",
      icon: <Activity className="h-10 w-10 text-primary" />,
      id: "physiotherapy",
    },
    {
      title: "Maid Service",
      description:
        "Our experienced and trained maids offer top-quality cleaning services to ensure your home remains tidy and comfortable.",
      icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
      id: "maid-service",
    },
    {
      title: "Cooking Service",
      description:
        "We offer personalized cooking services tailored to your dietary needs and preferences for healthy, delicious meals.",
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      id: "cooking-service",
    },
  ]

  const faqs = [
    {
      question: "How do I book a healthcare service?",
      answer:
        "You can book our healthcare services through our website by clicking the 'Book Appointment' button, filling out the form with your details, preferred date, and time. Alternatively, you can call us directly at +91 9519040090.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently provide our healthcare services in major cities across India. Please contact us to confirm if we serve your specific location.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our service costs vary depending on the type of care needed, duration, and specific requirements. Please contact us for a personalized quote based on your needs.",
    },
    {
      question: "Are your healthcare professionals certified?",
      answer:
        "Yes, all our healthcare professionals are fully certified, licensed, and have undergone thorough background checks. We ensure they have the necessary qualifications and experience to provide high-quality care.",
    },
    {
      question: "Can I request a specific caregiver?",
      answer:
        "Yes, if you have worked with one of our caregivers before and would like to request them specifically, we will do our best to accommodate your preference based on their availability.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We request at least 24 hours' notice for cancellations. For emergency cancellations, please contact us as soon as possible. Cancellations made with less than 24 hours' notice may incur a fee.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Health, <span className="text-accent">Our Priority</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
                Comprehensive healthcare solutions delivered to your doorstep. Experience personalized care that puts
                your well-being first.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent-600 text-white">
                  <Link href="/booking">Book Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-slideInRight">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full filter blur-3xl"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
                <Image
                  src="https://study.com/cimages/multimages/16/female-clinician-dressed-in-scrubs-using-a-stethoscope-363x544.jpg"
                  alt="Healthcare professional with stethoscope"
                  width={600}
                  height={500}
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 animate-float">
                <div className="bg-green-100 p-2 rounded-full">
                  <BadgeCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Certified Professionals</div>
                  <div className="text-xs text-gray-500">100% verified & trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter
              end={5000}
              suffix="+"
              title="Happy Clients"
              icon={<Users className="h-8 w-8 text-primary" />}
            />
            <StatCounter
              end={50}
              suffix="+"
              title="Expert Professionals"
              icon={<Award className="h-8 w-8 text-primary" />}
            />
            <StatCounter
              end={10000}
              suffix="+"
              title="Services Completed"
              icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
            />
            <StatCounter
              end={24}
              suffix="/7"
              title="Support Available"
              icon={<Clock className="h-8 w-8 text-primary" />}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Healthcare Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              We offer a comprehensive range of healthcare services designed to meet your specific needs. Our team of
              experienced professionals is dedicated to providing high-quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="animate-on-scroll staggered-animation">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  id={service.id}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How It Works</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Booking healthcare services with Hireprow Health Care is simple and convenient. Follow these easy steps to
              get the care you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300 animate-on-scroll">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Calendar className="h-8 w-8 text-primary" />
                <div className="absolute -right-2 -top-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Book an Appointment</h3>
              <p className="text-gray-600 text-center">
                Fill out our simple booking form with your details, preferred service, date, and time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300 animate-on-scroll">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="h-8 w-8 text-primary" />
                <div className="absolute -right-2 -top-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Confirmation Call</h3>
              <p className="text-gray-600 text-center">
                Our team will call you to confirm your appointment and discuss any specific requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300 animate-on-scroll">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-8 w-8 text-primary" />
                <div className="absolute -right-2 -top-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Receive Care</h3>
              <p className="text-gray-600 text-center">
                Our healthcare professional will arrive at your location at the scheduled time to provide the service.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="animate-pulse hover:animate-none">
              <Link href="/booking">Book Your Service Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about our healthcare services.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">Find answers to common questions about our healthcare services.</p>
          </div>

          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Quality Healthcare?</h2>
              <p className="text-lg mb-8 text-gray-100 max-w-xl">
                Book an appointment with our healthcare professionals today and take the first step towards better
                health and well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <BookingButton variant="accent" />
                <Button variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="flex items-start mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">24/7 Availability</h3>
                    <p className="text-gray-200">Our healthcare services are available round the clock.</p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Certified Professionals</h3>
                    <p className="text-gray-200">All our healthcare providers are certified and experienced.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Personalized Care</h3>
                    <p className="text-gray-200">We tailor our services to meet your specific healthcare needs.</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 bg-accent text-white rounded-lg shadow-lg p-4 animate-float">
                <div className="font-bold">Special Offer</div>
                <div className="text-sm">20% off first booking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsappButton phoneNumber="+919519040090" />
    </main>
  )
}


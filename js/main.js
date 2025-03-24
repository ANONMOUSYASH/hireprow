// DOM Elements
const navbar = document.getElementById("navbar")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileNav = document.getElementById("mobileNav")
const navBookBtn = document.getElementById("navBookBtn")
const mobileBookBtn = document.getElementById("mobileBookBtn")
const ctaBookBtn = document.getElementById("ctaBookBtn")
const bookingModal = document.getElementById("bookingModal")
const closeModal = document.getElementById("closeModal")
const bookingForm = document.getElementById("bookingForm")
const submitBooking = document.getElementById("submitBooking")
const submitText = document.getElementById("submitText")
const loadingSpinner = document.getElementById("loadingSpinner")
const bookingSuccess = document.getElementById("bookingSuccess")
const whatsappBtn = document.getElementById("whatsappBtn")
const whatsappTooltip = document.getElementById("whatsappTooltip")
const closeTooltip = document.getElementById("closeTooltip")
const loadMoreServices = document.getElementById("loadMoreServices")
const testimonialContainer = document.getElementById("testimonialContainer")
const testimonialDots = document.getElementById("testimonialDots")
const prevTestimonial = document.getElementById("prevTestimonial")
const nextTestimonial = document.getElementById("nextTestimonial")
const faqAccordion = document.getElementById("faqAccordion")
const currentYear = document.getElementById("currentYear")

// Set current year in footer
if (currentYear) {
  currentYear.textContent = new Date().getFullYear()
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open")

    // Change icon
    const icon = mobileMenuBtn.querySelector("i")
    if (mobileNav.classList.contains("open")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })
}

// Booking modal
const openBookingModal = () => {
  bookingModal.classList.add("open")
  document.body.style.overflow = "hidden"
}

const closeBookingModal = () => {
  bookingModal.classList.remove("open")
  document.body.style.overflow = ""
}

if (navBookBtn) navBookBtn.addEventListener("click", openBookingModal)
if (mobileBookBtn) mobileBookBtn.addEventListener("click", openBookingModal)
if (ctaBookBtn) ctaBookBtn.addEventListener("click", openBookingModal)
if (closeModal) closeModal.addEventListener("click", closeBookingModal)

// Close modal when clicking outside
if (bookingModal) {
  bookingModal.addEventListener("click", (e) => {
    if (e.target === bookingModal) {
      closeBookingModal()
    }
  })
}

// Set min date for booking to today
const dateInput = document.getElementById("date")
if (dateInput) {
  const today = new Date().toISOString().split("T")[0]
  dateInput.setAttribute("min", today)
}

// Form validation
const validateForm = () => {
  let isValid = true
  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const phone = document.getElementById("phone")
  const service = document.getElementById("service")
  const date = document.getElementById("date")
  const time = document.getElementById("time")

  const nameError = document.getElementById("nameError")
  const emailError = document.getElementById("emailError")
  const phoneError = document.getElementById("phoneError")
  const serviceError = document.getElementById("serviceError")
  const dateError = document.getElementById("dateError")
  const timeError = document.getElementById("timeError")

  // Reset errors
  nameError.textContent = ""
  emailError.textContent = ""
  phoneError.textContent = ""
  serviceError.textContent = ""
  dateError.textContent = ""
  timeError.textContent = ""

  // Validate name
  if (!name.value.trim()) {
    nameError.textContent = "Name is required"
    isValid = false
  } else if (name.value.trim().length < 2) {
    nameError.textContent = "Name must be at least 2 characters"
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value.trim()) {
    emailError.textContent = "Email is required"
    isValid = false
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address"
    isValid = false
  }

  // Validate phone
  if (!phone.value.trim()) {
    phoneError.textContent = "Phone number is required"
    isValid = false
  } else if (phone.value.trim().length < 10) {
    phoneError.textContent = "Please enter a valid phone number"
    isValid = false
  }

  // Validate service
  if (!service.value) {
    serviceError.textContent = "Please select a service"
    isValid = false
  }

  // Validate date
  if (!date.value) {
    dateError.textContent = "Please select a date"
    isValid = false
  }

  // Validate time
  if (!time.value) {
    timeError.textContent = "Please select a time"
    isValid = false
  }

  return isValid
}

// Handle form submission
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Show loading state
      submitText.classList.add("hidden")
      loadingSpinner.classList.remove("hidden")
      submitBooking.disabled = true

      // Simulate API call
      setTimeout(() => {
        // Hide form and show success message
        bookingForm.classList.add("hidden")
        bookingSuccess.classList.remove("hidden")

        // Reset form
        bookingForm.reset()

        // Close modal after 3 seconds
        setTimeout(() => {
          closeBookingModal()
          // Reset form state
          bookingForm.classList.remove("hidden")
          bookingSuccess.classList.add("hidden")
          submitText.classList.remove("hidden")
          loadingSpinner.classList.add("hidden")
          submitBooking.disabled = false
        }, 3000)
      }, 1500)
    }
  })
}

// WhatsApp button
if (whatsappBtn) {
  whatsappBtn.querySelector(".whatsapp-icon").addEventListener("click", () => {
    window.open("https://wa.me/918127658100", "_blank")
  })

  // Show tooltip after 3 seconds
  setTimeout(() => {
    whatsappTooltip.classList.add("show")

    // Hide tooltip after 5 seconds
    setTimeout(() => {
      whatsappTooltip.classList.remove("show")
    }, 5000)
  }, 3000)

  // Close tooltip
  if (closeTooltip) {
    closeTooltip.addEventListener("click", () => {
      whatsappTooltip.classList.remove("show")
    })
  }
}

// Load more services
if (loadMoreServices) {
  loadMoreServices.addEventListener("click", () => {
    const additionalServices = [
      {
        icon: "fas fa-running",
        title: "Physiotherapy Service",
        description:
          "Our experienced physiotherapists provide personalized treatment plans designed to reduce pain and improve mobility.",
      },
      {
        icon: "fas fa-broom",
        title: "Maid Service",
        description:
          "Our experienced and trained maids offer top-quality cleaning services to ensure your home remains tidy and comfortable.",
      },
      {
        icon: "fas fa-utensils",
        title: "Cooking Service",
        description:
          "We offer personalized cooking services tailored to your dietary needs and preferences for healthy, delicious meals.",
      },
    ]

    const servicesGrid = document.querySelector(".services-grid")

    additionalServices.forEach((service, index) => {
      const serviceCard = document.createElement("div")
      serviceCard.className = "service-card animate-on-scroll staggered-animation"
      serviceCard.innerHTML = `
        <div class="service-icon">
          <i class="${service.icon}"></i>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <a href="booking.html" class="btn btn-outline service-btn">
          Book Now <i class="fas fa-arrow-right"></i>
        </a>
      `

      servicesGrid.appendChild(serviceCard)

      // Trigger animation
      setTimeout(() => {
        serviceCard.classList.add("animate")
      }, 100)
    })

    // Hide the button
    loadMoreServices.style.display = "none"
  })
}

// Testimonials
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of two",
    content:
      "The baby care service from Hireprow Health Care has been a lifesaver for our family. The caregiver is professional, loving, and our children adore her. I can finally focus on work knowing my kids are in good hands.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    role: "Son of elderly patient",
    content:
      "Finding reliable elderly care for my father was challenging until we discovered Hireprow Health Care. Their caregivers are compassionate, well-trained, and truly care about their patients. My father's health has improved significantly under their care.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Patient",
    content:
      "After my surgery, I needed assistance with daily activities. The patient care service from Hireprow exceeded my expectations. The caretaker was attentive, professional, and helped me recover faster than expected.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    role: "Busy professional",
    content:
      "The maid service has transformed our home. Coming back to a clean and organized space after a long day at work is exactly what we needed. The staff is thorough, reliable, and respectful of our privacy.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
]

// Initialize testimonials
let currentTestimonial = 0

const renderTestimonials = () => {
  if (!testimonialContainer) return

  testimonialContainer.innerHTML = ""
  const testimonialSlide = document.createElement("div")
  testimonialSlide.className = "testimonial-slide"

  testimonials.forEach((testimonial, index) => {
    const testimonialCard = document.createElement("div")
    testimonialCard.className = "testimonial-card"
    testimonialCard.style.transform = `translateX(-${currentTestimonial * 100}%)`

    const stars = Array(5)
      .fill("")
      .map((_, i) => {
        return i < testimonial.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'
      })
      .join("")

    testimonialCard.innerHTML = `
      <div class="testimonial-quote">
        <i class="fas fa-quote-right"></i>
      </div>
      <div class="testimonial-content">
        <div class="testimonial-avatar">
          <img src="${testimonial.avatar}" alt="${testimonial.name}">
        </div>
        <div class="testimonial-rating">
          ${stars}
        </div>
        <p class="testimonial-text">"${testimonial.content}"</p>
        <div class="testimonial-author">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role}</p>
        </div>
      </div>
    `

    testimonialSlide.appendChild(testimonialCard)
  })

  testimonialContainer.appendChild(testimonialSlide)

  // Update dots
  if (testimonialDots) {
    testimonialDots.innerHTML = ""
    testimonials.forEach((_, index) => {
      const dot = document.createElement("span")
      dot.className = `dot ${index === currentTestimonial ? "active" : ""}`
      dot.addEventListener("click", () => {
        currentTestimonial = index
        updateTestimonial()
      })
      testimonialDots.appendChild(dot)
    })
  }
}

const updateTestimonial = () => {
  const testimonialSlide = document.querySelector(".testimonial-slide")
  if (testimonialSlide) {
    testimonialSlide.style.transform = `translateX(-${currentTestimonial * 100}%)`
  }

  // Update dots
  const dots = document.querySelectorAll(".dot")
  dots.forEach((dot, index) => {
    if (index === currentTestimonial) {
      dot.classList.add("active")
    } else {
      dot.classList.remove("active")
    }
  })
}

if (testimonialContainer) {
  renderTestimonials()

  // Previous button
  if (prevTestimonial) {
    prevTestimonial.addEventListener("click", () => {
      currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
      updateTestimonial()
    })
  }

  // Next button
  if (nextTestimonial) {
    nextTestimonial.addEventListener("click", () => {
      currentTestimonial = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
      updateTestimonial()
    })
  }

  // Auto slide
  setInterval(() => {
    currentTestimonial = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
    updateTestimonial()
  }, 8000)
}

// FAQ Accordion
const faqs = [
  {
    question: "How do I book a healthcare service?",
    answer:
      'You can book our healthcare services through our website by clicking the "Book Appointment" button, filling out the form with your details, preferred date, and time. Alternatively, you can call us directly at +91 8127658100.',
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

if (faqAccordion) {
  faqs.forEach((faq, index) => {
    const accordionItem = document.createElement("div")
    accordionItem.className = "accordion-item"
    accordionItem.innerHTML = `
      <div class="accordion-header">
        <div>${faq.question}</div>
        <div class="accordion-icon">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div class="accordion-content">
        <div class="accordion-body">
          ${faq.answer}
        </div>
      </div>
    `

    faqAccordion.appendChild(accordionItem)

    // Add click event
    const header = accordionItem.querySelector(".accordion-header")
    header.addEventListener("click", () => {
      accordionItem.classList.toggle("active")
    })
  })
}

// Animate on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll")

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

  elements.forEach((element) => {
    observer.observe(element)
  })
}

// Stat counter animation
const animateStatCounters = () => {
  const statCards = document.querySelectorAll(".stat-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target
          card.classList.add("animate")

          const value = card.dataset.statValue
          const suffix = card.dataset.statSuffix || ""
          const valueElement = card.querySelector(".stat-value")

          if (value && valueElement) {
            let startValue = 0
            const endValue = Number.parseInt(value)
            const duration = 2000
            const increment = endValue / (duration / 16)

            const updateCounter = () => {
              startValue += increment
              if (startValue < endValue) {
                valueElement.textContent = Math.floor(startValue) + suffix
                requestAnimationFrame(updateCounter)
              } else {
                valueElement.textContent = endValue + suffix
              }
            }

            requestAnimationFrame(updateCounter)
          }
        }
      })
    },
    { threshold: 0.1 },
  )

  statCards.forEach((card) => {
    observer.observe(card)
  })
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll()
  animateStatCounters()
})


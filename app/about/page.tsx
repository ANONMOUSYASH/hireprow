import Image from "next/image"
import { BookingButton } from "@/components/booking-button"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">About Hireprow Health Care</h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare services to improve the quality of life for our patients and
            their families.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Founded with a vision to make quality healthcare accessible to everyone, Hireprow Health Care has been
                serving the community since 2015. What started as a small clinic has now grown into a comprehensive
                healthcare service provider.
              </p>
              <p className="mb-4">
                Our journey began when our founder, Dr. Sharma, recognized the need for personalized healthcare services
                that could be delivered at patients' homes. This insight led to the creation of Hireprow Health Care,
                which has since helped thousands of patients receive quality care in the comfort of their homes.
              </p>
              <p>
                Today, we continue to expand our services while maintaining our core values of compassion, excellence,
                and patient-centered care.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Healthcare professionals"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p>
                To provide accessible, high-quality healthcare services that improve the well-being of our patients and
                their families. We strive to deliver compassionate care that addresses the unique needs of each
                individual we serve.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p>
                To be the leading provider of home healthcare services, recognized for excellence, innovation, and
                patient satisfaction. We aim to transform healthcare delivery by making it more personalized,
                convenient, and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Team member ${i}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Dr. {["Sharma", "Patel", "Singh"][i - 1]}</h3>
                <p className="text-gray-600 mb-2">
                  {["Medical Director", "Chief of Operations", "Head of Patient Care"][i - 1]}
                </p>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                  With over {10 + i * 5} years of experience in healthcare, Dr. {["Sharma", "Patel", "Singh"][i - 1]}{" "}
                  brings expertise and compassion to our team.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our Care</h2>
          <p className="text-lg mb-8">Book a service with our healthcare professionals today.</p>
          <BookingButton />
        </div>
      </section>

      <WhatsappButton phoneNumber="+919519040090" />
    </main>
  )
}


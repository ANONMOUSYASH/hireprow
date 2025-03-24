import { BookingForm } from "@/components/booking-form"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function BookingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Book an Appointment</h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Schedule a service with our healthcare professionals. We'll confirm your appointment shortly.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Booking Information</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Fill out the booking form with your details and preferred date/time.</li>
                  <li>Our team will review your request and check availability.</li>
                  <li>We'll contact you to confirm your appointment or suggest alternative times.</li>
                  <li>Once confirmed, our healthcare professional will arrive at the scheduled time.</li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Cancellation Policy</h3>
                <p className="text-gray-700 mb-4">
                  We understand that plans can change. If you need to cancel or reschedule your appointment, please let
                  us know at least 24 hours in advance.
                </p>
                <p className="text-gray-700">
                  For emergency cancellations, please contact us as soon as possible at +91 9519040090.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions or need assistance with booking, please don't hesitate to contact us:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Phone: +91 9519040090</li>
                  <li>Email: infohireprow@gmail.com</li>
                  <li>WhatsApp: Click the WhatsApp button in the corner to chat with us directly.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsappButton phoneNumber="+919519040090" />
    </main>
  )
}


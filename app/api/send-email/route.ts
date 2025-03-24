import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, date, time, message, subject } = body

    // In a production environment, you would use a service like Nodemailer, SendGrid, etc.
    // to send the email to infohireprow@gmail.com

    console.log("Email would be sent to infohireprow@gmail.com with the following data:", {
      name,
      email,
      phone,
      service,
      date: date ? new Date(date).toLocaleDateString() : undefined,
      time,
      message,
      subject,
    })

    // For now, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: "Email sent successfully to infohireprow@gmail.com",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}


import { useState } from "react"
import DashboardCard from "../components/DadhBoardCaed"
import BookingTable, { Booking } from "../components/bookingTable"
export const mockData = {
  totalBookings: 15,
  pendingBookings: [
    {
      _id: "67290e408b5bbc433e667d22",
      client: "John Doe",
      serviceProvider: "Cleaning Co.",
      service: "House Cleaning",
      bookingDate: "2024-11-04T00:00:00.000Z",
      bookingTime: "10:00 AM",
      status: "Pending",
      paymentStatus: "Unpaid",
      location: {
        type: "Point",
        coordinates: [75.8577258, 22.7195687],
      },
    },
    {
      _id: "67290e408b5bbc433e667d23",
      client: "Jane Smith",
      serviceProvider: "Gardening Inc.",
      service: "Lawn Mowing",
      bookingDate: "2024-11-05T00:00:00.000Z",
      bookingTime: "2:00 PM",
      status: "Pending",
      paymentStatus: "Paid",
      location: {
        type: "Point",
        coordinates: [75.8677258, 22.7295687],
      },
    },
  ],
  inProgressBookings: [
    {
      _id: "67290e408b5bbc433e667d24",
      client: "Alice Johnson",
      serviceProvider: "Plumbing Experts",
      service: "Pipe Repair",
      bookingDate: "2024-11-04T00:00:00.000Z",
      bookingTime: "11:30 AM",
      status: "In Progress",
      paymentStatus: "Paid",
      location: {
        type: "Point",
        coordinates: [75.8477258, 22.7095687],
      },
    },
  ],
  completedBookings: [
    {
      _id: "67290e408b5bbc433e667d25",
      client: "Bob Williams",
      serviceProvider: "Electricians R Us",
      service: "Wiring Installation",
      bookingDate: "2024-11-03T00:00:00.000Z",
      bookingTime: "9:00 AM",
      status: "Completed",
      paymentStatus: "Paid",
      location: {
        type: "Point",
        coordinates: [75.8377258, 22.7395687],
      },
    },
    {
      _id: "67290e408b5bbc433e667d26",
      client: "Charlie Brown",
      serviceProvider: "Paint Masters",
      service: "Interior Painting",
      bookingDate: "2024-11-02T00:00:00.000Z",
      bookingTime: "1:00 PM",
      status: "Completed",
      paymentStatus: "Paid",
      location: {
        type: "Point",
        coordinates: [75.8677258, 22.7195687],
      },
    },
  ],
}
export default function BookingDashboard() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Booking Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="Total Bookings" value={mockData.totalBookings} />
        <DashboardCard title="Pending" value={mockData.pendingBookings.length} />
        <DashboardCard title="In Progress" value={mockData.inProgressBookings.length} />
        <DashboardCard title="Completed" value={mockData.completedBookings.length} />
      </div>
      <BookingTable bookings={mockData.pendingBookings} title="Pending Bookings" onBookingSelect={setSelectedBooking} />
      <BookingTable bookings={mockData.inProgressBookings} title="In Progress Bookings" onBookingSelect={setSelectedBooking} />
      <BookingTable bookings={mockData.completedBookings} title="Completed Bookings" onBookingSelect={setSelectedBooking} />
    </div>
  )
}

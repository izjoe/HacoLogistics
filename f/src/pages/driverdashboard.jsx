import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  MapPin,
  ArrowRight,
  Truck,
  IndianRupee,
  Clock,
  CheckCircle,
  XCircle,
  BarChart2,
  Activity,
} from "lucide-react";

export default function Driverdashboard() {
  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const token = sessionStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : {};
  const email = decoded.email;

  // Notification
  const notify = (text) => {
    setMsg(text);
    setTimeout(() => setMsg(""), 2000);
  };

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      const bookingRes = await axios.get("http://localhost:4500/getbooking", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBookings(bookingRes.data);

      const vehicleRes = await axios.get(
        `http://localhost:4500/viewvehiclebydriverEmail/${email}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setVehicles(vehicleRes.data.vehicles);
    } catch (err) {
      console.log("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Update booking status
  const updateStatus = async (bookingid, status) => {
    try {
      await axios.post(
        `http://localhost:4500/updatebooking/${bookingid}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      notify(`Status updated → ${status}`);
      fetchDashboardData();
    } catch (err) {
      notify(" Update failed");
      console.log(err);
    }
  };

  // Dashboard Analytics
  const totalBookings = bookings.length;
  const totalVehicles = vehicles.length;
  const completed = bookings.filter((b) => b.status === "Completed").length;
  const ongoing = bookings.filter((b) => b.status === "Ongoing").length;

  const statusColor = {
    Pending: "bg-yellow-500/20 text-yellow-700",
    Paid: "bg-yellow-400/20 text-yellow-700",
    Accepted: "bg-yellow-300/20 text-yellow-800",
    Ongoing: "bg-yellow-400/20 text-yellow-700",
    Completed: "bg-green-500/20 text-green-700",
    Cancelled: "bg-red-500/20 text-red-600",
  };

  return (
    <div className="min-h-screen bg-white text-yellow-900 p-6">

      {/* NOTIFICATION */}
      {msg && (
        <div className="fixed top-20 right-6 px-4 py-2 bg-yellow-500 text-white rounded shadow-lg z-50 animate-pulse">
          {msg}
        </div>
      )}

      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-700">
        Driver Dashboard
      </h1>

      {/* ANALYTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-300 shadow-lg">
          <div className="flex items-center gap-4">
            <BarChart2 className="text-yellow-700 w-10 h-10" />
            <div>
              <p className="text-gray-600 text-sm">Total Bookings</p>
              <h2 className="text-3xl font-bold text-yellow-700">{totalBookings}</h2>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border border-amber-300 shadow-lg">
          <div className="flex items-center gap-4">
            <Truck className="text-amber-600 w-10 h-10" />
            <div>
              <p className="text-gray-600 text-sm">Your Vehicles</p>
              <h2 className="text-3xl font-bold text-amber-700">{totalVehicles}</h2>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-400 shadow-lg">
          <div className="flex items-center gap-4">
            <Activity className="text-yellow-600 w-10 h-10" />
            <div>
              <p className="text-gray-600 text-sm">Ongoing Trips</p>
              <h2 className="text-3xl font-bold text-yellow-700">{ongoing}</h2>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border border-green-300 shadow-lg">
          <div className="flex items-center gap-4">
            <CheckCircle className="text-green-600 w-10 h-10" />
            <div>
              <p className="text-gray-600 text-sm">Completed</p>
              <h2 className="text-3xl font-bold text-green-600">{completed}</h2>
            </div>
          </div>
        </div>

      </div>

      {/* BOOKINGS LIST */}
      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No bookings assigned to you.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {bookings.map((b) => (
            <div
              key={b.bookingid}
              className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-lg hover:shadow-yellow-300/30 transition-all duration-300"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-yellow-700">
                  Booking #{b.bookingid}
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm ${statusColor[b.status]}`}>
                  {b.status}
                </span>
              </div>

              {/* DETAILS */}
              <p className="text-gray-600">Pickup: <span className="text-yellow-900">{b.pickupLocation}</span></p>
              <p className="text-gray-600">Drop: <span className="text-yellow-900">{b.dropLocation}</span></p>
              <p className="text-gray-600">Vehicle: <span className="text-yellow-900">{b.vehicleNo}</span></p>
              <p className="text-gray-600">Fare: <span className="text-green-600 font-bold">₹{b.totalFare}</span></p>

              <p className="text-gray-500 text-sm mt-4">
                Booked On: {new Date(b.createdAt).toLocaleString()}
              </p>

              {/* ACTION BUTTONS */}
              <div className="mt-5 flex flex-wrap gap-3">

                {b.status === "Paid" && (
                  <button
                    onClick={() => updateStatus(b.bookingid, "Accepted")}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    Accept
                  </button>
                )}

                {b.status === "Accepted" && (
                  <button
                    onClick={() => updateStatus(b.bookingid, "Ongoing")}
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg"
                  >
                    Start Trip
                  </button>
                )}

                {b.status === "Ongoing" && (
                  <button
                    onClick={() => updateStatus(b.bookingid, "Completed")}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
                  >
                    Complete Trip
                  </button>
                )}

                {(b.status === "Paid" || b.status === "Accepted") && (
                  <button
                    onClick={() => updateStatus(b.bookingid, "Cancelled")}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
                  >
                    Cancel
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

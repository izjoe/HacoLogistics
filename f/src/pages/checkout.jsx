import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapPin, ArrowRight, Truck, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Checkout() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState({ text: "", type: "" });


  // TOAST MESSAGE
  
  const notify = (text, type) => {
    setMsg({ text, type });
    setTimeout(() => setMsg({ text: "", type: "" }), 2500);
  };

  
  // DECODE JWT
  
  const decodeToken = () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) return null;
      return JSON.parse(atob(token.split(".")[1]));
    } catch {
      return null;
    }
  };

  const user = decodeToken();
const navigate = useNavigate();

  
  // FETCH BOOKINGS

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:4500/getbooking", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });

      setBookings(res.data.filter((b) => b.status === "Pending"));
    } catch {
      notify("Failed to load bookings!", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchBookings();
  }, [user]);

  
  // HANDLE PAYMENT
  
  const handlePayment = async (bookingid) => {
    try {
      await axios.post(
        `http://localhost:4500/updatebooking/${bookingid}`,
        { status: "Paid" },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

      notify("Payment Successful!", "success");

      
      setBookings((prev) =>
        prev.filter((b) => b.bookingid !== bookingid)
      );
      setSelectedBooking(null);

      setTimeout(() => {
       navigate("/shipperdashboard");
      }, 1500);
    } catch (err) {
      notify(err.response?.data?.message || "Payment Failed!", "error");
    }
  }; 

 
  // HANDLE CANCEL
 
  const handleCancel = async (bookingid) => {
    try {
      await axios.post(
        `http://localhost:4500/updatebooking/${bookingid}`,
        { status: "Cancelled" },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

      notify("Booking Cancelled!", "success");

      setBookings((prev) =>
        prev.filter((b) => b.bookingid !== bookingid)
      );
      setSelectedBooking(null);
    } catch (err) {
      notify(err.response?.data?.message || "Cancel Failed!", "error");
    }
  };

  
  return (
    <div className="min-h-screen bg-white text-yellow-900 flex justify-center p-6">
      {/* TOAST */}
      {msg.text && (
        <div
          className={`fixed top-24 right-6 px-5 py-3 rounded-lg shadow-xl z-50 font-semibold
          ${msg.type === "success" ? "bg-yellow-500" : "bg-red-500"}`}
        >
          {msg.text}
        </div>
      )}

      <div className="w-full max-w-4xl bg-yellow-50/60 backdrop-blur-xl shadow-2xl p-8 rounded-2xl border border-yellow-200">
        <h1 className="text-4xl font-bold text-center mb-10 text-yellow-700">
          Pending Payments
        </h1>

        {loading && (
          <p className="text-center text-yellow-700 animate-pulse">
            Loading pending bookings...
          </p>
        )}

        {!loading && bookings.length === 0 && (
          <p className="text-center text-red-400 text-lg">
            You have no pending payments
          </p>
        )}

        {!loading && bookings.length > 0 && (
          <div className="space-y-5">
            {bookings.map((b) => (
              <div
                key={b.bookingid}
                onClick={() => setSelectedBooking(b)}
                className={`p-6 cursor-pointer rounded-xl transition-all border
                ${
                  selectedBooking?.bookingid === b.bookingid
                    ? "border-yellow-500 bg-yellow-50/30 shadow-lg"
                    : "border-yellow-200 hover:border-yellow-400 hover:bg-yellow-50/20"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-yellow-700">
                    Booking #{b.bookingid}
                  </h2>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                    Pending
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-300" />
                  <span>{b.pickupLocation}</span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <ArrowRight className="w-5 h-5 text-red-300" />
                  <span>{b.dropLocation}</span>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <Truck className="w-5 h-5 text-yellow-700" />
                  <span>{b.vehicleNo}</span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <IndianRupee className="w-5 h-5 text-green-300" />
                  <span className="text-green-300 text-lg font-bold">
                    ₹{b.totalFare}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedBooking && (
          <div className="mt-10 bg-yellow-50 p-6 rounded-xl border border-yellow-300 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-yellow-700 mb-4">
              Booking #{selectedBooking.bookingid}
            </h2>

            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={() =>
                  handlePayment(selectedBooking.bookingid)
                }
                className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 font-bold shadow-lg"
              >
                Pay Now
              </button>

              <button
                onClick={() =>
                  handleCancel(selectedBooking.bookingid)
                }
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 font-bold shadow-lg"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

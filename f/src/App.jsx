import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from 'react-hot-toast';

// Import từ pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Viewvehicle from "./pages/viewvehicle";
import Addvehicle from "./pages/addvehicle";
import Book from "./pages/book";
import Checkout from "./pages/checkout";
import Updatevehicle from "./pages/updatevehicle";
import Driverdashboard from "./pages/driverdashboard";
import Shipperdashboard from "./pages/shipperdashboard";
import Resetpassword from "./pages/resetpassword";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminContact from "./pages/admin/AdminContact";
import AdminNews from "./pages/admin/AdminNews";
import AdminUsers from "./pages/admin/AdminUsers";

// Import từ components
import Nav from "./components/Nav";
import AI from "./components/ai";

function AppRoutes() {
  const { userData, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-yellow-700">
        Checking authentication...
      </div>
    );
  }

  const AdminRoute = (el) =>
    !userData ? <Navigate to="/login" /> :
    userData.role !== "admin" ? <Navigate to="/" /> :
    el;

  const ShipperRoute = (el) =>
    !userData ? <Navigate to="/login" /> :
    userData.role !== "shipper" ? <Navigate to="/" /> :
    el;

  const DriverRoute = (el) =>
    !userData ? <Navigate to="/login" /> :
    userData.role !== "driver" ? <Navigate to="/" /> :
    el;

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      {!window.location.pathname.startsWith('/admin') && <Nav />}
      <AI />

      <div className={!window.location.pathname.startsWith('/admin') ? "pt-20 bg-white min-h-screen text-yellow-900" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<Resetpassword />} />

          <Route path="/viewvehicle" element={ShipperRoute(<Viewvehicle />)} />
          <Route path="/bookvehicle" element={ShipperRoute(<Book />)} />
          <Route path="/checkout" element={ShipperRoute(<Checkout />)} />
          <Route path="/shipperdashboard" element={ShipperRoute(<Shipperdashboard />)} />

          <Route path="/addvehicle" element={DriverRoute(<Addvehicle />)} />
          <Route path="/updatevehicle" element={DriverRoute(<Updatevehicle />)} />
          <Route path="/driverdashboard" element={DriverRoute(<Driverdashboard />)} />

          <Route path="/admin" element={AdminRoute(<AdminLayout />)}>
             <Route index element={<div className="p-10 text-2xl">Chào mừng Admin quay lại! 👋</div>} />
             <Route path="contacts" element={<AdminContact />} />
             <Route path="news" element={<AdminNews />} />
             <Route path="users" element={<AdminUsers />} />
          </Route>

        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <AppRoutes />
        </LanguageProvider>
      </AuthProvider>
    </Router>
  );
}
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LogOut, Users, FileText, Mail, LayoutDashboard } from "lucide-react";

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-yellow-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-yellow-800">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin" className="flex items-center gap-3 p-3 rounded hover:bg-yellow-800 transition">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/admin/contacts" className="flex items-center gap-3 p-3 rounded hover:bg-yellow-800 transition">
            <Mail size={20} /> Liên Hệ Khách
          </Link>
          <Link to="/admin/news" className="flex items-center gap-3 p-3 rounded hover:bg-yellow-800 transition">
            <FileText size={20} /> Quản Lý Tin Tức
          </Link>
          <Link to="/admin/users" className="flex items-center gap-3 p-3 rounded hover:bg-yellow-800 transition">
            <Users size={20} /> Quản Lý Users
          </Link>
        </nav>
        <button onClick={handleLogout} className="p-4 bg-red-700 hover:bg-red-800 flex items-center justify-center gap-2">
          <LogOut size={20} /> Đăng Xuất
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
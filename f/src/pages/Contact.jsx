import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext"; // Lưu ý đường dẫn import
import axiosClient from "../api/axiosClient";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import toast from 'react-hot-toast';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "" // BE không có subject, nhưng nếu cần có thể gộp vào message
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Gọi API Backend
      await axiosClient.post("/contact", form);
      
      toast.success("✅ Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("❌ Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-yellow-900 mb-6 text-center">
          {t("contact_page.quote_form_title") || "Liên Hệ Với Chúng Tôi"}
        </h2>

        <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-yellow-900 mb-2">Họ Tên</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-yellow-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-yellow-900 mb-2">Số Điện Thoại</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-yellow-900 mb-2">Lời Nhắn</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Đang gửi..." : <><Send className="w-5 h-5" /> Gửi Liên Hệ</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
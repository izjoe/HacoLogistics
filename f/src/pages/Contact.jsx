import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            {t("contact_page.hero_title")}
          </h1>
          <p className="text-xl text-yellow-50 max-w-3xl mx-auto">
            {t("contact_page.hero_subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Contact Form */}
        <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6 text-center">{t("contact_page.quote_form_title")}</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700">
              ✓ {t("contact_page.success_message")}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-yellow-900 mb-2">
                  {t("contact_page.name")} {t("contact_page.required")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-yellow-900"
                  placeholder={t("contact_page.name_placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-yellow-900 mb-2">
                  {t("contact_page.email")} {t("contact_page.required")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-yellow-900"
                  placeholder={t("contact_page.email_placeholder")}
                />
              </div>
            </div>

            {/* Phone & Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-yellow-900 mb-2">
                  {t("contact_page.phone")} {t("contact_page.required")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-yellow-900"
                  placeholder={t("contact_page.phone_placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-yellow-900 mb-2">
                  {t("contact_page.subject")} {t("contact_page.required")}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-yellow-900"
                  placeholder={t("contact_page.subject_placeholder")}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-yellow-900 mb-2">
                {t("contact_page.message")} {t("contact_page.required")}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-yellow-900 resize-none"
                placeholder={t("contact_page.message_placeholder")}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {t("contact_page.submit")}
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-yellow-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-900 mb-16">
            Câu Hỏi Thường Gặp
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "HacoLogistics hoạt động ở những thành phố nào?",
                a: "HacoLogistics hiện hoạt động tại hơn 500 thành phố trên toàn quốc. Bạn có thể kiểm tra tính khả dụng bằng cách nhập địa chỉ của mình trên ứng dụng."
              },
              {
                q: "Thời gian giao hàng trung bình là bao lâu?",
                a: "Thời gian giao hàng thường là 2-4 giờ tùy theo khoảng cách. Giao hàng cùng ngày có sẵn cho các khu vực nội thành."
              },
              {
                q: "Nếu hàng hóa bị mất hoặc hư hỏng thì sao?",
                a: "Tất cả các giao dịch qua HacoLogistics đều được bảo hiểm toàn diện. Nếu có vấn đề, vui lòng liên hệ hỗ trợ 24/7 để nhận bồi thường."
              },
              {
                q: "Tôi có thể theo dõi giao hàng của tôi không?",
                a: "Có, bạn có thể theo dõi giao hàng real-time thông qua ứng dụng HacoLogistics hoặc website. Bạn sẽ nhận được cập nhật qua SMS và email."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

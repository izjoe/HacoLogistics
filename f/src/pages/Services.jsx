import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Truck, Clock, Shield, MapPin, Users, Zap } from "lucide-react";

export default function Services() {
  const { t, language } = useLanguage();
  const services = [
    {
      icon: Truck,
      title: t("services_page.service_express"),
      description: t("services_page.service_express_desc")
    },
    {
      icon: Clock,
      title: t("services_page.service_standard"),
      description: t("services_page.service_standard_desc")
    },
    {
      icon: Shield,
      title: t("services_page.service_bulk"),
      description: t("services_page.service_bulk_desc")
    },
    {
      icon: MapPin,
      title: t("services_page.service_temperature"),
      description: t("services_page.service_temperature_desc")
    },
    {
      icon: Users,
      title: t("services_page.service_fragile"),
      description: t("services_page.service_fragile_desc")
    },
    {
      icon: Zap,
      title: t("services_page.service_hazmat"),
      description: t("services_page.service_hazmat_desc")
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            {t("services_page.hero_title")}
          </h1>
          <p className="text-xl text-yellow-50 max-w-3xl mx-auto">
            {t("services_page.hero_subtitle")}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-yellow-900 mb-16">
          Các Dịch Vụ Chính
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl border border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition-all"
            >
              <service.icon className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-yellow-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-yellow-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-900 mb-16">
            {t("services_page.features_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-900">Nhanh & Hiệu Quả</h3>
                  <p className="text-gray-700">Giao hàng nhanh chóng với mạng lưới rộng khắp</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-900">An Toàn & Bảo Mật</h3>
                  <p className="text-gray-700">Bảo hiểm toàn diện và lái xe uy tín</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-900">Minh Bạch & Cộng Tác</h3>
                  <p className="text-gray-700">Giá cước rõ ràng, hỗ trợ khách hàng 24/7</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-900">Công Nghệ Tối Tân</h3>
                  <p className="text-gray-700">GPS theo dõi thực tế, ứng dụng di động thông minh</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-900">Giá Cạnh Tranh</h3>
                  <p className="text-gray-700">Giá tốt nhất thị trường, không phí ẩn</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-900">Bền Vững</h3>
                  <p className="text-gray-700">Cam kết giảm phát thải carbon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-yellow-900 mb-16">
          {t("services_page.pricing_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: t("services_page.pricing_personal"),
              price: t("services_page.pricing_personal_price"),
              features: ["Giao hàng cơ bản", "Bảo hiểm cơ bản", "Hỗ trợ email"]
            },
            {
              name: t("services_page.pricing_business"),
              price: t("services_page.pricing_business_price"),
              features: ["Giao hàng ưu tiên", "Bảo hiểm đầy đủ", "Hỗ trợ điện thoại 24/7"]
            },
            {
              name: t("services_page.pricing_enterprise"),
              price: t("services_page.pricing_enterprise_price"),
              features: ["Giao hàng tùy chỉnh", "Quản lý tài khoản riêng", "API tích hợp"]
            }
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl border-2 transition-all ${
                idx === 1
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-yellow-200 bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 rounded-lg transition-all">
                {t("services_page.cta_button")}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("home_page.cta_title")}
          </h2>
          <p className="text-yellow-50 text-lg mb-8">
            {t("home_page.cta_subtitle")}
          </p>
          <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-bold hover:bg-yellow-50 transition-all">
            {t("nav.signup")}
          </button>
        </div>
      </div>
    </div>
  );
}

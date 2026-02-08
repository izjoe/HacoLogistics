import React from "react";
import { useLanguage } from "./LanguageContext";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

export default function About() {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-yellow-900 mb-6">
            {t("about_page.hero_title")}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("about_page.hero_subtitle")}
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200">
            <h2 className="text-3xl font-bold text-yellow-900 mb-4">{t("about_page.mission_title")}</h2>
            <p className="text-gray-700 leading-relaxed">
              {t("about_page.mission_desc")}
            </p>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl border border-amber-200">
            <h2 className="text-3xl font-bold text-yellow-900 mb-4">{t("about_page.vision_title")}</h2>
            <p className="text-gray-700 leading-relaxed">
              {t("about_page.vision_desc")}
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-b from-yellow-50/50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-900 mb-16">
            {t("about_page.values_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: t("about_page.values_innovation"),
                desc: t("about_page.values_innovation_desc")
              },
              {
                icon: Users,
                title: t("about_page.values_reliability"),
                desc: t("about_page.values_reliability_desc")
              },
              {
                icon: Globe,
                title: t("about_page.values_efficiency"),
                desc: t("about_page.values_efficiency_desc")
              },
              {
                icon: TrendingUp,
                title: t("about_page.values_customer"),
                desc: t("about_page.values_customer_desc")
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-yellow-100 text-center hover:border-yellow-300 transition-all">
                <value.icon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-yellow-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-yellow-600 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50K+", label: t("about_page.stats_users") },
            { number: "100K+", label: t("about_page.stats_deliveries") },
            { number: "500+", label: t("about_page.stats_coverage") },
            { number: "98%", label: t("about_page.stats_rating") }
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-yellow-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-yellow-900 mb-16">
          {t("about_page.team_title")}
        </h2>
        <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12">
          {t("about_page.team_desc")}
        </p>

        <div className="bg-yellow-50 p-12 rounded-xl border border-yellow-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">Lãnh Đạo Tầm Nhìn</h3>
              <p className="text-gray-700">Sáng lập bởi những chuyên gia kỳ cựu trong ngành vận tải</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">Hỗ Trợ 24/7</h3>
              <p className="text-gray-700">Đội ngũ khách hàng luôn sẵn sàng giúp đỡ bạn</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">Công Nghệ Hiện Đại</h3>
              <p className="text-gray-700">Phát triển công nghệ AI và GPS theo dõi thực tế</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("common.save")}?
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

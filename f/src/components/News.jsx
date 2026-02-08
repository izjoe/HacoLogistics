import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function News() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articles = [
    {
      id: 1,
      title: "HacoLogistics Mở Rộng Dịch Vụ Tới 50 Thành Phố Mới",
      category: "expansion",
      date: "2025-02-01",
      author: "Đội Truyền Thông",
      excerpt: "HacoLogistics vui mừng thông báo sự mở rộng lớn nhất trong lịch sử công ty, với các dịch vụ hiện đã có mặt tại 50 thành phố mới trên toàn quốc.",
      image: "🚀",
      readTime: "5 phút"
    },
    {
      id: 2,
      title: "Công Nghệ AI Mới Cải Thiện Hiệu Quả Giao Hàng 35%",
      category: "technology",
      date: "2025-01-28",
      author: "Phòng Phát Triển Công Nghệ",
      excerpt: "Với sự tích hợp AI mới, HacoLogistics đã nâng cao hiệu quả giao hàng lên 35%, giảm thời gian giao từ 4 giờ xuống 2 giờ 40 phút.",
      image: "🤖",
      readTime: "7 phút"
    },
    {
      id: 3,
      title: "Chương Trình Khuyến Mãi Tết Âm Lịch 2026 - Giảm Giá Tới 50%",
      category: "promotion",
      date: "2025-01-20",
      author: "Đội Tiếp Thị",
      excerpt: "Nhân dịp Tết Âm Lịch 2026, HacoLogistics tặng quà khuyến mãi lên tới 50% cho tất cả khách hàng. Đừng bỏ lỡ cơ hội vàng này!",
      image: "🎉",
      readTime: "3 phút"
    },
    {
      id: 4,
      title: "Hợp Tác Chiến Lược Với Các Công Ty Logistics Quốc Tế",
      category: "partnership",
      date: "2025-01-15",
      author: "Ban Quản Lý Quan Hệ",
      excerpt: "HacoLogistics ký kết hợp tác chiến lược với 5 công ty logistics quốc tế hàng đầu, mở ra cơ hội vận chuyển quốc tế cho khách hàng.",
      image: "🤝",
      readTime: "6 phút"
    },
    {
      id: 5,
      title: "Hứng Thụ Giải Thưởng 'Công Ty Logistics Tốt Nhất 2025'",
      category: "awards",
      date: "2025-01-10",
      author: "Đội Quản Lý Sự Kiện",
      excerpt: "HacoLogistics tự hào nhận được giải thưởng 'Công Ty Logistics Tốt Nhất 2025' từ Hiệp Hội Vận Tải Quốc Tế, công nhận nỗ lực và chất lượng dịch vụ.",
      image: "🏆",
      readTime: "4 phút"
    },
    {
      id: 6,
      title: "Ứng Dụng Mobile HacoLogistics V3.0 Ra Mắt Với Tính Năng Mới",
      category: "technology",
      date: "2025-01-05",
      author: "Đội Phát Triển Ứng Dụng",
      excerpt: "Phiên bản 3.0 của ứng dụng HacoLogistics đã ra mắt với các tính năng mới như thanh toán trên ứng dụng, lịch sử đơn hàng chi tiết, và hỗ trợ đa ngôn ngữ.",
      image: "📱",
      readTime: "5 phút"
    }
  ];

  const categories = [
    { id: "all", name: t("news_page.all") },
    { id: "expansion", name: t("news_page.expansion") },
    { id: "technology", name: t("news_page.technology") },
    { id: "promotion", name: t("news_page.promotion") },
    { id: "partnership", name: t("news_page.partnership") },
    { id: "awards", name: t("news_page.awards") }
  ];

  const filteredArticles = selectedCategory === "all"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-yellow-900 mb-6">
            {t("news_page.hero_title")}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("news_page.hero_subtitle")}
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-yellow-600 text-white"
                  : "bg-yellow-100 text-yellow-900 hover:bg-yellow-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-yellow-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-yellow-300 transition-all"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center text-6xl">
                {article.image}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                    {categories.find(c => c.id === article.category)?.name}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {t("news_page.published")} {new Date(article.date).toLocaleDateString("vi-VN")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-yellow-900 mb-3 hover:text-yellow-700 cursor-pointer">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Author & Read Time */}
                <div className="flex items-center justify-between pt-4 border-t border-yellow-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{t("news_page.by")} {article.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">{article.readTime} {t("news_page.read_time")}</span>
                </div>

                {/* Read More */}
                <button className="mt-4 w-full flex items-center justify-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-all">
                  Đọc Thêm <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles in this category.</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("news_page.newsletter_title")}
          </h2>
          <p className="text-yellow-50 mb-8">
            {t("news_page.newsletter_desc")}
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("news_page.newsletter_placeholder")}
              className="flex-1 px-4 py-3 rounded-lg outline-none text-gray-900"
            />
            <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-bold hover:bg-yellow-50 transition-all">
              {t("news_page.newsletter_button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

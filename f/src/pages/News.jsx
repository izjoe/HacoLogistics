import React, { useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function News() {
  const { t } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy URL API gốc để hiển thị ảnh (VITE_API_URL là http://localhost:4500)
  const API_URL = import.meta.env.VITE_API_URL; 

  useEffect(() => {
    axiosClient.get("/news")
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-yellow-50 pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-yellow-900 mb-4">{t("nav.news") || "Tin Tức"}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Cập nhật những thông tin mới nhất về HacoLogistics và ngành vận tải.</p>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <p className="text-center">Đang tải tin tức...</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-500">Chưa có tin tức nào.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((item) => (
              <article key={item._id} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                {/* Ảnh bài viết */}
                <div className="h-48 bg-gray-200 overflow-hidden relative">
                  {item.image ? (
                    <img 
                      // Nối URL backend vào tên ảnh
                      src={`${API_URL}/${item.image}`} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl bg-yellow-100">📰</div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-yellow-800">
                    Tin Mới
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {item.content}
                  </p>

                  <button className="text-yellow-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Đọc Thêm <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
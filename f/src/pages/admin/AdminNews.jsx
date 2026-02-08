import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Trash2, Plus } from "lucide-react";
import { toast } from 'react-hot-toast';

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load tin tức
  const fetchNews = () => {
    axiosClient.get("/news").then((res) => setNews(res.data));
  };

  useEffect(() => { fetchNews(); }, []);

  // Xử lý thêm tin
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);
    if (image) formData.append("image", image);

    try {
      await axiosClient.post("/news", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      toast.success("Đã đăng tin thành công!");
      setShowModal(false);
      setForm({ title: "", content: "" });
      setImage(null);
      fetchNews();
    } catch (err) {
      toast.error("Lỗi khi đăng tin");
    }
  };

  // Xóa tin
  const handleDelete = async (id) => {
    if(!window.confirm("Bạn chắc chắn muốn xóa tin này?")) return;
    try {
      await axiosClient.delete(`/news/${id}`);
      fetchNews();
    } catch(err) { alert("Lỗi xóa tin"); }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Quản Lý Tin Tức</h2>
        <button onClick={() => setShowModal(true)} className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700">
          <Plus size={18} /> Thêm Tin Mới
        </button>
      </div>

      {/* Form Modal Thêm Tin */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">Đăng Tin Mới</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" placeholder="Tiêu đề" required 
                className="w-full border p-2 rounded"
                value={form.title} onChange={e => setForm({...form, title: e.target.value})}
              />
              <textarea 
                rows="5" placeholder="Nội dung bài viết..." required 
                className="w-full border p-2 rounded"
                value={form.content} onChange={e => setForm({...form, content: e.target.value})}
              />
              <input 
                type="file" accept="image/*"
                onChange={e => setImage(e.target.files[0])}
                className="w-full"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Hủy</button>
                <button type="submit" className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">Đăng Bài</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Danh sách tin */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <div key={item._id} className="bg-white border rounded-lg shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 w-full overflow-hidden rounded-t-lg">
               {item.image ? (
                 <img src={`${import.meta.env.VITE_API_URL}/${item.image}`} alt="news" className="w-full h-full object-cover" />
               ) : (
                 <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
               )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{item.content}</p>
              <button onClick={() => handleDelete(item._id)} className="text-red-600 text-sm flex items-center gap-1 hover:underline">
                <Trash2 size={16} /> Xóa bài viết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
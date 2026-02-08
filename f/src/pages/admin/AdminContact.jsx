import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function AdminContact() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API lấy danh sách contact (Chỉ Admin mới gọi được nhờ Middleware BE)
    axiosClient.get("/contact")
      .then((res) => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10">Đang tải dữ liệu...</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Hộp Thư Khách Hàng</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-yellow-600 text-white">
            <tr>
              <th className="p-4 border-b">Ngày Gửi</th>
              <th className="p-4 border-b">Khách Hàng</th>
              <th className="p-4 border-b">Thông Tin</th>
              <th className="p-4 border-b">Nội Dung</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr><td colSpan="4" className="p-6 text-center text-gray-500">Chưa có liên hệ nào</td></tr>
            ) : (
              contacts.map((c) => (
                <tr key={c._id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4 text-gray-600 text-sm">
                    {new Date(c.createdAt).toLocaleDateString("vi-VN")} <br/>
                    {new Date(c.createdAt).toLocaleTimeString("vi-VN")}
                  </td>
                  <td className="p-4 font-bold text-gray-800">{c.name}</td>
                  <td className="p-4">
                    <div className="text-blue-600">{c.email}</div>
                    <div className="text-gray-500 text-sm">{c.phone}</div>
                  </td>
                  <td className="p-4 text-gray-700 max-w-md">{c.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
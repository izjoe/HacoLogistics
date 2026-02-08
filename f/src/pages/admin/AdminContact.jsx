import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function AdminContact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axiosClient.get("/contact")
      .then((res) => setContacts(res.data))
      .catch((err) => alert("Lỗi tải danh sách liên hệ"));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Hộp Thư Liên Hệ</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-yellow-500 text-white">
            <tr>
              <th className="p-4">Ngày</th>
              <th className="p-4">Họ Tên</th>
              <th className="p-4">Email / SĐT</th>
              <th className="p-4">Nội dung</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-b hover:bg-gray-50">
                <td className="p-4">{new Date(c.createdAt).toLocaleDateString("vi-VN")}</td>
                <td className="p-4 font-semibold">{c.name}</td>
                <td className="p-4">
                  <div className="text-sm">{c.email}</div>
                  <div className="text-xs text-gray-500">{c.phone}</div>
                </td>
                <td className="p-4 text-gray-700 max-w-xs truncate">{c.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {contacts.length === 0 && <p className="p-6 text-center text-gray-500">Chưa có liên hệ nào.</p>}
      </div>
    </div>
  );
}
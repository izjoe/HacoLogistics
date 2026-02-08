import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Trash2 } from "lucide-react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axiosClient.get("/users").then((res) => setUsers(res.data));
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleDelete = async (id) => {
    if(!window.confirm("Xóa người dùng này?")) return;
    try {
      await axiosClient.delete(`/users/${id}`);
      fetchUsers();
    } catch(err) { alert("Lỗi xóa user"); }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Quản Lý Người Dùng</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">Username</th>
              <th className="p-4">Vai Trò</th>
              <th className="p-4">Ngày Tạo</th>
              <th className="p-4">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="border-b">
                <td className="p-4 font-medium">{u.username}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${u.role === 'admin' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                    {u.role.toUpperCase()}
                  </span>
                </td>
                <td className="p-4 text-gray-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                <td className="p-4">
                  {u.role !== 'admin' && (
                    <button onClick={() => handleDelete(u._id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
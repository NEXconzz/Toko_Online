import AdminSidebar from "@/components/AdminSidebar";
import React from "react";

export const metadata = {
  title: "Admin Barang",
  description: "Jajal Admin Se.",
}

export default function AdminBarangLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
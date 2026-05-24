import CustomerSidebar from "@/components/CustomerSidebar";
import React from "react";

export const metadata = {
  title: "Customer Dashboard",
  description: "Jajal Customer Se.",
}

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <CustomerSidebar/>
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
import { getCookie } from "@/lib/client-cookies"

const DashboardPage = async() => {
  const token = getCookie("token") || ''
  const role = getCookie("role") || ''
  const name = getCookie("name") || ''
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">User Dashboard</h1>
      <p className="text-black">Welcome to the user dashboard.</p>
      <div className="border border-gray-700 rounded-md p-2 text-black">
        <div className="">Name</div>
        <div className="">{name}</div>
        <div className="">Roleapp/admin/dashboard/layout.tsx</div>
        <div className="">{role}</div>
      </div>
    </div>
  )
}
export default DashboardPage
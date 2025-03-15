import dynamic from "next/dynamic";

// Import the main dashboard component from Cheerful
const CheerfulDashboard = dynamic(() => import("@/components/src/MainDashboard"), { ssr: false });

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <CheerfulDashboard />
    </div>
  );
}

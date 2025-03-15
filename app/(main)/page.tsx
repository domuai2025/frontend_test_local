import dynamic from "next/dynamic";

const CheerfulDashboard = dynamic(() => import("@/components/src/main"), { ssr: false });

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <CheerfulDashboard />
    </div>
  );
}

import Logo from "@/components/Logo";
import DashboardNav from "@/components/dashboard/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-casual-khaki flex flex-col px-4 py-6 gap-8">
        <div className="scale-[0.3] origin-left -mb-16">
          <Logo />
        </div>
        <DashboardNav />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-background">
        {children}
      </main>
    </div>
  );
}

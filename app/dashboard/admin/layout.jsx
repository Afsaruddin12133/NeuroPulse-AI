"use client";
import {
    Activity,
    BarChart3,
    Bell,
    FileText,
    Heart,
    Menu,
    Search,
    Star,
    User,
    UserCog,
    X,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminDashboardLayout({ children }) {
  const { data: session } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const sidebarItemsAdmin = [
    { id: "overview", label: "Overview", href: "/dashboard/admin", icon: Activity },
    { id: "manageusers", label: "Manage Users", href: "/dashboard/admin/manageuser", icon: UserCog },
    { id: "aifeedback", label: "AI Feedback Review", href: "/dashboard/admin/aifeedback", icon: Star },
    { id: "analytics", label: "System Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
    { id: "content", label: "Content Moderation", href: "/dashboard/admin/content", icon: FileText },
    { id: "profile", label: "Admin Profile", href: "/dashboard/admin/profile", icon: User },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_0%_0%,rgba(14,165,233,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_100%_0%,rgba(99,102,241,0.18),transparent)]" />

      <div className="relative flex min-h-screen">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside
          className={`glass-panel fixed inset-y-0 left-0 z-50 w-[17.5rem] max-w-sm border border-white/40 bg-white/75 px-4 pb-6 pt-5 shadow-[0_30px_80px_rgba(15,23,42,0.15)] transition-transform duration-300 lg:relative lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">NeuroPulse HQ</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin console</p>
              </div>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-full p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="mt-6 space-y-2">
            {sidebarItemsAdmin.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 text-white shadow-lg shadow-indigo-200"
                      : "text-slate-500 hover:bg-white/80"
                  }`}
                >
                  {item.icon && (
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                        isActive
                          ? "border-white/40 bg-white/20"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <item.icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-600'}`} />
                    </span>
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-3xl border border-white/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-5 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Ops pulse</p>
            <p className="mt-1 text-base font-semibold">Incident free</p>
            <p className="text-sm text-white/80">All services nominal in the last 24 hours.</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold">
              View status page →
            </button>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-white/40 bg-white/80 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="rounded-2xl border border-slate-200/70 p-2 text-slate-500 lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Command</p>
                  <h1 className="text-2xl font-semibold text-slate-900">Admin mission control</h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="hidden items-center gap-2 rounded-2xl border border-slate-200/60 bg-white px-4 py-2 md:flex">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search doctors, incidents, tickets"
                    className="w-52 bg-transparent text-sm text-slate-600 outline-none"
                  />
                </div>
                <Link
                  href="/dashboard/admin/analytics"
                  className="hidden rounded-full border border-amber-200/60 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 md:inline-flex"
                >
                  SLA 99.98%
                </Link>
                <button className="rounded-2xl border border-slate-200/70 p-2 text-slate-500 hover:text-slate-800">
                  <Bell className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-3 py-2 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-white">
                    <span className="text-sm font-semibold">{session?.user?.name?.[0] || 'A'}</span>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold text-slate-900">{session?.user?.name || 'Admin'}</p>
                    <p className="text-xs text-slate-500">Super admin</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

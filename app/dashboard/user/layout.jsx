"use client";

import {
    Activity,
    AlertCircle,
    Bell,
    Brain,
    Calendar,
    FileText,
    Heart,
    Menu,
    Search,
    X
} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function UserDashboardLayout({ children }) {
  const { data: session } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const sidebarItemsUser = [
    { id: "overview", label: "Overview", href: "/dashboard/user", icon: Activity },
    { id: "ai-assistance", label: "Assistance", href: "/dashboard/user/ai-assistance", icon: Brain },
    { id: "disease-detector", label: "Diagnosis", href: "/dashboard/user/disease-detector", icon: Brain },
    { id: "appointments", label: "My Appointments", href: "/dashboard/user/appointments", icon: Calendar },
    { id: "reports", label: "My Reports", href: "/dashboard/user/reports", icon: FileText },
    { id: "profile", label: "Profile", href: "/dashboard/user/profile", icon: AlertCircle },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_10%,rgba(99,102,241,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_0%,rgba(45,212,191,0.18),transparent)]" />

      <div className="relative flex min-h-screen">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside
          className={`glass-panel fixed inset-y-0 left-0 z-50 w-[17rem] max-w-xs border border-white/40 bg-white/75 px-4 pb-6 pt-5 shadow-[0_30px_80px_rgba(15,23,42,0.15)] transition-transform duration-300 lg:relative lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-400 text-white">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">NeuroPulse</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Patient OS</p>
              </div>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-full p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {sidebarItemsUser.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 text-white shadow-lg shadow-sky-100"
                      : "text-slate-500 hover:bg-white/80"
                  }`}
                >
                  {item.icon && (
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border ${
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
          </div>

          <div className="mt-8 rounded-3xl border border-white/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-5 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Copilot</p>
            <p className="mt-1 text-base font-semibold">Need quick triage?</p>
            <p className="text-sm text-white/80">Launch your AI nurse to log symptoms hands-free.</p>
            <Link
              href="/dashboard/user/ai-assistance"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold"
            >
              Open assistant →
            </Link>
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
                  <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Dashboard</p>
                  <h1 className="text-2xl font-semibold text-slate-900">Your health cockpit</h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="hidden md:flex items-center gap-2 rounded-2xl border border-slate-200/60 bg-white px-4 py-2">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search symptoms, doctors, files"
                    className="w-48 bg-transparent text-sm text-slate-600 outline-none"
                  />
                </div>
                <span className="hidden rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 md:inline-flex">
                  Status: Stable
                </span>
                <button className="rounded-2xl border border-slate-200/70 p-2 text-slate-500 hover:text-slate-800">
                  <Bell className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 px-3 py-2 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-teal-400 text-white">
                    <span className="text-sm font-semibold">{session?.user?.name?.[0] || 'U'}</span>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold text-slate-900">{session?.user?.name || 'User'}</p>
                    <p className="text-xs text-slate-500">Patient tier</p>
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

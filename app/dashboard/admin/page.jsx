"use client";

import useDashboardSummary from "@/hooks/useDashboardsummary";
import useDoctorsList from "@/hooks/useDoctors";
import useUsersList from "@/hooks/Useuser";
import {
    Activity,
    AlertCircle,
    BarChart3,
    Calendar,
    CheckCircle,
    Clock,
    DollarSign,
    Download,
    LineChart as LineIcon,
    MapPin,
    MessageSquare,
    Phone,
    PieChart as PieIcon,
    RefreshCw,
    Star,
    TrendingDown,
    TrendingUp,
    UserCheck,
    Users,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Line,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const toneMap = {
  sky: "bg-sky-100 text-sky-600",
  emerald: "bg-emerald-100 text-emerald-600",
  purple: "bg-purple-100 text-purple-600",
  amber: "bg-amber-100 text-amber-600",
  slate: "bg-slate-100 text-slate-600",
};

const formatNumber = (value, prefix = "") => {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "—";
  }
  if (typeof value === "number") {
    return `${prefix}${value.toLocaleString()}`;
  }
  return `${prefix}${value}`;
};

const StatCard = ({ title, value, change, icon: Icon, tone = "slate", subtitle }) => {
  const toneClasses = toneMap[tone] || toneMap.slate;
  return (
    <div className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
          {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
          {typeof change === "number" && (
            <div
              className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${
                change >= 0 ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              {Math.abs(change)}%
            </div>
          )}
        </div>
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${toneClasses}`}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
};

const PieChartCard = ({ title, data }) => (
  <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Distribution</p>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <PieIcon className="h-5 w-5 text-slate-400" />
    </div>
    <div className="mt-4 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} innerRadius={64} outerRadius={100} paddingAngle={4} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-4 space-y-3">
      {data.map((entry) => (
        <div key={entry.name} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-slate-600">{entry.name}</span>
          </div>
          <span className="font-semibold text-slate-900">{entry.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function AdminOverviewDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const { data: session } = useSession();
  const [doctors] = useDoctorsList();
  const { alluser } = useUsersList();
  const { data } = useDashboardSummary();

  const adminDetails = {
    name: session?.user?.name || "Admin",
    email: session?.user?.email,
    phone: "01703057181",
    location: "Medical Center, Dhaka",
    role: "Chief Administrator",
    lastLogin: "2024-01-20 09:30 AM",
  };

  const dashboardStats = {
    totalUsers: data?.totalUsers ?? alluser?.length,
    totalDoctors: data?.totalDoctors ?? doctors?.length,
    totalAppointments: 1523,
    totalRevenue: 145250,
    activeUsers: 1892,
    pendingAppointments: 89,
    completedAppointments: 1234,
    cancelledAppointments: 200,
    todayAppointments: 67,
    avgRating: 4.6,
    totalReviews: data?.totalReviews ?? 892,
  };

  const appointmentStatusData = [
    { name: "Completed", value: dashboardStats.completedAppointments, color: "#10B981" },
    { name: "Pending", value: dashboardStats.pendingAppointments, color: "#F59E0B" },
    { name: "Cancelled", value: dashboardStats.cancelledAppointments, color: "#EF4444" },
  ];

  const doctorSpecialtyData = [
    { name: "Cardiology", value: 12, color: "#3B82F6" },
    { name: "Neurology", value: 8, color: "#8B5CF6" },
    { name: "Orthopedics", value: 10, color: "#06B6D4" },
    { name: "Pediatrics", value: 7, color: "#F59E0B" },
    { name: "Dermatology", value: 8, color: "#10B981" },
  ];

  const userTypeData = [
    { name: "Patients", value: 2456, color: "#3B82F6" },
    { name: "Doctors", value: 45, color: "#10B981" },
    { name: "Staff", value: 156, color: "#F59E0B" },
    { name: "Admin", value: 12, color: "#EF4444" },
  ];

  const monthlyRevenueData = [
    { month: "Jan", revenue: 45000, appointments: 120 },
    { month: "Feb", revenue: 52000, appointments: 140 },
    { month: "Mar", revenue: 48000, appointments: 135 },
    { month: "Apr", revenue: 61000, appointments: 160 },
    { month: "May", revenue: 55000, appointments: 145 },
    { month: "Jun", revenue: 67000, appointments: 175 },
  ];

  const recentAppointments = [
    { id: 1, patient: "Rahim Uddin", doctor: "Dr. Kamrul Hasan", time: "09:00 AM", status: "completed", type: "Consultation" },
    { id: 2, patient: "Mitu Akter", doctor: "Dr. Shirin Sultana", time: "10:30 AM", status: "pending", type: "Follow-up" },
    { id: 3, patient: "Sumon Hossain", doctor: "Dr. Anisur Rahman", time: "02:00 PM", status: "cancelled", type: "Check-up" },
    { id: 4, patient: "Nusrat Jahan", doctor: "Dr. Farhana Haque", time: "03:30 PM", status: "completed", type: "Emergency" },
  ];

  const topDoctors = [
    { name: "Dr. Kamrul Hasan", specialty: "Cardiology", rating: 4.9, appointments: 156, revenue: 23400 },
    { name: "Dr. Shirin Sultana", specialty: "Neurology", rating: 4.8, appointments: 142, revenue: 21300 },
    { name: "Dr. Anisur Rahman", specialty: "Orthopedics", rating: 4.7, appointments: 138, revenue: 20700 },
    { name: "Dr. Farhana Haque", specialty: "Pediatrics", rating: 4.9, appointments: 134, revenue: 20100 },
  ];

  const primaryStatCards = [
    { title: "Total users", value: formatNumber(dashboardStats.totalUsers), change: 12, icon: Users, tone: "sky" },
    { title: "Total doctors", value: formatNumber(dashboardStats.totalDoctors), change: 8, icon: UserCheck, tone: "emerald" },
    {
      title: "Total appointments",
      value: formatNumber(dashboardStats.totalAppointments),
      change: 15,
      icon: Calendar,
      tone: "purple",
    },
    {
      title: "Total revenue",
      value: formatNumber(dashboardStats.totalRevenue, "$"),
      change: 23,
      icon: DollarSign,
      tone: "amber",
    },
  ];

  const secondaryStatCards = [
    {
      title: "Active users",
      value: formatNumber(dashboardStats.activeUsers),
      change: 5,
      icon: Activity,
      tone: "emerald",
    },
    {
      title: "Today's appointments",
      value: formatNumber(dashboardStats.todayAppointments),
      change: -3,
      icon: Clock,
      tone: "sky",
    },
    {
      title: "Average rating",
      value: formatNumber(dashboardStats.avgRating),
      change: 2,
      icon: Star,
      tone: "amber",
    },
    {
      title: "Total reviews",
      value: formatNumber(dashboardStats.totalReviews),
      change: 18,
      icon: MessageSquare,
      tone: "purple",
    },
  ];

  const statusChip = (status) => {
    if (status === "completed") return "bg-emerald-50 text-emerald-600";
    if (status === "pending") return "bg-amber-50 text-amber-600";
    return "bg-rose-50 text-rose-600";
  };

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(79,209,197,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_-10%,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_25px_65px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Mission control</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">Admin overview</h1>
              <p className="mt-2 text-sm text-slate-500">Welcome back, {adminDetails.name}. All systems are nominal.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="rounded-2xl border border-slate-200/80 bg-white px-4 py-2 text-sm font-semibold text-slate-600"
              >
                <option value="week">This week</option>
                <option value="month">This month</option>
                <option value="year">This year</option>
              </select>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                <Download className="h-4 w-4" />
                Export
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {primaryStatCards.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {secondaryStatCards.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <PieChartCard title="Appointment status" data={appointmentStatusData} />
          <PieChartCard title="Doctor specialties" data={doctorSpecialtyData} />
          <PieChartCard title="User types" data={userTypeData} />
        </section>

        <section className="mt-8 rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Revenue pulse</p>
              <h3 className="text-lg font-semibold text-slate-900">Monthly revenue & appointments</h3>
            </div>
            <LineIcon className="h-5 w-5 text-slate-400" />
          </div>
          <div className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.4} />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis yAxisId="left" stroke="#94a3b8" />
                <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="revenue" fill="#6366F1" radius={[8, 8, 0, 0]} name="Revenue ($)" />
                <Bar yAxisId="right" dataKey="appointments" fill="#14B8A6" radius={[8, 8, 0, 0]} name="Appointments" />
                <Line yAxisId="right" type="monotone" dataKey="appointments" stroke="#0EA5E9" strokeWidth={2} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Recent appointments</h3>
              <Calendar className="h-5 w-5 text-slate-400" />
            </div>
            <div className="mt-4 space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="rounded-2xl border border-slate-100/80 px-4 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{appointment.patient}</p>
                      <p className="text-xs text-slate-500">
                        {appointment.doctor} • {appointment.type}
                      </p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusChip(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{appointment.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Top performing doctors</h3>
                <BarChart3 className="h-5 w-5 text-slate-400" />
              </div>
              <div className="mt-4 space-y-4">
                {topDoctors.map((doctor, idx) => (
                  <div key={doctor.name} className="flex items-center justify-between rounded-2xl border border-slate-100/80 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        #{idx + 1} {doctor.name}
                      </p>
                      <p className="text-xs text-slate-500">{doctor.specialty}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">{doctor.rating} ★</p>
                      <p className="text-xs text-slate-500">{doctor.appointments} appts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-[0_30px_70px_rgba(15,23,42,0.12)]">
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-white/60">
                <AlertCircle className="h-4 w-4" />
                Ops pulse
              </div>
              <h3 className="mt-3 text-2xl font-semibold">0 incidents in the last 24h</h3>
              <p className="mt-2 text-sm text-white/70">
                Monitoring telemetry shows healthy throughput. Keep an eye on neurology queue as it nears 85% capacity.
              </p>
              <div className="mt-4 grid gap-2 text-xs text-white/70">
                <p className="flex items-center justify-between">
                  <span>Neurology queue</span>
                  <span>82% • watch</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Realtime wait</span>
                  <span>04m 21s</span>
                </p>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold">
                Open status page
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
          <h3 className="text-lg font-semibold text-slate-900">Admin contact sheet</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-sm font-semibold text-slate-900">{adminDetails.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Hotline</p>
                <p className="text-sm font-semibold text-slate-900">{adminDetails.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Last login</p>
                <p className="text-sm font-semibold text-slate-900">{adminDetails.lastLogin}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Role</p>
                <p className="text-sm font-semibold text-slate-900">{adminDetails.role}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
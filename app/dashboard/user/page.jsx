"use client";

import {
    Activity,
    Brain,
    Calendar,
    ChevronRight,
    FileText,
    Heart,
    Shield,
    Star,
    Upload,
    Zap,
} from 'lucide-react';
import Link from 'next/link';

const quickStats = [
  {
    label: 'AI diagnoses this week',
    value: '03',
    detail: '+2 vs last week',
    icon: Brain,
    iconClasses: 'text-sky-600 bg-sky-50',
  },
  {
    label: 'Upcoming visits',
    value: '02',
    detail: 'Next on Thu 14:30',
    icon: Calendar,
    iconClasses: 'text-emerald-600 bg-emerald-50',
  },
  {
    label: 'Reports awaiting review',
    value: '01',
    detail: 'MRI uploaded yesterday',
    icon: FileText,
    iconClasses: 'text-amber-600 bg-amber-50',
  },
  {
    label: 'Wellness score',
    value: '85',
    detail: 'Stable • low risk',
    icon: Heart,
    iconClasses: 'text-rose-500 bg-rose-50',
  },
];

const quickActions = [
  {
    icon: Brain,
    title: 'Log new symptoms',
    desc: 'Guided AI intake flow',
    href: '/dashboard/user/disease-detector',
    border: 'border-sky-200/60',
    gradient: 'from-sky-500/10 via-sky-500/5 to-transparent',
  },
  {
    icon: Upload,
    title: 'Upload imaging',
    desc: 'X-ray, MRI, bloodwork',
    href: '/dashboard/user/reports',
    border: 'border-indigo-200/60',
    gradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
  },
  {
    icon: Calendar,
    title: 'Book specialist',
    desc: 'See curated availability',
    href: '/dashboard/user/appointments',
    border: 'border-emerald-200/60',
    gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
  },
  {
    icon: FileText,
    title: 'Share visit notes',
    desc: 'Securely bundle docs',
    href: '/dashboard/user/profile',
    border: 'border-amber-200/60',
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
  },
];

const timeline = [
  {
    id: 1,
    title: 'Headache triage complete',
    caption: 'Muscle-tension pattern with 92% confidence',
    time: '2 hours ago',
    status: 'completed',
    icon: Brain,
  },
  {
    id: 2,
    title: 'Cardiology follow-up',
    caption: 'Dr. Chen • Tomorrow 14:30',
    time: 'Scheduled',
    status: 'upcoming',
    icon: Calendar,
  },
  {
    id: 3,
    title: 'Bloodwork summary ready',
    caption: 'AI extracted 3 flagged markers',
    time: '3 days ago',
    status: 'review',
    icon: FileText,
  },
];

const healthInsights = [
  { icon: Heart, label: 'Resting HR', value: '72 BPM', meta: 'Normal range' },
  { icon: Activity, label: 'Activity score', value: '85 / 100', meta: 'Good momentum' },
  { icon: Shield, label: 'Risk guard', value: 'Low', meta: 'No alerts detected' },
];

const careTeam = [
  { name: 'Dr. Michael Chen', role: 'Cardiology', next: 'Thu • 14:30', color: 'bg-sky-100 text-sky-600' },
  { name: 'Dr. Aria Lopez', role: 'Primary', next: 'Next month', color: 'bg-emerald-100 text-emerald-600' },
  { name: 'AI Navigator', role: '24/7 symptom triage', next: 'Always on', color: 'bg-indigo-100 text-indigo-600' },
];

const selfCareTips = [
  'Drink 8 cups of water today',
  '15-minute posture reset at lunch',
  'Log sleep quality before bedtime',
];

const statusClasses = {
  completed: 'bg-emerald-50 text-emerald-600',
  upcoming: 'bg-sky-50 text-sky-600',
  review: 'bg-amber-50 text-amber-600',
};

const UserHomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(79,209,197,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_-10%,rgba(56,189,248,0.18),transparent)]" />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_25px_65px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-slate-400">Today</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Welcome back, Sarah 👋
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Your vitals look steady. Capture how you feel or jump into a quick checkup.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard/user/ai-assistance"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                AI nurse on-call
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dashboard/user/disease-detector"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200"
              >
                Start diagnosis
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickStats.map(({ label, value, detail, icon: Icon, iconClasses }) => (
            <div
              key={label}
              className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{label}</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
                  <p className="text-xs text-slate-500">{detail}</p>
                </div>
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClasses}`}>
                  <Icon className="h-5 w-5" />
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Quick actions</h2>
                <span className="text-xs uppercase tracking-[0.4em] text-slate-400">2 min setup</span>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.title}
                    href={action.href}
                    className={`rounded-3xl border ${action.border} bg-gradient-to-br ${action.gradient} p-5 hover:-translate-y-0.5 hover:shadow-lg transition`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{action.title}</p>
                        <p className="text-xs text-slate-500">{action.desc}</p>
                      </div>
                      <action.icon className="h-5 w-5 text-slate-500" />
                    </div>
                    <div className="mt-3 inline-flex items-center text-xs font-semibold text-slate-600">
                      Launch
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Recent timeline</h2>
                <button className="text-sm font-semibold text-sky-600">View all</button>
              </div>
              <div className="mt-4 space-y-4">
                {timeline.map(({ id, title, caption, time, status, icon: Icon }) => (
                  <div key={id} className="flex items-start gap-4 rounded-2xl border border-slate-100/80 p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
                      <Icon className="h-5 w-5 text-slate-500" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-900">{title}</p>
                          <p className="text-sm text-slate-500">{caption}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[status]}`}>
                          {status}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-slate-400">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Self-care plan</h2>
                <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Coach mode</span>
              </div>
              <ul className="mt-4 space-y-3">
                {selfCareTips.map((tip) => (
                  <li key={tip} className="flex items-center gap-3 rounded-2xl border border-slate-100/80 px-4 py-3 text-sm text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[28px] border border-white/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-[0_25px_65px_rgba(15,23,42,0.12)]">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-emerald-300" />
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">AI insight</p>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">All systems steady</h3>
              <p className="mt-2 text-sm text-white/80">
                Your latest imaging and symptom log show no escalation. Keep logging hydration and rest quality to maintain this streak.
              </p>
              <Link href="/dashboard/user/reports" className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-200">
                Open report vault
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-semibold text-slate-900">Health insights</h3>
              <div className="mt-4 space-y-3">
                {healthInsights.map(({ icon: Icon, label, value, meta }) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-100/80 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
                        <Icon className="h-5 w-5 text-slate-600" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{label}</p>
                        <p className="text-xs text-slate-500">{meta}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-semibold text-slate-900">Care team</h3>
              <div className="mt-4 space-y-3">
                {careTeam.map(({ name, role, next, color }) => (
                  <div key={name} className="flex items-center justify-between rounded-2xl border border-slate-100/80 px-4 py-3">
                    <div>
                      <p className="font-semibold text-slate-900">{name}</p>
                      <p className="text-xs text-slate-500">{role}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${color}`}>{next}</span>
                  </div>
                ))}
              </div>
              <Link href="/doctors" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                View full roster
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-[28px] border border-white/60 bg-white/85 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                <p className="text-sm font-semibold text-slate-900">Daily reminder</p>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Breath work for 3 minutes every afternoon keeps headaches away. A timer is waiting inside AI nurse.
              </p>
              <Link href="/dashboard/user/ai-assistance" className="mt-3 inline-flex items-center text-sm font-semibold text-sky-600">
                Open routine →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserHomePage;
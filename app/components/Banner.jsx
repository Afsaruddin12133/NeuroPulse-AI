import { Activity, Play, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

const stats = [
  { label: "Diagnostic accuracy", value: "97.4%" },
  { label: "Avg. turnaround", value: "38s" },
  { label: "Hospitals onboarded", value: "120+" },
];

const highlights = [
  "FDA-grade AI guardrails",
  "Realtime vitals triage",
  "One-click specialist routing",
];

const Banner = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 -left-32 w-72 rounded-full bg-sky-200/40 blur-[120px]" />
          <div className="absolute inset-y-0 right-0 w-[55%] bg-[url('/assets/image/close-up-people-wearing-lab-coats.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center space-x-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-600 shadow-sm">
                <Sparkles className="h-4 w-4 text-sky-500" />
                <span>Predict • Prevent • Personalize</span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Clinical intelligence
                <span className="block gradient-text">for every bedside</span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 sm:text-xl">
                NeuroPulse AI captures symptoms, imaging, and labs in one stream, predicts risk in under a minute, and hands your team the next best action with traceable reasoning.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => window.location.assign("/dashboard/user/disease-detector")}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(14,165,233,0.35)] transition hover:translate-y-0.5"
                >
                  Launch Symptom Checker
                </button>
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200/70 bg-white/80 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
                >
                  <Play className="mr-2 h-5 w-5 text-sky-500" />
                  Watch 3-min demo
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <div key={item} className="inline-flex items-center space-x-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-6 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_25px_65px_rgba(15,23,42,0.08)] sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel rounded-[32px] border border-white/40 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.15)]">
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Live patient triage</span>
                    <span>Secure • HIPAA</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">Auto-prioritized cases</h3>

                  <div className="mt-6 space-y-4">
                    {["Chest tightness", "Blurred vision", "Irregular ECG"]
                      .map((caseName, idx) => (
                        <div
                          key={caseName}
                          className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                        >
                          <div>
                            <p className="text-base font-semibold">{caseName}</p>
                            <p className="text-xs text-slate-300">Confidence {(88 - idx * 7).toString()}%</p>
                          </div>
                          <div className="text-right text-sm">
                            <p className="font-semibold text-emerald-300">Action ready</p>
                            <p className="text-slate-300">{12 + idx * 4} mins ago</p>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-2xl bg-gradient-to-br from-emerald-400/30 to-sky-400/50 p-2">
                        <Activity className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-300">Avg. wait time</p>
                        <p className="text-lg font-semibold">02m 14s</p>
                      </div>
                    </div>
                    <button
                      onClick={() => window.location.assign("/dashboard")}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                    >
                      See queue
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-white/40 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-lg shadow-sky-100 sm:flex">
                <span className="text-sky-500">24/7</span>&nbsp;Clinical AI coverage worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-sky-100 p-2">
                  <Play className="h-4 w-4 text-sky-500" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">AI Health Assistant Demo</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">3 min walk-through</p>
                </div>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
              >
                Close
              </button>
            </div>
            <div className="bg-slate-950">
              <video
                className="aspect-video w-full"
                controls
                poster="/assets/image/close-up-people-wearing-lab-coats.jpg"
              >
                <source src="/assets/Demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
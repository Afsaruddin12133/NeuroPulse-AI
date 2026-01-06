import { ArrowRight, Brain, FileText, Stethoscope } from 'lucide-react';

const steps = [
  {
    title: 'Collect context',
    description: 'Upload vitals, imaging, labs, and clinician notes through secure links or direct EHR sync.',
    icon: FileText,
    duration: '< 2 minutes',
  },
  {
    title: 'AI reasoning loop',
    description: 'Our multimodal model scores risk, runs safety guardrails, and explains every inference with citations.',
    icon: Brain,
    duration: '38 seconds avg.',
  },
  {
    title: 'Actionable care plan',
    description: 'Surface likely conditions, order sets, and auto-route to the best available specialist or care path.',
    icon: Stethoscope,
    duration: 'Instant hand-off',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-[#eef6ff] via-white to-[#fdf5ff]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Clinical automation</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">How it works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A guided, compliant experience from symptom capture to specialist booking.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {steps.map(({ title, description, icon: Icon, duration }, index) => (
            <div key={title} className="relative rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_25px_65px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-slate-900/5 p-3 text-sky-500">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-slate-500">Step {index + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-4 text-base text-slate-600">{description}</p>
              <div className="mt-6 inline-flex items-center space-x-2 rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                <ArrowRight className="h-3 w-3" />
                <span>{duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
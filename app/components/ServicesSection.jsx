import { ActivitySquare, Bot, FlaskConical, Languages, ShieldCheck, Workflow } from 'lucide-react';

const services = [
    {
        icon: Bot,
        title: 'AI Symptom Concierge',
        description: 'Conversational triage that collects structured data, vitals, and attachments in any language.',
    },
    {
        icon: FlaskConical,
        title: 'Diagnostic Workbench',
        description: 'Upload imaging, labs, or PDFs to get reconciled, explainable findings in seconds.',
    },
    {
        icon: Workflow,
        title: 'Care Routing Engine',
        description: 'Smartly dispatch cases to onsite teams, telehealth partners, or partner hospitals.',
    },
    {
        icon: ShieldCheck,
        title: 'Compliance & Audit',
        description: 'Built-in HIPAA/GDPR guardrails, PHI redaction, and full audit trails.',
    },
];

const carePaths = [
    { label: 'Preventive care', impact: '42% fewer walk-ins' },
    { label: 'Emergency triage', impact: '11m faster throughput' },
    { label: 'Chronic disease', impact: '2x adherence' },
    { label: 'Virtual wards', impact: '4.3★ patient NPS' },
];

const ServicesSection = () => {
    return (
        <section className="pb-24 pt-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">What you unlock</p>
                        <h2 className="mt-4 text-4xl font-bold text-slate-900">Services crafted for hospital-scale adoption</h2>
                        <p className="mt-3 text-lg text-slate-600">
                            Configure the modules you need today and expand later. Everything lives inside a secure clinical-grade workspace that your teams already understand.
                        </p>

                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            {services.map(({ icon: Icon, title, description }) => (
                                <div key={title} className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                                    <div className="inline-flex rounded-2xl bg-slate-900/5 p-3 text-sky-500">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                                    <p className="mt-2 text-sm text-slate-600">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                      <div className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.1)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Care paths</p>
                                <h3 className="mt-2 text-2xl font-semibold text-slate-900">Program templates</h3>
                            </div>
                            <ActivitySquare className="h-10 w-10 rounded-2xl bg-slate-900/5 p-2 text-emerald-500" />
                        </div>

                        <div className="mt-8 space-y-4">
                            {carePaths.map(({ label, impact }) => (
                                <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-100/80 bg-white/90 px-4 py-4">
                                    <div>
                                        <p className="text-base font-semibold text-slate-900">{label}</p>
                                        <p className="text-sm text-slate-500">Pre-built workflows + prompts</p>
                                    </div>
                                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                                        {impact}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-3xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-6 py-5 text-white">
                            <p className="text-sm uppercase tracking-[0.3em] text-white/70">New</p>
                            <h4 className="mt-1 text-xl font-semibold">Language intelligence</h4>
                            <p className="mt-2 text-sm text-white/80">
                                Real-time translation across 40+ languages with medical-grade accuracy.
                            </p>
                            <div className="mt-4 inline-flex items-center space-x-2 text-sm font-semibold">
                                <Languages className="h-4 w-4" />
                                <span>Deploy today</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
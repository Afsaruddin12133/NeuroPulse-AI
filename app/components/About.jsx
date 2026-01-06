import { Award, HeartPulse, Phone } from 'lucide-react';

const stats = [
    { label: 'Clinicians supported', value: '4,800+' },
    { label: 'Patient touchpoints', value: '2.3M' },
    { label: 'Avg. accuracy gain', value: '12%' },
];

const aboutValues = [
    'Human-in-the-loop governance at every step',
    'Bias and drift monitoring baked into the stack',
    'Integration team that speaks HL7/FHIR and EHRs fluently',
];

const schedule = [
    ['Monday', '08:00 – 19:00'],
    ['Tuesday', '08:00 – 19:00'],
    ['Wednesday', '09:00 – 18:00'],
    ['Thursday', '08:00 – 19:00'],
    ['Friday', '08:00 – 18:00'],
    ['Saturday', '09:00 – 15:00'],
    ['Sunday', 'On-call'],
];

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f9fbff]" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">About us</p>
                    <h2 className="mt-4 text-4xl font-bold text-slate-900">Designed with clinicians, for clinicians</h2>
                    <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
                        We pair AI researchers with practicing physicians to build tools that elevate judgement, never replace it.
                    </p>
                </div>

                <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-8">
                        <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
                            <div className="flex items-center space-x-3 text-slate-500">
                                <HeartPulse className="h-5 w-5 text-emerald-500" />
                                <span className="text-sm uppercase tracking-[0.3em]">Mission</span>
                            </div>
                            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Bridging intelligence and compassion</h3>
                            <p className="mt-3 text-base text-slate-600">
                                NeuroPulse AI keeps clinicians in control while surfacing the right evidence, warnings, and care actions in real time. We build technology that adapts to people—not the other way around.
                            </p>
                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl border border-slate-100/80 bg-white/90 p-4">
                                        <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
                            <div className="flex items-center space-x-3 text-slate-500">
                                <Award className="h-5 w-5 text-sky-500" />
                                <span className="text-sm uppercase tracking-[0.3em]">Principles</span>
                            </div>
                            <div className="mt-6 space-y-4 text-slate-700">
                                {aboutValues.map((value) => (
                                    <div key={value} className="flex items-start space-x-3">
                                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-500" />
                                        <p>{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
                        <div className="flex items-center space-x-4">
                            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-sky-500 to-teal-400 text-white">
                                <div className="flex h-full items-center justify-center text-2xl font-semibold">DA</div>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Founder & CEO</p>
                                <p className="text-2xl font-semibold text-slate-900">Dr. David Ambrose</p>
                                <p className="text-sm text-slate-500">Former Chief Innovation Officer, Mercy Health</p>
                            </div>
                        </div>

                        <p className="mt-6 text-base text-slate-600">
                            “We believe every clinician deserves an AI co-pilot that augments their judgment, documents flawlessly, and keeps patients at the center.”
                        </p>

                        <div className="mt-8 space-y-3">
                            {schedule.map(([day, hours]) => (
                                <div key={day} className="flex items-center justify-between rounded-2xl border border-slate-100/70 px-4 py-3">
                                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-[0.3em]">{day}</span>
                                    <span className="text-base text-slate-900">{hours}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-between rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-5 py-4 text-white">
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-white/70">Clinical hotline</p>
                                <p className="text-xl font-semibold">(+01) 234 567 890</p>
                            </div>
                            <button className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                                <Phone className="mr-1 inline h-4 w-4" />
                                Call us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

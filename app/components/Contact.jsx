"use client";

import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thanks for reaching out — our team will reply shortly.');
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contact</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900">Let’s build your clinical copilot</h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
            Tell us about your team, workflow, or integration needs. We respond to every request in under two business hours.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_30px_75px_rgba(15,23,42,0.08)]">
            <div className="grid gap-6">
              {[{
                title: 'Live clinician hotline',
                subtitle: '+1 (555) 123-4567',
                icon: Phone,
              },
              {
                title: 'Enterprise partnerships',
                subtitle: 'partners@neuropulse.health',
                icon: Mail,
              },
              {
                title: 'HQ & virtual wards',
                subtitle: '226 5th Ave, New York, NY',
                icon: MapPin,
              },
              {
                title: 'Response time',
                subtitle: 'avg. 1h 52m',
                icon: Clock,
              }].map(({ title, subtitle, icon: Icon }) => (
                <div key={title} className="flex items-center space-x-4 rounded-2xl border border-slate-100/80 px-4 py-4">
                  <div className="rounded-2xl bg-slate-900/5 p-3 text-sky-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em]">{title}</p>
                    <p className="text-lg text-slate-900">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_30px_75px_rgba(15,23,42,0.08)]"
          >
            <div className="grid gap-6">
              <div>
                <label className="text-sm font-semibold text-slate-600">Full name</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-slate-900 focus:border-sky-300 focus:outline-none"
                  placeholder="Dr. Maya Patel"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600">Work email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-slate-900 focus:border-sky-300 focus:outline-none"
                  placeholder="maya@hospital.org"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600">How can we help?</label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-slate-900 focus:border-sky-300 focus:outline-none"
                  placeholder="Describe your care workflow, integrations, or goals."
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-200"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
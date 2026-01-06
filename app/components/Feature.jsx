"use client";

import { motion } from 'framer-motion';
import { Brain, Calendar, FileText, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Multimodal clinical AI',
    description: 'Understands symptoms, imaging, and labs together to mimic the reasoning of a senior clinician.',
    metric: '54K+ cases studied',
  },
  {
    icon: FileText,
    title: 'Explainable reporting',
    description: 'Generates point-in-time narratives, highlights anomalies, and attaches citations for every suggestion.',
    metric: '100% traceable',
  },
  {
    icon: Calendar,
    title: 'Automated care routing',
    description: 'Books the right specialist, syncs their availability, and pre-fills encounter notes before hand-off.',
    metric: '7 min saved/visit',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    description: 'HIPAA, SOC2, and GDPR compliant with continuous monitoring and AI guardrails for safe deployments.',
    metric: 'Zero data leaks',
  },
];

const Feature = () => {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <div className="absolute right-10 top-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-[120px]" />
        <div className="absolute left-10 bottom-0 h-64 w-64 rounded-full bg-sky-100/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Full-stack clinical platform
          </p>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Powerful building blocks for
            <span className="gradient-text"> intelligent care teams</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Each capability is modular, audited, and ready to plug into your existing workflows—no rip-and-replace required.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description, metric }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group h-full rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="inline-flex rounded-2xl bg-slate-900/5 p-3 text-sky-500">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
              <div className="mt-6 inline-flex items-center rounded-full border border-slate-200/70 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-500">
                {metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;

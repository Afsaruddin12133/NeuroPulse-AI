"use client";

import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for clinics exploring AI support.',
    features: ['15 diagnostics / month', 'Symptom concierge', 'Email support'],
    cta: 'Start for free',
  },
  {
    name: 'Growth',
    price: 49,
    description: 'Full workflow automation for fast-scaling teams.',
    features: ['Unlimited diagnostics', 'Priority routing', 'Advanced analytics', 'Same-day onboarding'],
    highlight: 'Most booked',
    cta: 'Upgrade to Growth',
  },
  {
    name: 'Enterprise',
    price: 129,
    description: 'For networks that need custom guardrails and SLAs.',
    features: ['Dedicated AI advisor', 'Custom integrations', '24/7 support', 'On-prem or VPC'],
    cta: 'Talk to sales',
  },
];

const Priceing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const discountMultiplier = billingCycle === 'annual' ? 0.85 : 1;

  const formatPrice = (price) => {
    if (price === 0) return 'Free';
    return `$${Math.round(price * discountMultiplier)}`;
  };

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Pricing</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900">Choose a plan that scales with you</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            No hidden fees. Cancel anytime. Annual contracts include compliance reviews and dedicated success engineering.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-slate-200 bg-white p-1 text-sm font-semibold">
            {['monthly', 'annual'].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`rounded-full px-5 py-2 transition ${
                  billingCycle === cycle
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-300'
                    : 'text-slate-500'
                }`}
              >
                {cycle === 'monthly' ? 'Monthly' : 'Annual (save 15%)'}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-[28px] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] ${
                plan.highlight ? 'ring-2 ring-sky-400/60' : ''
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {plan.highlight}
                </span>
              )}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{plan.name}</p>
                <h3 className="mt-2 text-3xl font-semibold text-slate-900">{formatPrice(plan.price)}</h3>
                {plan.price !== 0 && (
                  <p className="text-sm text-slate-500">per {billingCycle === 'monthly' ? 'month' : 'month (billed annually)'}</p>
                )}
                <p className="mt-4 text-base text-slate-600">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <button
                  className={`w-full rounded-2xl px-6 py-3 text-sm font-semibold transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 text-white shadow-lg shadow-sky-200'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Priceing;
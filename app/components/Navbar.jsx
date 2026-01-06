'use client';

import { Menu, Sparkles, Stethoscope, X } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Platform', path: '#features' },
  { label: 'Workflow', path: '#how-it-works' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Pricing', path: '#pricing' },
  { label: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = status === 'authenticated';

  const handleAuthClick = () => {
    if (isAuthenticated) {
      signOut();
    } else {
      signIn();
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  const brand = (
    <Link href="/" className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-400 to-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-200">
        <Stethoscope className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center space-x-2">
          <span className="text-lg sm:text-xl font-semibold text-slate-900">NeuroPulse AI</span>
          <span className="hidden sm:inline-flex text-[11px] uppercase tracking-widest text-slate-500 px-2 py-0.5 rounded-full border border-white/70 bg-white/70">
            Beta
          </span>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-500">Clinical Intelligence Copilot</p>
      </div>
    </Link>
  );

  const authSection = (
    <div className="flex items-center space-x-3">
      <Link
        href="/dashboard"
        className="hidden md:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
      >
        Dashboard
      </Link>
      <button
        onClick={handleAuthClick}
        className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:brightness-95"
      >
        {isAuthenticated ? 'Sign out' : 'Sign in'}
      </button>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-slate-600 hover:bg-white"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  );

  const navLinks = (
    <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
      {navItems.map(({ label, path }) => {
        const isActive = path !== '/' && pathname === path;
        return (
          <Link
            key={label}
            href={path}
            className={`group relative text-slate-500 transition hover:text-slate-900 ${
              isActive ? 'text-slate-900' : ''
            }`}
          >
            {label}
            <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-sky-400 to-teal-400 transition group-hover:scale-x-100" />
          </Link>
        );
      })}
      <Link
        href="#contact"
        className="inline-flex items-center space-x-1 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm hover:border-sky-200"
      >
        <Sparkles className="w-4 h-4 text-sky-500" />
        <span>Book a demo</span>
      </Link>
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-6 flex items-center justify-between rounded-3xl border border-white/60 bg-white/70 px-4 py-3 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          {brand}
          {navLinks}
          {authSection}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="mx-4 mt-3 rounded-3xl border border-white/70 bg-white/90 p-4 shadow-2xl backdrop-blur-lg">
            <div className="space-y-3">
              {navItems.map(({ label, path }) => (
                <Link
                  key={label}
                  href={path}
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-600 hover:bg-slate-50"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {isAuthenticated ? (
              <div className="flex items-center space-x-3 rounded-2xl border border-slate-100 px-4 py-3">
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'User avatar'}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/10 text-sm font-semibold text-slate-600">
                    {session?.user?.name?.slice(0, 1) || 'U'}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {session?.user?.name || 'Signed in'}
                  </p>
                  <p className="text-xs text-slate-500 truncate">{session?.user?.email}</p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-500">Create an account to unlock unlimited diagnostics.</p>
            )}

            <div className="mt-4 grid gap-3">
              <Link
                href="/dashboard"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300"
              >
                Open dashboard
              </Link>
              <button
                onClick={() => {
                  handleAuthClick();
                  closeMenu();
                }}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200"
              >
                {isAuthenticated ? 'Sign out' : 'Start free trial'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="h-24" />
    </header>
  );
};

export default Navbar;
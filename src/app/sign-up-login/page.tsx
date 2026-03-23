'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

type Tab = 'login' | 'signup';
type Role = 'student' | 'faculty' | 'coordinator' | 'admin';

const roleOptions: { value: Role; label: string; icon: string }[] = [
  { value: 'student', label: 'Student', icon: 'AcademicCapIcon' },
  { value: 'faculty', label: 'Faculty', icon: 'UserIcon' },
  { value: 'coordinator', label: 'Placement Coordinator', icon: 'BriefcaseIcon' },
  { value: 'admin', label: 'Administrator', icon: 'CogIcon' },
];

const FloatingStat = ({ val, label, delay, pos }: { val: string; label: string; delay: string; pos: string }) => (
  <div
    className={`absolute ${pos} glass rounded-2xl px-4 py-3 shadow-card border border-white/50 float-1`}
    style={{ animationDelay: delay }}
  >
    <div className="text-xl font-heading font-800 text-primary">{val}</div>
    <div className="text-xs text-muted">{label}</div>
  </div>
);

export default function SignUpLoginPage() {
  const [activeTab, setActiveTab] = useState<Tab>('login');
  const [role, setRole] = useState<Role>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirm, setSignupConfirm] = useState('');
  const [college, setCollege] = useState('');

  const inputClass = "w-full px-4 py-3 rounded-xl border border-border-subtle bg-background text-foreground text-sm font-body placeholder:text-muted/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all";

  return (
    <div className="min-h-screen flex gradient-mesh">
      {/* Left panel — brand */}
      <div
        className="hidden lg:flex lg:w-[54%] relative flex-col justify-between p-14 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #1E3A5F 100%)',
        }}
      >
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }} />

        {/* Background glows */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/15 rounded-full blur-[80px] pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <AppLogo size={36} />
          <span className="font-heading font-800 text-xl text-white tracking-tight">AcadPredict</span>
        </div>

        {/* Center content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-wider mb-8 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            AI-Powered Intelligence
          </div>

          <h2 className="font-heading font-800 text-4xl md:text-5xl text-white mb-6 leading-tight tracking-tight">
            Your placement score<br />
            <span style={{
              background: 'linear-gradient(135deg, #67E8F9, #A5B4FC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              is waiting for you.
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-md mb-12">
            Get your AI-powered placement probability, personalized skill gap analysis, and a step-by-step roadmap — all in one place.
          </p>

          {/* Feature list */}
          <ul className="space-y-4">
            {[
              'Precise placement probability score',
              'Personalized skill gap roadmap',
              'Real-time analytics dashboard',
              'Batch comparison & benchmarking',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="CheckIcon" size={11} className="text-accent" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Floating stat cards */}
        <FloatingStat val="94%" label="Prediction Accuracy" delay="0s" pos="top-[18%] right-8" />
        <FloatingStat val="8,400+" label="Students Analyzed" delay="2s" pos="bottom-[22%] right-12" />

        {/* Bottom social proof */}
        <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/10">
          <div className="flex -space-x-2">
            {[
              'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
              'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=32&h=32&fit=crop',
            ].map((src, i) => (
              <img key={i} src={src} alt="User" className="w-8 h-8 rounded-full border-2 border-primary/40 object-cover" />
            ))}
          </div>
          <p className="text-white/50 text-xs">8,000+ students already forecasting their future</p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="w-full lg:w-[46%] flex flex-col items-center justify-center px-6 py-12 min-h-screen">
        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2 mb-8">
          <AppLogo size={32} />
          <span className="font-heading font-800 text-xl text-primary">AcadPredict</span>
        </div>

        <div className="w-full max-w-md">
          {/* Card */}
          <div className="glass rounded-3xl p-8 shadow-indigo-md border border-border-subtle">
            {/* Tab switcher */}
            <div className="flex rounded-xl bg-background p-1 mb-8">
              {(['login', 'signup'] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeTab === t
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-muted hover:text-primary'
                  }`}
                >
                  {t === 'login' ? 'Log In' : 'Sign Up'}
                </button>
              ))}
            </div>

            {/* Login Form */}
            {activeTab === 'login' && (
              <div>
                <h1 className="font-heading font-800 text-2xl text-foreground mb-1">Welcome back</h1>
                <p className="text-muted text-sm mb-8">Log in to your AcadPredict account</p>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@college.edu"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Your password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className={inputClass + ' pr-12'}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors"
                      >
                        <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 text-muted cursor-pointer">
                      <input type="checkbox" className="rounded border-border-subtle accent-secondary" />
                      Remember me
                    </label>
                    <button type="button" className="text-secondary font-semibold hover:underline">
                      Forgot password?
                    </button>
                  </div>
                  <Link
                    href="/dashboard"
                    className="btn-primary w-full text-center block mt-2"
                  >
                    Log In to Dashboard
                  </Link>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border-subtle" />
                  </div>
                  <div className="relative flex justify-center text-xs text-muted bg-white px-3">or continue with</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Google', icon: 'GlobeAltIcon' },
                    { label: 'Microsoft', icon: 'BuildingOfficeIcon' },
                  ].map((p) => (
                    <button
                      key={p.label}
                      className="flex items-center justify-center gap-2 py-3 rounded-xl border border-border-subtle bg-background text-sm font-semibold text-foreground hover:bg-white hover:border-secondary/30 transition-all"
                    >
                      <Icon name={p.icon as any} size={16} className="text-muted" />
                      {p.label}
                    </button>
                  ))}
                </div>

                <p className="text-center text-sm text-muted mt-6">
                  Don't have an account?{' '}
                  <button onClick={() => setActiveTab('signup')} className="text-secondary font-semibold hover:underline">
                    Sign up free
                  </button>
                </p>
              </div>
            )}

            {/* Sign Up Form */}
            {activeTab === 'signup' && (
              <div>
                <h1 className="font-heading font-800 text-2xl text-foreground mb-1">Create your account</h1>
                <p className="text-muted text-sm mb-6">Get your placement forecast in minutes</p>

                {/* Role selector */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">I am a</label>
                  <div className="grid grid-cols-2 gap-2">
                    {roleOptions.map((r) => (
                      <button
                        key={r.value}
                        type="button"
                        onClick={() => setRole(r.value)}
                        className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                          role === r.value
                            ? 'border-secondary bg-secondary/8 text-secondary' :'border-border-subtle bg-background text-muted hover:border-secondary/30'
                        }`}
                      >
                        <Icon name={r.icon as any} size={14} />
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      placeholder="Arjun Mehta"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">College / Institution</label>
                    <input
                      type="text"
                      placeholder="VIT Vellore"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@college.edu"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Min. 8 characters"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className={inputClass + ' pr-12'}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors"
                      >
                        <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={18} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Repeat password"
                        value={signupConfirm}
                        onChange={(e) => setSignupConfirm(e.target.value)}
                        className={inputClass + ' pr-12'}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors"
                      >
                        <Icon name={showConfirmPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={18} />
                      </button>
                    </div>
                  </div>
                  <label className="flex items-start gap-2 text-xs text-muted cursor-pointer">
                    <input type="checkbox" className="rounded border-border-subtle accent-secondary mt-0.5 flex-shrink-0" />
                    I agree to the{' '}
                    <span className="text-secondary font-semibold hover:underline">Terms of Service</span>
                    {' '}and{' '}
                    <span className="text-secondary font-semibold hover:underline">Privacy Policy</span>
                  </label>
                  <Link
                    href="/dashboard"
                    className="btn-primary w-full text-center block mt-1"
                  >
                    Create Free Account
                  </Link>
                </form>

                <p className="text-center text-sm text-muted mt-5">
                  Already have an account?{' '}
                  <button onClick={() => setActiveTab('login')} className="text-secondary font-semibold hover:underline">
                    Log in
                  </button>
                </p>
              </div>
            )}
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted">
            {[
              { icon: 'LockClosedIcon', label: 'SSL Secured' },
              { icon: 'ShieldCheckIcon', label: 'FERPA Compliant' },
              { icon: 'EyeSlashIcon', label: 'No data sold' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-1">
                <Icon name={b.icon as any} size={13} className="text-muted" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

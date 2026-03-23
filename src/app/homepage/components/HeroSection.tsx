'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

/* ── Mini floating metric cards shown in the hero bento ── */
const FloatingCard1 = () => (
  <div className="glass rounded-2xl p-4 shadow-card float-1 w-56">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold text-muted uppercase tracking-wider">Placement Score</span>
      <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
        <Icon name="ArrowTrendingUpIcon" size={13} className="text-accent" />
      </span>
    </div>
    {/* Mini gauge SVG */}
    <div className="flex items-center gap-3">
      <svg width="52" height="52" viewBox="0 0 52 52">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4338CA" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <circle cx="26" cy="26" r="20" fill="none" stroke="rgba(67,56,202,0.1)" strokeWidth="6" />
        <circle
          cx="26" cy="26" r="20"
          fill="none"
          stroke="url(#g1)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="125.66"
          strokeDashoffset="31"
          transform="rotate(-90 26 26)"
        />
        <text x="26" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1E1B4B">78%</text>
      </svg>
      <div>
        <div className="text-xl font-heading font-800 text-primary">78%</div>
        <div className="text-xs text-muted">Probability</div>
      </div>
    </div>
  </div>
);

const FloatingCard2 = () => (
  <div className="glass rounded-2xl p-4 shadow-card float-2 w-52">
    <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Skill Radar</div>
    <svg width="96" height="80" viewBox="0 0 96 80">
      <polygon points="48,8 80,28 72,64 24,64 16,28" fill="rgba(67,56,202,0.08)" stroke="rgba(67,56,202,0.2)" strokeWidth="1" />
      <polygon points="48,18 68,32 62,56 34,56 28,32" fill="rgba(6,182,212,0.2)" stroke="#06B6D4" strokeWidth="1.5" />
      {[{ cx: 48, cy: 8 }, { cx: 80, cy: 28 }, { cx: 72, cy: 64 }, { cx: 24, cy: 64 }, { cx: 16, cy: 28 }].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="3" fill="rgba(67,56,202,0.3)" />
      ))}
      {[{ cx: 48, cy: 18 }, { cx: 68, cy: 32 }, { cx: 62, cy: 56 }, { cx: 34, cy: 56 }, { cx: 28, cy: 32 }].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="3" fill="#06B6D4" />
      ))}
    </svg>
    <div className="flex flex-wrap gap-1 mt-1">
      {['DSA', 'SQL', 'ML', 'Comm.'].map(s => (
        <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{s}</span>
      ))}
    </div>
  </div>
);

const FloatingCard3 = () => (
  <div className="glass rounded-2xl p-4 shadow-card float-3 w-48">
    <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Trend</div>
    <svg width="110" height="44" viewBox="0 0 110 44">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4338CA" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4338CA" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#4338CA" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M4,36 L20,28 L36,30 L52,18 L68,20 L84,10 L100,6" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4,36 L20,28 L36,30 L52,18 L68,20 L84,10 L100,6 L100,44 L4,44 Z" fill="url(#fillGrad)" />
      {[{ x: 4, y: 36 }, { x: 52, y: 18 }, { x: 100, y: 6 }].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="white" stroke="#4338CA" strokeWidth="2" />
      ))}
    </svg>
    <div className="flex items-center gap-1 mt-1">
      <Icon name="ArrowUpIcon" size={12} className="text-emerald-500" />
      <span className="text-xs font-semibold text-emerald-600">+12.4% this semester</span>
    </div>
  </div>
);

const FloatingCard4 = () => (
  <div className="glass rounded-2xl p-4 shadow-card float-1 w-44" style={{ animationDelay: '3s' }}>
    <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Live Insights</div>
    <div className="space-y-2">
      {[
        { label: 'CGPA Score', val: '8.6', color: 'bg-secondary' },
        { label: 'Aptitude', val: '91%', color: 'bg-accent' },
        { label: 'Interview', val: '74%', color: 'bg-violet-500' },
      ].map((item) => (
        <div key={item.label}>
          <div className="flex justify-between text-[10px] mb-0.5">
            <span className="text-muted">{item.label}</span>
            <span className="font-semibold text-primary">{item.val}</span>
          </div>
          <div className="h-1.5 rounded-full bg-primary/8 overflow-hidden">
            <div className={`h-full ${item.color} rounded-full`} style={{ width: item.val.includes('.') ? `${parseFloat(item.val) * 10}%` : item.val }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLElement>('.hero-parallax');
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      cards.forEach((card, i) => {
        const depth = (i + 1) * 8;
        card.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 gradient-mesh overflow-hidden noise-overlay"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-[5%] w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-violet-500/6 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 text-xs font-semibold text-secondary mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              AI-Powered · Real-Time · Predictive Analytics
            </div>

            <h1 className="font-heading font-800 text-5xl md:text-[64px] leading-[1.08] tracking-tight text-foreground mb-6">
              Predict{' '}
              <span className="text-gradient-primary">Academic Success</span>
              {' '}and{' '}
              <span className="relative">
                Placement
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5 Q150,10 200,5" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              {' '}Outcomes with AI
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-10 max-w-lg font-body">
              AcadPredict analyzes your academic history, skill profile, and market trends to give you a precise placement probability — and a clear roadmap to improve it.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/sign-up-login" className="btn-primary flex items-center gap-2">
                Get Started Free
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <Link href="/dashboard" className="btn-secondary flex items-center gap-2">
                <Icon name="PlayCircleIcon" size={18} className="text-secondary" />
                View Demo
              </Link>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
                  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
                ].map((src, i) => (
                  <img key={i} src={src} alt="Student user" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                ))}
                <div className="w-9 h-9 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center border-2 border-white">+8k</div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="StarIcon" size={13} variant="solid" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-muted mt-0.5">Trusted by 8,000+ students across India</p>
              </div>
            </div>
          </div>

          {/* Right: Floating bento cards */}
          <div className="relative h-[520px] hidden lg:block">
            {/* Main central card */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 glass rounded-3xl p-6 shadow-indigo-md border border-secondary/15 w-72 z-20 pulse-glow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-muted font-semibold uppercase tracking-wider">Arjun Mehta · CS Final Year</p>
                  <h3 className="text-lg font-heading font-700 text-primary mt-0.5">Placement Forecast</h3>
                </div>
                <span className="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold">High</span>
              </div>
              {/* Large gauge */}
              <div className="flex justify-center mb-4">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <defs>
                    <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4338CA" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(67,56,202,0.08)" strokeWidth="10" />
                  <circle
                    cx="60" cy="60" r="46"
                    fill="none"
                    stroke="url(#gaugeGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="289"
                    strokeDashoffset="72"
                    transform="rotate(-90 60 60)"
                  />
                  <text x="60" y="55" textAnchor="middle" fontSize="22" fontWeight="800" fill="#1E1B4B" fontFamily="Manrope">78%</text>
                  <text x="60" y="72" textAnchor="middle" fontSize="10" fill="#64748B">Probability</text>
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[{ label: 'CGPA', val: '8.6' }, { label: 'Aptitude', val: '91%' }, { label: 'Projects', val: '12' }].map(s => (
                  <div key={s.label} className="bg-background rounded-xl p-2">
                    <div className="text-sm font-heading font-700 text-primary">{s.val}</div>
                    <div className="text-[10px] text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating cards with parallax */}
            <div className="hero-parallax absolute top-4 right-4 transition-transform duration-300 ease-out z-10">
              <FloatingCard1 />
            </div>
            <div className="hero-parallax absolute bottom-8 left-0 transition-transform duration-300 ease-out z-10">
              <FloatingCard2 />
            </div>
            <div className="hero-parallax absolute top-1/2 -translate-y-1/2 -right-4 transition-transform duration-300 ease-out z-10">
              <FloatingCard3 />
            </div>
            <div className="hero-parallax absolute bottom-4 right-8 transition-transform duration-300 ease-out z-10">
              <FloatingCard4 />
            </div>

            {/* Decorative connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              <line x1="50%" y1="50%" x2="80%" y2="15%" stroke="rgba(67,56,202,0.12)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="rgba(6,182,212,0.12)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: '94%', label: 'Prediction Accuracy', icon: 'ChartBarIcon' },
            { val: '8,400+', label: 'Students Analyzed', icon: 'AcademicCapIcon' },
            { val: '120+', label: 'Partner Colleges', icon: 'BuildingLibraryIcon' },
            { val: '3.2x', label: 'Faster Skill Gaps Found', icon: 'BoltIcon' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 glow-border card-hover text-center">
              <Icon name={stat.icon as any} size={22} className="text-secondary mx-auto mb-2" />
              <div className="text-2xl font-heading font-800 text-primary">{stat.val}</div>
              <div className="text-xs text-muted mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

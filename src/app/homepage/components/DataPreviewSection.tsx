'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,  } from 'recharts';

const performanceData = [
  { sem: 'S1', cgpa: 7.2, avg: 6.8 },
  { sem: 'S2', cgpa: 7.6, avg: 7.0 },
  { sem: 'S3', cgpa: 7.9, avg: 7.1 },
  { sem: 'S4', cgpa: 8.1, avg: 7.2 },
  { sem: 'S5', cgpa: 8.4, avg: 7.3 },
  { sem: 'S6', cgpa: 8.6, avg: 7.5 },
];

const aptitudeData = [
  { week: 'W1', score: 62 },
  { week: 'W2', score: 68 },
  { week: 'W3', score: 71 },
  { week: 'W4', score: 74 },
  { week: 'W5', score: 80 },
  { week: 'W6', score: 85 },
  { week: 'W7', score: 91 },
];

const skillData = [
  { skill: 'DSA', score: 82 },
  { skill: 'DBMS', score: 74 },
  { skill: 'ML/AI', score: 68 },
  { skill: 'System Design', score: 55 },
  { skill: 'Communication', score: 78 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl p-3 shadow-card border border-border-subtle text-xs">
        <p className="font-semibold text-primary mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} style={{ color: p.color }}>{p.name}: {p.value}</p>
        ))}
      </div>
    );
  }
  return null;
};

export default function DataPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [gaugeAnimate, setGaugeAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('active');
            setGaugeAnimate(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal-up, .reveal-scale').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const gaugeOffset = gaugeAnimate ? 55 : 289;

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Icon name="PresentationChartLineIcon" size={12} variant="solid" />
            Live Dashboard Preview
          </span>
          <h2 className="font-heading font-800 text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
            Your data, visualized{' '}
            <span className="text-gradient-primary">intelligently</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Every metric that matters — from CGPA trends to placement probability — presented in a single, intuitive dashboard.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="reveal-scale glass rounded-3xl border border-border-subtle shadow-indigo-md overflow-hidden">
          {/* Mock browser bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border-subtle bg-background">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 mx-4 bg-white/60 rounded-lg px-4 py-1.5 text-xs text-muted font-mono">
              acadpredict.ai/dashboard
            </div>
            <span className="flex items-center gap-1 text-xs text-emerald-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>

          {/* Dashboard content */}
          <div className="p-6 bg-background grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Placement gauge */}
            <div className="glass rounded-2xl p-5 glow-border">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-heading font-700 text-sm text-foreground">Placement Probability</h4>
                <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold">High</span>
              </div>
              <div className="flex justify-center">
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <defs>
                    <linearGradient id="gaugePrev" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4338CA" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <circle cx="70" cy="70" r="54" fill="none" stroke="rgba(67,56,202,0.08)" strokeWidth="12" />
                  <circle
                    cx="70" cy="70" r="54"
                    fill="none"
                    stroke="url(#gaugePrev)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="339"
                    strokeDashoffset={gaugeOffset}
                    transform="rotate(-90 70 70)"
                    style={{ transition: 'stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                  <text x="70" y="64" textAnchor="middle" fontSize="26" fontWeight="800" fill="#1E1B4B" fontFamily="Manrope">78%</text>
                  <text x="70" y="82" textAnchor="middle" fontSize="11" fill="#64748B">Probability</text>
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {[{ l: 'Target: TCS, Infosys', c: 'text-secondary' }, { l: 'CGPA: 8.6 / 10', c: 'text-accent' }].map(s => (
                  <div key={s.l} className="bg-white rounded-xl p-2.5 text-center">
                    <p className={`text-xs font-semibold ${s.c}`}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CGPA Trend */}
            <div className="glass rounded-2xl p-5 glow-border">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-heading font-700 text-sm text-foreground">CGPA Trend</h4>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <Icon name="ArrowUpIcon" size={11} />+0.4 this year
                </span>
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <AreaChart data={performanceData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="cgpaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4338CA" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#4338CA" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(67,56,202,0.06)" />
                  <XAxis dataKey="sem" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                  <YAxis domain={[6, 10]} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="cgpa" stroke="#4338CA" strokeWidth={2} fill="url(#cgpaGrad)" name="Your CGPA" dot={{ r: 3, fill: '#4338CA' }} />
                  <Area type="monotone" dataKey="avg" stroke="#94a3b8" strokeWidth={1.5} fill="none" strokeDasharray="4 4" name="Batch Avg" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Skill Scores */}
            <div className="glass rounded-2xl p-5 glow-border">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-heading font-700 text-sm text-foreground">Skill Scores</h4>
                <span className="px-2 py-0.5 rounded-lg bg-amber-50 text-amber-600 text-xs font-semibold">2 gaps found</span>
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={skillData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }} layout="vertical">
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#4338CA" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(67,56,202,0.06)" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 9, fill: '#94a3b8' }} />
                  <YAxis dataKey="skill" type="category" tick={{ fontSize: 10, fill: '#64748B' }} width={80} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="score" fill="url(#barGrad)" radius={[0, 4, 4, 0]} name="Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

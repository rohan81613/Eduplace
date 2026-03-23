'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    num: '01',
    icon: 'CloudArrowUpIcon',
    title: 'Upload Academic Data',
    desc: 'Import your transcripts, certifications, and project portfolio via CSV, PDF, or our LMS integration.',
    color: 'bg-secondary/10 text-secondary',
    border: 'border-secondary/20',
  },
  {
    num: '02',
    icon: 'CpuChipIcon',
    title: 'AI Analyzes Performance',
    desc: 'Our ML models process 40+ academic and behavioral signals to build your comprehensive intelligence profile.',
    color: 'bg-accent/10 text-accent',
    border: 'border-accent/20',
  },
  {
    num: '03',
    icon: 'PresentationChartLineIcon',
    title: 'Forecast Placement Probability',
    desc: 'Receive a precise probability score for each target company tier, updated as you add new skills.',
    color: 'bg-violet-500/10 text-violet-600',
    border: 'border-violet-500/20',
  },
  {
    num: '04',
    icon: 'MapIcon',
    title: 'Get Your Roadmap',
    desc: 'A personalized action plan with prioritized courses, mock tests, and milestones to maximize your chances.',
    color: 'bg-emerald-500/10 text-emerald-600',
    border: 'border-emerald-500/20',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal-up, .reveal-scale').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 gradient-mesh">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Icon name="MapIcon" size={12} variant="solid" />
            How It Works
          </span>
          <h2 className="font-heading font-800 text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
            From raw data to{' '}
            <span className="text-gradient-primary">clear direction</span>
            {' '}in 4 steps
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            AcadPredict transforms your academic records into actionable intelligence within minutes.
          </p>
        </div>

        {/* Horizontal step flow */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-secondary/20 via-accent/30 to-emerald-500/20" style={{ zIndex: 0 }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={step.num} className={`reveal-scale delay-${i * 100} flex flex-col items-center text-center group`}>
                {/* Icon circle */}
                <div className={`relative w-16 h-16 rounded-2xl ${step.color} border ${step.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-card bg-white`}>
                  <Icon name={step.icon as any} size={26} />
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center font-heading">
                    {i + 1}
                  </span>
                  {/* Arrow connector (between steps) */}
                  {i < 3 && (
                    <div className="hidden lg:flex absolute -right-[calc(50%+2rem)] top-1/2 -translate-y-1/2 items-center">
                      <Icon name="ChevronRightIcon" size={18} className="text-muted/40" />
                    </div>
                  )}
                </div>

                <div className="glass rounded-2xl p-5 w-full glow-border card-hover">
                  <h3 className="font-heading font-700 text-base text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA below steps */}
        <div className="mt-14 text-center reveal-up">
          <p className="text-sm text-muted mb-4">Ready to see your forecast?</p>
          <a href="/sign-up-login" className="btn-primary inline-flex items-center gap-2">
            Start Your Analysis
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

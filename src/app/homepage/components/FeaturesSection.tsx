'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const features = [
  {
    icon: 'ChartBarIcon',
    title: 'Academic Performance Analysis',
    desc: 'Deep-dive into semester-wise CGPA trends, subject performance, and backlogs to understand your academic trajectory.',
    tag: 'Core',
    size: 'large', // spans 2 cols
    color: 'from-secondary/10 to-accent/5',
    accent: 'text-secondary',
    bg: 'bg-secondary/8',
  },
  {
    icon: 'SparklesIcon',
    title: 'Placement Probability Prediction',
    desc: 'AI models trained on 50,000+ placement records give you a precise probability score with confidence intervals.',
    tag: 'AI-Powered',
    size: 'normal',
    color: 'from-accent/10 to-violet-500/5',
    accent: 'text-accent',
    bg: 'bg-accent/8',
  },
  {
    icon: 'PuzzlePieceIcon',
    title: 'Skill Gap Identification',
    desc: 'Compare your skill profile against top-placed students in your target companies and industry.',
    tag: 'Insights',
    size: 'normal',
    color: 'from-violet-500/10 to-secondary/5',
    accent: 'text-violet-600',
    bg: 'bg-violet-500/8',
  },
  {
    icon: 'LightBulbIcon',
    title: 'Personalized Recommendations',
    desc: 'Get a tailored learning path: courses, certifications, and projects ranked by placement impact score.',
    tag: 'Personalized',
    size: 'normal',
    color: 'from-amber-500/10 to-orange-400/5',
    accent: 'text-amber-600',
    bg: 'bg-amber-500/8',
  },
  {
    icon: 'CircleStackIcon',
    title: 'Real-time Analytics Dashboard',
    desc: 'Monitor batch-level trends, cohort comparisons, and recruiter engagement — all in one live dashboard.',
    tag: 'Live',
    size: 'large',
    color: 'from-emerald-500/10 to-teal-400/5',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-500/8',
  },
  {
    icon: 'DocumentChartBarIcon',
    title: 'Reports & Insights',
    desc: 'Export detailed PDF reports for placement drives, faculty reviews, and institutional accreditation.',
    tag: 'Export',
    size: 'normal',
    color: 'from-rose-500/10 to-pink-400/5',
    accent: 'text-rose-600',
    bg: 'bg-rose-500/8',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-up, .reveal-scale');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/8 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
            <Icon name="SparklesIcon" size={12} variant="solid" />
            Platform Features
          </span>
          <h2 className="font-heading font-800 text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
            Everything you need to{' '}
            <span className="text-gradient-primary">forecast your future</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Six powerful modules working together to give students, faculty, and placement officers a complete intelligence layer.
          </p>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`reveal-scale delay-${Math.min(i * 100, 500)} relative rounded-3xl p-7 bg-gradient-to-br ${feat.color} border border-border-subtle card-hover group overflow-hidden ${
                feat.size === 'large' && i === 0 ? 'lg:col-span-2' : ''
              } ${feat.size === 'large' && i === 4 ? 'lg:col-span-2' : ''}`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className={`w-12 h-12 rounded-2xl ${feat.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={feat.icon as any} size={22} className={feat.accent} />
              </div>

              <span className={`inline-block px-2.5 py-1 rounded-lg ${feat.bg} ${feat.accent} text-[10px] font-bold uppercase tracking-wider mb-3`}>
                {feat.tag}
              </span>

              <h3 className="font-heading font-700 text-lg text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feat.desc}</p>

              {/* Hover arrow */}
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-muted group-hover:text-secondary transition-colors">
                Learn more
                <Icon name="ArrowRightIcon" size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Large feature: add mini visual */}
              {feat.size === 'large' && i === 0 && (
                <div className="absolute right-6 bottom-6 hidden lg:flex gap-2">
                  {[82, 67, 91, 75, 88].map((v, j) => (
                    <div
                      key={j}
                      className="w-5 rounded-t-md bg-secondary/30"
                      style={{ height: `${v * 0.5}px`, alignSelf: 'flex-end' }}
                    />
                  ))}
                </div>
              )}
              {feat.size === 'large' && i === 4 && (
                <div className="absolute right-6 bottom-6 hidden lg:flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-600 font-semibold">Live · Updated 2s ago</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

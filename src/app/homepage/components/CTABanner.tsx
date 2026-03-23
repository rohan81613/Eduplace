'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.2 }
    );
    sectionRef?.current?.querySelectorAll('.reveal-up')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center reveal-up"
          style={{
            background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 40%, #1E3A5F 70%, #0E7490 100%)',
          }}
        >
          {/* Background glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Decorative dots */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-8 border border-white/15">
              <Icon name="RocketLaunchIcon" size={12} />
              Free for students during beta
            </div>

            <h2 className="font-heading font-800 text-4xl md:text-6xl text-white mb-6 tracking-tight leading-tight">
              Start forecasting your{' '}
              <span style={{
                background: 'linear-gradient(135deg, #67E8F9, #A5B4FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                future today
              </span>
            </h2>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Join 8,000+ students who already know their placement probability — and exactly what to do to improve it. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/sign-up-login"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-heading font-700 text-base hover:bg-white/95 transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                Get My Placement Score — Free
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-heading font-600 text-base border border-white/20 hover:bg-white/20 transition-all"
              >
                <Icon name="PlayCircleIcon" size={18} />
                See Live Demo
              </Link>
            </div>

            <p className="mt-8 text-white/40 text-sm">
              No credit card · Instant access · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

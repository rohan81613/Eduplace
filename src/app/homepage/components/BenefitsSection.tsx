'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const tabs = [
{
  id: 'students',
  label: 'For Students',
  icon: 'AcademicCapIcon',
  color: 'text-secondary',
  activeBg: 'bg-secondary/10 text-secondary',
  headline: 'Know exactly where you stand — and what to do next',
  subtext: 'Stop guessing your placement chances. AcadPredict gives you a precise score and a clear action plan before recruitment season begins.',
  benefits: [
  { icon: 'ChartBarIcon', text: 'See your placement probability updated in real-time as you add skills' },
  { icon: 'PuzzlePieceIcon', text: 'Identify the exact 3-4 skills that will move your score the most' },
  { icon: 'MapIcon', text: 'Follow a personalized weekly prep roadmap ranked by impact' },
  { icon: 'TrophyIcon', text: 'Track readiness against top-placed seniors in your target companies' }],

  stat: { val: '2.4x', desc: 'higher placement rate for students who use AcadPredict for 60+ days' },
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_13aadd5da-1771890722326.png",
  imgAlt: 'Students studying with laptops in a university library'
},
{
  id: 'colleges',
  label: 'For Colleges',
  icon: 'BuildingLibraryIcon',
  color: 'text-accent',
  activeBg: 'bg-accent/10 text-accent',
  headline: 'Turn your placement data into a competitive advantage',
  subtext: 'Give your placement cell the analytics infrastructure to identify at-risk students early and optimize your batch-level outcomes.',
  benefits: [
  { icon: 'UsersIcon', text: 'Monitor 500+ students simultaneously with automated risk flags' },
  { icon: 'DocumentChartBarIcon', text: 'Generate accreditation-ready reports in one click' },
  { icon: 'BuildingOfficeIcon', text: 'Benchmark your batch against 120+ partner institutions' },
  { icon: 'BellAlertIcon', text: 'Early-warning alerts for students falling below placement threshold' }],

  stat: { val: '34%', desc: 'improvement in overall placement rates at partner institutions' },
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_12f4fff37-1770791815456.png",
  imgAlt: 'University campus building with students walking'
},
{
  id: 'recruiters',
  label: 'For Recruiters',
  icon: 'BriefcaseIcon',
  color: 'text-violet-600',
  activeBg: 'bg-violet-500/10 text-violet-600',
  headline: 'Find the right candidates before the placement drive',
  subtext: 'Access verified academic intelligence and AI-ranked candidate profiles to make faster, more confident hiring decisions.',
  benefits: [
  { icon: 'MagnifyingGlassIcon', text: 'Search candidates by skill scores, CGPA, and project portfolio' },
  { icon: 'ChartBarIcon', text: 'Verified academic data — no inflated resumes' },
  { icon: 'BoltIcon', text: 'AI-ranked shortlists matching your job requirements in minutes' },
  { icon: 'StarIcon', text: 'Predictive fit scores for role-specific technical requirements' }],

  stat: { val: '60%', desc: 'reduction in time-to-shortlist for partner recruiting companies' },
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_16fb5d69c-1772568291650.png",
  imgAlt: 'Business professionals in a meeting reviewing candidate profiles'
}];


export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const tab = tabs[activeTab];

  return (
    <section ref={sectionRef} className="py-24 px-6 gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Icon name="UsersIcon" size={12} variant="solid" />
            Who Benefits
          </span>
          <h2 className="font-heading font-800 text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
            Built for every stakeholder in{' '}
            <span className="text-gradient-primary">academic success</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-up">
          {tabs.map((t, i) =>
          <button
            key={t.id}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
            activeTab === i ?
            `${t.activeBg} border-current/20 shadow-sm` :
            'bg-white/70 text-muted border-border-subtle hover:bg-white'}`
            }>
            
              <Icon name={t.icon as any} size={16} />
              {t.label}
            </button>
          )}
        </div>

        {/* Tab content */}
        <div key={tab.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div className="reveal-up">
            <h3 className="font-heading font-800 text-3xl md:text-4xl text-foreground mb-4 tracking-tight leading-tight">
              {tab.headline}
            </h3>
            <p className="text-muted text-lg leading-relaxed mb-8">{tab.subtext}</p>
            <ul className="space-y-4 mb-8">
              {tab.benefits.map((b) =>
              <li key={b.text} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${tab.activeBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon name={b.icon as any} size={15} />
                  </div>
                  <p className="text-sm text-muted leading-relaxed pt-1">{b.text}</p>
                </li>
              )}
            </ul>
            {/* Stat callout */}
            <div className="glass rounded-2xl p-5 glow-border inline-flex items-center gap-4">
              <div className={`text-3xl font-heading font-800 ${tab.color}`}>{tab.stat.val}</div>
              <p className="text-sm text-muted leading-snug max-w-xs">{tab.stat.desc}</p>
            </div>
          </div>

          {/* Right: image with overlay card */}
          <div className="relative reveal-up">
            <div className="rounded-3xl overflow-hidden shadow-indigo-md border border-border-subtle aspect-[4/3]">
              <img src={tab.imgSrc} alt={tab.imgAlt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 shadow-card border border-white/60">
              <div className={`text-2xl font-heading font-800 ${tab.color}`}>{tab.stat.val}</div>
              <div className="text-xs text-muted mt-0.5 max-w-[120px] leading-snug">improvement with AcadPredict</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

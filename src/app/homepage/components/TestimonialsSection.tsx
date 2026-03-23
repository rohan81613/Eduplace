'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
{
  name: 'Priya Nair',
  role: 'Final Year, Computer Science · VIT Vellore',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba3a215f-1770959831041.png",
  quote: "AcadPredict showed me I had a 62% placement score and that improving my DBMS and System Design would push it above 80%. I followed the roadmap and got placed at Wipro within 3 weeks of campus drives.",
  company: 'Placed at Wipro Technologies',
  score: '82%',
  stars: 5
},
{
  name: 'Rohan Sharma',
  role: 'Placement Coordinator · BITS Pilani',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dbc8dc0e-1769299747224.png",
  quote: "We identified 47 at-risk students two months before the placement season. With targeted interventions, 38 of them got placed — that never would have happened without the early-warning dashboard.",
  company: 'BITS Pilani Placement Cell',
  score: '92%',
  stars: 5
},
{
  name: 'Kavitha Reddy',
  role: 'Final Year, MBA · IIM Indore',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1794e1233-1767975392694.png",
  quote: "The skill gap analysis was shockingly accurate. It told me my case study prep was weak — I took the recommended course, and my interview confidence doubled. Placed in my first-choice company.",
  company: 'Placed at Deloitte Consulting',
  score: '88%',
  stars: 5
},
{
  name: 'Aryan Kulkarni',
  role: 'Campus Recruiter · Infosys',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7faa8af-1768193479865.png",
  quote: "The AI-ranked candidate profiles save our team hours of screening. The skill verification data is reliable, and we've reduced our time-to-shortlist from 5 days to under 18 hours.",
  company: 'Infosys Campus Hiring',
  score: '95%',
  stars: 5
}];


export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    sectionRef?.current?.querySelectorAll('.reveal-up, .reveal-scale')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/8 text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={12} variant="solid" />
            Success Stories
          </span>
          <h2 className="font-heading font-800 text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
            Real results from{' '}
            <span className="text-gradient-primary">real students</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Join 8,000+ students and 120+ institutions already using AcadPredict.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials?.map((t, i) =>
          <div
            key={t?.name}
            className={`reveal-scale delay-${i * 100} glass rounded-3xl p-7 glow-border card-hover relative overflow-hidden`}>
            
              {/* Quote mark */}
              <div className="absolute top-5 right-7 text-6xl font-serif text-secondary/10 leading-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t?.stars)]?.map((_, j) =>
              <Icon key={j} name="StarIcon" size={14} variant="solid" className="text-amber-400" />
              )}
              </div>

              <p className="text-foreground leading-relaxed mb-6 text-sm relative z-10">"{t?.quote}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t?.avatar} alt={t?.name} className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <div className="font-heading font-700 text-sm text-foreground">{t?.name}</div>
                    <div className="text-xs text-muted">{t?.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-heading font-800 text-gradient-primary">{t?.score}</div>
                  <div className="text-xs text-muted">{t?.company}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

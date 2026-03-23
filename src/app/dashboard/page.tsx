'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import {
  AreaChart, Area, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer } from
'recharts';

const cgpaData = [
{ sem: 'S1', cgpa: 7.2, batchAvg: 6.8 },
{ sem: 'S2', cgpa: 7.6, batchAvg: 7.0 },
{ sem: 'S3', cgpa: 7.9, batchAvg: 7.1 },
{ sem: 'S4', cgpa: 8.1, batchAvg: 7.2 },
{ sem: 'S5', cgpa: 8.4, batchAvg: 7.3 },
{ sem: 'S6', cgpa: 8.6, batchAvg: 7.5 }];


const radarData = [
{ subject: 'DSA', A: 82, fullMark: 100 },
{ subject: 'DBMS', A: 74, fullMark: 100 },
{ subject: 'ML/AI', A: 68, fullMark: 100 },
{ subject: 'Sys Design', A: 55, fullMark: 100 },
{ subject: 'Comm.', A: 78, fullMark: 100 },
{ subject: 'Aptitude', A: 91, fullMark: 100 }];


const aptitudeData = [
{ week: 'W1', score: 62 },
{ week: 'W2', score: 68 },
{ week: 'W3', score: 71 },
{ week: 'W4', score: 74 },
{ week: 'W5', score: 80 },
{ week: 'W6', score: 85 },
{ week: 'W7', score: 91 }];


const recommendations = [
{ id: 1, title: 'Complete System Design Fundamentals', type: 'Course', impact: '+8% score', priority: 'High', icon: 'CpuChipIcon', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
{ id: 2, title: 'Practice 30 LeetCode Medium Problems', type: 'Practice', impact: '+5% score', priority: 'High', icon: 'CodeBracketIcon', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
{ id: 3, title: 'Earn AWS Cloud Practitioner Cert', type: 'Certification', impact: '+6% score', priority: 'Medium', icon: 'CloudIcon', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
{ id: 4, title: 'Mock Interview Practice (3 sessions)', type: 'Mock Test', impact: '+4% score', priority: 'Medium', icon: 'ChatBubbleLeftRightIcon', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' }];


const upcomingDrives = [
{ company: 'TCS', date: 'Mar 18, 2026', role: 'System Engineer', match: 88 },
{ company: 'Infosys', date: 'Mar 22, 2026', role: 'Associate Engineer', match: 82 },
{ company: 'Wipro', date: 'Mar 28, 2026', role: 'Project Engineer', match: 91 }];


const navItems = [
{ icon: 'HomeIcon', label: 'Overview', id: 'overview' },
{ icon: 'ChartBarIcon', label: 'Analytics', id: 'analytics' },
{ icon: 'SparklesIcon', label: 'Prediction', id: 'prediction' },
{ icon: 'PuzzlePieceIcon', label: 'Skill Gaps', id: 'skills' },
{ icon: 'DocumentChartBarIcon', label: 'Reports', id: 'reports' },
{ icon: 'BuildingOfficeIcon', label: 'Placement Drives', id: 'drives' }];


const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl p-3 shadow-card border border-border-subtle text-xs">
        <p className="font-semibold text-primary mb-1">{label}</p>
        {payload.map((p: any, i: number) =>
        <p key={i} style={{ color: p.color }}>{p.name}: {p.value}</p>
        )}
      </div>);

  }
  return null;
};

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [gaugeAnimate, setGaugeAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGaugeAnimate(true), 400);
    return () => clearTimeout(t);
  }, []);

  const gaugeOffset = gaugeAnimate ? 55 : 402;

  return (
    <div className="min-h-screen bg-background flex font-body">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-surface border-r border-border-subtle flex flex-col transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`
        }>
        
        {/* Logo */}
        <div className="p-5 border-b border-border-subtle">
          <Link href="/homepage" className="flex items-center gap-2.5">
            <AppLogo size={32} />
            <span className="font-heading font-800 text-base text-primary">AcadPredict</span>
          </Link>
        </div>

        {/* User card */}
        <div className="p-4 mx-3 mt-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/5 border border-border-subtle">
          <div className="flex items-center gap-3">
            <img
              src="https://img.rocket.new/generatedImages/rocket_gen_img_16e9d8251-1763294843980.png"
              alt="Arjun Mehta student profile photo"
              className="w-10 h-10 rounded-full object-cover border-2 border-white" />
            
            <div className="flex-1 min-w-0">
              <div className="font-heading font-700 text-sm text-foreground truncate">Arjun Mehta</div>
              <div className="text-xs text-muted truncate">CS · Final Year · VIT</div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-muted">Placement Score</span>
            <span className="text-sm font-heading font-800 text-secondary">78%</span>
          </div>
          <div className="mt-1.5 h-1.5 rounded-full bg-secondary/10 overflow-hidden">
            <div className="h-full w-[78%] bg-gradient-to-r from-secondary to-accent rounded-full" />
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 mt-2">
          {navItems.map((item) =>
          <button
            key={item.id}
            onClick={() => {setActiveNav(item.id);setSidebarOpen(false);}}
            className={`sidebar-link w-full text-left ${activeNav === item.id ? 'active' : ''}`}>
            
              <Icon name={item.icon as any} size={18} />
              {item.label}
            </button>
          )}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-border-subtle space-y-1">
          <button className="sidebar-link w-full text-left">
            <Icon name="CogIcon" size={18} />
            Settings
          </button>
          <Link href="/sign-up-login" className="sidebar-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-muted hover:text-secondary hover:bg-secondary/5 transition-all">
            <Icon name="ArrowRightOnRectangleIcon" size={18} />
            Log Out
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen &&
      <div
        className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        onClick={() => setSidebarOpen(false)} />

      }

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur-md border-b border-border-subtle px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-background transition-colors"
              onClick={() => setSidebarOpen(true)}>
              
              <Icon name="Bars3Icon" size={20} className="text-muted" />
            </button>
            <div>
              <h1 className="font-heading font-700 text-base text-foreground">Academic Dashboard</h1>
              <p className="text-xs text-muted">Updated March 11, 2026 · 11:50 AM IST</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-background transition-colors">
              <Icon name="BellIcon" size={20} className="text-muted" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <button className="hidden sm:flex p-2 rounded-xl hover:bg-background transition-colors">
              <Icon name="MagnifyingGlassIcon" size={20} className="text-muted" />
            </button>
            <img
              src="https://images.unsplash.com/photo-1583264277135-6f46aa408484"
              alt="Arjun Mehta profile picture"
              className="w-9 h-9 rounded-full object-cover border-2 border-border-subtle cursor-pointer" />
            
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 p-5 overflow-auto">

          {/* Welcome banner */}
          <div
            className="rounded-2xl p-5 mb-5 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 60%, #0E7490 100%)' }}>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Good morning</p>
                <h2 className="font-heading font-800 text-xl text-white">
                  You're 3 skills away from 85% placement probability, Arjun.
                </h2>
                <p className="text-white/60 text-sm mt-1">Placement season starts in <span className="text-accent font-semibold">7 days</span> · 3 drives match your profile</p>
              </div>
              <Link
                href="/homepage"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 text-white text-sm font-semibold border border-white/20 hover:bg-white/25 transition-all">
                
                View Roadmap
                <Icon name="ArrowRightIcon" size={15} />
              </Link>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {[
            { label: 'Placement Score', val: '78%', change: '+6% this sem', icon: 'SparklesIcon', color: 'text-secondary', bg: 'bg-secondary/8', trend: 'up' },
            { label: 'CGPA', val: '8.6', change: '+0.4 this sem', icon: 'AcademicCapIcon', color: 'text-accent', bg: 'bg-accent/8', trend: 'up' },
            { label: 'Aptitude Score', val: '91%', change: '+12% this month', icon: 'BoltIcon', color: 'text-violet-600', bg: 'bg-violet-500/8', trend: 'up' },
            { label: 'Skill Gaps', val: '2', change: '3 resolved', icon: 'PuzzlePieceIcon', color: 'text-emerald-600', bg: 'bg-emerald-500/8', trend: 'down' }].
            map((kpi) =>
            <div key={kpi.label} className="glass rounded-2xl p-5 glow-border card-hover">
                <div className={`w-10 h-10 rounded-xl ${kpi.bg} flex items-center justify-center mb-3`}>
                  <Icon name={kpi.icon as any} size={20} className={kpi.color} />
                </div>
                <div className="text-2xl font-heading font-800 text-foreground">{kpi.val}</div>
                <div className="text-xs text-muted mt-0.5">{kpi.label}</div>
                <div className={`flex items-center gap-1 mt-2 text-xs font-semibold ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-blue-600'}`}>
                  <Icon name={kpi.trend === 'up' ? 'ArrowUpIcon' : 'ArrowDownIcon'} size={11} />
                  {kpi.change}
                </div>
              </div>
            )}
          </div>

          {/* Middle row: Gauge + CGPA Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">

            {/* Placement Gauge */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">Placement Probability</h3>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-100">
                  High Chance
                </span>
              </div>
              <div className="flex justify-center mb-5">
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <defs>
                    <linearGradient id="dashGaugeFill" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4338CA" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <circle cx="80" cy="80" r="64" fill="none" stroke="rgba(67,56,202,0.08)" strokeWidth="14" />
                  <circle
                    cx="80" cy="80" r="64"
                    fill="none"
                    stroke="url(#dashGaugeFill)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray="402"
                    strokeDashoffset={gaugeOffset}
                    transform="rotate(-90 80 80)"
                    style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)' }} />
                  
                  <text x="80" y="74" textAnchor="middle" fontSize="30" fontWeight="800" fill="#1E1B4B" fontFamily="Manrope">78%</text>
                  <text x="80" y="94" textAnchor="middle" fontSize="12" fill="#64748B">Probability</text>
                </svg>
              </div>
              <div className="space-y-3">
                {[
                { label: 'Tier 1 (TCS, Infosys)', val: 78, display: '78%', color: 'from-secondary to-secondary/80' },
                { label: 'Tier 2 (Wipro, Cognizant)', val: 91, display: '91%', color: 'from-accent to-accent/80' },
                { label: 'FAANG (stretch goal)', val: 34, display: '34%', color: 'from-violet-500 to-violet-400' }].
                map((item) =>
                <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted">{item.label}</span>
                      <span className="font-semibold text-foreground">{item.display}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-primary/8 overflow-hidden">
                      <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.val}%` }} />
                    
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CGPA Trend Chart */}
            <div className="glass rounded-2xl p-6 glow-border lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">Academic Performance Trend</h3>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 rounded bg-secondary inline-block" />
                    Your CGPA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 rounded bg-muted/40 inline-block" style={{ borderTop: '2px dashed #94a3b8' }} />
                    Batch Avg
                  </span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={cgpaData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="cgpaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4338CA" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#4338CA" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="avgFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.08} />
                      <stop offset="100%" stopColor="#94a3b8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(67,56,202,0.06)" />
                  <XAxis dataKey="sem" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <YAxis domain={[6, 10]} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="cgpa"
                    stroke="#4338CA"
                    strokeWidth={2.5}
                    fill="url(#cgpaFill)"
                    name="Your CGPA"
                    dot={{ r: 4, fill: '#4338CA', strokeWidth: 2, stroke: 'white' }} />
                  
                  <Area
                    type="monotone"
                    dataKey="batchAvg"
                    stroke="#94a3b8"
                    strokeWidth={1.5}
                    fill="url(#avgFill)"
                    strokeDasharray="5 5"
                    name="Batch Avg"
                    dot={false} />
                  
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom row: Skill Radar + Recommendations + Upcoming Drives */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">

            {/* Skill Radar */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading font-700 text-sm text-foreground">Skill Profile</h3>
                <span className="px-2 py-0.5 rounded-lg bg-amber-50 text-amber-600 text-xs font-semibold border border-amber-100">
                  2 gaps
                </span>
              </div>
              <p className="text-xs text-muted mb-3">System Design and ML/AI need attention</p>
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart data={radarData}>
                  <defs>
                    <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#4338CA" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity={0.15} />
                    </linearGradient>
                  </defs>
                  <PolarGrid stroke="rgba(67,56,202,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#64748B' }} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#4338CA"
                    strokeWidth={2}
                    fill="url(#radarFill)"
                    dot={{ r: 3, fill: '#4338CA' }} />
                  
                </RadarChart>
              </ResponsiveContainer>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {[
                { skill: 'System Design', val: 55, status: 'gap' },
                { skill: 'ML/AI', val: 68, status: 'gap' }].
                map((s) =>
                <div key={s.skill} className="bg-red-50 rounded-xl p-2.5 border border-red-100">
                    <div className="text-xs font-semibold text-red-600">{s.skill}</div>
                    <div className="text-xs text-red-400 mt-0.5">{s.val}% · Needs work</div>
                  </div>
                )}
              </div>
            </div>

            {/* Recommendations */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">Recommended Actions</h3>
                <span className="text-xs text-secondary font-semibold cursor-pointer hover:underline">View all</span>
              </div>
              <div className="space-y-3">
                {recommendations.map((rec) =>
                <div
                  key={rec.id}
                  className={`flex items-start gap-3 p-3 rounded-xl border ${rec.border} ${rec.bg} group cursor-pointer hover:shadow-sm transition-all`}>
                  
                    <div className={`w-8 h-8 rounded-lg ${rec.bg} border ${rec.border} flex items-center justify-center flex-shrink-0`}>
                      <Icon name={rec.icon as any} size={15} className={rec.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground leading-snug">{rec.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-muted">{rec.type}</span>
                        <span className={`text-[10px] font-bold ${rec.color}`}>{rec.impact}</span>
                      </div>
                    </div>
                    <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-lg flex-shrink-0 ${
                    rec.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`
                    }>
                    
                      {rec.priority}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Upcoming Placement Drives */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">Upcoming Drives</h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  3 matches
                </span>
              </div>
              <div className="space-y-3">
                {upcomingDrives.map((drive) =>
                <div
                  key={drive.company}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-background border border-border-subtle hover:border-secondary/30 hover:bg-secondary/3 transition-all cursor-pointer group">
                  
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 font-heading font-800 text-xs text-primary">
                      {drive.company.slice(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-700 text-sm text-foreground">{drive.company}</div>
                      <div className="text-xs text-muted truncate">{drive.role}</div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Icon name="CalendarIcon" size={11} className="text-muted" />
                        <span className="text-[10px] text-muted">{drive.date}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className={`text-sm font-heading font-800 ${drive.match >= 85 ? 'text-emerald-600' : 'text-secondary'}`}>
                        {drive.match}%
                      </div>
                      <div className="text-[10px] text-muted">match</div>
                    </div>
                  </div>
                )}
              </div>
              <button className="w-full mt-4 py-2.5 rounded-xl border border-secondary/20 text-secondary text-xs font-semibold hover:bg-secondary/5 transition-colors flex items-center justify-center gap-1.5">
                <Icon name="CalendarDaysIcon" size={14} />
                View All Placement Drives
              </button>
            </div>
          </div>

          {/* Aptitude trend + activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Aptitude Progress */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">Aptitude Score Trend</h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <Icon name="ArrowUpIcon" size={11} />
                  +29pts this month
                </span>
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <AreaChart data={aptitudeData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="aptFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(6,182,212,0.08)" />
                  <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <YAxis domain={[50, 100]} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#06B6D4"
                    strokeWidth={2.5}
                    fill="url(#aptFill)"
                    name="Aptitude Score"
                    dot={{ r: 4, fill: '#06B6D4', strokeWidth: 2, stroke: 'white' }} />
                  
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activity */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">Recent Activity</h3>
                <span className="text-xs text-secondary font-semibold cursor-pointer hover:underline">View all</span>
              </div>
              <div className="space-y-4">
                {[
                { icon: 'CheckCircleIcon', color: 'text-emerald-500 bg-emerald-50', text: 'Completed DBMS practice test — Score: 74%', time: '2 hours ago' },
                { icon: 'AcademicCapIcon', color: 'text-secondary bg-secondary/8', text: 'S6 grades uploaded — CGPA updated to 8.6', time: 'Yesterday' },
                { icon: 'TrophyIcon', color: 'text-amber-500 bg-amber-50', text: 'Aptitude milestone: 90%+ for first time', time: '2 days ago' },
                { icon: 'DocumentArrowUpIcon', color: 'text-accent bg-accent/8', text: 'Resume uploaded and verified by AI', time: '3 days ago' },
                { icon: 'BellAlertIcon', color: 'text-violet-600 bg-violet-50', text: 'TCS NQT registration deadline in 7 days', time: '4 days ago' }].
                map((item, i) =>
                <div key={i} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon name={item.icon as any} size={15} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground leading-snug">{item.text}</p>
                      <p className="text-[10px] text-muted mt-0.5">{item.time}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>);

}

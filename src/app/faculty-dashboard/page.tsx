'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const batchPerformanceData = [
  { batch: '2022', placed: 78, avg: 72 },
  { batch: '2023', placed: 82, avg: 75 },
  { batch: '2024', placed: 85, avg: 78 },
  { batch: '2025', placed: 88, avg: 80 },
];

const cgpaDistribution = [
  { range: '6.0-6.5', count: 12 },
  { range: '6.5-7.0', count: 28 },
  { range: '7.0-7.5', count: 45 },
  { range: '7.5-8.0', count: 38 },
  { range: '8.0-8.5', count: 22 },
  { range: '8.5-9.0', count: 15 },
  { range: '9.0+', count: 8 },
];

const skillGapData = [
  { skill: 'DSA', gap: 32 },
  { skill: 'System Design', gap: 58 },
  { skill: 'ML/AI', gap: 45 },
  { skill: 'Cloud', gap: 62 },
  { skill: 'Communication', gap: 28 },
];

const atRiskStudents = [
  { name: 'Rahul Sharma', cgpa: 6.2, score: 42, dept: 'CSE', risk: 'High' },
  { name: 'Priya Nair', cgpa: 6.8, score: 51, dept: 'IT', risk: 'Medium' },
  { name: 'Karan Patel', cgpa: 6.5, score: 47, dept: 'CSE', risk: 'High' },
  { name: 'Sneha Reddy', cgpa: 7.0, score: 55, dept: 'ECE', risk: 'Medium' },
  { name: 'Amit Joshi', cgpa: 6.3, score: 44, dept: 'CSE', risk: 'High' },
];

const navItems = [
  { icon: 'HomeIcon', label: 'Overview', id: 'overview' },
  { icon: 'UsersIcon', label: 'My Students', id: 'students' },
  { icon: 'ChartBarIcon', label: 'Batch Analytics', id: 'analytics' },
  { icon: 'PuzzlePieceIcon', label: 'Skill Gaps', id: 'skills' },
  { icon: 'DocumentChartBarIcon', label: 'Reports', id: 'reports' },
  { icon: 'BellIcon', label: 'Alerts', id: 'alerts' },
];

const pieColors = ['#4338CA', '#06B6D4', '#8B5CF6', '#10B981', '#F59E0B'];

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

export default function FacultyDashboardPage() {
  const [activeNav, setActiveNav] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex font-body">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-surface border-r border-border-subtle flex flex-col transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-border-subtle">
          <Link href="/homepage" className="flex items-center gap-2.5">
            <AppLogo size={32} />
            <span className="font-heading font-800 text-base text-primary">AcadPredict</span>
          </Link>
        </div>

        {/* Faculty card */}
        <div className="p-4 mx-3 mt-4 rounded-2xl bg-gradient-to-br from-violet-500/10 to-accent/5 border border-border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-secondary flex items-center justify-center flex-shrink-0">
              <Icon name="UserIcon" size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-heading font-700 text-sm text-foreground truncate">Dr. Anita Sharma</div>
              <div className="text-xs text-muted truncate">Faculty · CSE Dept.</div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-violet-100 text-violet-700 text-xs font-semibold">Faculty</span>
            <span className="text-xs text-muted">168 students</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 mt-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
              className={`sidebar-link w-full text-left ${activeNav === item.id ? 'active' : ''}`}
            >
              <Icon name={item.icon as any} size={18} />
              {item.label}
            </button>
          ))}
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
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur-md border-b border-border-subtle px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-background transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Icon name="Bars3Icon" size={20} className="text-muted" />
            </button>
            <div>
              <h1 className="font-heading font-700 text-base text-foreground">Faculty Dashboard</h1>
              <p className="text-xs text-muted">Updated April 2, 2026 · Academic Year 2025–26</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-background transition-colors">
              <Icon name="BellIcon" size={20} className="text-muted" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-secondary flex items-center justify-center border-2 border-border-subtle cursor-pointer">
              <Icon name="UserIcon" size={16} className="text-white" />
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 p-5 overflow-auto">

          {/* Welcome banner */}
          <div
            className="rounded-2xl p-5 mb-5 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2D1B69 0%, #4C1D95 60%, #1E3A5F 100%)' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-400/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Good morning, Dr. Sharma</p>
                <h2 className="font-heading font-800 text-xl text-white">
                  5 students need your attention today.
                </h2>
                <p className="text-white/60 text-sm mt-1">
                  Batch avg. placement score: <span className="text-violet-300 font-semibold">74%</span> · Placement season in <span className="text-accent font-semibold">7 days</span>
                </p>
              </div>
              <button className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 text-white text-sm font-semibold border border-white/20 hover:bg-white/25 transition-all">
                View At-Risk Students
                <Icon name="ArrowRightIcon" size={15} />
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {[
              { label: 'Total Students', val: '168', change: '+12 this sem', icon: 'UsersIcon', color: 'text-secondary', bg: 'bg-secondary/8', trend: 'up' },
              { label: 'Avg. Placement Score', val: '74%', change: '+4% vs last batch', icon: 'ChartBarIcon', color: 'text-violet-600', bg: 'bg-violet-500/8', trend: 'up' },
              { label: 'At-Risk Students', val: '5', change: '3 critical', icon: 'ExclamationTriangleIcon', color: 'text-red-500', bg: 'bg-red-500/8', trend: 'down' },
              { label: 'Avg. CGPA', val: '7.8', change: '+0.2 this sem', icon: 'AcademicCapIcon', color: 'text-emerald-600', bg: 'bg-emerald-500/8', trend: 'up' },
            ].map((kpi) => (
              <div key={kpi.label} className="glass rounded-2xl p-5 glow-border card-hover">
                <div className={`w-10 h-10 rounded-xl ${kpi.bg} flex items-center justify-center mb-3`}>
                  <Icon name={kpi.icon as any} size={20} className={kpi.color} />
                </div>
                <div className="text-2xl font-heading font-800 text-foreground">{kpi.val}</div>
                <div className="text-xs text-muted mt-0.5">{kpi.label}</div>
                <div className={`flex items-center gap-1 mt-2 text-xs font-semibold ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
                  <Icon name={kpi.trend === 'up' ? 'ArrowUpIcon' : 'ArrowDownIcon'} size={11} />
                  {kpi.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {/* Batch Placement Trend */}
            <div className="glass rounded-2xl p-6 glow-border">
              <h3 className="font-heading font-700 text-sm text-foreground mb-4">Batch Placement Rate (%)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={batchPerformanceData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(67,56,202,0.08)" />
                  <XAxis dataKey="batch" tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} domain={[60, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="placed" name="Placed %" fill="#4338CA" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="avg" name="Dept Avg %" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* CGPA Distribution */}
            <div className="glass rounded-2xl p-6 glow-border">
              <h3 className="font-heading font-700 text-sm text-foreground mb-4">CGPA Distribution</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={cgpaDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(67,56,202,0.08)" />
                  <XAxis dataKey="range" tick={{ fontSize: 10, fill: '#64748B' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" name="Students" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom row: Skill Gaps + At-Risk Students */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Skill Gap Analysis */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">Top Skill Gaps in Batch</h3>
                <span className="text-xs text-muted">% students lacking</span>
              </div>
              <div className="space-y-3">
                {skillGapData.map((item) => (
                  <div key={item.skill}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-foreground">{item.skill}</span>
                      <span className="text-xs font-semibold text-red-500">{item.gap}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-red-50 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-red-400 to-red-500"
                        style={{ width: `${item.gap}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* At-Risk Students */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">At-Risk Students</h3>
                <button className="text-xs text-secondary font-semibold hover:underline">View All</button>
              </div>
              <div className="space-y-3">
                {atRiskStudents.map((student) => (
                  <div key={student.name} className="flex items-center justify-between p-3 rounded-xl bg-background border border-border-subtle">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="UserIcon" size={14} className="text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">{student.name}</div>
                        <div className="text-xs text-muted">{student.dept} · CGPA {student.cgpa}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-foreground">{student.score}%</span>
                      <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
                        student.risk === 'High' ?'bg-red-50 text-red-600 border border-red-100' :'bg-amber-50 text-amber-600 border border-amber-100'
                      }`}>
                        {student.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

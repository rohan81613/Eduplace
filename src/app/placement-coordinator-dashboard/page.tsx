'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const placementTrendData = [
  { month: 'Oct', offers: 12, drives: 3 },
  { month: 'Nov', offers: 28, drives: 7 },
  { month: 'Dec', offers: 45, drives: 11 },
  { month: 'Jan', offers: 62, drives: 15 },
  { month: 'Feb', offers: 88, drives: 20 },
  { month: 'Mar', offers: 114, drives: 26 },
];

const sectorData = [
  { name: 'IT Services', value: 38 },
  { name: 'Product', value: 24 },
  { name: 'Consulting', value: 18 },
  { name: 'Finance', value: 12 },
  { name: 'Others', value: 8 },
];

const upcomingDrives = [
  { company: 'Google', date: 'Apr 8, 2026', roles: 'SWE, ML Engineer', eligible: 142, status: 'Confirmed' },
  { company: 'Deloitte', date: 'Apr 12, 2026', roles: 'Analyst, Consultant', eligible: 210, status: 'Confirmed' },
  { company: 'Amazon', date: 'Apr 18, 2026', roles: 'SDE-1, Data Engineer', eligible: 138, status: 'Pending' },
  { company: 'Accenture', date: 'Apr 22, 2026', roles: 'Associate, Dev', eligible: 265, status: 'Confirmed' },
  { company: 'KPMG', date: 'Apr 28, 2026', roles: 'Analyst, Auditor', eligible: 180, status: 'Pending' },
];

const topCompanies = [
  { name: 'TCS', offers: 42, ctc: '3.6 LPA', logo: 'BuildingOfficeIcon' },
  { name: 'Infosys', offers: 38, ctc: '3.8 LPA', logo: 'BuildingOffice2Icon' },
  { name: 'Wipro', offers: 31, ctc: '3.5 LPA', logo: 'BuildingStorefrontIcon' },
  { name: 'Cognizant', offers: 27, ctc: '4.0 LPA', logo: 'BuildingLibraryIcon' },
];

const navItems = [
  { icon: 'HomeIcon', label: 'Overview', id: 'overview' },
  { icon: 'BuildingOfficeIcon', label: 'Placement Drives', id: 'drives' },
  { icon: 'UsersIcon', label: 'Student Pool', id: 'students' },
  { icon: 'ChartBarIcon', label: 'Analytics', id: 'analytics' },
  { icon: 'BriefcaseIcon', label: 'Companies', id: 'companies' },
  { icon: 'DocumentChartBarIcon', label: 'Reports', id: 'reports' },
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

export default function PlacementCoordinatorDashboardPage() {
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

        {/* Coordinator card */}
        <div className="p-4 mx-3 mt-4 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/5 border border-border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0">
              <Icon name="BriefcaseIcon" size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-heading font-700 text-sm text-foreground truncate">Rajesh Kumar</div>
              <div className="text-xs text-muted truncate">Placement Coordinator</div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-cyan-100 text-cyan-700 text-xs font-semibold">Coordinator</span>
            <span className="text-xs text-muted">26 drives active</span>
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
              <h1 className="font-heading font-700 text-base text-foreground">Placement Coordinator Dashboard</h1>
              <p className="text-xs text-muted">Updated April 2, 2026 · Placement Season 2025–26</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-background transition-colors">
              <Icon name="BellIcon" size={20} className="text-muted" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-white text-xs font-semibold hover:bg-secondary/90 transition-colors">
              <Icon name="PlusIcon" size={14} />
              Add Drive
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center border-2 border-border-subtle cursor-pointer">
              <Icon name="BriefcaseIcon" size={16} className="text-white" />
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 p-5 overflow-auto">

          {/* Welcome banner */}
          <div
            className="rounded-2xl p-5 mb-5 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0E4F6B 0%, #0E7490 60%, #1E3A5F 100%)' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Good morning, Rajesh</p>
                <h2 className="font-heading font-800 text-xl text-white">
                  114 offers secured · 26 drives this season.
                </h2>
                <p className="text-white/60 text-sm mt-1">
                  Next drive: <span className="text-cyan-300 font-semibold">Google — Apr 8</span> · <span className="text-accent font-semibold">142 students eligible</span>
                </p>
              </div>
              <button className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 text-white text-sm font-semibold border border-white/20 hover:bg-white/25 transition-all">
                Manage Drives
                <Icon name="ArrowRightIcon" size={15} />
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {[
              { label: 'Total Offers', val: '114', change: '+22 this month', icon: 'BriefcaseIcon', color: 'text-secondary', bg: 'bg-secondary/8', trend: 'up' },
              { label: 'Placement Rate', val: '68%', change: '+8% vs last year', icon: 'ChartBarIcon', color: 'text-accent', bg: 'bg-accent/8', trend: 'up' },
              { label: 'Active Drives', val: '26', change: '5 this week', icon: 'BuildingOfficeIcon', color: 'text-violet-600', bg: 'bg-violet-500/8', trend: 'up' },
              { label: 'Avg. CTC', val: '4.2L', change: '+0.6L vs last year', icon: 'CurrencyRupeeIcon', color: 'text-emerald-600', bg: 'bg-emerald-500/8', trend: 'up' },
            ].map((kpi) => (
              <div key={kpi.label} className="glass rounded-2xl p-5 glow-border card-hover">
                <div className={`w-10 h-10 rounded-xl ${kpi.bg} flex items-center justify-center mb-3`}>
                  <Icon name={kpi.icon as any} size={20} className={kpi.color} />
                </div>
                <div className="text-2xl font-heading font-800 text-foreground">{kpi.val}</div>
                <div className="text-xs text-muted mt-0.5">{kpi.label}</div>
                <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-emerald-600">
                  <Icon name="ArrowUpIcon" size={11} />
                  {kpi.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            {/* Placement Trend */}
            <div className="glass rounded-2xl p-6 glow-border lg:col-span-2">
              <h3 className="font-heading font-700 text-sm text-foreground mb-4">Offers & Drives Over Season</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={placementTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(67,56,202,0.08)" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="offers" name="Offers" stroke="#4338CA" strokeWidth={2.5} dot={{ r: 4, fill: '#4338CA' }} />
                  <Line type="monotone" dataKey="drives" name="Drives" stroke="#06B6D4" strokeWidth={2.5} dot={{ r: 4, fill: '#06B6D4' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Sector Breakdown */}
            <div className="glass rounded-2xl p-6 glow-border">
              <h3 className="font-heading font-700 text-sm text-foreground mb-4">Offers by Sector</h3>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {sectorData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5 mt-2">
                {sectorData.map((item, i) => (
                  <div key={item.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pieColors[i] }} />
                      <span className="text-muted">{item.name}</span>
                    </div>
                    <span className="font-semibold text-foreground">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: Upcoming Drives + Top Companies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Upcoming Drives */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">Upcoming Placement Drives</h3>
                <button className="text-xs text-secondary font-semibold hover:underline">View All</button>
              </div>
              <div className="space-y-3">
                {upcomingDrives.map((drive) => (
                  <div key={drive.company} className="flex items-center justify-between p-3 rounded-xl bg-background border border-border-subtle">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-secondary/15 to-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="BuildingOfficeIcon" size={14} className="text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">{drive.company}</div>
                        <div className="text-xs text-muted">{drive.date} · {drive.eligible} eligible</div>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
                      drive.status === 'Confirmed' ?'bg-emerald-50 text-emerald-600 border border-emerald-100' :'bg-amber-50 text-amber-600 border border-amber-100'
                    }`}>
                      {drive.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Recruiting Companies */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-700 text-sm text-foreground">Top Recruiting Companies</h3>
                <button className="text-xs text-secondary font-semibold hover:underline">Manage</button>
              </div>
              <div className="space-y-3">
                {topCompanies.map((company, i) => (
                  <div key={company.name} className="flex items-center gap-4 p-3 rounded-xl bg-background border border-border-subtle">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-secondary/15 to-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={company.logo as any} size={14} className="text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-foreground">{company.name}</span>
                        <span className="text-xs text-muted">{company.ctc}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-secondary to-accent"
                          style={{ width: `${(company.offers / 42) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-heading font-700 text-secondary flex-shrink-0">{company.offers}</span>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-4 pt-4 border-t border-border-subtle">
                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Quick Actions</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Schedule Drive', icon: 'CalendarIcon' },
                    { label: 'Export Report', icon: 'ArrowDownTrayIcon' },
                    { label: 'Notify Students', icon: 'BellIcon' },
                    { label: 'Add Company', icon: 'PlusCircleIcon' },
                  ].map((action) => (
                    <button
                      key={action.label}
                      className="flex items-center gap-2 p-2.5 rounded-xl border border-border-subtle bg-background text-xs font-medium text-muted hover:text-secondary hover:border-secondary/30 hover:bg-secondary/5 transition-all"
                    >
                      <Icon name={action.icon as any} size={13} className="text-secondary" />
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

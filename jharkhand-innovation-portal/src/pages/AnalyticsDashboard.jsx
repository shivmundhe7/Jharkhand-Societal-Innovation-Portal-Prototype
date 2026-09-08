import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Target, Users, Zap, CheckCircle } from 'lucide-react';
import './AnalyticsDashboard.css';

const data = [
  { name: 'Jan', problems: 40, solved: 24 },
  { name: 'Feb', problems: 30, solved: 13 },
  { name: 'Mar', problems: 20, solved: 38 },
  { name: 'Apr', problems: 27, solved: 39 },
  { name: 'May', problems: 18, solved: 48 },
  { name: 'Jun', problems: 23, solved: 38 },
  { name: 'Jul', problems: 34, solved: 43 },
];

const categoryData = [
  { name: 'Agriculture', value: 400 },
  { name: 'Education', value: 300 },
  { name: 'Healthcare', value: 300 },
  { name: 'Infrastructure', value: 200 },
];

const AnalyticsDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="metrics-grid">
        <div className="metric-card glass">
          <div className="metric-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)' }}>
            <Target size={24} />
          </div>
          <div className="metric-content">
            <p className="metric-label">Total Problems Submitted</p>
            <h3 className="metric-value">1,248</h3>
            <p className="metric-trend positive">+12% from last month</p>
          </div>
        </div>
        
        <div className="metric-card glass">
          <div className="metric-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)' }}>
            <CheckCircle size={24} />
          </div>
          <div className="metric-content">
            <p className="metric-label">Solutions Implemented</p>
            <h3 className="metric-value">342</h3>
            <p className="metric-trend positive">+5% from last month</p>
          </div>
        </div>

        <div className="metric-card glass">
          <div className="metric-icon" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
            <Users size={24} />
          </div>
          <div className="metric-content">
            <p className="metric-label">Active HEI Teams</p>
            <h3 className="metric-value">84</h3>
            <p className="metric-trend neutral">Same as last month</p>
          </div>
        </div>

        <div className="metric-card glass">
          <div className="metric-icon" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
            <Zap size={24} />
          </div>
          <div className="metric-content">
            <p className="metric-label">Industry Sponsors</p>
            <h3 className="metric-value">28</h3>
            <p className="metric-trend positive">+2 new this week</p>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card glass">
          <h3 className="chart-title">Innovation Trends</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorProblems" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSolved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--secondary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--secondary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                <Area type="monotone" dataKey="problems" stroke="var(--accent)" fillOpacity={1} fill="url(#colorProblems)" />
                <Area type="monotone" dataKey="solved" stroke="var(--secondary)" fillOpacity={1} fill="url(#colorSolved)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card glass">
          <h3 className="chart-title">Problems by Category</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                <XAxis type="number" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{fill: 'rgba(0,0,0,0.05)'}} contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                <Bar dataKey="value" fill="var(--accent)" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

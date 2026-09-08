import React, { useState } from 'react';
import { ShieldAlert, Check, X, Search, Sparkles } from 'lucide-react';
import './GovPortal.css';

const GovPortal = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const problems = [
    { id: 'JH-8921', title: 'Groundwater Arsenic Contamination', location: 'Sahebganj', category: 'Healthcare', aiScore: 92, status: 'pending', date: 'Today, 09:30 AM' },
    { id: 'JH-8922', title: 'Arsenic in Drinking Water', location: 'Sahebganj', category: 'Healthcare', aiScore: 89, status: 'duplicate', duplicateOf: 'JH-8921', date: 'Today, 10:15 AM' },
    { id: 'JH-8919', title: 'Inadequate Tribal School Facilities', location: 'Gumla', category: 'Education', aiScore: 78, status: 'pending', date: 'Yesterday' },
    { id: 'JH-8910', title: 'Lack of Cold Storage', location: 'Hazaribagh', category: 'Agriculture', aiScore: 85, status: 'approved', date: 'Oct 12' },
  ];

  return (
    <div className="gov-portal">
      <div className="gov-header">
        <div className="header-text">
          <h2 className="section-title">Government Validation Board</h2>
          <p className="section-subtitle">Review AI-classified societal problems and validate them for HEI matching.</p>
        </div>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search ID or Keyword..." className="input" />
        </div>
      </div>

      <div className="tabs">
        <button className={`tab ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => setActiveTab('pending')}>
          Pending Validation <span className="count-badge">2</span>
        </button>
        <button className={`tab ${activeTab === 'duplicates' ? 'active' : ''}`} onClick={() => setActiveTab('duplicates')}>
          AI Flagged Duplicates <span className="count-badge bg-warning">1</span>
        </button>
        <button className={`tab ${activeTab === 'approved' ? 'active' : ''}`} onClick={() => setActiveTab('approved')}>
          Validated
        </button>
      </div>

      <div className="problems-grid animate-fade-in">
        {problems.filter(p => {
          if (activeTab === 'pending') return p.status === 'pending';
          if (activeTab === 'duplicates') return p.status === 'duplicate';
          return p.status === 'approved';
        }).map(problem => (
          <div key={problem.id} className="problem-card glass">
            <div className="card-header">
              <span className="problem-id">#{problem.id}</span>
              <span className="problem-date">{problem.date}</span>
            </div>
            <h3 className="problem-title">{problem.title}</h3>
            
            <div className="problem-meta">
              <span className="meta-tag">{problem.category}</span>
              <span className="meta-tag">{problem.location}</span>
            </div>

            <div className="ai-insight">
              <Sparkles size={16} className="ai-icon" />
              <div className="ai-text">
                <strong>AI Classification Score: {problem.aiScore}%</strong>
                <p>High confidence. Aligns with SDG Goal 3 (Good Health).</p>
                {problem.status === 'duplicate' && (
                  <p className="duplicate-warning"><ShieldAlert size={14}/> 95% similarity with {problem.duplicateOf}</p>
                )}
              </div>
            </div>

            {activeTab === 'pending' && (
              <div className="action-buttons">
                <button className="btn btn-primary flex-1"><Check size={16}/> Validate & Forward</button>
                <button className="btn btn-outline flex-1"><X size={16}/> Reject</button>
              </div>
            )}
            {activeTab === 'duplicates' && (
              <div className="action-buttons">
                <button className="btn btn-secondary flex-1">Merge with {problem.duplicateOf}</button>
              </div>
            )}
            {activeTab === 'approved' && (
              <div className="status-approved">
                <Check size={16}/> Forwarded to HEIs
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovPortal;

import React, { useState } from 'react';
import { Send, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import './CitizenPortal.css';

const CitizenPortal = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Mock timeout for resetting
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ title: '', category: '', location: '', description: '' });
    }, 5000);
  };

  const statuses = [
    { id: '1', title: 'Water Contamination in East Singhbhum', status: 'gov-validated', date: 'Oct 12, 2026' },
    { id: '2', title: 'Lack of Cold Storage for Farmers', status: 'ai-classified', date: 'Oct 14, 2026' },
    { id: '3', title: 'Traffic Congestion in Ranchi', status: 'submitted', date: 'Oct 15, 2026' },
    { id: '4', title: 'Rural School Digital Divide', status: 'hei-matched', date: 'Sep 28, 2026' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'submitted': return <span className="badge badge-neutral"><Clock size={12} className="mr-1"/> Submitted</span>;
      case 'ai-classified': return <span className="badge badge-info"><AlertCircle size={12} className="mr-1"/> AI Classified</span>;
      case 'gov-validated': return <span className="badge badge-warning"><CheckCircle2 size={12} className="mr-1"/> Gov Validated</span>;
      case 'hei-matched': return <span className="badge badge-success"><CheckCircle2 size={12} className="mr-1"/> HEI Matched</span>;
      default: return null;
    }
  };

  const getTimelineProgress = (status) => {
    const states = ['submitted', 'ai-classified', 'gov-validated', 'hei-matched'];
    const index = states.indexOf(status);
    return (index + 1) * 25;
  };

  return (
    <div className="portal-container">
      <div className="grid-2">
        <div className="card glass">
          <h2 className="section-title">Report a Societal Problem</h2>
          <p className="section-subtitle">Your submission will be AI-analyzed and forwarded to appropriate authorities and institutions.</p>
          
          {submitted ? (
            <div className="success-message animate-fade-in">
              <CheckCircle2 size={48} className="text-secondary mb-4" />
              <h3>Problem Submitted Successfully!</h3>
              <p>Your tracking ID is <strong>#JH-8924</strong></p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="problem-form animate-fade-in">
              <div className="input-group">
                <label>Problem Title</label>
                <input 
                  type="text" 
                  className="input" 
                  placeholder="E.g., Contaminated groundwater in village"
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  required 
                />
              </div>
              <div className="grid-2-sm">
                <div className="input-group">
                  <label>Category</label>
                  <select className="input" required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                    <option value="">Select Category</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="environment">Environment</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Location (District/Block)</label>
                  <input type="text" className="input" placeholder="E.g., Ranchi" required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
                </div>
              </div>
              <div className="input-group">
                <label>Detailed Description</label>
                <textarea 
                  className="textarea" 
                  rows="4" 
                  placeholder="Describe the problem, affected population, and impact..."
                  required
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-4">
                <Send size={18} /> Submit Problem
              </button>
            </form>
          )}
        </div>

        <div className="card glass">
          <h2 className="section-title">My Submissions Tracker</h2>
          <div className="tracking-list mt-6">
            {statuses.map(item => (
              <div key={item.id} className="tracking-item">
                <div className="tracking-header">
                  <h4 className="tracking-title">{item.title}</h4>
                  {getStatusBadge(item.status)}
                </div>
                <p className="tracking-date">Submitted on: {item.date}</p>
                
                <div className="timeline-bar mt-4">
                  <div className="timeline-progress" style={{ width: `${getTimelineProgress(item.status)}%` }}></div>
                  <div className="timeline-steps">
                    <div className={`step ${getTimelineProgress(item.status) >= 25 ? 'active' : ''}`}></div>
                    <div className={`step ${getTimelineProgress(item.status) >= 50 ? 'active' : ''}`}></div>
                    <div className={`step ${getTimelineProgress(item.status) >= 75 ? 'active' : ''}`}></div>
                    <div className={`step ${getTimelineProgress(item.status) >= 100 ? 'active' : ''}`}></div>
                  </div>
                </div>
                <div className="timeline-labels">
                  <span>Submitted</span>
                  <span>AI Review</span>
                  <span>Gov Validate</span>
                  <span>HEI Match</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenPortal;

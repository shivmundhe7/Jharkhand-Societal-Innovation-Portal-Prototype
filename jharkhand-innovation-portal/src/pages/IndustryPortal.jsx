import React from 'react';
import { Briefcase, TrendingUp, Handshake, Target } from 'lucide-react';
import './IndustryPortal.css';

const IndustryPortal = () => {
  const collaborations = [
    { id: 'C-01', title: 'Smart Irrigation System', hei: 'BIT Mesra', progress: 65, fundRequired: '₹5 Lakhs', status: 'Seeking Sponsor' },
    { id: 'C-02', title: 'AI for Local Handlooms', hei: 'NIFT Ranchi', progress: 30, fundRequired: '₹2 Lakhs', status: 'Sponsored' },
    { id: 'C-03', title: 'Solar Powered Cold Storage', hei: 'NIT Jamshedpur', progress: 85, fundRequired: '₹10 Lakhs', status: 'Seeking Sponsor' },
  ];

  return (
    <div className="industry-portal">
      <div className="portal-header">
        <h2 className="section-title">Industry Collaboration & Sponsorship</h2>
        <p className="section-subtitle">Partner with HEIs to sponsor innovation and track CSR project impact.</p>
      </div>

      <div className="stats-row mb-6">
        <div className="stat-box glass">
          <Briefcase className="stat-icon text-accent" />
          <div className="stat-info">
            <h4>Active Sponsorships</h4>
            <h2>12 Projects</h2>
          </div>
        </div>
        <div className="stat-box glass">
          <Handshake className="stat-icon text-secondary" />
          <div className="stat-info">
            <h4>Total Funds Disbursed</h4>
            <h2>₹45 Lakhs</h2>
          </div>
        </div>
        <div className="stat-box glass">
          <Target className="stat-icon text-warning" />
          <div className="stat-info">
            <h4>Problems Solved</h4>
            <h2>8 Verified</h2>
          </div>
        </div>
      </div>

      <div className="card glass">
        <div className="card-top flex justify-between align-center mb-4">
          <h3>Opportunities for Sponsorship</h3>
          <button className="btn btn-outline btn-sm">View All</button>
        </div>

        <div className="table-responsive">
          <table className="collab-table">
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Institution</th>
                <th>Progress</th>
                <th>Funding Req.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {collaborations.map(collab => (
                <tr key={collab.id}>
                  <td>
                    <strong>{collab.title}</strong>
                  </td>
                  <td>{collab.hei}</td>
                  <td>
                    <div className="progress-cell">
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: `${collab.progress}%` }}></div>
                      </div>
                      <span className="progress-text">{collab.progress}%</span>
                    </div>
                  </td>
                  <td>{collab.fundRequired}</td>
                  <td>
                    {collab.status === 'Sponsored' ? (
                      <span className="badge badge-success">Sponsored</span>
                    ) : (
                      <button className="btn btn-primary btn-sm">Sponsor Project</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndustryPortal;

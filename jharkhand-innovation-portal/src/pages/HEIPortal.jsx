import React, { useState } from 'react';
import { BookOpen, Users, ArrowRight, ExternalLink } from 'lucide-react';
import './HEIPortal.css';

const HEIPortal = () => {
  const problems = [
    { id: 'JH-8910', title: 'Lack of Cold Storage for Farmers', category: 'Agriculture', location: 'Hazaribagh', matchScore: 94, requiredSkills: ['IoT', 'Renewable Energy', 'Agri-tech'] },
    { id: 'JH-8802', title: 'Mica Mine Dust Mitigation', category: 'Environment', location: 'Koderma', matchScore: 88, requiredSkills: ['Material Science', 'Air Filtration'] },
  ];

  const teams = [
    { id: 'T-101', name: 'AgriTech Innovators (BIT Mesra)', size: 5, activeProject: 'None', status: 'available' },
    { id: 'T-102', name: 'EnviroClean Squad (NIT Jamshedpur)', size: 4, activeProject: 'JH-8750', status: 'busy' },
  ];

  return (
    <div className="hei-portal">
      <div className="portal-header">
        <h2 className="section-title">HEI Matching & Team Assignment</h2>
        <p className="section-subtitle">Discover validated societal problems and assign them to university research teams.</p>
      </div>

      <div className="grid-2">
        <div className="card glass">
          <div className="card-top flex justify-between align-center mb-4">
            <h3><BookOpen size={18} className="inline-icon mr-2 text-accent" /> Recommended Problems</h3>
            <span className="badge badge-info">AI Matched</span>
          </div>
          
          <div className="problem-list">
            {problems.map(prob => (
              <div key={prob.id} className="match-card">
                <div className="match-header">
                  <h4>{prob.title}</h4>
                  <div className="match-score">
                    <span className="score-value">{prob.matchScore}%</span>
                    <span className="score-label">Match</span>
                  </div>
                </div>
                <div className="skills-req mt-2">
                  {prob.requiredSkills.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline w-full text-sm">View Details & Assign <ArrowRight size={14} className="ml-2"/></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card glass">
          <div className="card-top flex justify-between align-center mb-4">
            <h3><Users size={18} className="inline-icon mr-2 text-secondary" /> University Teams</h3>
            <button className="btn btn-primary btn-sm">+ New Team</button>
          </div>

          <div className="team-list">
            {teams.map(team => (
              <div key={team.id} className="team-card">
                <div className="team-info">
                  <h4>{team.name}</h4>
                  <p className="team-meta">{team.size} Members • {team.status === 'available' ? <span className="text-secondary">Available</span> : <span className="text-warning">Busy</span>}</p>
                </div>
                <div className="team-action">
                  {team.status === 'available' ? (
                    <button className="btn btn-secondary btn-sm">Assign Project</button>
                  ) : (
                    <button className="btn btn-outline btn-sm">View {team.activeProject} <ExternalLink size={12} className="ml-1"/></button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HEIPortal;

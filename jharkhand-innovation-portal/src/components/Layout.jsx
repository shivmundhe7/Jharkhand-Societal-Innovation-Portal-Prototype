import React from 'react';
import { LayoutDashboard, Users, ShieldCheck, GraduationCap, Building2 } from 'lucide-react';
import './Layout.css';

const Layout = ({ children, currentView, setCurrentView }) => {
  const navItems = [
    { id: 'analytics', label: 'Impact Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'citizen', label: 'Citizen Portal', icon: <Users size={20} /> },
    { id: 'gov', label: 'Gov Validation', icon: <ShieldCheck size={20} /> },
    { id: 'hei', label: 'HEI Matching', icon: <GraduationCap size={20} /> },
    { id: 'industry', label: 'Industry Collab', icon: <Building2 size={20} /> },
  ];

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-placeholder"></div>
          <h2>JSIP</h2>
          <p className="subtitle">Innovation Portal</p>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentView === item.id ? 'active' : ''}`}
              onClick={() => setCurrentView(item.id)}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <p>State of Jharkhand</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-header glass">
          <div className="header-title">
            <h1>{navItems.find(n => n.id === currentView)?.label}</h1>
          </div>
          <div className="user-profile">
            <div className="avatar">A</div>
            <span>Admin</span>
          </div>
        </header>

        <div className="content-area animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;

import { useState } from 'react';
import Layout from './components/Layout';
import CitizenPortal from './pages/CitizenPortal';
import GovPortal from './pages/GovPortal';
import HEIPortal from './pages/HEIPortal';
import IndustryPortal from './pages/IndustryPortal';
import AnalyticsDashboard from './pages/AnalyticsDashboard';

function App() {
  const [currentView, setCurrentView] = useState('analytics');

  const renderView = () => {
    switch (currentView) {
      case 'citizen':
        return <CitizenPortal />;
      case 'gov':
        return <GovPortal />;
      case 'hei':
        return <HEIPortal />;
      case 'industry':
        return <IndustryPortal />;
      case 'analytics':
        return <AnalyticsDashboard />;
      default:
        return <AnalyticsDashboard />;
    }
  };

  return (
    <Layout currentView={currentView} setCurrentView={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

export default App;

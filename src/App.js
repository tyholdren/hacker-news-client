import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Overview from './components/Overview/Overview.jsx';
import DetailView from './components/DetailView/DetailView.jsx';
import { VIEWS } from './constants.js';
import getHandleNavigation from './utils/getHandleNavigation';

function App() {
  const [activeView, setActiveView] = useState(VIEWS.OVERVIEW);
  const [overviewData, setOverviewData] = useState({});
  const [overviewCache, setOverviewCache] = useState({});
  const [detailData, setDetailData] = useState(null);
  const [detailsCache, setDetailsCache] = useState({});

  const handleNavigation = getHandleNavigation({
    setOverviewData,
    activeView,
    setActiveView,
  });

  return (
    <div className="App" style={{ display: 'flex', gap: '2rem' }}>
      <Navigation handleNavigation={handleNavigation} />

      {activeView === VIEWS.OVERVIEW ? (
        <Overview
          setActiveView={setActiveView}
          overviewData={overviewData}
          setDetailData={setDetailData}
        />
      ) : (
        <DetailView detailData={detailData} setActiveView={setActiveView} />
      )}
    </div>
  );
}

export default App;

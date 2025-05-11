import './App.css';
import { useState, useEffect } from 'react';
import { TABS, VIEWS } from './constants.js';
import Navigation from './components/Navigation/Navigation.jsx';
import Overview from './components/Overview/Overview.jsx';
import DetailView from './components/DetailView/DetailView.jsx';
import handleTabInit from './utils/handleTabInit';

function App() {
  const [activeView, setActiveView] = useState(VIEWS.OVERVIEW);
  const [activeTabObj, setActiveTabObj] = useState(TABS.NEW);
  const [detailData, setDetailData] = useState({});
  const [cache, setCache] = useState({});

  useEffect(() => {
    handleTabInit(activeTabObj, cache, setCache, 0);
  }, [activeTabObj]);

  return (
    <div className="App" style={{ display: 'flex', gap: '2rem' }}>
      <Navigation
        setActiveView={setActiveView}
        activeTabObj={activeTabObj}
        setActiveTabObj={setActiveTabObj}
      />

      {activeView === VIEWS.OVERVIEW ? (
        <Overview
          setActiveView={setActiveView}
          activeTabObj={activeTabObj}
          cacheState={cache}
          setCache={setCache}
          setDetailData={setDetailData}
        />
      ) : (
        <DetailView detailData={detailData} setActiveView={setActiveView} />
      )}
    </div>
  );
}

export default App;

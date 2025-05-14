import './App.css';
import { useState, useEffect } from 'react';
import { TABS, VIEWS } from './constants.js';
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './components/Overview/Overview.jsx';
import DetailView from './components/DetailView/DetailView.jsx';
import handleTabInit from './utils/handleTabInit';
import Footer from './Footer';

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
      <Sidebar
        setActiveView={setActiveView}
        activeTabObj={activeTabObj}
        setActiveTabObj={setActiveTabObj}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
        <Footer />
      </div>
    </div>
  );
}

export default App;

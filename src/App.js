import './App.css';
import { useState, useEffect } from 'react';
import { footerData, TABS, VIEWS } from './constants.js';
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './components/Overview/Overview.jsx';
import DetailView from './components/DetailView/DetailView.jsx';
import handleTabInit from './utils/handleTabInit';
import Footer from '../src/components/Footer/Footer.jsx';
import Loading from './components/Loading/Loading';

function App() {
  const [activeView, setActiveView] = useState(VIEWS.OVERVIEW);
  const [activeTabObj, setActiveTabObj] = useState(TABS.NEW);
  const [detailData, setDetailData] = useState({});
  const [cache, setCache] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleTabInit({
      tab: activeTabObj,
      cache,
      setCache,
      startIndex: 0,
      setIsLoading,
    });
  }, [activeTabObj]);

  return (
    <div className="App" style={{ display: 'flex', gap: '2rem' }}>
      <Sidebar
        setActiveView={setActiveView}
        activeTabObj={activeTabObj}
        setActiveTabObj={setActiveTabObj}
      />
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <div style={{ flex: 1 }}>
          {isLoading ? (
            <Loading />
          ) : activeView === VIEWS.OVERVIEW ? (
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
        <Footer content={footerData.content} links={footerData.links} />
      </main>
    </div>
  );
}

export default App;

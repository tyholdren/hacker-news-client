import DetailView from '@components/DetailView/DetailView.jsx';
import Footer from '@components/Footer/Footer.jsx';
import Loading from '@components/Loading/Loading';
import NavBar from '@components/NavBar/NavBar';
import Overview from '@components/Overview/Overview.jsx';
import Portal from '@components/Portal/Portal';
import Sidebar from '@components/Sidebar/Sidebar';
import { handleTabInit } from '@utils';
import { useEffect, useState } from 'react';

import { footerData, TABS, VIEWS } from './constants.js';

function App() {
  const [activeView, setActiveView] = useState(VIEWS.OVERVIEW);
  const [activeTabObj, setActiveTabObj] = useState(TABS.NEW);
  const [detailData, setDetailData] = useState({});
  const [cache, setCache] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPortal, toggleShowPortal] = useState(false);

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
    <div>
      <NavBar
        setActiveTabObj={setActiveTabObj}
        showPortal={showPortal}
        toggleShowPortal={toggleShowPortal}
      />
      <div className="App" style={{ display: 'flex', gap: '2rem' }}>
        {showPortal && (
          <Portal
            setActiveView={setActiveView}
            activeTabObj={activeTabObj}
            setActiveTabObj={setActiveTabObj}
            toggleShowPortal={toggleShowPortal}
          />
        )}

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
                isLoading={isLoading}
                setActiveView={setActiveView}
                activeTabObj={activeTabObj}
                cacheState={cache}
                setCache={setCache}
                setDetailData={setDetailData}
              />
            ) : (
              <DetailView
                detailData={detailData}
                setActiveView={setActiveView}
              />
            )}
          </div>
          <Footer content={footerData.content} links={footerData.links} />
        </main>
      </div>
    </div>
  );
}

export default App;

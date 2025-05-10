import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Overview from './components/Overview/Overview.jsx';
import DetailView from './components/DetailView/DetailView.jsx';
import { VIEWS } from './constants.js';

function App() {
  const [activeView, setActiveView] = useState(VIEWS.OVERVIEW);
  const [overviewData, setOverviewData] = useState({});
  const [detailData, setDetailData] = useState(null);

  return (
    <div className="App">
      <Navigation
        currentView={activeView}
        setActiveView={setActiveView}
        setOverviewData={setOverviewData}
      />

      {activeView === VIEWS.OVERVIEW ? (
        <Overview
          setActiveView={setActiveView}
          overviewData={overviewData}
          setDetailData={setDetailData}
        />
      ) : (
        <DetailView detailData={detailData} />
      )}
    </div>
  );
}

export default App;

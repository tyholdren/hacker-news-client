import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Overview from './components/Overview/Overview.jsx';
import DetailView from './components/DetailView/DetailView.jsx';
import { VIEWS } from './constants.js';

const start = 0;
const size = 50;

function App() {
  const [activeView, toggleActiveView] = useState(VIEWS.OVERVIEW);
  const [overview, toggleOverview] = useState({});
  const [detailViewData, setDetailViewData] = useState('');

  return (
    <div className="App">
      <Navigation
        toggleActiveView={toggleActiveView}
        toggleOverview={toggleOverview}
      />

      {activeView === VIEWS.OVERVIEW ? (
        <Overview
          currentView={activeView}
          toggleActiveView={toggleActiveView}
          data={overview}
        />
      ) : (
        <DetailView data={detailViewData} />
      )}
    </div>
  );
}

export default App;

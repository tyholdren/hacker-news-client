import './App.css';

import DetailView from '@components/DetailView/DetailView.jsx';
import Footer from '@components/Footer/Footer.jsx';
import Loading from '@components/Loading/Loading';
import NavBar from '@components/NavBar/NavBar.jsx';
import Overview from '@components/Overview/Overview.jsx';
import Portal from '@components/Portal/Portal';
import Sidebar from '@components/Sidebar/Sidebar';
import { footerData, VIEWS } from '@constants';
import { handleTabInit } from '@utils';
import { useEffect, useReducer } from 'react';

import { initialState, reducer } from './state/appReducer.js';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    handleTabInit({
      tab: state.activeTab,
      cache: state.cache,
      dispatch,
      startIndex: 0,
      isLoadingMore: false,
    });
  }, []);

  return (
    <div className="app">
      <NavBar dispatch={dispatch} />
      <div className="app__layout">
        {state.showPortal && <Portal state={state} dispatch={dispatch} />}
        <Sidebar state={state} dispatch={dispatch} />
        <main className="app__main">
          <div className="app__content">
            {state.isLoading ? (
              <Loading />
            ) : state.activeView === VIEWS.OVERVIEW ? (
              <Overview state={state} dispatch={dispatch} />
            ) : (
              <DetailView state={state} dispatch={dispatch} />
            )}
          </div>
          <Footer content={footerData.content} links={footerData.links} />
        </main>
      </div>
    </div>
  );
}

export default App;

import './App.css';

import {
  DetailView,
  Footer,
  Loading,
  NavBar,
  Overview,
  Portal,
  Sidebar,
} from '@components';
import { footerData, VIEWS } from '@constants';
import { handleTabInit } from '@utils';
import { useEffect, useReducer } from 'react';

import {
  defaultTabInitConfig,
  initialState,
  reducer,
} from './state/appReducer.js';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    handleTabInit({
      ...defaultTabInitConfig,
      dispatch,
    });
  }, []);

  const { showPortal, isLoading, activeView } = state;

  return (
    <div className="app">
      <NavBar dispatch={dispatch} />
      <div className="app__layout">
        {showPortal && <Portal state={state} dispatch={dispatch} />}
        <Sidebar state={state} dispatch={dispatch} />
        <main className="app__main">
          <div className={isLoading ? 'app__content--loading' : 'app__content'}>
            {isLoading ? (
              <Loading />
            ) : activeView === VIEWS.OVERVIEW ? (
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

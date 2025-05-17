import './Sidebar.css';

import { SidebarChip } from '@components';
import { TABS, VIEWS } from '@constants';
import { HackerNewsIcon } from '@icons';
import { ACTIONS } from '../../state/appReducer';

export default function Sidebar({ state, dispatch }) {
  return (
    <div className="sidebar">
      <button
        className="hacker-news-icon"
        onClick={() =>
          dispatch({
            type: ACTIONS.SET_ACTIVE_VIEW,
            payload: {
              activeView: VIEWS.OVERVIEW,
              activeTab: TABS.NEW,
            },
          })
        }
      >
        <HackerNewsIcon />
      </button>
      <ul>
        {Object.values(TABS).map(({ id, icon, value }) => {
          return (
            <SidebarChip
              key={id}
              id={id}
              icon={icon}
              value={value}
              state={state}
              dispatch={dispatch}
            />
          );
        })}
      </ul>
    </div>
  );
}

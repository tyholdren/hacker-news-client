import './SidebarChip.css';

import { TABS, VIEWS } from '@constants';
import handleTabInit from '@utils/handleTabInit';

import { ACTIONS } from '../../state/appReducer';

export default function SidebarChip({ id, icon, value, state, dispatch }) {
  return (
    <li key={id} className="sidebar__chip">
      <button
        className={[
          'sidebar__chip__btn',
          value === state.activeTab.value && 'sidebar__chip__btn--selected',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={() => {
          if (state.showPortal) {
            dispatch({ type: ACTIONS.TOGGLE_PORTAL });
          }

          dispatch({
            type: ACTIONS.SET_ACTIVE_VIEW,
            payload: {
              activeView: VIEWS.OVERVIEW,
              activeTab: TABS[value.toUpperCase()],
            },
          });

          handleTabInit({
            tab: TABS[value.toUpperCase()],
            cache: state.cache,
            dispatch,
            startIndex: 0,
            isLoadingMore: false,
          });
        }}
      >
        <span>{icon}</span>
        {value}
      </button>
    </li>
  );
}

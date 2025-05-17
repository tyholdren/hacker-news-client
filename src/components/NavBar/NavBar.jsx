import { TABS, VIEWS } from '@constants';
import './NavBar.css';
import { HackerNewsIcon, HamburgerButton } from '@icons';
// NOTE: FIX STATE PATH
import { ACTIONS } from '../../state/appReducer';

export default function NavBar({ dispatch }) {
  return (
    <div className="navBar">
      <button
        className="hacker-news-icon--navBar"
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
      <button
        className="navBar__hamburger-btn"
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_PORTAL,
          })
        }
      >
        <HamburgerButton />
      </button>
    </div>
  );
}

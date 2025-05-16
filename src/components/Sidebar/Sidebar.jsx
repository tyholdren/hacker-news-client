import SidebarChip from '@components/SidebarChip/SidebarChip.jsx';
import { TABS } from '@constants';
import { HackerNewsIcon } from '@icons';
import { navigateTo } from '@utils';

import './Sidebar.css';

export default function Sidebar({
  setActiveView,
  activeTabObj,
  setActiveTabObj,
}) {
  return (
    <div className="sidebar">
      <button
        className="hacker-news-icon"
        onClick={() => navigateTo('new', setActiveTabObj)}
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
              setActiveView={setActiveView}
              activeTabObj={activeTabObj}
              setActiveTabObj={setActiveTabObj}
            />
          );
        })}
      </ul>
    </div>
  );
}

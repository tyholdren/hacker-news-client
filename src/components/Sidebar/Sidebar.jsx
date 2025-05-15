import { HackerNewsIcon } from '@icons';
import { TABS } from '../../constants.js';
import SidebarChip from '../SidebarChip/SidebarChip.jsx';
import { navigateTo } from '../../utils';

export default function Sidebar({
  setActiveView,
  activeTabObj,
  setActiveTabObj,
}) {
  return (
    <div
      className="sidebar"
      style={{
        borderRight: '1px solid black',
        minHeight: '100vh',
      }}
    >
      <button onClick={() => navigateTo('new', setActiveTabObj)}>
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

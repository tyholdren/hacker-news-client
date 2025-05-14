import { ReactComponent as HackerNewsIcon } from '../../static/icons/HackerNewsIcon.svg';
import { TABS } from '../../constants.js';
import SidebarChip from '../SidebarChip/SidebarChip.jsx';

export default function Sidebar({
  setActiveView,
  activeTabObj,
  setActiveTabObj,
}) {
  return (
    <div>
      <HackerNewsIcon />
      <ul className="nav-panel">
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

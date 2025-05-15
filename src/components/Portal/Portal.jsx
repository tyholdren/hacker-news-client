import { createPortal } from 'react-dom';
import { TABS } from '../../constants';
import SidebarChip from '../SidebarChip/SidebarChip';

export default function Portal({
  setActiveView,
  activeTabObj,
  setActiveTabObj,
  toggleShowPortal,
}) {
  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <span>Portal</span>
        <button onClick={() => toggleShowPortal(false)}>X</button>
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
                toggleShowPortal={toggleShowPortal}
              />
            );
          })}
        </ul>
      </div>
    </div>,
    document.body
  );
}

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TABS } from '../../constants';
import SidebarChip from '../SidebarChip/SidebarChip';

function useOnKeydown(key, fn) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.key === key) {
        fn();
      }
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [fn]);
}

export default function Portal({
  setActiveView,
  activeTabObj,
  setActiveTabObj,
  toggleShowPortal,
}) {
  useOnKeydown('Escape', () => toggleShowPortal(false));

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

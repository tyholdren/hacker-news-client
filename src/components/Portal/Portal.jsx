import SidebarChip from '@components/SidebarChip/SidebarChip';
import { TABS } from '@constants';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

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

function useOnClickOutside(ref, fn) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        event.target instanceof Node &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        fn();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchevent', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchevent', handleClickOutside);
    };
  }, [fn]);
}

export default function Portal({
  setActiveView,
  activeTabObj,
  setActiveTabObj,
  toggleShowPortal,
}) {
  useOnKeydown('Escape', () => toggleShowPortal(false));
  const contentRef = useRef(null);
  useOnClickOutside(contentRef, () => toggleShowPortal(false));

  return createPortal(
    <div className="modal">
      <div className="modal-content" ref={contentRef}>
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

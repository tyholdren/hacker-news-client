import './Portal.css';

import { SidebarChip } from '@components';
import { TABS } from '@constants';
import { HackerNewsIcon, XIcon } from '@icons';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ACTIONS } from '../../state/appReducer';

// NOTE: MOVE THESE HOOKS OUTSIDE INTO A HOOKS FOLDER
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

export default function Portal({ state, dispatch }) {
  useOnKeydown('Escape', () => dispatch({ type: ACTIONS.TOGGLE_PORTAL }));
  const contentRef = useRef(null);
  useOnClickOutside(contentRef, () =>
    dispatch({ type: ACTIONS.TOGGLE_PORTAL })
  );

  return createPortal(
    <div className="portal">
      <div className="portal-content" ref={contentRef}>
        <button
          className="portal-content__header"
          onClick={() => dispatch({ type: ACTIONS.TOGGLE_PORTAL })}
        >
          <HackerNewsIcon className="portal-content__header__icon" />
          <XIcon />
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
    </div>,
    document.body
  );
}

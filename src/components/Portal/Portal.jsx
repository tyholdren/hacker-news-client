import './Portal.css';

import { SidebarChip } from '@components';
import { TABS } from '@constants';
import { HackerNewsIcon, XIcon } from '@icons';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ACTIONS } from '../../state/appReducer';
import { useOnKeydown, useOnClickOutside } from '@hooks';

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

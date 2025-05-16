import { VIEWS } from '@constants';
import { navigateTo } from '@utils';
import './SidebarChip.css';

export default function SidebarChip({
  id,
  icon,
  value,
  setActiveView,
  activeTabObj,
  setActiveTabObj,
  toggleShowPortal = undefined,
}) {
  console.log(value === activeTabObj.value, { value });
  return (
    <li key={id} className="sidebar__chip">
      <button
        className={[
          'sidebar__chip__btn',
          value === activeTabObj.value && 'sidebar__chip__btn--selected',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={() => {
          if (toggleShowPortal) {
            toggleShowPortal(false);
          }

          navigateTo(value, setActiveTabObj);
          setActiveView(VIEWS.OVERVIEW);
        }}
      >
        <span>{icon}</span>
        {value}
      </button>
    </li>
  );
}

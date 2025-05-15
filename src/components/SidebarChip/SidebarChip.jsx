import { VIEWS } from '../../constants';
import { navigateTo } from '../../utils';
export default function SidebarChip({
  id,
  icon,
  value,
  setActiveView,
  activeTabObj,
  setActiveTabObj,
  toggleShowPortal = undefined,
}) {
  return (
    <li key={id}>
      {icon}
      <button
        style={{
          backgroundColor: `${value === activeTabObj.value ? 'yellow' : ''}`,
        }}
        onClick={() => {
          if (toggleShowPortal) {
            toggleShowPortal(false);
          }

          navigateTo(value, setActiveTabObj);
          setActiveView(VIEWS.OVERVIEW);
        }}
      >
        {value}
      </button>
    </li>
  );
}
